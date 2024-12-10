import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // Đặt giới hạn payload lên 10 MB
    },
  },
  images: {
    domains: ['upload-aws-cls.s3.us-east-2.amazonaws.com'],
  },
};

export default nextConfig;
