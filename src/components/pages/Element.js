import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';
import { createServerSupabaseClient } from '@/lib/client';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	const { data, error } = await client.from(elementId).select('*').eq('id', id)
	if (error) {
		console.log(error);

		throw error
	}
	const element = data[0]
	console.log(element);

	return (
		<div className='section min-h-svh'>
			<header className='flex justify-between gap-3 h-full'>
				<h1 className='text-xl font-medium'>Atom Title {id}</h1>
				<div className='flex gap-2 items-center'>
					<Avatar className='size-8' >
						<AvatarImage src='https://github.com/cosmoart.png' />
						<AvatarFallback>CA</AvatarFallback>
					</Avatar>

					<h1 className='font-medium'>Cosmo</h1>
				</div>
			</header>

			<ComEditor />

			<section>
				<h2 className='text-2xl font-medium'>Tags</h2>
				<ul className='flex gap-2'>
					{
						['3D', 'Blue', 'Animation', 'Loader', 'SVG'].map(type => (
							<li key={type} className='flex gap-2 items-center rounded px-2 py-1 bg-zinc-100 dark:bg-zinc-800'>
								<span className='text-sm'>{type}</span>
							</li>
						))
					}
				</ul>
			</section>
		</div>
	)
}