import { ClerkProvider } from '@clerk/nextjs'
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/app/globals.css'
import { unstable_ViewTransition as ViewTransition } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
})

export const metadata = {
	title: 'Atomox',
	description: 'Atomox is a platform for creating and sharing reusable UI components. It allows you to create, share, and discover components based on your own designs and styles.',
}

export default async function RootLayout ({ children }) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<head>
					<meta name='google-site-verification' content='2wm0Wr41n0uNEIhnTL57lgiyQOHDn_lHlQnXMTY29zE' />
					<title>Atomox</title>
					<meta name='description' content='Atomox is a platform for creating and sharing reusable UI components. It allows you to create, share, and discover components based on your own designs and styles.' />
				</head>
				<body className={`${montserrat.variable} antialiased`} style={{ fontFamily: 'var(--font-montserrat)' }}>
					<div className='pointer-events-none dark:bg-zinc-950 fixed bottom-[3px] md:bottom-1 left-0.5 md:left-1 right-0.5 md:right-1 top-1 -z-50 rounded-lg shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(32,42,54,0.04),0_24px_68px_rgba(47,48,56,0.15),0_2px_3px_rgba(0,0,0,0.09)] ring-1 ring-zinc-900/7.5  dark:ring-white/10'></div>
					<ViewTransition>
						<ThemeProvider attribute='class'>
							{children}
						</ThemeProvider>
					</ViewTransition>
					<GoogleAnalytics gaId='G-9YTZFK39GW' />
				</body>
			</html>
		</ClerkProvider>
	)
}
