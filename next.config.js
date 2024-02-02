/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.ctfassets.net', 'instagram.fsvg2-1.fna.fbcdn.net'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [],
    },
  },
};

module.exports = nextConfig;
