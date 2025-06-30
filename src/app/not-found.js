import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage () {
	return <main className='section min-h-svh flex flex-col items-center justify-center'>
		<div className='absolute h-[44svh] dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

		<svg xmlns='http://www.w3.org/2000/svg' className='size-20 2xl:size-26' width='24' height='24' viewBox='0 0 24 24'><path fill='currentColor' fill-rule='evenodd' d='M1.25 1.75H0v13.064l2.5-3.215V7.5h19v3.25H24v-9zm2.889 11H6.5v5.5h.75v2.5H6.5v1.5H4v-1.5H0v-2.679l.263-.338l3.5-4.5zM4 18.25V17l-.972 1.25zm6.75-2.549c0-.17.174-.451.573-.451h1.354c.4 0 .573.282.573.451V19.3c0 .17-.174.451-.573.451h-1.354c-.4 0-.573-.282-.573-.451zm.573-2.951c-1.615 0-3.073 1.242-3.073 2.951V19.3c0 1.71 1.458 2.951 3.073 2.951h1.354c1.615 0 3.073-1.242 3.073-2.951v-3.6c0-1.71-1.458-2.951-3.073-2.951zm9.566 0h2.361v5.5H24v2.5h-.75v1.5h-2.5v-1.5h-4v-2.679l.263-.338l3.5-4.5zm-.139 5.5V17l-.972 1.25z' clip-rule='evenodd' /></svg>
		<h1 className='text-4xl font-semibold mt-2 2xl:text-6xl'>Page not found</h1>
		<p className='text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-lg text-center 2xl:text-2xl'>The page you are looking for does not exist.</p>
		<Link href='/' className='btn btn-primary mt-3 py-1.5 flex gap-1 px-8 pr-10 group shining 2xl:text-lg'>
			<ArrowLeftIcon className='size-5 group-hover:-translate-x-1 transition-transform 2xl:size-7' />
			Go back home
		</Link>
	</main>;
}