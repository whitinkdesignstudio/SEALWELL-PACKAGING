import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // 1. Enforce preferred www and HTTPS domain: 301 redirect apex domain to www
  if (host === "sealwellpackaging.com") {
    url.host = "www.sealwellpackaging.com";
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }

  const response = NextResponse.next();

  // 2. Prevent duplicate indexing on staging, preview, and development domains
  const isStagingDomain =
    host.includes("chatgpt.site") ||
    host.includes("vercel.app") ||
    host.includes("pages.dev") ||
    host.includes("staging") ||
    host.includes("preview");

  if (isStagingDomain) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  } else if (host.includes("sealwellpackaging.com")) {
    response.headers.set(
      "X-Robots-Tag",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for static files:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
