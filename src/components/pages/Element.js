import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';
import { createServerSupabaseClient } from '@/lib/client';
import LikeButton from '../LikeButton';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { getElement } from '@/lib/actions';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	// const { data: element, error } = await client.from('elements').select('*').eq('id', id).single()
	// if (error) {
	// 	console.log(error);

	// 	throw error
	// }
	// console.log(element, id);
	const element = await getElement(id);

	// if (error) return <div className='section'>Error</div>

	if (!element) return <div className='section'>No data</div>

	client.from('elements').update({ views: element.views + 1 }).eq('id', id)
	console.log(element);

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
					<LikeButton initialLikeCount={element.likes} isLiked={element.likedByUser} elementId={element.id} />
				</div>

				<section>
					<h2 className='text-2xl font-medium hidden'>Tags</h2>
					<ul className='flex gap-2'>
						{
							element.tags.map(tag => (
								<li key={tag} className='flex gap-2 items-center rounded px-2 py-1 bg-zinc-100 dark:bg-zinc-800'>
									<span className='text-sm'>{tag}</span>
								</li>
							))
						}
					</ul>
				</section>

				{
					element.credits_link && <section>
						<h2>Credits</h2>
						This element is base/inspired by <a href={element.credits_link} target='_blank' rel='noopener noreferrer'>{element.credits_name}</a>
					</section>
				}

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