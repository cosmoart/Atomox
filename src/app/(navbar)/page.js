import FeaturesBento from '@/components/home/FeaturesBento';
import AtomsMolecules from '@/components/home/AtomsMolecules';
import CTA from '@/components/home/CTA';
import HeroSection from '@/components/home/Hero';

export default async function Home () {
	return (
		<div className='section py-1.5 2xl:py-4' aria-hidden='true'>
			{/* <div className='absolute w-full top-0 h-[calc(100svh+10px)] max-h-[880px] -z-10 left-0 bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 from-slate-50 via-indigo-200 to-slate-50 border-b border-white/10 opacity-60 dark:opacity-35'></div> */}
			<div className='absolute w-full top-0 h-[calc(100svh+10px)] max-h-[880px] -z-10 left-0 bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 from-slate-50 via-indigo-200 to-slate-50 border-b border-white/10 opacity-60 dark:opacity-25'></div>

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

			<HeroSection />

			{/* <img src='test.png' alt='test' className='w-full h-full object-cover' /> */}

			<FeaturesBento />
			<AtomsMolecules />
			<CTA />
		</div>
	);
}
