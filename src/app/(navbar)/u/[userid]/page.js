import { currentUser } from '@clerk/nextjs/server'
import { clerkClient } from '@/lib/clerkClient';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import Link from 'next/link';
import { Settings } from 'lucide-react';

export default async function UserProfile ({ params }) {
	const { userid } = await params;
	// const userId = 'user_123'
	const user = await currentUser()
	console.log(user);

	const response = await clerkClient.users.getUser(userid)
	console.log(response);

	return (
		<div className='section'>
			{response.id === user.id &&
				<Link href="/user-profile" className='text-4xl font-medium'>
					<Settings size={25} className='text-zinc-900 dark:text-white' />
				</Link>
			}
			<Avatar className="size-34" >
				<AvatarImage src={response.imageUrl} />
				<AvatarFallback>{response.firstName.slice(0, 2)}</AvatarFallback>
			</Avatar>
			<h1 className='text-4xl font-medium'>{response.firstName} {response.lastName}</h1>
			{response.username && <h2 className='rounded-full text-sm dark:bg-zinc-800 px-4 py-1 mt-1 w-fit font-medium'>@{response.username}</h2>}
			{userid}
		</div>
	)
}