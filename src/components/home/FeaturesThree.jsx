import { Code, Package, Zap } from 'lucide-react';

export default function ThreeFeatures () {
	return (
		<section className='px-4 py-16'>
			<div className='grid gap-6 md:grid-cols-3'>
				<article className='rounded-xl  backdrop-blur-sm p-6 card-border shadow-lg'>
					<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
						<Zap className='h-6 w-6 text-indigo-400' />
					</div>
					<h3 className='mb-2 text-xl font-semibold dark:text-white'>Fast Development</h3>
					<p className='dark:text-gray-300 text-balance'>
						Build UIs in record time with pre-built, optimized components that work out of the box.
					</p>
				</article>

				<article className='rounded-xl backdrop-blur-sm p-6 card-border shadow-lg'>
					<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
						<Code className='h-6 w-6 text-indigo-400' />
					</div>
					<h3 className='mb-2 text-xl font-semibold dark:text-white'>Easy Maintenance</h3>
					<p className='dark:text-gray-300 text-balance'>
						Consistent patterns and well-documented code make maintenance a breeze for teams of any size.
					</p>
				</article>

				<div className='rounded-xl backdrop-blur-sm p-6 card-border shadow-lg'>
					<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
						<Package className='h-6 w-6 text-indigo-400' />
					</div>
					<h3 className='mb-2 text-xl font-semibold dark:text-white'>Accessibility Built-in</h3>
					<p className='dark:text-gray-300 text-balance'>
						Every component follows WCAG guidelines, ensuring your applications are usable by everyone.
					</p>
				</div>
			</div>
		</section>
	)
}