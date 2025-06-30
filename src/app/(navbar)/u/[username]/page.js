import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@/lib/clerkClient';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { CircleUserRound, Settings, XCircle } from 'lucide-react';
import UserLikes from './UserLikes';
import UserElements from './UserElements';
import Tabs from '@/components/Tabs';
import VerifiedIcon from './VerifiedIcon';


export async function generateMetadata ({ params }) {
	const { username } = params;

	const users = await clerkClient.users.getUserList({
		limit: 1,
		username: username
	});
	const user = users.data[0];

	const title = user
		? `${user?.firstName ?? user.username} ${user?.lastName ?? ''} | Atomox`
		: 'User not found | Atomox';

	return {
		title,
		description: `Atomox profile of ${user?.firstName ?? user.username} ${user?.lastName ?? ''}`,
	};
}

export default async function UserProfile ({ params }) {
	const { username } = await params;
	const nowUser = await currentUser()

	const { data, error } = await clerkClient.users.getUserList({
		limit: 1,
		username: username
	})
	const user = data[0]

	if (error) return <div className='section minHeightScreen pt-6 relative flex-col gap-2 flex items-center justify-center'>
		<div className='absolute h-1/2 dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

		<XCircle size={70} />
		<h1 className='text-xl lg:text-2xl font-medium'>Error getting user</h1>
		<p>There was an error getting the user. Please try again later.</p>
	</div>

	if (!user) return <div className='section minHeightScreen pt-6 relative flex-col gap-2 flex items-center justify-center'>
		<div className='absolute h-1/2 dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

		<CircleUserRound size={80} />
		<h1 className='text-xl lg:text-2xl font-medium'>User not found</h1>
		<p >The user you are looking for does not exist.</p>
	</div>

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
						<Avatar className=' size-28 md:size-34' >
							<AvatarImage src={user.imageUrl} />
							<AvatarFallback className='text-4xl font-semibold'>{user.username.slice(0, 2).toUpperCase()}</AvatarFallback>
						</Avatar>
					</div>

					<div>
						<span className='flex items-center gap-2'>
							<h1 className='text-4xl font-medium'>{user.firstName} {user.lastName}</h1>
							<VerifiedIcon username={user.username} />
						</span>
						<h2 className='rounded-full shadow text-sm cursor-default hover:scale-[1.02] transition-transform bg-white dark:bg-zinc-800 px-4 py-1 mt-1 w-fit font-medium'>@{user.username}</h2>
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