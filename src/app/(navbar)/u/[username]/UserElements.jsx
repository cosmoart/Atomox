'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserElements } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';
import Link from 'next/link';
import PaginationFooter from '@/components/Pagination';
import Image from 'next/image';
import componentsIcon from '@/assets/icons/components.svg';
import { XCircle } from 'lucide-react';

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
		<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
			{[...Array(pageSize)].map((_, i) => <ElementCardSkeleton key={i} />)}
		</div>
	</div>

	if (elements.length === 0) return <div className="pb-4 mt-8">
		<div className='py-10 flex items-center  gap-4 flex-col'>
			<Image src={componentsIcon} alt='empty' width={80} height={80} className='dark:invert' />
			<p>{isAuthor ? "You haven't created any component yet." : "This user hasn't created any component."}</p>
			{
				isAuthor && <Link href='/create' className='px-7 py-1.5 rounded-lg btn-primary text-[15px] tracking-wide font-medium cursor-pointer hover:scale-x-105 shining-button'>Create one</Link>
			}
		</div>
	</div>

	if (elements.error) return <div className="pb-4 mt-10">
		<div className='py-10 flex items-center gap-2 flex-col'>
			<XCircle size={70} />
			<h3 className='font-medium text-xl mt-2'>
				Error getting elements
			</h3>
			<p className='text-balance text-center'>There was an error getting the elements. Please try again later.</p>
		</div>
	</div>

	return (
		<section className="pb-4 mt-4">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{elements.map((element) =>
					<ElementCard data={element} key={element.id} />
				)}
			</div>
			<PaginationFooter totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
}
