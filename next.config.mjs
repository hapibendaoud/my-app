/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // كتحول الطلب للباك-إند ديريكت ف السيرفر
      },
    ];
  },
};

export default nextConfig;
