import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/20-mm-flip-off-seal",
        destination: "/products/20-mm-flip-off-seal",
      },
      {
        source: "/13-mm-flip-off-seal",
        destination: "/products/13-mm-flip-off-seal",
      },
      {
        source: "/20-mm",
        destination: "/products/20-mm",
      },
      {
        source: "/13-mm",
        destination: "/products/13-mm",
      },
    ];
  },
};

export default nextConfig;
