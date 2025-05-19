import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious, PaginationEllipsis } from '@/components/ui/pagination'
import { useRouter } from 'next/navigation'

export default function PaginationFooter ({ totalPages, setPage, page, query }) {
	const router = useRouter()
	const handlePageChange = (newPage) => {
		const newParams = new URLSearchParams(window.location.search);
		if (query) newParams.set('q', query);
		newParams.set('page', newPage.toString());

		router.push(`?${newParams.toString()}`);
		setPage(newPage);
	};

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
					href='#'
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
							href={`?q=${query}&page=${p}`}
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
					href='#'
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