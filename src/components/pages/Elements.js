import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Eye } from 'lucide-react'
import Link from 'next/link';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from "@/components/ui/pagination"
import { PagesTypes } from '@/lib/conts';

export default async function Elements ({ data, type }) {
	return (
		<div className='section'>
			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-medium'>{PagesTypes[type].title} - {data.name}</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{PagesTypes[type].description} {data.description}
					</p>
				</section>

				<section className='grow h-full mt-auto flex items-end justify-end gap-2'>
					<Select>
						<SelectTrigger className="w-[180px] py-1.5! card-border border-0 h-auto! text-base">
							<SelectValue placeholder="Select a fruit" className="py-4! block" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem value="apple">Apple</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">Blueberry</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">Pineapple</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>

					<input type="text" placeholder="Search..." className='w-full max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900 dark:text-white' />
				</section>
			</article>

			<article className='grid gap-4 mt-6' style={{ gridTemplateColumns: PagesTypes[type].gridSize }}>
				{
					[...Array(PagesTypes[type].pageSize)].map((_, index) => (
						<section key={index} className='rounded-lg dark:bg-zinc-900 card-border overflow-hidden group'>
							<Link href={`/${PagesTypes[type].id}/${data.id}/${index}`} className='flex flex-col overflow-hidden aspect-video'>
								<Image src={`https://picsum.photos/seed/${Math.floor(Math.random() * 100)}/1280/720`} alt="Image" width={1280} height={720} className='group-hover:scale-105 transition-transform' />
							</Link>

							<div className='flex gap-2 p-2 justify-between'>
								<Link href="/u/user_2wnENqMPyFfDh1QSStqhRSRoqs2" className='flex gap-2 items-center'>
									<Avatar className="size-7" >
										<AvatarImage src="https://github.com/cosmoart.png" />
										<AvatarFallback>CA</AvatarFallback>
									</Avatar>

									<h1 className='font-medium'>Cosmoart</h1>
								</Link>

								<div className='flex gap-3 items-center mr-1'>
									<div className='flex gap-1 items-center'>
										<Heart size={17} className='text-red-500 inline' />
										<span className='text-sm text-zinc-900/80 dark:text-white/80'>
											{Intl.NumberFormat('en', { notation: 'compact' }).format(Math.floor(Math.random() * 100))}
										</span>
									</div>
									<div className='flex gap-1 items-center'>
										<Eye size={17} className='text-zinc-900/80 dark:text-white/80' />
										<span className='text-sm text-zinc-900/80 dark:text-white/80'>
											{Intl.NumberFormat('en', { notation: 'compact' }).format(Math.floor(Math.random() * 7000))}
										</span>
									</div>
								</div>
							</div>
						</section>
					))
				}
			</article>

			<Pagination className="mt-8">
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="#">1</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>

		</div>
	);
}