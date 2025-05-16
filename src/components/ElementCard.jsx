import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Eye} from 'lucide-react'
import Link from 'next/link';
import LikeButton from '../LikeButton';

export default function ElementCard ({ data }) {
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

	return (
		<section key={index} className='rounded-lg dark:bg-zinc-900 card-border overflow-hidden group'>
			<Link href={`/atoms/${data.element_id}/${data.id}`} className='flex flex-col overflow-hidden aspect-video'>
				{/* <Image src={data.imgUrl} alt='Image' width={1280} height={720} className='group-hover:scale-105 transition-transform' /> */}
				<iframe
					title='preview'
					className='w-full h-full'
					sandbox='allow-same-origin allow-scripts'
					srcDoc={combinedCode(data.use_tailwind, data.html, data.css, `/atoms/${data.element_id}/${data.id}`)}
				/>
			</Link>

			<div className='flex gap-2 p-2 justify-between'>
				<Link href={`/u/${data.username}`} className='flex gap-2 items-center'>
					<Avatar className='size-7' >
						<AvatarImage src={data.user_avatar} alt={`${data.username} avatar`} />
						<AvatarFallback>{data.username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<p className='font-medium'>{data.username}</p>
				</Link>

				<div className='flex gap-3 items-center mr-1'>
					<LikeButton initialLikeCount={data.likes} isLiked={data.likedByUser} elementId={data.id} />

					<div className='flex gap-1 items-center'>
						<Eye size={17} className='text-zinc-900/80 dark:text-white/80' />
						<span className='text-sm text-zinc-900/80 dark:text-white/80'>
							{data.views}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}