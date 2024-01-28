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
      allowedOrigins: ["www.jegat-dasilva.fr", 'www.moosic.fr', 'localhost']
    }
  }
};

module.exports = nextConfig;
