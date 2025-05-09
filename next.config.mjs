/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	experimental: {
		viewTransition: true
	},
	images: { domains: ['img.clerk.com', "picsum.photos"] },
}

export default nextConfig