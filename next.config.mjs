/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/next_portfolio",
  // assetPrefix: '/next_portfolio/',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
