"use client"
import { useState } from 'react';
import { useTheme } from 'next-themes'
import { MonitorCog, MoonIcon, Sun } from 'lucide-react';

export default function ComponentsGrid () {
	const [activeTab, setActiveTab] = useState('Dashboard');
	const [selectedButton, setSelectedButton] = useState(0);
	const { theme, setTheme } = useTheme()

	const buttonIcons = [
		// Camera
		<svg className='size-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'></path>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'></path>
		</svg>,
		// Document
		<svg className='size-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path>
		</svg>,
		// Settings
		<svg className='size-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
		</svg>,
		// Chat
		<svg className='size-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
			<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'></path>
		</svg>
	];

	const renderTabContent = () => {
		switch (activeTab) {
			case 'Dashboard':
				return (
					<div className='grid grid-cols-3 gap-4 text-center h-15'>
						<div>
							<div className='text-2xl font-bold text-indigo-400'>156</div>
							<div className='text-sm text-zinc-500 dark:text-gray-400'>Active Users</div>
						</div>
						<div>
							<div className='text-2xl font-bold text-green-400'>89%</div>
							<div className='text-sm text-zinc-500 dark:text-gray-400'>Success Rate</div>
						</div>
						<div>
							<div className='text-2xl font-bold text-purple-400'>24h</div>
							<div className='text-sm text-zinc-500 dark:text-gray-400'>Uptime</div>
						</div>
					</div>
				);
			case 'Analytics':
				return (
					<div className='space-y-1 h-15'>
						<div className='flex justify-between items-center'>
							<span className='text-sm text-zinc-600 dark:text-gray-400'>Page Views</span>
							<span className='text-lg font-bold text-blue-400'>12.4K</span>
						</div>
						<div className='flex justify-between items-center'>
							<span className='text-sm text-zinc-600 dark:text-gray-400'>Bounce Rate</span>
							<span className='text-lg font-bold text-red-400'>32%</span>
						</div>
					</div>
				);
			case 'Settings':
				return (
					<div className='space-y-1.5 h-15'>
						<div className='flex justify-between items-center'>
							<span className='text-sm'>Auto Backup</span>
							<span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full'>Enabled</span>
						</div>
						<div className='flex justify-between items-center'>
							<span className='text-sm'>API Rate Limit</span>
							<span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full'>1000/hr</span>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<article aria-hidden='true' className='hidden lg:grid grid-cols-12 gap-4 w-full mt-4 mb-1 2xl:mt-0'>
			{/* AI Assistant */}
			<section className='col-span-5 row-span-2 bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 card-border transition-all flex flex-col justify-center '>
				<div className='flex items-center mb-4'>
					<div className='size-9 bg-indigo-500 text-white rounded-xl flex items-center justify-center mr-3'>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>
						</svg>
					</div>
					<div>
						<h3 className='font-semibold'>AI Assistant</h3>
						<span className='text-green-400 text-sm'>Active</span>
					</div>
				</div>
				<p className='text-zinc-600 dark:text-gray-400 mb-4 text-sm'>
					Advanced language model for content generation and analysis
					<span className='hidden 2xl:inline'>
						, with a built-in chatbot for quick and easy communication.
					</span>
				</p>
				<button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm'>
					Launch Assistant
				</button>
			</section>

			{/* Profile */}
			<section className='col-span-6 bg-white/30 dark:bg-gray-800/60 card-border transition-all backdrop-blur-sm rounded-xl px-4 py-3 2xl:p-6'>
				<div className='flex items-center gap-2 mb-4'>
					<img src='https://avatars.githubusercontent.com/u/81999801?v=4'
						alt='Profile' className='size-9 rounded-full' />
					<div>
						<h3 className='font-semibold'>Cosmoart</h3>
						<p className='text-sm text-zinc-600 dark:text-gray-400'>Web Developer</p>
					</div>
					<a href='https://github.com/cosmoart' target='_blank' rel='noopener noreferrer' className='ml-auto bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-full text-sm transition-colors active:scale-95 text-white'>
						Follow
					</a>
				</div>
				<div className='flex gap-4 text-sm text-zinc-600 dark:text-gray-400'>
					<span>169 Following</span>
					<span>2.3K Followers</span>
				</div>
			</section>

			{/* Stats */}
			<section className='col-span-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-4 2xl:p-5 flex justify-center items-center'>
				<div className='text-center text-white'>
					<div className='text-2xl font-bold mb-2'>97K</div>
					<div className='text-sm opacity-90'>Total Users</div>
				</div>
			</section>

			{/* Interactive Buttons Grid */}
			<section className='col-span-3 card-border bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-3.5'>
				<div className='grid grid-cols-2 gap-2 text-white'>
					{buttonIcons.map((icon, index) => (
						<button
							key={index}
							onClick={() => setSelectedButton(index)}
							className={`p-2 rounded-lg transition-colors ${selectedButton === index
								? 'bg-indigo-600 hover:bg-indigo-700'
								: 'text-zinc-700 dark:text-white dark:bg-gray-700/80 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-gray-600'
								}`}
						>
							{icon}
						</button>
					))}
				</div>
			</section>

			<div className='col-span-4 row-span-2 flex flex-col gap-4'>
				{/* Pricing */}
				<section className='col-span-4 row-span-2 card-border bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-5 flex flex-col justify-center items-center'>
					<div className='text-center mb-4'>
						<h3 className='text-xl font-semibold mb-1 text-zinc-800 dark:text-white'>Pro Plan</h3>
						<div className='2xl:text-3xl text-2xl font-bold text-zinc-800 dark:text-white'>$29<span className='text-lg text-gray-400'>/month</span></div>
					</div>
					<div className='space-y-2 mb-5'>
						<div className='flex items-center text-sm'>
							<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
							</svg>
							Unlimited projects
						</div>
						<div className='flex items-center text-sm'>
							<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
							</svg>
							Priority support
						</div>
						<div className='flex items-center text-sm'>
							<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
								<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7'></path>
							</svg>
							Advanced analytics
						</div>
					</div>
					<button className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-[15px] 2xl:text-base text-white py-2 px-4 rounded-lg transition-all duration-200 transform active:scale-95 font-medium'>
						Upgrade Now
					</button>
				</section>

				{/* Themes */}
				<section className='col-span-4 row-span-1 card-border bg-white/30 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-3'>
					<ul className='grid grid-cols-3 *:w-full gap-2 text-white'>
						<li >
							<button onClick={() => setTheme('light')} className={`${theme === 'light' ? 'bg-indigo-600' : 'text-zinc-700 dark:text-white dark:bg-gray-700/80 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-gray-600 active:scale-95 hover:scale-105'} flex-1 p-2 rounded-md text-sm font-medium transition-all w-full flex justify-center card-border`}>
								<Sun size={20} />
							</button>
						</li>
						<li>
							<button onClick={() => setTheme('dark')} className={`${theme === 'dark' ? 'bg-indigo-600' : 'text-zinc-700 dark:text-white dark:bg-gray-700/80 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-gray-600 active:scale-95 hover:scale-105'} flex-1 p-2 rounded-md text-sm font-medium transition-all w-full flex justify-center card-border`}>
								<MoonIcon size={20} />
							</button>
						</li>
						<li>
							<button onClick={() => setTheme('system')} className={`${theme === 'system' ? 'bg-indigo-600' : 'text-zinc-700 dark:text-white dark:bg-gray-700/80 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-gray-600 active:scale-95 hover:scale-105'} flex-1 p-2 rounded-md text-sm font-medium transition-all  w-full flex justify-center card-border`}>
								<MonitorCog size={20} />
							</button>
						</li>
					</ul>
				</section>
			</div >

			{/* Interactive Tabs */}
			< section className='z-10 col-span-7 card-border bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl px-4 py-3 2xl:p-5 flex flex-col justify-center' >
				<div className='flex bg-zinc-300/80 dark:bg-gray-700 rounded-lg p-1 mb-4'>
					{['Dashboard', 'Analytics', 'Settings'].map((tab) => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`flex-1 py-1.5 2xl:py-2 px-2 rounded-md text-sm font-medium transition-all ${activeTab === tab
								? 'bg-indigo-600 text-white'
								: 'text-gray-500 hover:text-zinc-700 dark:hover:text-white'
								}`}
						>
							{tab}
						</button>
					))}
				</div>
				{renderTabContent()}
			</section >

			{/* Status */}
			< section className='col-span-3 h-auto card-border bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-5 flex flex-col justify-center items-center' >
				<div className='text-center'>
					<div className='size-12 2xl:size-14 mx-auto mb-3 bg-green-600 rounded-full flex items-center justify-center pulse-animation'>
						<div className='w-6 h-6 bg-white rounded-full'></div>
					</div>
					<h4 className='font-semibold'>Online</h4>
					<p className='text-sm text-gray-400'>System Active</p>
				</div>
			</section >

			{/* Weather Widget */}
			< section className='z-10 col-span-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 flex flex-col justify-center items-center text-white' >
				<svg className='size-8 mx-auto mb-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
					<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'></path>
				</svg>
				<div className='text-2xl font-bold'>22°C</div>
				<div className='text-sm opacity-90'>Partly Cloudy</div>
			</section >

			{/* Progress Tracker */}
			< section className='col-span-9 z-10 hidden 2xl:block card-border bg-white/30 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:px-6 pb-2' >
				<h3 className='text-lg font-semibold mb-2 2xl:mb-4'>Project Progress</h3>
				<div className='space-y-4 grid grid-cols-3 gap-3'>
					<div>
						<div className='flex justify-between text-sm mb-1'>
							<span>Website</span>
							<span className='text-indigo-600'>75%</span>
						</div>
						<div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
							<div className='bg-indigo-600 h-2 rounded-full' style={{ width: '75%' }}></div>
						</div>
					</div>
					<div>
						<div className='flex justify-between text-sm mb-1'>
							<span>Mobile</span>
							<span className='text-green-600'>92%</span>
						</div>
						<div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
							<div className='bg-green-600 h-2 rounded-full' style={{ width: '92%' }}></div>
						</div>
					</div>
					<div>
						<div className='flex justify-between text-sm mb-1'>
							<span>API</span>
							<span className='text-yellow-600'>45%</span>
						</div>
						<div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
							<div className='bg-yellow-600 h-2 rounded-full' style={{ width: '45%' }}></div>
						</div>
					</div>
				</div>
			</section >

			<style global jsx>{`
	:root {
		--header-bg: color-mix(in oklab, var(--color-white) 60%, transparent);
		--header-border: var(--color-zinc-200);
	}

	.dark {
		--header-bg: color-mix(in oklab, var(--color-zinc-900) 80%, transparent);
		--header-border: var(--color-zinc-800);
	}

	@keyframes headerScrollEffect {
		from {
			background: transparent;
			backdrop-filter: blur(0px);
			border-color: transparent;
		}
		to {
			background: var(--header-bg);
			backdrop-filter: blur(8px);
		}
	}

	.header-scroll-effect {
		animation-name: headerScrollEffect;
		animation-timeline: scroll(root block);
		animation-range: 40px 200px;
		animation-fill-mode: both;
		border-bottom: 1px solid transparent;
	}

	.hiddenHeader{
		background: transparent;
		backdrop-filter: blur(0px);
		border-color: transparent;
	}
`}</style>
		</article >
	)
}
