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
		GITHUB_API_TOKEN:
			"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",
	},
};

export default nextConfig;
