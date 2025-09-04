"use client"
import { Grid3X3, Figma, Layers, Zap, ArrowRight, Users, Star, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function FeaturesBento () {
	useGSAP(() => {
		gsap.from(".center-grid", {
			scale: 1.2,
			scrollTrigger: ".center-grid",
		});

		gsap.from(".left", {
			x: "100%",
			autoAlpha: 0,
			scrollTrigger: ".center-grid",
		})

		gsap.from(".right", {
			x: "-100%",
			autoAlpha: 0,
			scrollTrigger: ".center-grid",
		})

		gsap.from(".top", {
			y: "-100%",
			autoAlpha: 0,
			scrollTrigger: ".top",
		})

		gsap.from(".top-left", {
			x: "100%",
			y: "-100%",
			autoAlpha: 0,
			scrollTrigger: ".top",
		})

		gsap.from(".top-right", {
			x: "-100%",
			y: "-100%",
			autoAlpha: 0,
			scrollTrigger: ".top",
		})
	});

	return (
		<div className="section mb-30 mt-20">
			<header className="text-center mb-10">
				<h1 id="features" className="text-5xl font-bold mb-1 bg-linear-to-r to-purple-500 dark:to-purple-300 from-blue-600 dark:from-blue-400 bg-clip-text text-transparent leading-15 inline-block">
					Features
				</h1>
				{/* <h1 className="text-5xl font-bold mb-2 leading-15 inline-block">
					Features
				</h1> */}
				<p className="dark:text-zinc-200 text-xl max-w-2xl mx-auto">
					A comprehensive collection of components, templates, and resources for modern web development. and resources
				</p>
			</header>

			<section className="grid sm:grid-cols-2 grid-flow lg:grid-cols-3 gap-6 h-auto">
				{/* Components */}
				<article className="bg-zinc-100 left dark:bg-zinc-900  card-border rounded-2xl p-6  group">
					<div className='flex gap-3 items-center'>
						<div className="flex items-center justify-center size-10 bg-blue-500/20 rounded-xl mb-4">
							<Grid3X3 className="size-5 text-blue-400" />
						</div>
						<h2 className="text-xl font-bold mb-3">640+ Components</h2>
					</div>

					<p className="text-zinc-400 mb-4 text-sm leading-relaxed">
						From grid layouts to navbars, buttons, forms, tables and many more.
					</p>
					<button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
						Get started <ArrowRight className="w-4 h-4" />
					</button>
				</article>

				{/* Large center piece - Examples */}
				<article className="sm:row-span-2 center-grid z-20 lg:col-start-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm"></div>
					<div className="relative z-10">
						<span className="text-sm font-semibold text-blue-200 mb-2 block">OVER</span>
						<span className="text-8xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent block">
							50
						</span>
						<h2 className="text-3xl font-bold mb-4 text-white">Components</h2>
						<p className="text-blue-100 mb-8 max-w-md">
							A growing collection of components, templates, and resources for modern web development.
						</p>
						{/* <button className="bg-white mx-auto text-zinc-950 px-8 py-3 rounded-xl font-semibold transition-all duration-200 flex items-center gap-2 group">
							View Examples
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</button> */}
					</div>
				</article>

				{/* Figma */}
				<article className="bg-zinc-100 right dark:bg-zinc-900 card-border rounded-2xl p-6  group">
					<div className='flex gap-3 items-center'>
						<div className="flex items-center justify-center size-10 bg-purple-500/20 rounded-xl mb-4">
							<Figma className="size-5 text-purple-400" />
						</div>
						<h2 className="text-xl font-bold mb-3">Preline UI Figma</h2>
					</div>

					<p className="text-zinc-400 text-sm leading-relaxed">
						The largest free design system for Figma. outs to navbars, buttons, forms, tables and many more.
					</p>
					<button className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
						Explore more <ArrowRight className="w-4 h-4" />
					</button>
				</article>


				{/* Framework Guides */}
				<article className="bg-zinc-100 left dark:bg-zinc-900  card-border rounded-2xl p-6 ">
					{/* <div className="flex items-center justify-center size-10 bg-green-500/20 rounded-xl mb-4">
						<Code className="size-5 text-green-400" />
					</div> */}
					<h2 className="text-xl font-bold mb-3">Framework Guides</h2>
					<p className="text-zinc-400 mb-4 text-sm leading-relaxed">
						Seamlessly integrated with all your dev favorite tools. buttons, forms, tables and many more.
					</p>

					{/* Framework Icons */}
					<ul className="flex flex-wrap gap-3 mb-4" role="list">
						<li className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
							<span className="w-4 h-4 bg-red-500 rounded-sm" aria-label="Angular"></span>
						</li>
						<li className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
							<span className="w-4 h-4 bg-orange-500 rounded-sm" aria-label="Vue"></span>
						</li>
						<li className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
							<span className="w-4 h-4 bg-green-500 rounded-sm" aria-label="Node.js"></span>
						</li>
						<li className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
							<span className="w-4 h-4 bg-blue-500 rounded-sm" aria-label="React"></span>
						</li>
						<li className="w-8 h-8 bg-zinc-500/20 rounded-lg flex items-center justify-center">
							<span className="w-4 h-4 bg-zinc-500 rounded-sm" aria-label="Next.js"></span>
						</li>
					</ul>
				</article>

				{/* Free Templates */}
				<article className="bg-zinc-100 right dark:bg-zinc-900 card-border rounded-2xl p-6 ">
					{/* <div className="flex items-center justify-center size-10 bg-indigo-500/20 rounded-xl mb-4">
						<Download className="size-5 text-indigo-400" />
					</div> */}
					<h2 className="text-xl font-bold mb-3">Free Templates</h2>
					<p className="text-zinc-400 mb-4 text-sm leading-relaxed">
						Free, ready-to-use templates to build your projects at lightning speed.
					</p>

					{/* Template Preview */}
					<figure className="bg-zinc-700 rounded-lg p-3">
						<div className="flex items-center gap-2 mb-2" role="img" aria-label="Browser window controls">
							<span className="w-2 h-2 bg-red-400 rounded-full"></span>
							<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
							<span className="w-2 h-2 bg-green-400 rounded-full"></span>
						</div>
						<div className="space-y-1" role="img" aria-label="Template preview">
							<span className="h-2 bg-zinc-600 rounded w-3/4 block"></span>
							<span className="h-2 bg-zinc-600 rounded w-1/2 block"></span>
							<span className="h-2 bg-zinc-600 rounded w-2/3 block"></span>
						</div>
					</figure>
				</article>

				{/* Stats Card */}
				<article className="bg-gradient-to-r top-left from-emerald-500 to-teal-600 rounded-2xl p-6 text-white">
					<header className="flex items-center gap-3 mb-4">
						<Users className="size-5" />
						<span className="text-sm font-medium">Community</span>
					</header>
					<span className="text-3xl font-bold mb-2 block">50K+</span>
					<p className="text-emerald-100 text-sm mb-4">
						Developers using our components worldwide
					</p>
					<div className="flex items-center gap-2">
						<Star className="w-4 h-4 text-yellow-300" />
						<span className="text-sm font-medium">4.9/5 rating</span>
					</div>
				</article>

				{/* Tailwind CSS Plugins */}
				<article className="bg-zinc-100 top dark:bg-zinc-900  card-border rounded-2xl p-6 ">
					<div className="flex items-center justify-center size-10 bg-cyan-500/20 rounded-xl mb-4">
						<Layers className="size-5 text-cyan-400" />
					</div>
					<h2 className="text-xl font-bold mb-3">Tailwind CSS Plugins</h2>
					<p className="text-zinc-400 mb-4 text-sm leading-relaxed">
						Completely unstyled, fully accessible UI plugins for popular features.
					</p>
					{/* <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-1 transition-all">
						See how it works <ArrowRight className="w-4 h-4" />
					</button> */}
				</article>

				{/* Innovation Card */}
				<article className="bg-gradient-to-r top-right sm:col-span-2 lg:col-span-1 from-pink-500 to-rose-600 rounded-2xl p-6 text-white">
					<header className="flex items-center gap-3 mb-4">
						<Sparkles className="size-5" />
						<span className="text-sm font-medium">Innovation</span>
					</header>
					<span className="text-3xl font-bold mb-2 block">AI-Powered</span>
					<p className="text-pink-100 text-sm mb-4">
						Next-generation design tools with AI assistance
					</p>
					<div className="flex items-center gap-2">
						<Zap className="w-4 h-4 text-yellow-300" />
						<span className="text-sm font-medium">Coming soon</span>
					</div>
				</article>
			</section>
		</div>
	);
}
