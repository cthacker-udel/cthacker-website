/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: "./",
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
