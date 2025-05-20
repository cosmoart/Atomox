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
			}
		],
	},
}

export default nextConfig