import Link from 'next/link';

export default function NotFoundPage () {
	return <main className='section min-h-svh flex flex-col items-center justify-center'>
		<h1 className='text-2xl font-medium'>404 - Page not found</h1>
		<p className='text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>The page you are looking for does not exist.</p>
		<Link href="/" className='btn btn-primary mt-6'>Go back home</Link>
	</main>;
}