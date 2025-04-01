/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "haridwar-live.s3.ap-south-1.amazonaws.com",
      "images.unsplash.com",
      "haridwarlive-storage.s3.ap-south-1.amazonaws.com",
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "hindupost.in",
      "files.prokerala.com"
    ],
  },
};

module.exports = nextConfig;
