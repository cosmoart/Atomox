'use client'

import { useEffect, useState, useTransition } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination'
import { PagesTypes } from '@/lib/conts'
import getElements from '@/lib/actions'
import ElementCard, { ElementCardSkeleton } from '../ElementCard'
import Link from 'next/link'

export default function Elements ({ data: data2, type }) {
	const searchParams = useSearchParams()
	const router = useRouter()
	const [query, setQuery] = useState(searchParams.get('q') || '')
	const [elements, setElements] = useState([])
	const [isPending, startTransition] = useTransition()

	useEffect(() => {
		startTransition(async () => {
			const data = await getElements(data2.id, query.split(' '))
			setElements(data)
		})
	}, [query, data2.id])

	const handleSearch = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const q = formData.get('q')?.toString().trim().toLowerCase() || ''
		console.log(q);

		const newParams = new URLSearchParams(window.location.search)
		if (q) {
			newParams.set('q', q)
		} else {
			newParams.delete('q')
		}
		router.push(`?${newParams.toString()}`)

		console.log(q);
		setQuery(q)
	}

	return (
		<div className='section mb-10'>
			<article className='flex flex-col md:flex-row gap-3 items-center py-3 2xl:py-4 '>
				<section className='grow'>
					<h1 className=' text-xl sm:text-3xl font-semibold'>{PagesTypes[type].title} - {data2.name}</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{PagesTypes[type].description} {data2.description}
					</p>
				</section>

				<search className='self-end'>
					<form onSubmit={handleSearch}>
						<input
							type='search'
							name='q'
							defaultValue={query}
							placeholder='Search...'
							className='w-full max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900 dark:text-white'
						/>
					</form>
				</search>
			</article>

			<article className='grid gap-4 mt-6 min-h-[calc(100svh-250px)]' style={{ gridTemplateColumns: PagesTypes[type].gridSize }}>
				{isPending
					? Array.from({ length: PagesTypes[type].pageSize }).map((_, i) => <ElementCardSkeleton key={i} />)
					: elements.length > 0
						? elements.map((el, i) => <ElementCard data={el} key={i} />)
						: <div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4'>
							<p className='text-center text-muted-foreground'>No components found <span className='italic font-medium'>yet</span>. But you can change that</p>
							<Link href='/create' className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
						</div>
				}
			</article>

			{/* <Pagination className='mt-8'>
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
			</Pagination> */}
		</div>
	)
}
