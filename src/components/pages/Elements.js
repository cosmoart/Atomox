'use client'

import { useEffect, useState, useTransition } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { PagesTypes } from '@/lib/conts'
import getElements from '@/lib/actions'
import ElementCard, { ElementCardSkeleton } from '../ElementCard'
import Link from 'next/link'
import PaginationFooter from '../Pagination'
import { ArrowLeftIcon, OctagonAlert, OctagonX, Search } from 'lucide-react'
import Image from 'next/image'
import componentsIcon from '@/assets/icons/components.svg'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

export default function Elements ({ data: data2, type }) {
	const searchParams = useSearchParams()
	const [isPending, startTransition] = useTransition()
	const elementsPerPage = PagesTypes[type].pageSize;
	const router = useRouter()

	const [elements, setElements] = useState('loading')
	const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
	const [totalElements, setTotalElements] = useState(0);
	const [queries, setQueries] = useState({
		query: searchParams.get('q') || '',
		style: searchParams.get('style') || 'all',
		sort: searchParams.get('sort') || 'likes'
	})

	useEffect(() => {
		startTransition(async () => {
			try {
				const res = await getElements({
					elementId: data2.id,
					page: currentPage,
					pageSize: elementsPerPage,
					query: queries.query.split(' '),
					sort: queries.sort,
					style: queries.style,
					getAll: type === 'Atoms'
				});

				if (res.error) throw new Error('Error fetching')

				if (res.data.length > (type === 'Atoms' ? 8 : 6)) {
					const min = type === 'Atoms' ? 8 : 6;
					const max = res.data.length;
					const randomIndex = Math.floor(Math.random() * (max - min)) + min;
					res.data.splice(randomIndex, 0, 'ad');
				}

				setElements(res.error ? ({ error: res.error }) : res.data);
				setTotalElements(res.totalCount);
			} catch (error) {
				setElements({ error: true })
			}
		});
	}, [currentPage]);

	const handleSearch = (e) => {
		e.preventDefault()
		const formData = new FormData(e.target)

		const q = formData.get('q')?.toString().trim().toLowerCase() || ''
		const style = formData.get('style')?.toString().trim().toLowerCase() || 'all'
		const sort = formData.get('sort')?.toString().trim().toLowerCase() || 'likes'
		console.log(formData, q, style, sort);

		const newParams = new URLSearchParams(window.location.search)
		if (q) newParams.set('q', q)
		else newParams.delete('q')
		if (style !== 'all') newParams.set('style', style)
		else newParams.delete('style')
		if (sort !== 'likes') newParams.set('sort', sort)
		else newParams.delete('sort')

		router.push(`?${newParams.toString()}`)
		setQueries({ query: q, style: style, sort: sort })
	}

	// if (elements === 'error') return <div>
	// 	Error
	// </div>

	return (
		<div className='section mb-10 relative minHeightScreen flex flex-col'>
			<div className='absolute h-[44svh] dark:invert -z-30 pointer-events-none opacity-30 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

			<article className='flex flex-col md:flex-row gap-3 items-center py-3 2xl:py-4 '>
				<section className='grow'>
					<h1 className='text-3xl inline-block sm:text-4xl bg-clip-text bg-linear-to-r to-purple-500 dark:to-purple-400 from-blue-600 dark:from-blue-500 text-transparent font-bold relative'>
						{data2.name}
						<span className='absolute  -top-2.5 -right-6.5 rounded-full aspect-square size-6 2xl:size-6.5 grid place-items-center text-white bg-gradient-to-l from-purple-500 to-blue-500 text-[15px] 2xl:text-base 2xl:pt-0.5 outline-2 outline-zinc-100 dark:outline-zinc-700/50 outline-offset-2'>
							{elements === 'loading' || isPending ? '?' : totalElements}
						</span>
					</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900 dark:text-white text-[15px] 2xl:text-base'>
						{PagesTypes[type].description} {data2.description}
					</p>
				</section>

				<div className='flex flex-col gap-3 w-full self-end sm:w-auto'>
					<p className={`text-zinc-900/80 w-fit ml-auto dark:text-white/80 text-sm relative text-right after:absolute after:w-full after:h-full dark:after:bg-zinc-800 after:bg-zinc-300 after:rounded-full after:animate-pulse after:top-0 after:left-0 ${(isPending || elements === 'loading') ? 'after:opacity-100' : 'after:pointer-events-none after:opacity-0!'}`}>
						<span className={`transition-opacity ${(isPending || elements === 'loading') ? 'opacity-0' : ''}`}>{totalElements} element{totalElements > 1 ?? 's'}. Page {Math.ceil(totalElements / elementsPerPage) === 0 ? 0 : currentPage} of {Math.ceil(totalElements / elementsPerPage)}.</span>
					</p>

					<form onSubmit={handleSearch} className='flex gap-2'>
						<Select name='style' defaultValue={queries.style} disabled={isPending || elements?.error || elements === 'loading'}>
							<SelectTrigger className='card-border bg-white dark:bg-zinc-900! border-0!'>
								<SelectValue placeholder='Tailwind or CSS' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='all'>All</SelectItem>
								<SelectItem value='tailwind'>Tailwind</SelectItem>
								<SelectItem value='no-tailwind'>CSS</SelectItem>
							</SelectContent>
						</Select>

						<Select name='sort' defaultValue={queries.sort} disabled={isPending || elements?.error || elements === 'loading'}>
							<SelectTrigger className='card-border bg-white dark:bg-zinc-900! border-0!'>
								<SelectValue placeholder='Sort by' />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value='likes'>Sort by Likes</SelectItem>
								<SelectItem value='views'>Sort by Views</SelectItem>
								<SelectItem value='created_at'>Sort by Date</SelectItem>
							</SelectContent>
						</Select>

						<span className='relative'>
							<input
								disabled={isPending || elements?.error || elements === 'loading'}
								type='search'
								name='q'
								defaultValue={queries.query}
								placeholder='Search...'
								className='w-full sm:max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900/50  bg-white/50 backdrop-blur-xs pr-10'
							/>
							<button type='submit' className='absolute cursor-pointer active:scale-95 transition-all top-1/2 right-1 -translate-y-1/2 bg-gradient-to-br from-indigo-500  to-blue-500 p-1 rounded-md hover:scale-110'>
								<Search size={20} className='text-white' />
							</button>
						</span>
					</form>
				</div>
			</article>

			{
				!elements.error
					? <article className='sm:grid flex flex-col gap-4 mt-6 mb-10' style={{
						gridTemplateColumns: PagesTypes[type].gridSize,
						flexGrow: (elements.length < 1 || elements.error) ? 1 : 0
					}} >
						<ElementsList isPending={isPending} elements={elements} />
					</article>

					: <article className='p-5 flex grow justify-center items-center flex-col'>
						<OctagonX className='size-14 2xl:size-20' />
						<h1 className='text-3xl font-semibold mt-2 2xl:text-5xl'>
							Error loading elements
						</h1>
						<p className='text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-lg text-center'>An unexpected error has occurred. Please try again later.</p>
						<Link href='/' className='btn btn-primary mt-3 py-1.5 flex gap-1 px-8 pr-10 group shining 2xl:text-lg'>
							<ArrowLeftIcon className='size-5 group-hover:-translate-x-1 transition-transform 2xl:size-7' />
							Go back home
						</Link>
					</article>
			}

			<PaginationFooter totalPages={Math.ceil(totalElements / elementsPerPage)} setPage={setCurrentPage} page={currentPage} query={queries} />
		</div>
	)
}

function ElementsList ({ isPending, elements }) {
	if (isPending || elements === 'loading') return Array.from({ length: PagesTypes.Atoms.pageSize + 1 })
		.map((_, i) => <ElementCardSkeleton key={i} />)

	if (elements.length < 1) return <div className='h-full w-full col-span-full flex items-center justify-center flex-col gap-4'>
		<Image src={componentsIcon} alt='empty' width={100} height={100} className='dark:invert' />
		<p className='text-center text-muted-foreground'>No components found <span className='italic font-medium'>yet</span>. But you can change that</p>
		<Link href='/create' className='btn-primary shining px-7 py-1.5 rounded-lg bg-gradient-to-l text-[15px] tracking-wide font-medium text-white transition-all active:scale-95  cursor-pointer'>Create one</Link>
	</div>

	if (elements.error) return <div className='h-full w-full col-span-full flex items-center justify-center flex-col '>
		<OctagonAlert size={50} />
		<h1 className='font-semibold text-xl mb-2 mt-2 lg:text-2xl'>Error fetching elements</h1>
		<p className='text-center text-muted-foreground'>An error has occurred while fetching the elements.</p>
		<p className='text-center text-muted-foreground'>Please try again later</p>
	</div>

	return elements.map((el, i) => <ElementCard data={el} key={i} />)
}