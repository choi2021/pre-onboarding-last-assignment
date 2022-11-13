/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: 'http://localhost:4000/login',
      },
      {
        source: '/users/signup',
        destination: 'http://localhost:4000/users/signup',
      },
    ];
  },
};

module.exports = nextConfig;
