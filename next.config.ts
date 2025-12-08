import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [new URL("https://images.pexels.com/**/*")],
  },
};

export default nextConfig;
