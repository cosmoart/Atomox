import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import CodeEditor from '@/components/CodeEditor';
import { createServerSupabaseClient } from '@/lib/client';
import LikeButton from '../LikeButton';
import { Eye, Info, OctagonAlert } from 'lucide-react';
import Link from 'next/link';
import { getElement } from '@/lib/actions';
import TimeAgoTooltip from '../TimeAgoTooltip';
import { currentUser } from '@clerk/nextjs/server';
import ElementDelete from '../ElementDelete';
import Image from 'next/image';
import componentsIcon from '@/assets/icons/components.svg'
import { Atoms } from '@/lib/conts';
import Comments from '../Comments';
import Ad from '../Ad';

export default async function Element ({ id, elementId }) {
	const client = createServerSupabaseClient()
	const element = await getElement(id, elementId)
	const elementType = Atoms.find(element => element.id === elementId) ? 'atoms' : 'molecules'

	if (!element) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<div className='absolute h-[58svh] dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

		<Image src={componentsIcon} alt='empty' width={100} height={100} className='dark:invert' />
		<h1 className='text-2xl font-semibold'>Component not found</h1>
		<p>The component you are looking for does not exist.</p>
		<p className='-mt-1'>But you can create one.</p>
		<Link href='/create' className='btn-primary block px-8 mt-4 py-1.5 shining'>Create one</Link>
		{/* <Link href='/create' className='px-7 mt-5 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link> */}
	</div>

	if (element.error) return <div className='section flex flex-col items-center justify-center minHeightScreen'>
		<div className='absolute h-[44svh] dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

		<OctagonAlert size={50} />
		<h1 className='text-2xl font-semibold mt-2'>Error fetching component</h1>
		<p>An error has occurred while fetching the component.</p>
		<p className='-mt-1'>Please try again later.</p>

	</div>

	const _ = await client.from('elements').update({ views: element.views + 1 }).eq('id', id)
	const user = await currentUser()

	return (
		<div>
			<div className={`${elementType === 'atoms' ? 'section flex flex-col minHeightScreen' : 'px-1! py-0! '}`}>
				<CodeEditor htmlD={element.html} cssD={element.css} jsD={element.js} useTailwind={element.use_tailwind} className={`${elementType === 'atoms' ? 'h-full' : 'minHeightScreen 2xl:min-h-auto!'}`} elementType={elementType} />

				<article className={`section w-full flex flex-col sm:flex-row justify-between items-center gap-3 h-full py-2 pl-3 sm:pl-5 pr-2 2xl:pr-4  bg-zinc-50 rounded-2xl dark:bg-zinc-900 mt-2.5 sm:rounded-full ${elementType === 'atoms' ? '' : 'mx-4 2xl:mx-auto '}`}>
					<section className='flex items-center'>
						<div className='flex gap-1 items-center'>
							<Eye size={19} />
							<span className='text-[15px]'>
								{element.views + 1} Views
							</span>
						</div>

						<div className='h-5 w-[1px] mx-3.5 bg-zinc-600 rounded-lg'></div>

						<div className='flex gap-1 items-center'>
							<LikeButton initialLikeCount={element.likes} isLiked={element.likedByUser} elementId={element.id} />
							<span className='text-[15px]'>Like{element.likes !== 1 && 's'}</span>
						</div>

						<div className='h-5 w-[1px] mx-3.5 bg-zinc-600 rounded-lg'></div>

						<TimeAgoTooltip dateString={element.created_at} />
					</section>

					{
						element.credits_link && <section className='rounded-full mr-auto sm:ml-6 bg-gradient-to-r from-indigo-500 to-blue-500 pr-4 p-1.5 text-[15px] tracking-wide font-medium text-white'>
							<h2 className='text-2xl font-medium hidden'>Credits</h2>
							<p className='text-[15px] flex gap-2 items-center'>
								<Info />
								<span>
									This component is inspired by the work of <a href={element.credits_link} target='_blank' rel='noopener noreferrer' className='underline'>{element.credits_name}</a>
								</span>
							</p>
						</section>
					}

					<div className='flex justify-between items-center'>

						<div className='flex items-center gap-2 justify-end w-full'>
							<Link href={`/u/${element.username}`} className='flex gap-2 items-center hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors rounded-full pr-3.5 group'>
								<Avatar className='size-8.5 group-hover:scale-110 transition-transform' >
									<AvatarImage src={element.user_avatar} alt={`${element.username} avatar`} />
									<AvatarFallback>{element.username.slice(0, 2)}</AvatarFallback>
								</Avatar>

								<p className='font-medium text-[17px]'>{element.username}</p>
							</Link>

							{
								element.user_id === user?.id && <ElementDelete id={element.id} />
							}
						</div>
					</div>
					{/* <section className='px-4'>
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
</section> */}
				</article>
			</div>

			{/* <div className='grid md:grid-cols-[2fr_1fr] gap-10 mt-3 section'> */}
			<div className='flex flex-col-reverse gap-10 md:flex-row mt-3 section'>
				<Comments id={element.id} />
				<Ad className='aspect-video' />
			</div>
		</div>
	)
}