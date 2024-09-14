/** @type {import('next').NextConfig} */

const withLess = require('next-with-less');

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  skipTrailingSlashRedirect: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: [
      'uploads-ssl.webflow.com',
      'loremflickr.com',
      'i.ytimg.com',
      'files-coinacademy.s3.us-east-2.amazonaws.com',
      'assets.coingecko.com',
      'localhost',
      'sugardefender24.com',
    ],
  },
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: false,
    },
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(__dirname, 'node_modules');
    return config;
  },
};

module.exports = withLess({
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: { '@primary-color': '#FFF' },
      javascriptEnabled: true,
    },
  },
  ...nextConfig, // Merge configurations here
});
