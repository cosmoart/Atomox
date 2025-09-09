"use client"
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import StarOnGitHub from '@/components/StarOnGithub'
import ComponentsGrid from '@/components/home/ComponentsGrid';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function HeroSection () {
	useGSAP(() => {
		let splitTitle = SplitText.create(".title", { type: "chars" });

		gsap.from(splitTitle.chars, {
			duration: 1,
			y: 30,
			filter: "blur(4px)",
			autoAlpha: 0,
			stagger: 0.1,
			scrollTrigger: '.box',
		});

		gsap.from(".circle-1", {
			duration: 1,
			rotate: 180,
			svgOrigin: "50 50"
		});

		gsap.from(".circle-2", {
			duration: 1,
			rotate: -180,
			svgOrigin: "50 50"
		});

		gsap.from(".appear", {
			duration: .6,
			y: 50,
			autoAlpha: 0,
			stagger: 0.2,
		});

		gsap.from(".grow-x", {
			duration: .6,
			scaleX: 0
		});
	});

	return (
		<section className='heightScreen max-h-[800px] flex items-center flex-row-reverse justify-center gap-12 relative pb-8 mb-8'>
			<div className='w-full mt-10 flex flex-col sm:justify-between items-center lg:items-start'>
				<div className='flex flex-col md:flex-row gap-3 items-center md:mb-3'>
					<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)" stroke="currentColor" strokeWidth="9.778" strokeLinecap="round" strokeLinejoin="round"><path d="M45.111 50a4.889 4.889 0 1 0 9.778 0 4.889 4.889 0 0 0-9.778 0Z" /><path d="M74.073 45.756a24.444 24.444 0 1 0-19.83 28.317" className='circle-1' /><path className='circle-2' d="M6 50A44 44 0 1 0 50 6" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs></svg>

					<div className='flex flex-col items-center md:items-start'>
						<StarOnGitHub />
						<h1 className='text-7xl font-bold my-2 text-zinc-900 dark:text-white title'>Atomox</h1>
					</div>
				</div>
				<p className='md:text-[17px] mb-5 max-w-[60ch] text-balance text-center lg:text-left box'>A collaborative platform where developers and designers can share, explore, and give feedback on reusable web components.</p>

				<nav className='flex gap-2 w-full max-w-[400px]'>
					<Link href='/atoms' className='btn-primary gradient1 transition-none! px-4 shining py-1.5 rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2 appear'>
						View Atoms
						<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
					</Link>
					<Link href='/molecules' className='btn-primary gradient1 transition-none! px-4 py-1.5 shining rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2 appear'>
						View Molecules
						<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
					</Link>
				</nav>
			</div>

			<ComponentsGrid />
		</section>
	)
}