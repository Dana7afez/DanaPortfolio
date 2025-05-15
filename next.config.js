/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/atrs-website",
  assetPrefix: "/atrs-website/",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
