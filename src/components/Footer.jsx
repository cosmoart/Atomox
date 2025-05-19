import Link from 'next/link'
import { Atoms, Molecules } from '@/lib/conts'
import Image from 'next/image'
import logo from '@/assets/icons/logo.svg'
import { ChevronRight } from 'lucide-react'

export default function Footer () {
	return (
		<footer className='bg-gradient-to-b dark:from-zinc-900/40 dark:to-zinc-950 mt-20 card-border mx-1 rounded-t-xl'>
			<div className='flex flex-col md:flex-row py-8 justify-between items-center gap-3 section lg:mx-auto '>
				<div className='flex flex-col gap-3 items-center mb-4 md:mb-0'>
					<div className='flex flex-col sm:flex-row gap-4 items-center text-center md:text-left'>
						<Image src={logo} alt='Atomox logo' width={80} height={80} className='dark:invert' />
						<div>
							<p className='font-semibold text-4xl'>Atomox</p>
							<p className='max-w-xs text-sm'>Web components by the people for the people. Created by <a href="https://github.com/cosmoart" target="_blank" rel="noopener noreferrer">Cosmo Art</a></p>
							{/* <a href="https://github.com/cosmoart/Atomox" target="_blank" rel="noopener noreferrer">GitHub</a> */}
						</div>
					</div>
				</div>

				<section className='flex flex-row gap-5 sm:gap-20'>
					<nav>
						<h5 className='text-xl font-medium text-center md:text-left mb-4'>Atoms</h5>
						<ul className='grid md:grid-cols-2 gap-x-4 gap-y-1 text-sm'>
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
						<h5 className='text-xl font-medium text-center md:text-left mb-4'>Molecules</h5>
						<ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 text-sm'>
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