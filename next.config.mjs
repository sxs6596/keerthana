// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       serverActions: {
//         allowedOrigins: ['http://localhost:3000', 'http://localhost:5173'],
//       },
//     },
//   };
  
//   export default nextConfig;


import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/, // Serve PDF files if needed
      use: "file-loader",
    });
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/uploads/:path*", // Serve files from the public/uploads directory
      },
    ];
  },
};

export default nextConfig;
