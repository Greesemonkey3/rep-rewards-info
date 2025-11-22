/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login',
        destination: 'https://rep-dashboard-tawny.vercel.app/login',
      },
      {
        source: '/login/:path*',
        destination: 'https://rep-dashboard-tawny.vercel.app/login/:path*',
      },
      {
        source: '/dashboard',
        destination: 'https://rep-dashboard-tawny.vercel.app/dashboard',
      },
      {
        source: '/dashboard/:path*',
        destination: 'https://rep-dashboard-tawny.vercel.app/dashboard/:path*',
      },
    ]
  },
}

module.exports = nextConfig

