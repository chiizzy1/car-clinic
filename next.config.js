/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["images.unsplash.com", "youimg1.c-ctrip.com"],
  }
}

module.exports = nextConfig
