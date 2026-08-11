#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

node_bin=""
if command -v node >/dev/null 2>&1; then
  node_bin="$(command -v node)"
elif [[ -x "/mnt/c/Program Files/nodejs/node.exe" ]]; then
  node_bin="/mnt/c/Program Files/nodejs/node.exe"
elif [[ -x "/c/Program Files/nodejs/node.exe" ]]; then
  node_bin="/c/Program Files/nodejs/node.exe"
else
  echo "Node.js is unavailable. Install Node.js 22.13.0 or newer and ensure it is on PATH." >&2
  exit 69
fi

to_windows_path() {
  local path="$1"
  if command -v wslpath >/dev/null 2>&1; then
    local converted
    converted="$(wslpath -w "$path" 2>/dev/null || true)"
    if [[ -n "$converted" ]]; then
      printf '%s\n' "$converted"
      return 0
    fi
  fi
  printf '%s\n' "$path"
}

worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"

[[ -f "${worker}" ]] || {
  echo "Missing Sites Worker entry: dist/server/index.js" >&2
  exit 66
}

if [[ ! -f "${hosting}" ]]; then
  if [[ -f "${SITES_PROJECT_ROOT}/.openai/hosting.json" ]]; then
    hosting="${SITES_PROJECT_ROOT}/.openai/hosting.json"
  else
    echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
    exit 66
  fi
fi

worker="$(to_windows_path "$worker")"
hosting="$(to_windows_path "$hosting")"

"${node_bin}" --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
const worker = await import(workerUrl.href);
if (!worker.default || typeof worker.default.fetch !== "function") {
  throw new Error("dist/server/index.js must have an ESM default export with fetch(request, env, ctx)");
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
