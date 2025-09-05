/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps catch potential issues in development
  swcMinify: true, // Use SWC for faster minification in production

  // Enable incremental static regeneration if needed
  // (pages with getStaticProps can be revalidated)
  experimental: {
    scrollRestoration: true, // Optional: preserves scroll positions
  },

  // Production asset optimization
  images: {
    domains: ["yourdomain.com", "images.unsplash.com"], // add your image sources
    formats: ["image/avif", "image/webp"],
  },

  // If you plan to export a fully static site
  output: "export", // Generates HTML/CSS/JS files (for GitHub Pages or Netlify)
  trailingSlash: true, // Optional: adds trailing slash to URLs

  // Headers and redirects can be defined here for production
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Example redirect
      // {
      //   source: '/old-path',
      //   destination: '/new-path',
      //   permanent: true,
      // },
    ];
  },
};

module.exports = nextConfig;
