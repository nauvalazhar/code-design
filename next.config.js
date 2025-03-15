/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      }
    ],
    loader: 'custom',
    loaderFile: './lib/loader-image.ts'
  }
};

module.exports = nextConfig;
