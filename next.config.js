/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ["vercel.com"],
	},
};

module.exports = nextConfig;
