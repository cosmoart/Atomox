import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Eye } from 'lucide-react'
import Link from 'next/link';
import LikeButton from './LikeButton';
import { Atoms } from '@/lib/conts';
import Image from 'next/image';

export default function ElementCard ({ data }) {
	function combinedCode (useTailwind, html, css) {
		return `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : `<style>${css}</style>`}
      </head>
      <body style="height:100svh;display:grid;place-items:center;">${html}</body>
    </html>
  `
	}

	const elementType = Atoms.find(element => element.id === data.element_id) ? "atoms" : "molecules"

	return (
		<section className='rounded-lg h-fit dark:bg-zinc-900 card-border overflow-hidden' style={{
			background: !data.published && '#F3F4F6'
		}}>
			<Link href={`/${elementType}/${data.element_id}/${data.id}`} className='flex flex-col overflow-hidden aspect-video'>
				{
					data.img_url
						? <div className='w-full aspect-video group overflow-hidden'>
							<Image src={data.img_url} alt='Atomox' width={1280} height={720} className='w-full h-full object-cover group-hover:scale-105 transition-all' />
						</div>
						: <iframe
							title='preview'
							className='w-full h-full'
							sandbox='allow-same-origin allow-scripts'
							srcDoc={combinedCode(data.use_tailwind, data.html, data.css, `/${elementType}/${data.element_id}/${data.id}`)}
						/>
				}
			</Link>

			<div className='flex gap-2 p-2 justify-between'>
				<Link href={`/u/${data.username}`} className='flex gap-2 items-center'>
					<Avatar className='size-7' >
						<AvatarImage src={data.user_avatar} alt={`${data.username} avatar`} />
						<AvatarFallback>{data.username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<p className='font-medium text-[15px]'>{data.username}</p>
				</Link>

				<div className='flex gap-2.5 items-center mr-1'>
					<LikeButton initialLikeCount={data.likes} isLiked={data.likedByUser} elementId={data.id} />

					<div className='flex gap-1 items-center'>
						<Eye size={19} className='text-zinc-900/90 dark:text-white/90' />
						<span className='text-sm text-zinc-900/90 dark:text-white/90'>
							{data.views}
						</span>
					</div>
				</div>
			</div>
		</section>
	)
}

export function ElementCardSkeleton () {
	return (
		<section className='rounded-lg h-fit bg-white dark:bg-zinc-900 card-border overflow-hidden group'>
			<div className='flex flex-col overflow-hidden aspect-video w-full bg-zinc-200/50 dark:bg-zinc-800 animate-pulse'></div>

			<div className='flex gap-2 p-2 justify-between'>
				<div className='flex gap-2 items-center'>
					<div className='size-7 dark:bg-zinc-800 bg-zinc-200/50 rounded-full animate-pulse'></div>
					{/* width between 10 and 20 */}
					<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5' style={{ width: `${Math.floor(Math.random() * (100 - 60 + 1) + 60)}px` }}></div>
				</div>

				<div className='flex gap-3 items-center mr-1'>
					<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5 w-8'></div>
					<div className='dark:bg-zinc-800 bg-zinc-200/50 rounded-lg animate-pulse h-4.5 w-8'></div>
				</div>
			</div>
		</section>
	)
}