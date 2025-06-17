"use client"
import { useState } from 'react';
import { Moon, Sun, Copy, Smartphone, Palette, Code, Shield, Download } from 'lucide-react';

export default function FeaturesBento () {
	return (
		<article className='grid gap-4 mb-24 lg:grid-cols-3 grid-rows-3'>
			<section className='rounded-xl p-7 bg-white dark:bg-zinc-900/90 backdrop-blur-sm card-border'>
				<h5 className='text-lg 2xl:text-xl bg-clip-text bg-linear-to-l from-purple-400 to-blue-600 text-transparent font-bold'>CSS & Tailwind Ready</h5>
				<p className='text-zinc-800 text-[15px] 2xl:text-base dark:text-zinc-50'>Components built with both pure CSS and Tailwind CSS. Choose your preferred styling approach.</p>
			</section>
			<section className='rounded-xl p-7 bg-white dark:bg-zinc-900 card-border'>
				<h5 className='font-medium text-lg 2xl:text-xl'>Copy & Paste</h5>
				<p className='text-zinc-800 text-[15px] 2xl:text-base dark:text-zinc-50'>No installations or configurations needed. Simply copy the code and paste it into your project.</p>
			</section>
			<section className='rounded-xl p-7 bg-white dark:bg-zinc-900 card-border'>
				<h5 className='font-medium text-lg 2xl:text-xl'>Fully Responsive</h5>
				<p className='text-zinc-800 text-[15px] 2xl:text-base dark:text-zinc-50'>Every component adapts perfectly to all screen sizes. From mobile to desktop, your UI looks flawless everywhere.</p>
			</section>
			<section className='rounded-xl p-7 bg-white dark:bg-zinc-900 card-border'>
				<h5 className='font-medium text-lg 2xl:text-xl'>Dark & Light Mode</h5>
				<p className='text-zinc-800 text-[15px] 2xl:text-base dark:text-zinc-50'>Built-in support for both themes. Switch seamlessly between light and dark modes.</p>
			</section>
			<section className='rounded-xl p-7 bg-white dark:bg-zinc-900 card-border'>
				<h5 className='font-medium text-lg 2xl:text-xl'>MIT Licensed</h5>
				<p className='text-zinc-800 text-[15px] 2xl:text-base dark:text-zinc-50'>Use freely in personal and commercial projects. No restrictions, no attribution required.</p>
			</section>
		</article>
	)
}

// export default function FeaturesBento () {
// 	const [isDark, setIsDark] = useState(false);

// 	const toggleTheme = () => setIsDark(!isDark);

// 	return (
// 		<div className={`transition-colors`}>
// 			<button
// 				onClick={toggleTheme}
// 				className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${isDark
// 					? 'bg-zinc-800 text-yellow-400 hover:bg-blue-900/50 hover:text-blue-400'
// 					: 'bg-white text-zinc-600 hover:bg-blue-50 hover:text-blue-600 shadow-lg'
// 					}`}
// 			>
// 				{isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
// 			</button>
// 			<div className="max-w-7xl mx-auto px-6 py-16">
// 				{/* Bento Grid */}
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 					{/* CSS Variables Feature */}
// 					<div className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark
// 						? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-900/10'
// 						: 'bg-white border border-zinc-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-lg hover:shadow-xl'
// 						}`}>
// 						<div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${isDark
// 							? 'bg-zinc-700 text-orange-400 group-hover:bg-blue-800 group-hover:text-blue-300'
// 							: 'bg-zinc-100 text-orange-500 group-hover:bg-blue-100 group-hover:text-blue-600'
// 							}`}>
// 							<Code className="w-6 h-6" />
// 						</div>

// 						<h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'
// 							}`}>
// 							CSS & Tailwind Ready
// 						</h3>

// 						<p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'
// 							}`}>
// 							Components built with both pure CSS and Tailwind CSS.
// 							Choose your preferred styling approach.
// 						</p>

// 						<div className={`mt-6 p-4 rounded-lg font-mono text-xs ${isDark ? 'bg-zinc-900 text-green-400' : 'bg-zinc-50 text-zinc-700'
// 							}`}>
// 							--primary: #3b82f6;<br />
// 							--radius: 8px;<br />
// 							@apply bg-blue-500;
// 						</div>
// 					</div>

// 					{/* Copy Paste Feature */}
// 					<div className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark
// 						? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-900/10'
// 						: 'bg-white border border-zinc-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-lg hover:shadow-xl'
// 						}`}>
// 						<div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${isDark
// 							? 'bg-zinc-700 text-green-400 group-hover:bg-blue-800 group-hover:text-blue-300'
// 							: 'bg-zinc-100 text-green-500 group-hover:bg-blue-100 group-hover:text-blue-600'
// 							}`}>
// 							<Copy className="w-6 h-6" />
// 						</div>

// 						<h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'
// 							}`}>
// 							Copy & Paste
// 						</h3>

// 						<p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'
// 							}`}>
// 							No installations or configurations needed.
// 							Simply copy the code and paste it into your project.
// 						</p>

// 						<div className="mt-6 flex items-center space-x-2">
// 							<div className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'
// 								}`}>
// 								Zero dependencies
// 							</div>
// 						</div>
// 					</div>

// 					{/* Responsive Feature - Large */}
// 					<div className={`group md:col-span-2 lg:col-span-1 lg:row-span-2 p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark
// 						? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-900/10'
// 						: 'bg-white border border-zinc-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-lg hover:shadow-xl'
// 						}`}>
// 						<div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${isDark
// 							? 'bg-zinc-700 text-purple-400 group-hover:bg-blue-800 group-hover:text-blue-300'
// 							: 'bg-zinc-100 text-purple-500 group-hover:bg-blue-100 group-hover:text-blue-600'
// 							}`}>
// 							<Smartphone className="w-6 h-6" />
// 						</div>

// 						<h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'
// 							}`}>
// 							Fully Responsive
// 						</h3>

// 						<p className={`text-sm leading-relaxed mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'
// 							}`}>
// 							Every component adapts perfectly to all screen sizes.
// 							From mobile to desktop, your UI looks flawless everywhere.
// 						</p>

// 						{/* Responsive preview */}
// 						<div className="space-y-4">
// 							<div className="flex items-center space-x-3">
// 								<div className={`w-8 h-6 rounded border-2 flex-shrink-0 ${isDark ? 'border-zinc-600' : 'border-zinc-300'
// 									}`}></div>
// 								<span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
// 									Mobile: 320px+
// 								</span>
// 							</div>
// 							<div className="flex items-center space-x-3">
// 								<div className={`w-12 h-8 rounded border-2 flex-shrink-0 ${isDark ? 'border-zinc-600' : 'border-zinc-300'
// 									}`}></div>
// 								<span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
// 									Tablet: 768px+
// 								</span>
// 							</div>
// 							<div className="flex items-center space-x-3">
// 								<div className={`w-16 h-10 rounded border-2 flex-shrink-0 ${isDark ? 'border-zinc-600' : 'border-zinc-300'
// 									}`}></div>
// 								<span className={`text-xs ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
// 									Desktop: 1024px+
// 								</span>
// 							</div>
// 						</div>
// 					</div>

// 					{/* Dark/Light Mode */}
// 					<div className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark
// 						? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-900/10'
// 						: 'bg-white border border-zinc-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-lg hover:shadow-xl'
// 						}`}>
// 						<div className="flex items-center space-x-2 mb-6">
// 							<div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark
// 								? 'bg-zinc-900 text-yellow-400 group-hover:bg-blue-900 group-hover:text-blue-300'
// 								: 'bg-yellow-100 text-yellow-600 group-hover:bg-blue-100 group-hover:text-blue-600'
// 								}`}>
// 								<Sun className="w-4 h-4" />
// 							</div>
// 							<div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isDark
// 								? 'bg-zinc-700 text-blue-400 group-hover:bg-blue-800 group-hover:text-blue-300'
// 								: 'bg-zinc-100 text-zinc-600 group-hover:bg-blue-100 group-hover:text-blue-600'
// 								}`}>
// 								<Moon className="w-4 h-4" />
// 							</div>
// 						</div>

// 						<h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'
// 							}`}>
// 							Dark & Light Mode
// 						</h3>

// 						<p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'
// 							}`}>
// 							Built-in support for both themes. Switch seamlessly between light and dark modes.
// 						</p>
// 					</div>

// 					{/* MIT License */}
// 					<div className={`group p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${isDark
// 						? 'bg-zinc-800 border border-zinc-700 hover:border-blue-500/50 hover:bg-blue-900/10'
// 						: 'bg-white border border-zinc-200 hover:border-blue-300 hover:bg-blue-50/50 shadow-lg hover:shadow-xl'
// 						}`}>
// 						<div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center transition-colors ${isDark
// 							? 'bg-zinc-700 text-blue-400 group-hover:bg-blue-800 group-hover:text-blue-300'
// 							: 'bg-zinc-100 text-blue-500 group-hover:bg-blue-100 group-hover:text-blue-600'
// 							}`}>
// 							<Shield className="w-6 h-6" />
// 						</div>

// 						<h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-zinc-900'
// 							}`}>
// 							MIT Licensed
// 						</h3>

// 						<p className={`text-sm leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'
// 							}`}>
// 							Use freely in personal and commercial projects.
// 							No restrictions, no attribution required.
// 						</p>

// 						<div className="mt-6">
// 							<div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'
// 								}`}>
// 								<Shield className="w-3 h-3 mr-1" />
// 								Open Source
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }