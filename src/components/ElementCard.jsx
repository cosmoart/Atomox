import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Eye, OctagonAlert } from 'lucide-react'
import Link from 'next/link';
import LikeButton from './LikeButton';
import { Atoms } from '@/lib/conts';
import Image from 'next/image';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import ElementDelete from './ElementDelete';
import Ad from './Ad';

export default function ElementCard ({ data }) {
	if (data === "ad") return <Ad />

	return (
		<section className='rounded-lg backdrop-blur-sm h-fit bg-white/90 dark:bg-zinc-900/90 card-border relative'>
			{
				!data.published && <>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div className='absolute z-20 -top-3 -left-3 text-white rounded-full bg-red-400 p-1'>
									<OctagonAlert size={22} />
								</div>
							</TooltipTrigger>
							<TooltipContent >
								<p>This component is not published yet.</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>

					<div className={`absolute -top-3 left-6 z-20 text-white ${!data.published ? "left-6" : "-left-3"}`}>
						<ElementDelete id={data.id} mode='button' />
					</div>
				</>
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

function ElementImage ({ data, lazy }) {
	const elementType = Atoms.find(element => element.id === data.element_id) ? "atoms" : "molecules"

	if (data.img_url) return <Link href={`/${elementType}/${data.element_id}/${data.id}`} className='flex flex-col overflow-hidden aspect-video rounded-t-lg '>
		<div className='w-full aspect-video group overflow-hidden'>
			<Image src={data.img_url} alt='Atomox' width={1280} height={720} className='w-full h-full object-cover group-hover:scale-105 transition-all' />
		</div>
	</Link>

	function combinedCode (useTailwind, html, css, redirectUrl) {
		return `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
        <style>${css}</style>
      </head>
      <body style="height:100svh;display:grid;place-items:center;overflow:hidden;cursor:pointer;">
        ${html}
        <script>
          document.body.addEventListener('click', () => {
            window.top.location.href = '${redirectUrl}';
          });
        </script>
      </body>
    </html>
  `;
	}
	return (
		<div className='flex flex-col overflow-hidden aspect-video rounded-t-lg relative'>
			<iframe
				title='preview'
				loading="lazy"
				className={`${elementType === "molecules" ? "w-[250%] h-[250%] aspect-video scale-40 absolute origin-top-left" : "w-full h-full"}`}
				sandbox='allow-same-origin allow-scripts allow-top-navigation'
				srcDoc={combinedCode(data.use_tailwind, data.html, data.css, `/${elementType}/${data.element_id}/${data.id}`)}
			/>
		</div>
	)
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