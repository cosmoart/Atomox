import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';
import { createServerSupabaseClient } from '@/lib/client';
import LikeButton from '../LikeButton';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import { getElement } from '@/lib/actions';
import TimeAgoTooltip from '../TimeAgoTooltip';
import { currentUser } from '@clerk/nextjs/server';
import ElementDelete from '../ElementDelete';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	const element = await getElement(id, elementId)

	if (!element) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<h1 className='text-2xl font-semibold'>Element not found</h1>
		<p>The element you are looking for does not exist.</p>
		<p className='-mt-1'>But you can create one</p>
		<Link href='/create' className='px-7 mt-5 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
	</div>

	if (element.error) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<h1 className='text-2xl font-semibold'>Error fetching element</h1>
		<p>An error has occurred while fetching the element.</p>
		<p className='-mt-1'>Please try again later</p>
		<Link href='/create' className='px-7 mt-5 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
	</div>

	const { data, error } = await client.from('elements').update({ views: element.views + 1 }).eq('id', id)
	const user = await currentUser()

	return (
		<div className='section py-2 px-1! minHeightScreen flex flex-col'>
			<ComEditor htmlD={element.html} cssD={element.css} jsD={element.js} useTailwind={element.use_tailwind} />

			<article className='grid md:grid-cols-2 items-center gap-3 h-full py-3 px-4'>
				<div className='flex justify-between items-center'>
					<section className='flex gap-5 md:gap-8'>
						<div className='flex gap-1 items-center'>
							<Eye size={19} />
							<span className='text-[15px]'>
								{element.views + 1} Views
							</span>
						</div>

						<div className='flex gap-1 items-center'>
							<LikeButton initialLikeCount={element.likes} isLiked={element.likedByUser} elementId={element.id} />
							<span className='text-[15px]'>Like{element.likes !== 1 && 's'}</span>
						</div>
					</section>

					<TimeAgoTooltip dateString={element.created_at} />

					<section>
						<h2 className='text-2xl font-medium hidden'>Tags</h2>
						<ul className='flex gap-2'>
							{
								element.tags?.split(',').map(tag => (
									<li key={tag} className='flex gap-2 items-center rounded-md px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-[15px]'>
										<span className='text-sm'>{tag}</span>
									</li>
								))
							}
						</ul>
					</section>
				</div>
				<div className='flex justify-between items-center'>
					{
						element.credits_link && <section className='w-full'>
							<h2 className='text-2xl font-medium hidden'>Credits</h2>
							<p className='text-[15px]'>
								This element is base/inspired by <a href={element.credits_link} target='_blank' rel='noopener noreferrer' className='underline'>{element.credits_name}</a>
							</p>
						</section>
					}

					<div className='flex items-center gap-3 justify-end w-full'>
						<Link href={`/u/${element.username}`} className='flex gap-2 items-center'>
							<Avatar className='size-7' >
								<AvatarImage src={element.user_avatar} alt={`${element.username} avatar`} />
								<AvatarFallback>{element.username.slice(0, 2)}</AvatarFallback>
							</Avatar>

							<p className='font-medium'>{element.username}</p>
						</Link>

						{
							element.user_id === user?.id && <ElementDelete id={element.id} />
						}
					</div>
				</div>
			</article>
		</div>
	)
}