"use client"
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const exampleComments = [
	{
		id: 1,
		name: 'John Doe',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.',
		date: '2 days ago'
	},
	{
		id: 2,
		name: 'Jane Doe',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.',
		date: '2 days ago'
	},
	{
		id: 3,
		name: 'John Doe',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.',
		date: '2 days ago'
	},
	{
		id: 4,
		name: 'Jane Doe',
		avatar: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat.',
		date: '2 days ago'
	},
]

export default function Comments ({ id }) {
	const [comments, setComments] = useState(exampleComments)

	useEffect(() => {
		getComments()
	}, []);

	async function getComments () {
		const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
		const data = await response.json()
		setComments(data)
	}

	async function sendComment (e) {
		e.preventDefault()
		const formData = new FormData(e.target)
		const comment = formData.get('comment')

		console.log(comment)
	}

	async function deleteComment (id) {
		console.log(id)
	}

	return (
		<article>
			<h2 className='text-2xl font-medium'>Comments</h2>

			<div className='mt-4 flex flex-col gap-5'>
				{
					exampleComments.map(comment => (
						<div key={comment.id} className='flex gap-3'>
							<Avatar className='size-10' >
								<AvatarImage src={comment.avatar} alt={`${comment.name} avatar`} />
								<AvatarFallback>{comment.name.slice(0, 2)}</AvatarFallback>
							</Avatar>
							<div className='flex flex-col'>
								<p className=''>{comment.name}</p>
								<p className='text-sm text-zinc-200'>{comment.content}</p>
							</div>
						</div>
					))
				}
			</div>

			<form className='flex gap-2 mt-12' onSubmit={sendComment} >
				<textarea name='comment' className='w-full disabled:cursor-progress px-4 py-2 rounded-lg card-border' placeholder='Leave a comment...' disabled={true} />
				<button disabled={true} type='submit' className='px-8 disabled:cursor-progress py-2 rounded-lg shining btn-primary h-fit'>Send</button>
			</form>
		</article>
	)
}