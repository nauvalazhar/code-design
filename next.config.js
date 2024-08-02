/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    loader: 'custom',
    loaderFile: './lib/loader-image.ts',
  },
  experimental: {
    turbo: {
      // https://github.com/vercel/next.js/issues/60097
      resolveAlias: {
        'next/dist/shared/lib/image-loader': './lib/loader-image.ts',
      },
    },
  },
};

module.exports = nextConfig;
