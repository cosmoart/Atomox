import Link from 'next/link'
import { Atoms, Molecules } from '@/lib/conts'
import Logo from '@/assets/icons/Logo';

import { ChevronRight } from 'lucide-react'

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

						<nav>
							<ul className='flex gap-5 text-sm underline mt-4'>
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
						<h5 className='text-xl font-medium text-center md:text-left mb-3'>Atoms</h5>
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
						<h5 className='text-xl font-medium text-center md:text-left mb-3'>Molecules</h5>
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