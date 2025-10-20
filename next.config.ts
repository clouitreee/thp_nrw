import type { NextConfig } from "next";
import path from "node:path";

const isViewTransitionEnabled = process.env.NEXT_PUBLIC_VIEW_TRANSITIONS === "true";

const experimentalConfig = {
  viewTransition: isViewTransitionEnabled,
  outputFileTracingRoot: path.resolve(__dirname),
};

const nextConfig: NextConfig = {
  experimental: experimentalConfig as NextConfig["experimental"],
  outputFileTracingRoot: path.resolve(__dirname),
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Cloudflare Pages will also enforce these headers. Keep in sync with docs/security/headers.md.
        ],
      },
    ];
  },
};

export default nextConfig;
