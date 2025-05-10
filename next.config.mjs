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
				hostname: 'picsum.photos',
			},
		],
	},
}

export default nextConfig