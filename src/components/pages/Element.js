import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';
import { createServerSupabaseClient } from '@/lib/client';
import LikeButton from '../LikeButton';
import { Eye } from 'lucide-react';
import Link from 'next/link';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	const { data, error } = await client.from('elements').select('*').eq('id', id).single()
	if (error) {
		console.log(error);

		throw error
	}
	const element = data[0]
	console.log(element);

	if (error) return <div className='section'>Error</div>

	if (!element) return <div className='section'>No data</div>

	// add +1 to "views" column, dont await for it
	await client.from('elements').update({ views: element.views + 1 }).eq('id', id)

	return (
		<div className='section py-2 minHeightScreen flex flex-col'>
			<ComEditor html={element.html} css={element.css} useTailwind={element.use_tailwind} />

			<section className='flex justify-between gap-3 h-full py-3'>
				<div className='flex gap-1 items-center'>
					<Eye size={17} className='text-zinc-900/80 dark:text-white/80' />
					<span className='text-sm text-zinc-900/80 dark:text-white/80'>
						{element.views}
					</span>
				</div>

				<div>
					<LikeButton initialLikeCount={element.likes} idLiked={element.likedByUser} elementId={element.id} />
				</div>

				<section>
					<h2 className='text-2xl font-medium hidden'>Tags</h2>
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

				<Link href={`/u/${element.username}`} className='flex gap-2 items-center'>
					<Avatar className='size-7' >
						<AvatarImage src={element.user_avatar} alt={`${element.username} avatar`} />
						<AvatarFallback>{element.username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<p className='font-medium'>{element.username}</p>
				</Link>
			</section>
		</div>
	)
}