/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Changed back to 'export' from 'static'
    images: {
      unoptimized: true
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://surgery-ai.pages.dev' : '',  // Add your Cloudflare URL
    trailingSlash: true,
    // Remove distDir: 'out' as it's not needed with output: 'export'
  }
  
  module.exports = nextConfig