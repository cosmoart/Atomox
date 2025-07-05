import Link from 'next/link';
import { Atoms, Molecules } from '@/lib/conts';
import { ArrowRight, Code, Package, Zap } from 'lucide-react';
import StarOnGitHub from '@/components/StarOnGithub'
import ComponentsGrid from '@/components/home/ComponentsGrid';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import FeaturesThree from '@/components/home/FeaturesThree';
import FeaturesBento from '@/components/home/FeaturesBento';
import CTA from '@/components/home/CTA';

export default async function Home () {
	return (
		<div className='section py-1.5 2xl:py-4' aria-hidden='true'>
			<div className='absolute w-full top-0 h-[calc(100svh+10px)] max-h-[880px] -z-10 left-0 bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 from-slate-50 via-indigo-200 to-slate-50 border-b border-white/10 opacity-60 dark:opacity-35'></div>

			{/* <div className='absolute max-h-[890px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_top] bg-no-repeat sm:bg-positiox-[38%_top] md:bg-positiox-[40%_top] lg:bg-positiox-[44%_top] bg-[url("https://headlessui.com/_next/static/media/bg-top.c54a3f7e.jpg")] xl:bg-top forced-colors:hidden' aria-hidden='true'></div>
			<div className='absolute max-h-[890px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-positiox-[38%_bottom] bg-[url("https://headlessui.com/_next/static/media/bg-bottom.e4e0724b.jpg")] md:bg-positiox-[40%_bottom] lg:bg-positiox-[44%_bottom] xl:bg-bottom forced-colors:hidden' aria-hidden='true'></div> */}

			{/* <div className='absolute max-h-[890px] top-0 left-0 h-screen overflow-hidden transition-colors duration-500 w-full blur-3xl'>
				<div className='absolute inset-0 overflow-hidden'>
					<div className='absolute -top-1/4 -right-5 size-[27rem] 2xl:size-[40rem] rounded-full bg-blue-500 opacity-30 dark:opacity-30 animate-blob'></div>
					<div className='absolute -top-5 -right-5 size-[14rem] 2xl:size-[40rem] rounded-full bg-blue-500 opacity-50 dark:opacity-90 animate-blob'></div>

					<div className='absolute -bottom-1/3 left-1/2 size-[27rem] 2xl:size-[40rem] rounded-full bg-indigo-500 opacity-30 dark:opacity-30 animate-blob animation-delay-2000'></div>
					<div className='absolute -bottom-30 right-1/4 size-[17rem] 2xl:size-[40rem] rounded-full bg-indigo-500 opacity-80 dark:opacity-80 animate-blob animation-delay-2000'></div>

					<div className='absolute top-1/2 left-0 size-[27rem] 2xl:size-[40rem] rounded-full bg-purple-500 opacity-30 dark:opacity-20 animate-blob animation-delay-4000'></div>

					<div className='absolute top-1/2 right-0 size-[16rem] 2xl:size-[30rem] rounded-full bg-purple-500 opacity-20 dark:opacity-20 animate-blob animation-delay-4000'></div>
				</div>
			</div> */}

			<div className='absolute h-svh inset-0 overflow-hidden'>
				<div className='jumbo absolute -inset-[10px] opacity-60 h-3/4'></div>
			</div>

			<section className='heightScreen max-h-[800px] flex items-center flex-row-reverse justify-center gap-12 relative pb-8 mb-8'>
				<div className='w-full mt-10 flex flex-col sm:justify-between items-center lg:items-start'>
					<div className='flex flex-col md:flex-row gap-3 items-center md:mb-3'>
						<Image src={Logo} alt='Logo' width={200} height={200} className='dark:invert right-0 left-0 mx-auto lg:mx-0 size-26 md:size-22' />
						<div className='flex flex-col items-center md:items-start'>
							<StarOnGitHub />
							<h1 className='text-7xl font-bold my-2 text-zinc-900 dark:text-white pulse'>Atomox</h1>
						</div>
					</div>
					<p className='md:text-[17px] mb-5 max-w-[60ch] text-balance text-center lg:text-left'>A collaborative platform where developers and designers can share, explore, and give feedback on reusable web components.</p>

					<nav className='flex gap-2 w-full max-w-[400px]'>
						<Link href='/atoms' className='btn-primary px-4 shining py-1.5 rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2'>
							View atoms
							<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
						</Link>
						<Link href='/molecules' className='btn-primary px-4 shining py-1.5 rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2'>
							View molecules
							<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
						</Link>
					</nav>
				</div>

				<ComponentsGrid />
			</section>

			<FeaturesThree />
			<FeaturesBento />
			<CTA />

			{/* <article className='bg-grid pb-10 pt-6 mt-8'>
				<h2 className='text-2xl md:text-4xl text-center font-medium pb-5 2xl:mb-7'>Atoms</h2>
				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Atoms.map(atom => (
							<Link href={`atoms/${atom.id}`} key={atom.id} className='flex bg-gradient-to-b flex-col justify-center rounded-lg card-border p-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.01] dark:from-zinc-900/50 dark:to-zinc-950 backdrop-blur-sm'>

								<h3 className='text-lg font-medium'>{atom.name}</h3>
								<p className='text-[15px] line-clamp-2 opacity-85'>{atom.description}</p>
							</Link>
						))
					}
				</div>
			</article>

			<article className='bg-grid pb-10 pt-6 mt-8'>
				<h2 className='text-2xl md:text-4xl text-center font-medium pb-5 2xl:mb-7'>Molecules</h2>

				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Molecules.map(molecule => (
							<Link href={`molecules/${molecule.id}`} key={molecule.id} className='flex bg-gradient-to-b flex-col justify-center rounded-lg card-border p-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.01] dark:from-zinc-900/50 dark:to-zinc-950 backdrop-blur-sm'>

								<h3 className='text-lg font-medium'>{molecule.name}</h3>
								<p className='text-sm line-clamp-2 opacity-85'>{molecule.description}</p>
							</Link>
						))
					}
				</div>
			</article> */}
		</div>
	);
}
