'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserLikes } from '@/lib/actions';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import LikeButton from '@/components/LikeButton';
import Link from 'next/link';
import { Eye } from 'lucide-react'

export default function YourLikes () {
	const [likes, setLikes] = useState([]);
	const [loading, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			getUserLikes()
				.then(setLikes)
				.catch(() => alert('Error al obtener likes'));
		});
	}, []);


	function combinedCode (useTailwind, html, css, url) {
		return `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : `<style>${css}</style>`}
      </head>
      <body onclick="console.log('asd')" style="height:100svh;display:grid;place-items:center;">${html}</body>
    </html>
  `
	}


	if (loading) return <div className="p-4">
		<h2 className="text-xl font-semibold mb-4">Tus Likes</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{[...Array(6)].map((_, i) => (
				<div key={i} className="p-4 border rounded shadow animate-pulse space-y-2">
					<div className="h-40 bg-gray-300 rounded" />
					<div className="h-4 bg-gray-300 rounded w-3/4" />
					<div className="h-4 bg-gray-200 rounded w-1/2" />
				</div>
			))}
		</div>
	</div>

	if (likes.length === 0) return <div className="p-4">
		<h2 className="text-xl font-semibold mb-4">Tus Likes</h2>
		<p>No has dado like a ningún elemento aún.</p>
	</div>

	return (
		<div className="p-4">
			<h2 className="text-xl font-semibold mb-4">Tus Likes</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{likes.map((element) => (
					<section key={element.id} className='rounded-lg dark:bg-zinc-900 card-border overflow-hidden group'>
						<Link href={`/atoms/${element.element_id}/${element.id}`} className='flex flex-col overflow-hidden aspect-video'>
							{/* <Image src={element.imgUrl} alt='Image' width={1280} height={720} className='group-hover:scale-105 transition-transform' /> */}
							<iframe
								title='preview'
								className='w-full h-full'
								sandbox='allow-same-origin allow-scripts'
								srcDoc={combinedCode(element.use_tailwind, element.html, element.css, `/atoms/${element.element_id}/${element.id}`)}
							/>
						</Link>

						<div className='flex gap-2 p-2 justify-between'>
							<Link href={`/u/${element.username}`} className='flex gap-2 items-center'>
								<Avatar className='size-7' >
									<AvatarImage src={element.user_avatar} alt={`${element.username} avatar`} />
									<AvatarFallback>{element.username.slice(0, 2)}</AvatarFallback>
								</Avatar>

								<p className='font-medium'>{element.username}</p>
							</Link>

							<div className='flex gap-3 items-center mr-1'>
								<LikeButton initialLikeCount={element.likes} isLiked={element.likedByUser} elementId={element.id} />

								<div className='flex gap-1 items-center'>
									<Eye size={17} className='text-zinc-900/80 dark:text-white/80' />
									<span className='text-sm text-zinc-900/80 dark:text-white/80'>
										{element.views}
									</span>
								</div>
							</div>
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
