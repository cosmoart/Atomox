/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	experimental: {
		viewTransition: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.clerk.com',
			},
			{
				protocol: 'https',
				hostname: 'cdn.atomox.dev',
			}
		],
	},
}

export default nextConfig