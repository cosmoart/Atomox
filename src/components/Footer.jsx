import Link from 'next/link'
import { Atoms, Molecules } from '@/lib/conts'
import Logo from '@/assets/icons/Logo';

import { ArrowUpRight, ChevronRight } from 'lucide-react'

export default function Footer () {
	return (
		<footer className='bg-gradient-to-b dark:from-zinc-900/40 dark:to-zinc-950 mt-20 card-border mx-1 rounded-t-xl'>
			<div className='flex flex-col md:flex-row pt-8 pb-16 justify-between gap-3 section lg:mx-auto '>
				<div className='flex flex-colmb-4 md:mb-0 sm:flex-row gap-4 text-center md:text-left'>
					<Link href='/'>
						<Logo width={50} height={50} />
					</Link>

					<div>
						<Link href='/'>
							<p className='font-semibold text-4xl -mt-1'>Atomox</p>
						</Link>
						<p className='max-w-md text-sm mt-2'>
							A collaborative platform where developers and designers can share, explore, and give feedback on reusable web components.
						</p>

						<a href="https://clerk.com/blog/highlights-midudev-clerk-hackathon#4th-place-atomox" target="_blank" rel="noopener noreferrer" className='shining btn-primary gradient1 text-white text-xs w-fit py-0.5 mt-2 px-2 flex gap-1 items-center rounded-full tracking-wide font-medium group'>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="currentColor" d="M33.662 36.217V25.326l-7.674 10.891z" /><path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m12 39.586h-4.145V48h-6.193v-6.414H20v-5.348L34.48 16h5.375v20.217H44z" /></svg>
							Place in the Midudev x Clerk Hackathon
							<ArrowUpRight size={18} className='w-0 transition-all group-hover:w-4 ' />
						</a>

						<nav>
							<ul className='flex gap-5 text-sm underline mt-5'>
								<li>
									<Link href="/guidelines">Guidelines</Link>
								</li>
								<li>
									<Link href='/privacy-policy'>Privacy Policy</Link>
								</li>
								<li>
									<Link href='/terms-of-service'>Terms of Service</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<section className='flex flex-row gap-5 sm:gap-15'>
					<nav>
						<Link href='/atoms'>
							<p className='text-xl font-medium text-center md:text-left mb-3'>Atoms</p>
						</Link>
						<ul className='grid md:grid-cols-2 gap-x-2 gap-y-1 text-sm'>
							{Atoms.map((atom, index) => (
								<li key={index}>
									<Link href={`/atoms/${atom.id}`} className='group flex gap-1 items-center hover:translate-x-1 transition-transform'>
										{atom.name}
										<ChevronRight size={15} className='text-zinc-900/80 dark:text-white/80 opacity-0 group-hover:opacity-95' />
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav>
						<Link href='/molecules'>
							<p className='text-xl font-medium text-center md:text-left mb-3'>Molecules</p>
						</Link>
						<ul className='grid sm:grid-cols-2 md:grid-cols-[auto_auto_auto] sm:pr-5 gap-x-2 gap-y-1 text-sm'>
							{Molecules.map((molecule, index) => (
								<li key={index}>
									<Link href={`/molecules/${molecule.id}`} className='group flex gap-1 items-center hover:translate-x-1 transition-transform'>
										{molecule.name}
										<ChevronRight size={15} className='text-zinc-900/80 dark:text-white/80 opacity-0 group-hover:opacity-95' />
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</section>
			</div>
		</footer>
	)
}