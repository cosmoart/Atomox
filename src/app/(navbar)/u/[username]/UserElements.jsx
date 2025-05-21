'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserElements } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';
import Link from 'next/link';
import PaginationFooter from '@/components/Pagination';

export default function UserElements ({ username, isAuthor }) {
	const [elements, setElements] = useState("loading");
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [loading, startTransition] = useTransition();
	const pageSize = 12;

	useEffect(() => {
		startTransition(async () => {
			const res = await getUserElements(username, page, pageSize);
			setElements(res.error ? ({ error: res.error }) : res.data);
			setTotalPages(Math.ceil(res.totalCount / pageSize));
		});
	}, [page]);

	if (loading || elements === "loading") return <div className="pb-4 mt-4">
		<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
			{[...Array(pageSize)].map((_, i) => <ElementCardSkeleton key={i} />)}
		</div>
	</div>

	if (elements.length === 0) return <div className="pb-4 mt-4">
		<div className='py-10 flex items-center  gap-4 flex-col'>
			<p>{isAuthor ? "You haven't created any component yet." : "This user hasn't created any component."}</p>
			<Link href='/create' className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all hover:scale-105 active:scale-95 card-border cursor-pointer'>Create one</Link>
		</div>
	</div>

	if (elements.error) return <div className="pb-4 mt-4">
		<div className='py-10 flex items-center justify-center'>
			<p>Error getting components.</p>
		</div>
	</div>

	return (
		<section className="pb-4 mt-4">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
				{elements.map((element) =>
					<ElementCard data={element} key={element.id} />
				)}
			</div>
			<PaginationFooter totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
}
