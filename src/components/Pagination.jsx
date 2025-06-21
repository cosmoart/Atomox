import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination'
import { useRouter } from 'next/navigation'

export default function PaginationFooter ({ totalPages, setPage, page, queries }) {
	const router = useRouter()
	const handlePageChange = (newPage) => {
		router.push(`?${newParams(newPage).toString()}`);
		setPage(newPage);
	};

	function newParams (newPage = page) {
		const newParams = new URLSearchParams(window.location.search);
		if (queries?.query) newParams.set('q', queries.query)
		else newParams.delete('q');
		if (queries?.style !== 'all' && queries?.style) newParams.set('style', queries.style)
		else newParams.delete('style');
		if (queries?.sort !== 'likes' && queries?.sort) newParams.set('sort', queries.sort)
		else newParams.delete('sort');
		newParams.set('page', newPage.toString())
		if (newPage > 1) newParams.set('page', newPage.toString())
		else newParams.delete('page');

		return newParams;
	}

	const generatePageNumbers = (current, total) => {
		const pages = [];

		if (total <= 5) {
			for (let i = 1; i <= total; i++) pages.push(i);
		} else {
			if (current > 2) pages.push(1);
			if (current > 3) pages.push('...');

			const start = Math.max(2, current - 1);
			const end = Math.min(total - 1, current + 1);
			for (let i = start; i <= end; i++) pages.push(i);

			if (current < total - 2) pages.push('...');
			if (current < total) pages.push(total);
		}

		return pages;
	};

	if (totalPages > 1) return <Pagination className='mt-8'>
		<PaginationContent>
			<PaginationItem>
				<PaginationPrevious
					className={page > 1 ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
					href={`?${newParams(page - 1).toString()}`}
					onClick={(e) => {
						e.preventDefault();
						if (page > 1) handlePageChange(page - 1);
					}}
				/>
			</PaginationItem>

			{generatePageNumbers(page, totalPages).map((p, i) => (
				<PaginationItem key={i}>
					{p === '...' ? (
						<PaginationEllipsis />
					) : (
						<PaginationLink
							href={`?${newParams(p).toString()}`}
							isActive={p === page}
							onClick={(e) => {
								e.preventDefault();
								handlePageChange(p);
							}}
						>
							{p}
						</PaginationLink>
					)}
				</PaginationItem>
			))}

			<PaginationItem>
				<PaginationNext
					href={`?${newParams(page + 1).toString()}`}
					className={page < totalPages ? 'cursor-pointer' : 'cursor-not-allowed pointer-events-none'}
					onClick={(e) => {
						e.preventDefault();
						if (page < totalPages) handlePageChange(page + 1);
					}}
				/>
			</PaginationItem>
		</PaginationContent>
	</Pagination>
}