/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  // Add performance optimizations
  experimental: {
    optimizeCss: true,
    turbotrace: {
      contextDirectory: __dirname,
    },
  },
  // Reduce build output
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig