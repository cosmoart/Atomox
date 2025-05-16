'use client';

import { useTransition, useState } from 'react';
import { toggleLike } from '@/lib/actions';

export default function LikeButton ({ elementId, isLiked, initialLikeCount }) {
	const [liked, setLiked] = useState(isLiked);
	const [likeCount, setLikeCount] = useState(initialLikeCount);
	const [pending, startTransition] = useTransition();

	const handleClick = () => {
		startTransition(async () => {
			const result = await toggleLike(elementId);
			console.log(result);

			setLiked(result.liked);
			setLikeCount(result.likeCount);
		});
	};

	return (
		<button onClick={handleClick} disabled={pending} className="flex items-center gap-1">
			<span>{liked ? '❤️' : '🤍'}</span>
			<span>{likeCount}</span>
		</button>
	);
}


// import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
// import { Heart } from 'lucide-react';
// import { dark } from '@clerk/themes';
// import { useTheme } from 'next-themes';

// export default function Likes ({ likes, liked }) {
// 	const { theme } = useTheme()

// 	async function handleLike () {
// 		const { liked } = await toggleLike(elementId, userId)
// 		// setLiked(liked)
// 		console.log(liked);

// 	}

// 	return (
// 		<>
// 			<SignedIn>
// 				<button className='flex cursor-pointer active:scale-95 gap-1 items-center group hover:scale-105 transition-all'>
// 					<Heart size={17} className='text-red-500 inline group-hover:scale-110 transition-all' />
// 					<span className='text-sm text-zinc-900/80 dark:text-white/80'>
// 						{likes}
// 					</span>
// 				</button>
// 			</SignedIn>
// 			<SignedOut>
// 				<SignUpButton mode='modal'
// 					theme={theme === 'dark' ? dark : undefined}
// 					className='flex cursor-pointer active:scale-95 gap-1 items-center group hover:scale-105 transition-all'>
// 					<div>
// 						<Heart size={17} className='text-red-500 inline group-hover:scale-110 transition-all' />
// 						<span className='text-sm text-zinc-900/80 dark:text-white/80'>
// 							{likes}
// 						</span>
// 					</div>
// 				</SignUpButton>
// 			</SignedOut>
// 		</>
// 	)
// }