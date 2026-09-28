import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clinginfotech.com",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "cling-portfolio-video.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cling-project.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cling-3dvideos.s3.ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
