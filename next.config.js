/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/login',
        destination: 'https://rep-dashboard-tawny.vercel.app/login',
        permanent: true,
      },
      {
        source: '/dashboard',
        destination: 'https://rep-dashboard-tawny.vercel.app/dashboard',
        permanent: true,
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://rep-dashboard-tawny.vercel.app/dashboard/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

