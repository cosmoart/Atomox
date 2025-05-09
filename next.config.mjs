import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
	experimental: {
		viewTransition: true,
	},
	images: {
		domains: ['img.clerk.com', "picsum.photos"],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);