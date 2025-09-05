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
	console.log(data);
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

function ElementImage ({ data }) {
	const elementType = Atoms.find(element => element.id === data.element_id) ? "atoms" : "molecules"

	if (data.img_url || elementType === "molecules") return <Link href={`/${elementType}/${data.element_id}/${data.id}`} className='flex flex-col overflow-hidden aspect-video rounded-t-lg'>
		<div className='w-full aspect-video group overflow-hidden'>
			<Image src={data.img_url ?? "data:image/svg+xml,%3Csvg%20width%3D%221280%22%20height%3D%22720%22%20viewBox%3D%220%200%201280%20720%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0%200h1280v720H0z%22%2F%3E%3Cpath%20d%3D%22M706.875%20279.75h-133.75a26.785%2026.785%200%200%200-18.907%207.843%2026.785%2026.785%200%200%200-7.843%2018.907v107a26.785%2026.785%200%200%200%207.843%2018.907%2026.785%2026.785%200%200%200%2018.907%207.843h133.75a26.785%2026.785%200%200%200%2018.907-7.843%2026.785%2026.785%200%200%200%207.843-18.907v-107a26.785%2026.785%200%200%200-7.843-18.907%2026.785%2026.785%200%200%200-18.907-7.843Zm-33.437%2026.75a20.07%2020.07%200%200%201%2011.146%203.381%2020.07%2020.07%200%200%201%208.531%2020.595%2020.07%2020.07%200%200%201-15.763%2015.764%2020.069%2020.069%200%200%201-20.596-8.531%2020.07%2020.07%200%200%201-3.381-11.147%2020.087%2020.087%200%200%201%205.882-14.18%2020.088%2020.088%200%200%201%2014.181-5.882ZM573.125%20426.875a13.379%2013.379%200%200%201-9.458-3.917%2013.379%2013.379%200%200%201-3.917-9.458v-28.267l39.64-35.235a20.087%2020.087%200%200%201%2027.502.794l27.148%2027.089-48.995%2048.994h-31.92ZM720.25%20413.5c0%203.547-1.409%206.949-3.917%209.458a13.379%2013.379%200%200%201-9.458%203.917h-82.912l50.749-50.75a19.948%2019.948%200%200%201%2025.764-.067l19.774%2016.477V413.5Z%22%20fill%3D%22%23353535%22%2F%3E%3Crect%20x%3D%22159%22%20y%3D%22132%22%20width%3D%22961%22%20height%3D%22456%22%20rx%3D%2227%22%20stroke%3D%22%23353535%22%20stroke-width%3D%2210%22%2F%3E%3C%2Fsvg%3E"} alt='Atomox' width={1280} height={720} className='w-full h-full object-cover group-hover:scale-105 transition-all' />
		</div>
	</Link>

	function combinedCode (useTailwind, html, css, redirectUrl) {
		return `
    <html>
      <head>
        ${useTailwind ? '<script src="https://cdn.tailwindcss.com"></script>' : ''}
        <style>${css}</style>
      </head>
      <body ${elementType === "atoms" ? 'style="height:100svh;display:grid;place-items:center;overflow:hidden;cursor:pointer;"' : ''}>
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
				sandbox='allow-same-origin allow-scripts'
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
