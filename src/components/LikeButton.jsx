'use client';

import { useTransition, useState } from 'react';
import { toggleLike } from '@/lib/actions';

export default function LikeButton ({ elementId, isLiked, initialLikeCount }) {
	const [liked, setLiked] = useState(isLiked);
	const [likeCount, setLikeCount] = useState(initialLikeCount);
	const [pending, startTransition] = useTransition();

	const handleClick = () => {
		const previousLiked = liked;
		const previousCount = likeCount;

		// Hacer el cambio optimista
		const newLiked = !liked;
		setLiked(newLiked);
		setLikeCount(likeCount + (newLiked ? 1 : -1));

		startTransition(async () => {
			try {
				await toggleLike(elementId);
			} catch (err) {
				setLiked(previousLiked);
				setLikeCount(previousCount);
			}
		});
	};

	return (
		<button
			onClick={handleClick}
			disabled={pending}
			className="flex cursor-pointer items-center gap-1 disabled:opacity-50 not-disabled:hover:scale-105 not-disabled:active:scale-95 transition-all disabled:bg-red-400"
		>
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