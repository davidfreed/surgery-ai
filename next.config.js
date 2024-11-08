/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  distDir: 'out'
}

module.exports = nextConfig