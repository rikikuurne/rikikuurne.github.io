/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/behold',
        destination: 'https://w.behold.so/widget.js',
      },
    ]
  },
}
 
module.exports = nextConfig