'use client';

import { useTransition, useState } from 'react';
import { toggleLike } from '@/lib/actions';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LikeButton ({ elementId, isLiked, initialLikeCount, withText = false }) {
	const [liked, setLiked] = useState(isLiked);
	const { resolvedTheme } = useTheme()
	const [likeCount, setLikeCount] = useState(initialLikeCount);
	const [pending, startTransition] = useTransition();

	const handleLike = () => {
		const previousLiked = liked;
		const previousCount = likeCount;

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
					disabled={pending}
					onClick={handleLike}
					// onClick={() => setLiked(!liked)}
					className={`relative flex items-center gap-0.5 justify-center group not-disabled:cursor-pointer`}
				>
					<span className='relative size-[22px] transition-all group-not-disabled:group-hover:scale-110  group-not-disabled:group-active:scale-90'>
						{/* <Heart
							className={`absolute size-[22px] top-0 left-0 transition-all duration-300 text-gray-400 ${liked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}
						/> */}
						<svg className={`absolute size-[22px] top-0 left-0 transition-all duration-300 dark:text-gray-400 text-zinc-500 ${liked ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 3.818a6.228 6.228 0 0 1 8.51 9.087l-5.224 5.225h-.001L12 21.415l-7.28-7.279l-1.23-1.232A6.228 6.228 0 0 1 12 3.818m3.285 11.485l3.811-3.812a4.228 4.228 0 1 0-5.98-5.98L12 6.627L10.883 5.51a4.228 4.228 0 1 0-5.98 5.98l1.232 1.232L12 18.587l3.285-3.285" /></svg>

						<AnimatePresence>
							{liked && (
								<motion.div
									key="filled"
									initial={{ scale: 0.5, opacity: 0 }}
									animate={{ scale: 1.2, opacity: 1 }}
									exit={{ scale: 0.5, opacity: 0 }}
									transition={{ type: 'spring', stiffness: 300, damping: 10 }}
									className="size-[22px] absolute left-0 top-0"
								>
									<svg
										viewBox="0 0 24 24"
										fill="url(#gradient)"
										xmlns="http://www.w3.org/2000/svg"
										className="w-full h-full scale-x-105"
									>
										<defs>
											<linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
												<stop offset="0%" stopColor="#6366f1" /> {/* indigo-500 */}
												<stop offset="50%" stopColor="#3b82f6" /> {/* blue-500 */}
												<stop offset="100%" stopColor="#a855f7" /> {/* purple-500 */}
											</linearGradient>
										</defs>
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2
							6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.44C11.09
							5.01 12.76 4 14.5 4 17 4 19 6 19
							8.5c0 3.78-3.4 6.86-8.55
							11.54L12 21.35z" />
									</svg>
								</motion.div>
							)}
						</AnimatePresence>
					</span>

					<span>
						<span className='w-[1ch] inline-block'>{likeCount}</span>
						{withText && <span>Like{likeCount !== 1 && 's'}</span>}
					</span>
				</button>
				{/* <button
					onClick={handleClick}
					className={`
            relative rounded-full transition-all duration-300 ease-out cursor-pointer
            ${pending ? 'animate-pulse' : ''}
            transform hover:scale-105 active:scale-95
          `}
				>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						className={`
              transition-all duration-500 ease-out
              ${pending ? 'animate-bounce' : ''}
              ${isLiked ? 'scale-110' : 'scale-100'}
            `}
					>
						<defs>
							<linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#4f46e5" />
								<stop offset="50%" stopColor="#3b82f6" />
								<stop offset="100%" stopColor="#8b5cf6" />
							</linearGradient>
						</defs>

						<path
							d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
							fill={isLiked ? 'url(#heartGradient)' : 'none'}
							stroke={isLiked ? 'url(#heartGradient)' : '#6b7280'}
							strokeWidth="2"
							className={`
                transition-all duration-500 ease-out
                ${isLiked ? 'drop-shadow-sm' : ''}
              `}
						/>

						{isLiked && (
							<>
								<circle
									cx="8"
									cy="8"
									r="1"
									fill="#f59e0b"
									className={`${pending ? 'animate-ping' : ''}`}
								/>
								<circle
									cx="16"
									cy="10"
									r="0.8"
									fill="#ef4444"
									className={`${pending ? 'animate-ping' : ''}`}
									style={{ animationDelay: '0.2s' }}
								/>
								<circle
									cx="6"
									cy="14"
									r="0.6"
									fill="#8b5cf6"
									className={`${pending ? 'animate-ping' : ''}`}
									style={{ animationDelay: '0.4s' }}
								/>
							</>
						)}
					</svg>
				</button> */}
				{/* <button
					disabled={pending} onClick={handleClick}
					className="flex gap-1 items-center disabled:opacity-90 not-disabled:cursor-pointer group"
				>
					<Heart liked={liked} />
					<span>
						<span className='w-[1ch] inline-block'>{likeCount}</span>
						{withText && <span>Like{likeCount !== 1 && 's'}</span>}
					</span>
				</button> */}
			</SignedIn>
			<SignedOut>
				<SignUpButton mode='modal'
					appearance={{
						baseTheme: resolvedTheme === 'dark' ? dark : undefined,
						layout: {
							unsafe_disableDevelopmentModeWarnings: true,
						},
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

// function Heart ({ liked }) {
// 	return <div className="heart-container group-not-disabled:hover:scale-105 group-not-disabled:active:scale-95 transition-all" title="Like">
// 		<div className={`svg-container ${liked ? 'heart-active' : ''}`}>
// 			<svg viewBox="0 0 24 24" className="svg-outline" xmlns="http://www.w3.org/2000/svg">
// 				<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
// 				</path>
// 			</svg>
// 			<svg viewBox="0 0 24 24" className="svg-filled" xmlns="http://www.w3.org/2000/svg">
// 				<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
// 				</path>
// 			</svg>
// 			<svg className="svg-celebrate" width="100" height="100" xmlns="http://www.w3.org/2000/svg">
// 				<polygon points="10,10 20,20"></polygon>
// 				<polygon points="10,50 20,50"></polygon>
// 				<polygon points="20,80 30,70"></polygon>
// 				<polygon points="90,10 80,20"></polygon>
// 				<polygon points="90,50 80,50"></polygon>
// 				<polygon points="80,80 70,70"></polygon>
// 			</svg>
// 		</div>
// 	</div>
// }