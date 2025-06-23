import { Repeat } from 'lucide-react';
import Link from 'next/link';

export default function ElementsList ({ data, title, description }) {
	return (
		<div className='section pt-6 relative'>
			<div className='absolute h-1/2 max-h-60 dark:invert opacity-30 -z-20 pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

			<article className='grow flex flex-col items-center 2xl:mt-3'>
				<Link href={`/${title === 'Atoms' ? 'molecules' : 'atoms'}`}
					className='btn-primary shining-button outline-2 outline-offset-2 hover:outline-offset-4 dark:outline-zinc-800 outline-zinc-100 flex items-center gap-1 px-4 py-0.5 rounded-full bg-gradient-to-l text-sm tracking-wide font-medium text-white transition-all active:scale-95 cursor-pointer '>
					{title === 'Atoms' ? 'Molecules' : 'Atoms'}
					<Repeat size={17} strokeWidth={2.3} className={`${title === 'Atoms' ? 'rotate-x-180' : ''}`} />
				</Link>

				<h1 className='text-[43px] -mt-1 font-bold tracking-wide'>{title}</h1>
				<p className='max-w-[80ch] text-center text-balance text-zinc-900/80 dark:text-white/80 text-[15px]'>
					{description}
				</p>
			</article>

			<article className='flex flex-wrap justify-center mx-auto gap-4 mt-8'>
				{
					data.map(element => (
						<Link href={`${title.toLowerCase()}/${element.id}`} key={element.id} className={'group relative overflow-hidden rounded-xl flex-1 min-w-70 2xl:min-w-75 max-w-78 2xl:max-w-80 dark:bg-[#111111] hover:border-indigo-500 card-border border-[#222222] transition-all duration-300  hover:shadow-[0_0_30px_rgba(79,70,229,0.15)] group outline-2 active:scale-95 outline-transparent outline-offset-3  hover:outline-indigo-500 '}>
							{/* <img src='/test.webp' className='w-full h-32 object-cover object-top ' /> */}
							<div className='aspect-16/8 bg-zinc-100 dark:bg-zinc-900 overflow-hidden'>
								{element.icon ? element.icon : <svg width='850' className='w-full h-full object-cover group-hover:scale-105 transition-transform' height='377' viewBox='0 0 850 377' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<rect x='200' y='136' width='449' height='105' rx='25' fill='#D9D9D9' className='dark:fill-zinc-500' />
									<rect x='226' y='162' width='326' height='53' rx='14' fill='white' className='dark:fill-zinc-800' />
									<rect x='573' y='162' width='53' height='53' rx='26.5' fill='white' className='dark:fill-zinc-800' />
								</svg>}
							</div>

							<div className='py-3 px-5 z-10 relative'>
								<div className='absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>

								<div className='absolute top-0 left-0 w-full h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
								<h3 className='text-lg font-medium'>{element.name}</h3>
								<p className='text-[15px] opacity-80 line-clamp-2' title={element.description}>{element.description}</p>
							</div>
						</Link>
						// <Link href={`${title.toLowerCase()}/${element.id}`} key={element.id} className={`flex card-border flex-1 min-w-78 justify-center flex-col rounded-lg py-4 px-6 shadow-md transition-shadow hover:shadow-lg ${element.id.toLowerCase()}`}>
						// 	<h3 className='text-lg font-medium '>{element.name}</h3>
						// 	<p className='text-[15px] line-clamp-2'>{element.description}</p>
						// </Link>
					))
				}
			</article>

			<footer className='mt-10 mb-3 2xl:mb-8 text-center'>
				Don&apos;t see the component you&apos;re looking for? <a href={`https://github.com/cosmoart/Atomox/issues/new?title=New%20Component&body=Component%20Name:%20${title}%0ADescription:%20`}
					target='_blank' rel='noopener noreferrer' className='underline'>Submit it here</a>.
			</footer>
		</div>
	)
}