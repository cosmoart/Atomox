import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@/lib/clerkClient';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import UserLikes from './UserLikes';
import UserElements from './UserElements';
import Tabs from '@/components/Tabs';

export default async function UserProfile ({ params }) {
	const { username } = await params;
	const nowUser = await currentUser()

	const { data, error } = await clerkClient.users.getUserList({
		limit: 1,
		username: username
	})
	const user = data[0]

	if (error) return <div>Error</div>

	if (!user) return <div>User not found</div>

	return (
		<div className='section minHeightScreen pt-6 relative'>
			<div className='absolute h-1/2 dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

			<article className='mb-4'>
				<section className='flex gap-4 items-center '>
					<div className='relative'>
						{nowUser?.id === user.id &&
							<Link href='/user-profile' className='text-4xl font-medium absolute top-0 left-0 bg-white p-1 rounded-full z-10 border-4 border-white dark:border-zinc-900 hover:scale-110 transition-all active:scale-95 group'>
								<Settings size={22} strokeWidth={1.6} className='text-zinc-900 dark:text-white dark:invert group-hover:scale-105 transition-all' />
							</Link>
						}
						<Avatar className='size-34' >
							<AvatarImage src={user.imageUrl} />
							<AvatarFallback>{user.firstName.slice(0, 2)}</AvatarFallback>
						</Avatar>
					</div>

					<div>
						<span className='flex items-center gap-2'>
							<h1 className='text-4xl font-medium'>{user.firstName} {user.lastName}</h1>
							{/* TODO: user's verified role */}
							{(user.username === 'midudev' || user.username === 'cosmoart') && <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'><path fill='currentColor' d='M10.95 12.7L9.5 11.275Q9.225 11 8.813 11t-.713.3q-.275.275-.275.7t.275.7l2.15 2.15q.3.3.7.3t.7-.3l4.25-4.25q.3-.3.287-.7t-.287-.7q-.3-.3-.712-.312t-.713.287zm-2.8 9.05L6.7 19.3l-2.75-.6q-.375-.075-.6-.387t-.175-.688L3.45 14.8l-1.875-2.15q-.25-.275-.25-.65t.25-.65L3.45 9.2l-.275-2.825q-.05-.375.175-.688t.6-.387l2.75-.6l1.45-2.45q.2-.325.55-.438t.7.038l2.6 1.1l2.6-1.1q.35-.15.7-.038t.55.438L17.3 4.7l2.75.6q.375.075.6.388t.175.687L20.55 9.2l1.875 2.15q.25.275.25.65t-.25.65L20.55 14.8l.275 2.825q.05.375-.175.688t-.6.387l-2.75.6l-1.45 2.45q-.2.325-.55.438t-.7-.038l-2.6-1.1l-2.6 1.1q-.35.15-.7.038t-.55-.438' /></svg>
							}
						</span>
						<h2 className='rounded-full shadow text-sm bg-white dark:bg-zinc-800 px-4 py-1 mt-1 w-fit font-medium'>@{user.username}</h2>
					</div>
				</section>
			</article>

			<Tabs
				tabs={[
					{
						label: nowUser?.id === user.id ? 'Your Components' : 'Components',
						value: 'elements',
						content: (
							<UserElements username={user.username} isAuthor={nowUser?.id === user.id} />
						)
					},
					{
						label: 'Your Likes',
						value: 'likes',
						content: nowUser?.id === user.id ? <UserLikes /> : null
					}
				]}
			/>
		</div>
	)
}