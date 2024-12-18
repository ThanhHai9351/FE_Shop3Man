import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  devIndicators: {buildActivity: true},
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  images: {
    domains: ['upload-aws-cls.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
