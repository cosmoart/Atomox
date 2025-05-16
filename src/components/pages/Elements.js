import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Eye } from 'lucide-react'
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination'
import { PagesTypes } from '@/lib/conts';
import LikeButton from '../LikeButton';
import getElements from '@/lib/actions';
import { currentUser } from '@clerk/nextjs/server'

export default async function Elements ({ data: data2, type }) {
	const user = await currentUser()
	const Elements = await getElements(data2.id);
	// element.html, element.css () => ${redirect(url)}
	// console.log(Elements);


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

	// if (error) return <div className='section'>Error</div>

	if (Elements.length < 1) return <div className='section'>No data</div>

	return (
		<div className='section'>
			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-medium'>{PagesTypes[type].title} - {data2.name}</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{PagesTypes[type].description} {data2.description}
					</p>
				</section>

				<section className='grow h-full mt-auto flex items-end justify-end gap-2'>
					<Select>
						<SelectTrigger className='w-[180px] py-1.5! card-border border-0 h-auto! text-base'>
							<SelectValue placeholder='Select a fruit' className='py-4! block' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value='apple'>Apple</SelectItem>
								<SelectItem value='banana'>Banana</SelectItem>
								<SelectItem value='blueberry'>Blueberry</SelectItem>
								<SelectItem value='grapes'>Grapes</SelectItem>
								<SelectItem value='pineapple'>Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					<input type='text' placeholder='Search...' className='w-full max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900 dark:text-white' />
				</section>
			</article>

			<article className='grid gap-4 mt-6' style={{ gridTemplateColumns: PagesTypes[type].gridSize }}>
				{
					Elements.map((element, index) => (
						<section key={index} className='rounded-lg dark:bg-zinc-900 card-border overflow-hidden group'>
							<Link href={`/${PagesTypes[type].id}/${data2.id}/${element.id}`} className='flex flex-col overflow-hidden aspect-video'>
								{/* <Image src={element.imgUrl} alt='Image' width={1280} height={720} className='group-hover:scale-105 transition-transform' /> */}
								<iframe
									title='preview'
									className='w-full h-full'
									sandbox='allow-same-origin allow-scripts'
									srcDoc={combinedCode(element.use_tailwind, element.html, element.css, `/${PagesTypes[type].id}/${data2.id}/${element.id}`)}
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
					))
				}
			</article>

			<Pagination className='mt-8'>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href='#' />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href='#'>1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href='#' />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

		</div>
	);
}