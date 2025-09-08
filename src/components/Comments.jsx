"use client"
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SignedIn, SignedOut, SignUpButton, useUser } from '@clerk/nextjs';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';
import { EllipsisVertical, Heart, OctagonAlert, SendHorizontal, Trash } from 'lucide-react';
import { createComment, deleteComment, getComments, likeComment } from '@/lib/actions';
import { getTimeAgo } from '@/lib/getTimeAgo';
import Link from 'next/link';
import { MagicMotion } from 'react-magic-motion';
import { toast } from "sonner"

export default function Comments ({ id }) {
	const [comments, setComments] = useState("loading")
	const [replyTo, setReplyTo] = useState(null)
	const { user } = useUser()

	useEffect(() => {
		getAllComments()
	}, []);

	async function getAllComments () {
		setComments("loading")
		try {
			const res = await getComments(id)
			console.log(res);

			if (res?.error) throw new Error('Error while fetching comments')
			setComments(res)
		} catch (error) {
			setComments("error")
		}
	}

	async function sendComment (e, replyTo) {
		e.preventDefault()
		if (typeof comments !== "object" || !user) return

		const formData = new FormData(e.target)
		const comment = formData.get('comment').trim()
		if (!comment) return

		const tempId = Date.now()
		setComments((prev) => [...prev, {
			id: tempId,
			user: user.firstName + (user.lastName ? ' ' + user.lastName : ''),
			content: comment,
			avatar: user.imageUrl,
			username: user.username,
			element_id: id,
			parent_id: replyTo,
			created_at: new Date(),
			creating: true
		}])

		try {
			const res = await createComment({ comment, element_id: id, parent_id: replyTo })
			if (res?.error) throw new Error('Error creating comment')
			setComments((comments) =>
				comments.map((c) => c.id === tempId ? { ...c, creating: false } : c)
			)
		} catch (error) {
			toast.error('Error creating comment')
			setComments((prev) => prev.filter((c) => c.id !== tempId))
		} finally {
			e.target.reset()
		}
	}

	async function deleteIdComment (id) {
		const oldComments = comments
		setComments((comments) => [...comments.filter(comment => comment.id !== id)])
		try {
			const res = await deleteComment(id)
			if (res?.error) throw new Error('Error deleting comment')
		} catch (error) {
			setComments(oldComments)
			toast.error('Error deleting comment')
		}
	}

	async function likeIdComment (id) {
		try {
			const res = await likeComment(id)
			if (res?.error) throw new Error('Error liking comment')
			setComments((comments) => comments.map((comment) => {
				if (comment.id === id) {
					const { likedByUser, ...rest } = comment
					return rest
				}
				return comment
			}))
		} catch (error) {
			toast.error('Error liking comment')
		}
	}

	// if (true) return <article className='w-full max-w-[70ch]'>
	if (comments === 'loading') return <article className='w-full max-w-[70ch] md:w-2/3'>
		<h2 className='text-2xl font-medium'>Comments</h2>

		<ul className='mt-4 flex flex-col gap-5' aria-label='Loading comments...'>
			<li className='h-full w-full col-span-full flex  flex-col' >
				<div className='flex gap-3 items-center'>
					<div className='size-9 dark:bg-zinc-800 bg-zinc-200/50 rounded-full animate-pulse'></div>
					<div className='w-18 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
					<div className='w-22 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>

				</div>

				<div className='h-16 ml-12 rounded-lg mb-2 dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
				<div className='w-14 ml-12 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
			</li>

			<li className='h-full w-full col-span-full flex flex-col' >
				<div className='flex gap-3 items-center'>
					<div className='size-9 dark:bg-zinc-800 bg-zinc-200/50 rounded-full animate-pulse'></div>
					<div className='w-24 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
					<div className='w-22 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
				</div>

				<div className='h-10 ml-12 w-1/2 mb-2 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
				<div className='w-14 ml-12 h-4 rounded-lg dark:bg-zinc-800 bg-zinc-200/50 animate-pulse'></div>
			</li>
		</ul>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	if (comments === 'error' || !comments) return <article className='w-full max-w-[70ch] md:w-2/3'>
		<h2 className='text-2xl font-medium'>Comments</h2>

		<div className='mt-4 flex flex-col items-center gap-2 py-12'>
			<OctagonAlert size={50} />
			<p className='text-center text-lg'>Error loading comments.</p>
			<button onClick={getAllComments} className='btn-primary py-1 px-7 w-fit shining cursor-pointer'>Try again</button>
		</div>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	if (comments.length < 1) return <article className='w-full max-w-[70ch] md:w-2/3'>
		<h2 className='text-2xl font-medium'>Comments</h2>
		<div className='mt-4 flex flex-col gap-6 py-14'>
			<svg xmlns="http://www.w3.org/2000/svg" className='size-16 mx-auto' width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M7.5 12h6m-6-4h3m-2 12c1.05.87 2.315 1.424 3.764 1.519c1.141.075 2.333.075 3.473 0a4 4 0 0 0 1.188-.268c.41-.167.614-.25.719-.237c.104.012.255.122.557.342c.533.388 1.204.666 2.2.643c.503-.012.755-.019.867-.208c.113-.19-.027-.452-.308-.977c-.39-.728-.636-1.561-.262-2.229c.643-.954 1.19-2.083 1.27-3.303c.043-.655.043-1.334 0-1.99A6.7 6.7 0 0 0 21.4 11" /><path d="M12.345 17.487c3.556-.234 6.388-3.08 6.62-6.653c.046-.699.046-1.423 0-2.122c-.232-3.572-3.064-6.418-6.62-6.652c-1.213-.08-2.48-.08-3.69 0c-3.556.234-6.388 3.08-6.62 6.652c-.046.7-.046 1.423 0 2.122c.084 1.302.665 2.506 1.349 3.524c.397.712.135 1.6-.279 2.377c-.298.56-.447.84-.327 1.042s.387.209.922.221c1.057.026 1.77-.271 2.336-.685c.321-.234.482-.351.593-.365c.11-.013.328.075.763.253c.392.16.846.258 1.263.286c1.21.08 2.477.08 3.69 0" /></g></svg>
			<p className='text-center'>No comments <span className='italic font-medium'>yet</span>. Be the first to comment!</p>
		</div>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	const mainComments = [...comments.filter(c => !c.parent_id),
	...comments.filter(c => !comments.some(c2 => c2.id === c.parent_id) && c.parent_id)
		.map(c => ({ deleted: true, id: c.parent_id }))
	]
	const replies = comments.filter(c => c.parent_id)

	return <article className='w-[200%] max-w-[70ch] md:w-2/3'>
		<h2 className='text-2xl font-medium relative inline-block'>
			Comments
			<span className='absolute -top-1.5 -right-7 rounded-full grid h-6 aspect-square place-items-center text-white bg-gradient-to-l from-purple-600 to-blue-600 text-[15px] 2xl:text-base 2xl:pt-0.5 outline-2 outline-zinc-100 dark:outline-zinc-700/50 outline-offset-2'>
				{comments.length}
			</span>
		</h2>

		<MagicMotion>
			<div>
				<div className='pt-4 flex flex-col gap-5'>
					{
						mainComments.map(comment => {
							const repliesM = comments.filter(c => c.parent_id === comment.id)

							return <div key={comment.id} className='relative'>
								<div className='relative' key="exclude">
									{repliesM.length > 0 && <div className="absolute left-[19px] -z-10 top-5 w-[2px] bg-zinc-200 dark:bg-zinc-700" style={{ height: `calc(100%)` }} />}

									<CommentCard
										comment={comment}
										username={user?.username}
										deleteComment={deleteIdComment}
										likeComment={likeIdComment}
										onReply={() => replyTo === comment.id ? setReplyTo(null) : setReplyTo(comment.id)}
									/>
								</div>

								<div className='ml-4.5 pl-7 mt-4.5 mb-2 relative'>
									{replies
										.filter(r => r.parent_id === comment.id)
										.map((reply, i) => (
											<div key={reply.id} className={`relative mt-3.5 ${i !== repliesM.length - 1 ? "after:absolute after:w-0.5 after:left-[-27px] after:top-0 after:h-full after:bg-zinc-200 dark:after:bg-zinc-700 after:zinc-200" : ""}`}>
												<div className="absolute left-[-27px] -top-4 h-10 w-8 rounded-bl-xl border-l-2 border-b-2  border-zinc-200 dark:border-zinc-700" />
												<CommentCard
													key="exclude"
													comment={reply}
													username={user?.username}
													deleteComment={deleteIdComment}
													likeComment={likeIdComment}
													isReply
												/>
											</div>
										))}
								</div>

								{replyTo === comment.id
									&& <div>
										<CommentForm key="exclude" disabled={comments === "loading" || comments === "error"} sendComment={sendComment} replyTo={replyTo} />
									</div>
								}
							</div>
						})
					}
				</div>

				<CommentForm key="exclude" disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
			</div>
		</MagicMotion>
	</article>
}

function CommentCard ({ comment, username, deleteComment, onReply, isReply = false, likeComment }) {
	if (comment.deleted) return <div className='py-2.5 px-4 bg-zinc-200/60 backdrop-blur-2xl card-border shadow dark:bg-zinc-900 rounded-full'>
		Comment deleted
	</div>

	return (
		<div className={`flex gap-3 ${comment.creating ? "animate-pulse cursor-progress pointer-events-none" : ""}`}>
			<Link href={`/u/${comment.username}`}>
				<Avatar className='size-10 hover:scale-105 transition-transform' >
					<AvatarImage src={comment.avatar} alt={`${comment.user} avatar`} />
					<AvatarFallback>{comment.username?.slice(0, 2)}</AvatarFallback>
				</Avatar>
			</Link>

			<div className='flex flex-col gap-0.5 w-full'>
				<div className='flex gap-4 items-center'>
					<Link href={`/u/${comment.username}`} className='font-medium'>
						{comment.user}
					</Link>
					<span className='text-sm opacity-80'>{getTimeAgo(new Date(comment.created_at) ?? new Date())}</span>
					{username === comment.username && <DropdownMenu>
						<DropdownMenuTrigger asChild>
							<button variant="ghost" size="icon" className="py-1 ml-auto px-0.5 cursor-pointer active:scale-90 transition-transform">
								<EllipsisVertical className="size-5" />
							</button>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuItem onClick={() => deleteComment(comment.id)} >
								<Trash className="w-4 h-4 mr-2" />
								Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>}
				</div>

				<p className='text-[15px] opacity-95 max-w-[75ch] text-balance whitespace-pre-wrap'>{comment.content}</p>

				<div className='flex gap-4 items-center justify-start mt-1 opacity-90'>
					{/* <button className='flex gap-1 text-sm cursor-pointer active:scale-95 transition-transform items-center' onClick={() => likeComment(comment.id)}>
						<Heart size={18} className={comment.likedByUser ? 'text-red-500' : ''} />
						5 Likes
					</button> */}
					{!isReply && <button className='text-sm cursor-pointer active:scale-95 transition-transform' onClick={onReply}>Reply</button>}
				</div>
			</div>
		</div>
	)
}

function CommentForm ({ disabled, sendComment, replyTo }) {
	const { resolvedTheme } = useTheme()

	return <form className={`flex gap-2 ${replyTo ? "ml-10 mt-3" : "mt-12"}`} onSubmit={e => sendComment(e, replyTo)} >
		<textarea name='comment' className='w-full disabled:opacity-70 disabled:pointer-events-none px-4 py-2 rounded-lg card-border field-sizing-content min-h-18' placeholder='Leave a comment...' disabled={disabled} rows={replyTo ? 2 : 4} />

		<SignedIn>
			<button disabled={disabled} type='submit' className='px-7 cursor-pointer disabled:opacity-70 disabled:pointer-events-none py-0 group rounded-lg shining btn-primary gradient1 h-fit flex gap-1.5 items-center'>
				Send
				<SendHorizontal size={38} />
			</button>
		</SignedIn>
		<SignedOut>
			<SignUpButton mode='modal'
				appearance={{
					baseTheme: resolvedTheme === 'dark' ? dark : undefined,
					elements: {
						logoBox: 'hidden!',
						modalContent: "m-auto!",
						buttonArrowIcon: 'hidden!',
						formButtonPrimary: "btn-primary gradient1 shining text-white! font-medium! shadow-none! text-[15px]!"
					},
					layout: {
						unsafe_disableDevelopmentModeWarnings: true,
					},
				}}
			>
				<button disabled={disabled} type='button' className='px-7 cursor-pointer disabled:opacity-70 disabled:pointer-events-none py-0 rounded-lg shining btn-primary gradient1 h-fit flex gap-1.5 items-center'>
					Send
					<SendHorizontal size={38} />
				</button>
			</SignUpButton>
		</SignedOut>
	</form>
}
