'use client'
import { ArrowLeftIcon, OctagonX } from 'lucide-react'
import Link from 'next/link'

export default function Error ({ error }) {
	return (
		<div className='text-center min-h-svh flex justify-center items-center flex-col'>
			<div className='absolute h-[44svh] dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

			<OctagonX className='size-14 2xl:size-20' />
			<h1 className='text-4xl font-semibold mt-2 2xl:text-6xl'>
				Something went wrong!
			</h1>
			<p className='text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-lg text-center 2xl:text-2xl'>An unexpected error has occurred. Please try again later.</p>
			<Link href='/' className='btn btn-primary mt-3 py-1.5 flex gap-1 px-8 pr-10 group shining-button 2xl:text-lg'>
				<ArrowLeftIcon className='size-5 group-hover:-translate-x-1 transition-transform 2xl:size-7' />
				Go back home
			</Link>
		</div>
	)
}