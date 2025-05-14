// "use client"
import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@/lib/clerkClient';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { Settings } from 'lucide-react';

export default async function UserProfile ({ params }) {
	const { userid } = await params;
	// const userId = 'user_123'
	const user = await currentUser()
	console.log(user);

	// const response = await clerkClient.users.getUser(userid)
	const { data } = await clerkClient.users.getUserList({
		limit: 1,
		username: userid
	})
	const response = data[0]
	console.log(response);

	if (!response) return <div>User not found</div>

	return (
		<div className='section heightScreen'>
			<article className='flex gap-4 flex-col md:flex-row items-center mt-3'>
				<div className='relative'>
					{response.id === user.id &&
						<Link href='/user-profile' className='text-4xl font-medium absolute top-0 left-0 bg-white p-1 rounded-full z-10 border-4 border-white dark:border-zinc-900 hover:scale-110 transition-all active:scale-95 group'>
							<Settings size={20} className='text-zinc-900 dark:text-white dark:invert group-hover:scale-105 transition-all' />
						</Link>
					}
					<Avatar className='size-34' >
						<AvatarImage src={response.imageUrl} />
						<AvatarFallback>{response.firstName.slice(0, 2)}</AvatarFallback>
					</Avatar>
				</div>

				<section>
					<h1 className='text-4xl font-medium'>{response.firstName} {response.lastName}</h1>
					{response.username && <h2 className='rounded-full text-sm dark:bg-zinc-800 px-4 py-1 mt-1 w-fit font-medium'>@{response.username}</h2>}

					<p className='max-w-[80ch] text-pretty my-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae maiores nemo illum architecto repudiandae doloremque, soluta neque maxime amet laborum, laudantium expedita magnam animi! Dolor voluptates ad beatae. Temporibus, cupiditate?</p>
				</section>
			</article>

		</div>
	)
}