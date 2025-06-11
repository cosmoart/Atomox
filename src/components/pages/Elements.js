'use client'

import { useEffect, useState, useTransition } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { PagesTypes } from '@/lib/conts'
import getElements from '@/lib/actions'
import ElementCard, { ElementCardSkeleton } from '../ElementCard'
import Link from 'next/link'
import PaginationFooter from '../Pagination'
import { OctagonAlert } from 'lucide-react'
import Image from 'next/image'
import componentsIcon from '@/assets/icons/components.svg'

export default function Elements ({ data: data2, type }) {
	const searchParams = useSearchParams()
	const [elements, setElements] = useState('loading')
	const [isPending, startTransition] = useTransition()
	const [totalPages, setTotalPages] = useState(0);

	const router = useRouter()
	const [query, setQuery] = useState(searchParams.get('q') || '')
	const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
	const pageSize = PagesTypes[type].pageSize;

	useEffect(() => {
		startTransition(async () => {
			const res = await getElements(data2.id, query.split(' '), page, pageSize);
			setElements(res.error ? ({ error: res.error }) : res.data);
			setTotalPages(Math.ceil(res.totalCount / pageSize));
		});
	}, [query, page, data2.id]);

	const handleSearch = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		const q = formData.get('q')?.toString().trim().toLowerCase() || ''

		const newParams = new URLSearchParams(window.location.search)
		if (q) newParams.set('q', q)
		else newParams.delete('q')

		router.push(`?${newParams.toString()}`)
		setQuery(q)
	}

	return (
		<div className='section mb-10 relative minHeightScreen flex flex-col'>
			<article className='flex flex-col md:flex-row gap-3 items-center py-3 2xl:py-4 '>
				<section className='grow'>
					<h1 className=' text-xl sm:text-3xl font-semibold'>{data2.name}</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{PagesTypes[type].description} {data2.description}
					</p>
				</section>

				<search className='self-end w-full sm:w-auto'>
					<form onSubmit={handleSearch} >
						<input
							disabled={isPending || elements?.error}
							type='search'
							name='q'
							defaultValue={query}
							placeholder='Search...'
							className='w-full sm:max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900  bg-white'
						/>
					</form>
				</search>
			</article>

			<article className='sm:grid gap-4 mt-6 mb-10' style={{ gridTemplateColumns: PagesTypes[type].gridSize }}>
				<ElementsList isPending={isPending} elements={elements} />
			</article>

			<PaginationFooter totalPages={totalPages} setPage={setPage} page={page} query={query} />
		</div>
	)
}

function ElementsList ({ isPending, elements }) {
	if (isPending || elements === 'loading') return Array.from({ length: PagesTypes.Atoms.pageSize })
		.map((_, i) => <ElementCardSkeleton key={i} />)

	if (elements.length < 1) return <div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4'>
		<Image src={componentsIcon} alt='empty' width={100} height={100} className='dark:invert' />
		<p className='text-center text-muted-foreground'>No components found <span className='italic font-medium'>yet</span>. But you can change that</p>
		<Link href='/create' className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
	</div>

	if (elements.error) return <div className='h-full w-full col-span-full flex items-center justify-center flex-col '>
		<OctagonAlert size={50} />
		<h1 className='font-semibold text-xl mb-2 mt-2 lg:text-2xl'>Error fetching elements</h1>
		<p className='text-center text-muted-foreground'>An error has occurred while fetching the elements.</p>
		<p className='text-center text-muted-foreground'>Please try again later</p>
	</div>

	return elements.map((el, i) => <ElementCard data={el} key={i} />)
}