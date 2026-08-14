#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

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

vinext_cli="${SITES_PROJECT_ROOT}/node_modules/vinext/dist/cli.js"
if [[ ! -f "${vinext_cli}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

vinext_cli_exec="${vinext_cli}"
if command -v wslpath >/dev/null 2>&1; then
  vinext_cli_exec="$(wslpath -w "${vinext_cli}" 2>/dev/null || true)"
fi
if [[ -z "${vinext_cli_exec}" ]]; then
  vinext_cli_exec="${vinext_cli}"
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${node_bin}" "${vinext_cli_exec}" build

"${script_dir}/validate-artifact.sh"
