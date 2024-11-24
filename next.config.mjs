/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
      "picsum.photos",
      "images.unsplash.com",
      "assets.aceternity.com",
      "photos.app.goo.gl",
      "i.ibb.co",
      "lh3.googleusercontent.com",
      "bit.ly",
    ],
  },
  reactStrictMode: true, // Ensures your app adheres to React best practices
  experimental: {
    appDir: true, // Enable the app directory for the new routing system if you're using it
  },
};

export default nextConfig;
