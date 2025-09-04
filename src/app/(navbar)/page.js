import FeaturesBento from '@/components/home/FeaturesBento';
import AtomsMolecules from '@/components/home/AtomsMolecules';
import CTA from '@/components/home/CTA';
import HeroSection from '@/components/home/HeroSection';
import Molecules from '@/components/home/Molecules';

export default async function Home () {
	return (
		<div className='section py-1.5 2xl:py-4' aria-hidden='true'>
			<div className='absolute w-full top-0 h-[calc(100svh+10px)] max-h-[880px] -z-10 left-0 bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 from-slate-50 via-indigo-200 to-slate-50 border-b border-white/10 opacity-60 dark:opacity-25'></div>

			<div className='not-dark:opacity-0 transition-opacity absolute inset-0 top-0 overflow-hidden  max-h-[880px] rounded-xl'>
				<div className='absolute max-h-[890px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_top] bg-no-repeat sm:bg-positiox-[38%_top] md:bg-positiox-[40%_top] lg:bg-positiox-[44%_top] bg-[url(/top.avif)] xl:bg-top forced-colors:hidden' aria-hidden='true'></div>
				<div className='absolute deformacion max-h-[890px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-positiox-[38%_bottom] bg-[url(/bottom.avif)] md:bg-positiox-[40%_bottom] lg:bg-positiox-[44%_bottom] xl:bg-bottom forced-colors:hidden' aria-hidden='true'></div>
			</div>

			<div className='absolute h-svh inset-0 overflow-hidden dark:opacity-0 transition-opacity'>
				<div className='jumbo absolute -inset-[10px] opacity-60 h-3/4'></div>
			</div>

			<HeroSection />
			{/* <Molecules /> */}
			<FeaturesBento />
			<AtomsMolecules />
			<CTA />
		</div>
	);
}
