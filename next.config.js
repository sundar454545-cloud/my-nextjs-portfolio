/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you plan to export a fully static site
  output: "export", // Generates HTML/CSS/JS files (for GitHub Pages or Netlify)
  trailingSlash: true, // Optional: adds trailing slash to URLs

  // Headers and redirects can be defined here for production

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
