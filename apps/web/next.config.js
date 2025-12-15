/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ["@x402/ui", "@x402/db"],
    experimental: {
        instrumentationHook: true,
    },
};

module.exports = nextConfig;
