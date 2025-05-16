'use client';
import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Page () {
	const { resolvedTheme } = useTheme()

	return (
		<article className='relative flex min-h-screen flex-col-reverse md:flex-row'>
			<main className='flex min-h-screen w-full flex-col items-center justify-center bg-background p-4 md:w-1/2 md:p-8'>
				<SignIn
					appearance={{
						baseTheme: resolvedTheme === 'dark' ? dark : undefined,
						elements: {
							rootBox: 'w-full! max-w-sm',
						}
					}}
				/>
			</main>

			<div className='w-full bg-gradient-to-br from-purple-600 to-blue-500 md:w-1/2' />
		</article>
	);
}