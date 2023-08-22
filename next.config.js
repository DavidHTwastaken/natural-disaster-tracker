const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  // your Next.js configuration
});

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // reactStrictMode: true,
// };

// module.exports = nextConfig;
