/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: "./",
	reactStrictMode: false,
	swcMinify: true,
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
	env: {
		GITHUB_API_TOKEN: "",
	},
};

export default nextConfig;
