'use client';

import { useTransition, useState } from 'react';
import { toggleLike } from '@/lib/actions';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function LikeButton ({ elementId, isLiked, initialLikeCount, withText = false }) {
	const [liked, setLiked] = useState(isLiked);
	const { resolvedTheme } = useTheme()
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
		<>
			<SignedIn>
				<button
					disabled={pending} onClick={handleClick}
					className="flex gap-1 items-center disabled:opacity-90 not-disabled:cursor-pointer group"
				>
					<Heart liked={liked} />
					<span>
						<span className='w-[1ch] inline-block'>{likeCount}</span>
						{withText && <span>Like{likeCount !== 1 && 's'}</span>}
					</span>
				</button>
			</SignedIn>
			<SignedOut>
				<SignUpButton mode='modal'
					appearance={{
						baseTheme: resolvedTheme === 'dark' ? dark : undefined,
					}}
				>
					<div className="flex gap-1 items-center disabled:opacity-90 not-disabled:cursor-pointer group">
						<Heart liked={liked} />
						<span className='block mt-0.5'>
							<span className='w-[1ch] inline-block'>{likeCount}</span>
							{withText && <span>Like{likeCount !== 1 && 's'}</span>}
						</span>
					</div>
				</SignUpButton>
			</SignedOut>
		</>
	);
}

function Heart ({ liked }) {
	return <div className="heart-container group-not-disabled:hover:scale-105 group-not-disabled:active:scale-95 transition-all" title="Like">
		<div className={`svg-container ${liked ? 'heart-active' : ''}`}>
			<svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
				</path>
			</svg>
			<svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
				</path>
			</svg>
			<svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
				<polygon points="10,10 20,20"></polygon>
				<polygon points="10,50 20,50"></polygon>
				<polygon points="20,80 30,70"></polygon>
				<polygon points="90,10 80,20"></polygon>
				<polygon points="90,50 80,50"></polygon>
				<polygon points="80,80 70,70"></polygon>
			</svg>
		</div>
	</div>
}