import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import { Atoms, Molecules } from '@/lib/conts';

export default async function Home () {
	return (
		<div className='section'>
			<section className='heightScreen flex items-center justify-center flex-col relative'>
				<Image src={Logo} alt='Logo' width={250} height={250} className='dark:invert right-0 left-0 mx-auto -z-10' />
				<h1 className='text-6xl font-bold bg-gradient-to-r from-blue-600  to-indigo-400 inline-block text-transparent bg-clip-text '>Atomox</h1>
				{/* <p className='text-lg mb-5'>Web components by the people for the people</p> */}

				{/* <div className=' flex gap-4'>
					<Link href='/atoms' className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>View Atoms</Link>
					<Link href='/molecules' className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>View Molecules</Link>
				</div> */}
			</section>

			<li
				className='relative z-0 group overflow-hidden h-full border border-zinc-800 rounded-xl bg-[radial-gradient(500px_circle_at_var(--cursor-x)_var(--cursor-y),#22d3ee_0,transparent,transparent_70%)]'
				style={{
					'--cursor-x': '404.5px',
					'--cursor-y': '53px',
				}}
			>
				<div className='space-y-3 relative z-10 p-5 bg-[linear-gradient(180deg,_rgba(24,_24,_27,_0.60)_0%,_rgba(24,_24,_27,_0.00)_100%)]'>
					<div className='text-gray-500 w-9 h-9 rounded-full bg-[linear-gradient(180deg,_rgba(39,_39,_42,_0.68)_0%,_rgba(39,_39,_42,_0.00)_100%)] flex items-center justify-center border border-zinc-700'>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.41707 3.41715V1.75049H1.75037V8.41714H3.41703V4.59565L8.23228 9.41089L9.41082 8.23237L4.59557 3.41715H8.41707Z'
								fill='url(#paint0_linear_3267_7865)'
							/>
							<path
								d='M16.5829 11.5831H18.2496V18.2498H11.5829V16.5831H15.4044L10.5892 11.7679L11.7677 10.5894L16.5829 15.4046V11.5831Z'
								fill='url(#paint1_linear_3267_7865)'
							/>
							<defs>
								<linearGradient
									id='paint0_linear_3267_7865'
									x1='5.58059'
									y1='1.75049'
									x2='5.66515'
									y2='13.474'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#F9FAFB' />
									<stop offset='1' stopColor='#F9FAFB' stopOpacity='0' />
								</linearGradient>
								<linearGradient
									id='paint1_linear_3267_7865'
									x1='14.4194'
									y1='10.5894'
									x2='14.504'
									y2='22.3129'
									gradientUnits='userSpaceOnUse'
								>
									<stop stopColor='#F9FAFB' />
									<stop offset='1' stopColor='#F9FAFB' stopOpacity='0' />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<h3 className='text-zinc-100 font-semibold'>Fully Responsive</h3>
					<p className='text-zinc-300'>
						Responsive designed components and templates that look great on any screen.
					</p>
					<div>
						<Image
							alt='Float UI'
							loading='lazy'
							width={363}
							height={172}
							decoding='async'
							data-nimg='1'
							className='absolute inset-0 -z-10'
							src='https://floatui.com/_next/static/media/feature-cover.76d1a2e9.svg'
							style={{ color: 'transparent' }}
						/>
					</div>
				</div>

				<div
					className='bg-[linear-gradient(180deg,_#1E293B_0%,_rgba(59,_130,_246,_0.00)_137.53%,_rgba(32,_69,_129,_0.00)_195%)] blur-[70px] opacity-0 absolute top-0 left-0 w-4/5 h-4/5 duration-150 group-hover:opacity-90'
					style={{
						top: '53px',
						left: '404.5px',
						transform: 'translate(-50%, -50%)',
					}}
				></div>

				<div className='absolute inset-[1px] -z-10 rounded-xl bg-zinc-950'></div>
			</li>

			<article className='bg-test pb-10 pt-6 mt-8'>
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

			<article className='bg-test pb-10 pt-6 mt-8'>
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
			</article>
		</div>
	);
}
