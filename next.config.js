/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/DanaPortfolio" : "", // Use basePath only in production
  assetPrefix: isProd ? "/DanaPortfolio/" : "", // Use assetPrefix only in production
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Ensures all paths end with a slash
};

module.exports = nextConfig;
