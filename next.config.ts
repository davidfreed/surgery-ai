import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',  // Required for static site generation
    images: {
      unoptimized: true  // Required for static export
    },
    // Required if you're using basePath in production
    basePath: process.env.NODE_ENV === 'production' ? '/surgery-ai' : '',
    // Optional: Add trailing slashes to URLs
    trailingSlash: true
    distDir: 'out'
}

module.exports = nextConfig

export default nextConfig;
