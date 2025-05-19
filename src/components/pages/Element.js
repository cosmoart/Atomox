import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';
import { createServerSupabaseClient } from '@/lib/client';
import LikeButton from '../LikeButton';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { getElement } from '@/lib/actions';
import TimeAgoTooltip from '../TimeAgoTooltip';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	const element = await getElement(id, elementId)
	console.log(element);

	// if (error) return <div className='section'>Error</div>

	if (!element) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<h1>Element not found</h1>
		<p>The element you are looking for does not exist. But you can create one</p>
		<Link href='/create' className='px-7 mt-5 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
	</div>

	if (element.error) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<h1>Error fetching element</h1>
		<p>An error has occurred while fetching the element. Try again later</p>
		<Link href='/create' className='px-7 mt-5 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
	</div>

	const { data, error } = await client.from('elements').update({ views: element.views + 1 }).eq('id', id)

	return (
		<div className='section py-2 minHeightScreen flex flex-col'>
			<ComEditor htmlD={element.html} cssD={element.css} jsD={element.js} useTailwind={element.use_tailwind} />

			<section className='flex justify-between items-center gap-3 h-full py-3'>
				<div className='flex gap-1 items-center'>
					<Eye size={19} />
					<span className='text-sm'>
						{element.views + 1} Views
					</span>
				</div>

				<div className='flex gap-1 items-center'>
					<LikeButton initialLikeCount={element.likes} isLiked={element.likedByUser} elementId={element.id} />
					Likes
				</div>

				<TimeAgoTooltip dateString={element.created_at} />

				<section>
					<h2 className='text-2xl font-medium hidden'>Tags</h2>
					<ul className='flex gap-2'>
						{
							element.tags?.split(',').map(tag => (
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