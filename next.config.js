/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["jegat-dasilva.fr", 'moosic.fr', 'localhost']
    }
  }
};

module.exports = nextConfig;
