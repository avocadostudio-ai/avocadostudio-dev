import { fileURLToPath } from "node:url"
import { dirname } from "node:path"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Next 16 infers the workspace root from the nearest lockfile; pin it so a
  // stray lockfile in a parent directory can't hijack Turbopack's root.
  turbopack: {
    root: dirname(fileURLToPath(import.meta.url)),
  },
  transpilePackages: ["@avocadostudio-ai/blocks", "@avocadostudio-ai/shared"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
    ],
  },
}

export default nextConfig
