import Link from 'next/link';
import { Atoms, Molecules } from '@/lib/conts';
import { ArrowRight } from 'lucide-react';

export default function AtomsMolecules () {
	return (
		<div className='flex bg-grid gap-4 pt-10 mb-18 relative text-center after:absolute after:inset-x-0 after:-bottom-8 lg:after:bottom-0 after:z-10 after:w-full after:h-40 after:scale-[103%] after:bg-linear-to-t after:from-white after:via-white/90  dark:after:from-zinc-950 dark:after:via-zinc-950/90 dark:after:to-zinc-950/50'>
			<article className='relative'>
				<h2 className='text-center text-4xl font-semibold'>Atoms</h2>
				<p className='max-w-[80ch] mx-auto mb-5 nt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vel voluptatem nobis, dolore illum repellat quaerat voluptates fugit. Iste temporibus quos.</p>

				<section className='flex flex-wrap justify-center gap-4'>
					{
						Atoms.slice(0, 9).map(element => (
							<Link href={`atoms/${element.id}`} key={element.id} className={'group relative overflow-hidden rounded-xl flex-1 min-w-40 2xl:min-w-75 max-w-78 2xl:max-w-80 dark:bg-[#111111] bg-white/80 backdrop-blur-sm hover:border-indigo-500 card-border border-[#222222] transition-all duration-300  hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] group outline-2 active:scale-95 outline-transparent outline-offset-3  hover:outline-indigo-500 '}>
								<div className='aspect-16/8 bg-zinc-100 dark:bg-zinc-900 overflow-hidden'>
									{element.icon ? element.icon : ''}
								</div>

								<div className='py-2.5 px-4 z-10 relative'>
									<div className='absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>

									<div className='absolute top-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
									<h3 className='text-lg font-medium text-[17px]'>{element.name}</h3>
								</div>
							</Link>
						))
					}
				</section>

				<Link href='/atoms' className='btn-primary mx-auto z-20 shining py-2 tracking-wide absolute! bottom-8 left-0 right-0 max-w-xs rounded-full group flex gap-1 justify-center items-center'>
					View all Atoms
					<ArrowRight size={19} strokeWidth={2.3} className='w-0 transition-all group-hover:w-6' />
				</Link>
			</article>

			<div className='w-2 my-10 z-20 bg-white/30 rounded hidden md:block'></div>
			{/* <div className='w-2 my-12 z-20 bg-gradient-to-b from-indigo-600 via-blue-500 to-pink-500 rounded hidden md:block'></div> */}

			<article className='relative'>
				<h2 className='text-center text-4xl font-semibold'>Molecules</h2>
				<p className='max-w-[80ch] mx-auto mb-5 nt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas vel voluptatem nobis, dolore illum repellat quaerat voluptates fugit. Iste temporibus quos</p>

				<section className='flex flex-wrap justify-center gap-4'>
					{
						Molecules.slice(0, 9).map(element => (
							<Link href={`molecules/${element.id}`} key={element.id} className={'group relative overflow-hidden rounded-xl flex-1 min-w-40 max-w-78 2xl:max-w-80 dark:bg-[#111111] bg-white/80 backdrop-blur-sm hover:border-indigo-500 card-border border-[#222222] transition-all duration-300  hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] group outline-2 active:scale-95 outline-transparent outline-offset-3  hover:outline-indigo-500 '}>
								<div className='aspect-16/8 bg-zinc-100 dark:bg-zinc-900 overflow-hidden'>
									{element.icon ? element.icon : ''}
								</div>

								<div className='py-2.5 px-4 z-10 relative'>
									<div className='absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>

									<div className='absolute top-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
									<h3 className='font-medium text-[17px]'>{element.name}</h3>
								</div>
							</Link>
						))
					}
				</section>

				<Link href='/molecules' className='btn-primary mx-auto z-20 shining py-2 tracking-wide absolute! bottom-8 left-0 right-0 max-w-xs rounded-full group flex gap-1 justify-center items-center'>
					View all Molecules
					<ArrowRight size={19} strokeWidth={2.3} className='w-0 transition-all group-hover:w-6' />
				</Link>

			</article>
		</div>
	)
}