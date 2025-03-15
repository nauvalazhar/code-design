import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    loader: "custom",
    loaderFile: "./lib/loader-image.ts",
  },
};

export default nextConfig;

initOpenNextCloudflareForDev();
