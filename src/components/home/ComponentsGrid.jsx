export default function ComponentsGrid () {
	return (
		<div className='hidden lg:grid grid-cols-12 gap-4 w-full h-full'>
			<div className='col-span-12 md:col-span-6 lg:col-span-4 row-span-2 bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-300'>
				<div className='flex items-center mb-4'>
					<div className='size-9 bg-indigo-500 rounded-xl flex items-center justify-center mr-3'>
						<svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z'></path>
						</svg>
					</div>
					<div>
						<h3 className=' font-semibold'>AI Assistant</h3>
						<span className='text-green-400 text-sm'>Active</span>
					</div>
				</div>
				<p className='text-gray-400 mb-4 text-sm'>Advanced language model for content generation and analysis</p>
				<button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm'>
					Launch Assistant
				</button>
			</div>

			<div className='col-span-12 md:col-span-7 lg:col-span-7 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<div className='flex items-center gap-3 mb-4'>
					<img src='https://avatars.githubusercontent.com/u/81999801?v=4'
						alt='Profile' className='size-9 rounded-full mr-3' />
					<div>
						<h3 className='font-semibold'>Cosmoart</h3>
						<p className='text-sm text-gray-400'>Full-stack Developer</p>
					</div>
					<a href='https://github.com/cosmoart' target='_blank' rel='noopener noreferrer' className='ml-auto bg-indigo-600 hover:bg-indigo-700 px-4 py-1 rounded-full text-sm transition-colors'>
						Follow
					</a>
				</div>
				<div className='flex gap-4 text-sm text-gray-400'>
					<span>124 Following</span>
					<span>15.2K Followers</span>
				</div>
			</div>

			{/* <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<h3 className='text-lg font-semibold mb-4'>Settings</h3>
				<div className='space-y-4'>
					<div className='flex items-center justify-between'>
						<span>Dark Mode</span>
						<label className='relative inline-flex items-center cursor-pointer'>
							<input type='checkbox' className='sr-only peer' checked />
							<div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
						</label>
					</div>
					<div className='flex items-center justify-between'>
						<span>Notifications</span>
						<label className='relative inline-flex items-center cursor-pointer'>
							<input type='checkbox' className='sr-only peer' />
							<div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
						</label>
					</div>
				</div>
			</div> */}

			<div className='col-span-12 md:col-span-6 lg:col-span-8 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<h3 className='font-semibold mb-4'>Quick Actions</h3>
				<div className='flex gap-2 mb-4'>
					<input type='text' placeholder='Enter your prompt...'
						className='flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-1.5 focus:outline-none focus:border-indigo-500 transition-colors' />
					<button className='bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-lg transition-colors'>
						Send
					</button>
				</div>
				<div className='flex gap-2'>
					<span className='bg-green-600 text-green-100 px-3 py-1 rounded-full text-sm'>✓ Approved</span>
					<span className='bg-orange-600 text-orange-100 px-3 py-1 rounded-full text-sm'>⏳ Pending</span>
				</div>
			</div>

			<div className='col-span-12 md:col-span-3 lg:col-span-2 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl p-4 2xl:p-6 flex justify-center items-center'>
				<div className='text-center'>
					<div className='text-2xl font-bold mb-2'>97K</div>
					<div className='text-sm opacity-90'>Total Users</div>
				</div>
			</div>

			<div className='col-span-12 md:col-span-3 lg:col-span-3 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<div className='grid grid-cols-2 gap-3'>
					<button className='bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg transition-colors'>
						<svg className='w-6 h-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'></path>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'></path>
						</svg>
					</button>
					<button className='bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors'>
						<svg className='w-6 h-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'></path>
						</svg>
					</button>
					<button className='bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors'>
						<svg className='w-6 h-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'></path>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'></path>
						</svg>
					</button>
					<button className='bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-colors'>
						<svg className='w-6 h-6 mx-auto' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'></path>
						</svg>
					</button>
				</div>
			</div>

			{/* <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<div className='text-center mb-4'>
					<h3 className='text-xl font-semibold mb-2'>Pro Plan</h3>
					<div className='text-3xl font-bold'>$29<span className='text-lg text-gray-400'>/month</span></div>
				</div>
				<div className='space-y-2 mb-6'>
					<div className='flex items-center text-sm'>
						<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'></path>
						</svg>
						Unlimited projects
					</div>
					<div className='flex items-center text-sm'>
						<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'></path>
						</svg>
						Priority support
					</div>
					<div className='flex items-center text-sm'>
						<svg className='w-4 h-4 text-green-400 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
							<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7'></path>
						</svg>
						Advanced analytics
					</div>
				</div>
				<button className='w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105'>
					Upgrade Now
				</button>
			</div> */}

			<div className='col-span-12 md:col-span-3 lg:col-span-2 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6'>
				<div className='text-center'>
					<div className='w-16 h-16 mx-auto mb-3 bg-green-600 rounded-full flex items-center justify-center pulse-animation'>
						<div className='w-6 h-6 bg-white rounded-full'></div>
					</div>
					<h4 className='font-semibold'>Online</h4>
					<p className='text-sm text-gray-400'>System Active</p>
				</div>
			</div>

			{/* <div className='col-span-12 md:col-span-6 lg:col-span-6 bg-gray-800/70 backdrop-blur-sm rounded-xl p-4 2xl:p-6 absolute top-0 right-1'>
				<div className='flex bg-gray-700 rounded-lg p-1 mb-4'>
					<button className='flex-1 py-2 px-4 bg-indigo-600 text-white rounded-md text-sm font-medium transition-all'>
						Dashboard
					</button>
					<button className='flex-1 py-2 px-4 text-gray-400 hover:text-white rounded-md text-sm font-medium transition-all'>
						Analytics
					</button>
					<button className='flex-1 py-2 px-4 text-gray-400 hover:text-white rounded-md text-sm font-medium transition-all'>
						Settings
					</button>
				</div>

				<div className='grid grid-cols-3 gap-4 text-center'>
					<div>
						<div className='text-2xl font-bold text-indigo-400'>156</div>
						<div className='text-sm text-gray-400'>Active Users</div>
					</div>
					<div>
						<div className='text-2xl font-bold text-green-400'>89%</div>
						<div className='text-sm text-gray-400'>Success Rate</div>
					</div>
					<div>
						<div className='text-2xl font-bold text-purple-400'>24h</div>
						<div className='text-sm text-gray-400'>Uptime</div>
					</div>
				</div>
			</div> */}
		</div>
	)
}