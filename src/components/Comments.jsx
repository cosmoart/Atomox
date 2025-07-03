"use client"
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { SignedIn, SignedOut, SignUpButton, useUser } from '@clerk/nextjs';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes';
import { dark } from '@clerk/themes';
import { EllipsisVertical, Heart, SendHorizontal, Trash } from 'lucide-react';
import { createComment, deleteComment, getComments, likeComment } from '@/lib/actions';
import { getTimeAgo } from '@/lib/getTimeAgo';
import Link from 'next/link';
import { MagicMotion } from 'react-magic-motion';

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
			if (res?.error) throw new Error('Error al crear el comentario')
			setComments((comments) =>
				comments.map((c) => c.id === tempId ? { ...c, creating: false } : c)
			)
		} catch (error) {
			console.error(error)
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
			if (res?.error) throw new Error('Error al eliminar el comentario')
		} catch (error) {
			setComments(oldComments)
			console.error(error)
		}
	}

	async function likeIdComment (id) {
		try {
			const res = await likeComment(id)
			if (res?.error) throw new Error('Error al marcar el comentario')
			setComments((comments) => comments.map((comment) => {
				if (comment.id === id) {
					const { likedByUser, ...rest } = comment
					return rest
				}
				return comment
			}))
		} catch (error) {
			console.error(error)
		}
	}

	if (comments === 'loading') return <article className='w-full max-w-[70ch]'>
		<h2 className='text-2xl font-medium'>Comments</h2>

		<div className='mt-4 flex flex-col gap-6'>
			{
				Array(3).fill(null).map((_, i) => (
					<div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4' key={i} >
						<div className='flex gap-2 p-2 justify-between'>
							<div className='flex gap-2 items-center'>
								<div className='size-7 dark:bg-zinc-800 bg-zinc-200/50 rounded-full animate-pulse'></div>
								<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5 w-24'></div>
							</div>

							<div className='flex gap-3 items-center mr-1'>
								<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5 w-8'></div>
								<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5 w-8'></div>
							</div>
						</div>
					</div>
				))
			}
		</div>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	if (comments === 'error' || !comments) return <article className='w-full max-w-[70ch]'>
		<h2 className='text-2xl font-medium'>Comments</h2>

		<div className='mt-4 flex flex-col gap-6'>
			<div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4'>
				<p className='text-center text-muted-foreground'>Error loading comments.</p>
				<button onClick={getAllComments} className='btn-primary py-1 px-7'>Try again</button>
			</div>
		</div>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	if (comments.length < 1) return <article className='w-full max-w-[70ch]'>
		<h2 className='text-2xl font-medium'>Comments</h2>
		<div className='mt-4 flex flex-col gap-6'>
			<div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4'>
				<p className='text-center text-muted-foreground'>No comments found <span className='italic font-medium'>yet</span>. Be the first to comment!</p>
			</div>
		</div>

		<CommentForm disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
	</article>

	const mainComments = comments.filter(c => !c.parent_id)
	const replies = comments.filter(c => c.parent_id)

	return <article className='w-full max-w-[70ch]'>
		<h2 className='text-2xl font-medium'>Comments ({comments.length})</h2>
		<MagicMotion>
			<div>
				<div className='mt-4 flex flex-col gap-6'>
					{
						mainComments.map(comment => (
							<div key={comment.id}>
								<CommentCard
									key="exclude"
									comment={comment}
									username={user?.username}
									deleteComment={deleteIdComment}
									likeComment={likeIdComment}
									onReply={() => replyTo === comment.id ? setReplyTo(null) : setReplyTo(comment.id)}
								/>

								<div className='ml-4.5 border-l pl-7 mt-3'>
									{replies
										.filter(r => r.parent_id === comment.id)
										.map(reply => (
											<div key={reply.id}>
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

								{replyTo === comment.id && <CommentForm key="exclude" disabled={comments === "loading" || comments === "error"} sendComment={sendComment} replyTo={replyTo} />}
							</div>
						))
					}
				</div>

				<CommentForm key="exclude" disabled={comments === "loading" || comments === "error"} sendComment={sendComment} />
			</div>
		</MagicMotion>
	</article>
}

function CommentCard ({ comment, username, deleteComment, onReply, isReply = false, likeComment }) {
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

				<p className='text-[15px] opacity-90 max-w-[75ch]  whitespace-pre-wrap'>{comment.content}</p>

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
		<textarea name='comment' className='w-full disabled:opacity-70 disabled:pointer-events-none px-4 py-2 rounded-lg card-border field-sizing-content' placeholder='Leave a comment...' disabled={disabled} rows={replyTo ? 2 : 4} />

		<SignedIn>
			<button disabled={disabled} type='submit' className='px-7 cursor-pointer disabled:opacity-70 disabled:pointer-events-none py-0 group rounded-lg shining btn-primary h-fit flex gap-1.5 items-center'>
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
						formButtonPrimary: "btn-primary text-white! font-medium! shadow-none! text-[15px]!"
					},
					layout: {
						unsafe_disableDevelopmentModeWarnings: true,
					},
				}}
			>
				<button disabled={disabled} type='button' className='px-7 cursor-pointer disabled:opacity-70 disabled:pointer-events-none py-0 rounded-lg shining btn-primary h-fit flex gap-1.5 items-center'>
					Send
					<SendHorizontal size={38} />
				</button>
			</SignUpButton>
		</SignedOut>
	</form>
}
