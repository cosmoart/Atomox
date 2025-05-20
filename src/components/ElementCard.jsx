import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Eye, OctagonAlert } from 'lucide-react'
import Link from 'next/link';
import LikeButton from './LikeButton';
import { Atoms } from '@/lib/conts';
import Image from 'next/image';
import { Image as ImageIcon } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

export default function ElementCard ({ data }) {
	return (
		<section className='rounded-lg h-fit dark:bg-zinc-900 card-border relative'>
			{
				!data.published && <TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<div className='absolute z-20 -top-3 -left-3 rounded-full bg-red-400 p-1'>
								<OctagonAlert size={22} />
							</div>
						</TooltipTrigger>
						<TooltipContent >
							<p>This component is not published yet.</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			}

			<ElementImage data={data} />

			<div className='flex gap-2 p-2 justify-between'>
				<Link href={`/u/${data.username}`} className='flex gap-2 items-center'>
					<Avatar className='size-7' >
						<AvatarImage src={data.user_avatar} alt={`${data.username} avatar`} />
						<AvatarFallback>{data.username.slice(0, 2)}</AvatarFallback>
					</Avatar>

					<p className='font-medium text-[15px]'>{data.username}</p>
				</Link>

				<div className={`flex gap-2.5 items-center mr-1 ${!data.published && "pointer-events-none"}`}>
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

function ElementImage ({ data }) {
	const elementType = Atoms.find(element => element.id === data.element_id) ? "atoms" : "molecules"

	if (!data.published) return <div className='w-full aspect-video group overflow-hidden dark:bg-zinc-800 bg-white flex justify-center items-center'>
		<ImageIcon size={50} className='object-cover ' />
	</div>


	if (data.img_url) return <Link href={`/${elementType}/${data.element_id}/${data.id}`} className='flex flex-col overflow-hidden aspect-video rounded-t-lg '>
		<div className='w-full aspect-video group overflow-hidden'>
			<Image src={data.img_url} alt='Atomox' width={1280} height={720} className='w-full h-full object-cover group-hover:scale-105 transition-all' />
		</div>
	</Link>

	function combinedCode (useTailwind, html, css) {
		return `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : `<style>${css}</style>`}
      </head>
      <body style="height:100svh;display:grid;place-items:center;overflow:hidden;">${html}</body>
    </html>
  `
	}

	return <div className='flex flex-col overflow-hidden aspect-video rounded-t-lg relative'>
		<iframe
			title='preview'
			className={`${elementType === "molecules" ? "w-[250%] h-[250%] aspect-video scale-40 absolute origin-top-left" : "w-full h-full"}`}
			sandbox='allow-same-origin allow-scripts'
			srcDoc={combinedCode(data.use_tailwind, data.html, data.css)}
		/>
		<Link href={`/${elementType}/${data.element_id}/${data.id}`} className='absolute top-0 left-0 w-full h-full z-10 '></Link>
	</div>
}

export function ElementCardSkeleton () {
	return (
		<section className='rounded-lg h-fit bg-white dark:bg-zinc-900 card-border overflow-hidden group'>
			<div className='flex flex-col overflow-hidden aspect-video w-full bg-zinc-200/50 dark:bg-zinc-800 animate-pulse'></div>

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
		</section>
	)
}