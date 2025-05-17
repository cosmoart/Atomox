import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination'
import { PagesTypes } from '@/lib/conts';
import getElements from '@/lib/actions';
import ElementCard, {ElementCardSkeleton} from '../ElementCard';

export default async function Elements ({ data: data2, type }) {
	const Elements = await getElements(data2.id);
	// if (error) return <div className='section'>Error</div>

	if (Elements.length < 1) return <div className='section'>No data</div>

	return (
		<div className='section'>
			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-semibold'>{PagesTypes[type].title} - {data2.name}</h1>
					<p className='max-w-[80ch] text-balance mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{PagesTypes[type].description} {data2.description}
					</p>
				</section>

				<search className='self-end'>
					<form>
						<input type='search' name='q' placeholder='Search...' className='w-full max-w-3xs py-1.5 px-4 rounded-md card-border dark:bg-zinc-900 dark:text-white' />
						{/* <button type='submit'>Search</button> */}
					</form>
				</search>
			</article>

			<article className='grid gap-4 mt-6' style={{ gridTemplateColumns: PagesTypes[type].gridSize }}>
				{
					Elements.map((element, index) => <ElementCard data={element} key={index} />)
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