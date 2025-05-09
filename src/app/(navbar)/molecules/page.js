import Link from 'next/link';
import { Molecules as data } from '@/lib/conts'

export default function Moleculas () {
	return (
		<div className='section'>

			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-medium'>Molecules</h1>
					<p className='max-w-[80ch] text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						They can be used to create more complex components, such as forms, cards, and modals. Examples of molecules include input forms, buttons with icons, and cards with images and text.
					</p>
				</section>
			</article>

			<article className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6'>
				{
					data.map(atom => (
						<Link href={`molecules/${atom.id}`} key={atom.id} className='flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-4 shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700 dark:hover:border-zinc-600'>

							<h3 className="text-lg font-medium">{atom.name}</h3>
							{atom.description}
						</Link>
					))
				}
			</article>
		</div>
	)
}