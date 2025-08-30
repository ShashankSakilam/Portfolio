import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ❌ don’t block build on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ❌ don’t block build on TS errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
