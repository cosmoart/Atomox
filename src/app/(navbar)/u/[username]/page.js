// "use client"
import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@/lib/clerkClient';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import UserLikes from './UserLikes';
import UserElements from './UserElements';

export default async function UserProfile ({ params }) {
	const { username } = await params;
	// const userId = 'user_123'
	const nowUser = await currentUser()

	// const response = await clerkClient.users.getUser(userid)
	const { data } = await clerkClient.users.getUserList({
		limit: 1,
		username: username
	})
	const user = data[0]
	console.log(user);

	if (!user) return <div>User not found</div>

	return (
		<div className='section minHeightScreen flex flex-col md:flex-row mt-6'>
			<article className='md:w-1/2 md:sticky top-0'>
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
						<h1 className='text-4xl font-medium'>{user.firstName} {user.lastName}</h1>
						{user.username && <h2 className='rounded-full text-sm dark:bg-zinc-800 px-4 py-1 mt-1 w-fit font-medium'>@{user.username}</h2>}

						{/* <p className='max-w-[80ch] text-pretty my-2 text-[15px] opacity-85'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maiores nemo illum architecto repudiandae doloremque</p> */}
					</div>
				</section>
			</article>

			<article className='w-full'>
				<UserElements username={user.username} isAuthor={nowUser?.id === user.id} />
				{nowUser?.id === user.id && <UserLikes />}
			</article>
		</div>
	)
}