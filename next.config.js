/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
    images: {
        domains: ['images.unsplash.com','static.wixstatic.com' ,'example.com', 'anotherdomain.com','media.istockphoto.com'],
        // domains: ['media.istockphoto.com', 'example.com', 'anotherdomain.com'],
        unoptimized: true
      },
}

module.exports = nextConfig
