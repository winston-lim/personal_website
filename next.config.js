/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    if (process.env.MAINTENANCE === 'true') {
      return [
        {
          source: '/((?!maintenance).*)',
          destination: '/maintenance',
          permanent: false,
        },
      ]
    }
    return []
  },
  reactStrictMode: true,
  env: {
    ENV: process.env.ENV,
    MAINTENANCE: process.env.MAINTENANCE,
  },
}

module.exports = nextConfig
