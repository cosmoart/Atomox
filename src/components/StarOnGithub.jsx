'use client'

import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function StarOnGitHub () {
	const [stars, setStars] = useState(null)

	useEffect(() => {
		async function fetchStars () {
			try {
				const res = await fetch('https://api.github.com/repos/cosmoart/Atomox')
				const data = await res.json()
				setStars(data.stargazers_count)
			} catch (error) {
				console.error(error)
			}
		}

		fetchStars()
	}, [])

	return (
		<a
			href="https://github.com/cosmoart/Atomox"
			target="_blank"
			rel="noopener noreferrer"
			className='rounded-full  text-sm active:scale-95 px-4 py-0.5 bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-600 border-white/10 border group drop-shadow-sm flex gap-1 items-center text-white w-fit group test2'
		>
			<div className='rounded-full w-full absolute! top-0 left-0 h-full shining z-10'></div>
			<div className='relative'>
				<svg className="group-hover:scale-150 transition-all group-hover:rotate-45" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
				<svg className="group-hover:scale-70 scale-50 absolute top-0 left-0 group-hover:top-5 group-hover:left-2 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
				<svg className="group-hover:scale-80 scale-50 absolute top-0 left-0 group-hover:-top-3.5 group-hover:-left-4 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-6" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
			</div>
			<p className='flex gap-0.5 items-center group-hover:pl-1 transition-all font-medium'>
				{stars} Star{stars && "s"} on GitHub
			</p>
			<ArrowUpRight size={18} className='w-0 transition-all group-hover:w-4 ' />
		</a>
	)
}
