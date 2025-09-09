'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserLikes } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';
import Image from 'next/image';
import componentsIcon from '@/assets/icons/components.svg';
import { XCircle } from 'lucide-react';
import PaginationFooter from '@/components/Pagination';

export default function UserLikes () {
	const [likes, setLikes] = useState("loading");
	const [loading, startTransition] = useTransition();
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const pageSize = 12;

	useEffect(() => {
		startTransition(async () => {
			const res = await getUserLikes({ page, pageSize });
			setLikes(res.error ? ({ error: res.error }) : res.data);
			setTotalPages(Math.ceil(res.totalCount / pageSize));
		});
	}, [page]);

	if (loading || likes === "loading") return <div className="pb-4 mt-5">
		<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
			{[...Array(pageSize)].map((_, i) => <ElementCardSkeleton key={i} />)}
		</div>
	</div>

	if (likes.length === 0) return <div className="pb-4 mt-8">
		<div className='py-10 flex items-center  gap-4 flex-col'>
			<Image src={componentsIcon} alt='empty' width={80} height={80} className='dark:invert' />
			<p>You haven't liked any element yet.</p>
		</div>
	</div>

	if (likes.error) return <div className="pb-4 mt-10">
		<div className='py-10 flex items-center gap-2 flex-col'>
			<XCircle size={70} />
			<h3 className='font-medium text-xl mt-2'>
				Error getting likes
			</h3>
			<p className='text-balance text-center'>There was an error getting the your likes. Please try again later.</p>
		</div>
	</div>

	return (
		<section className="pb-4 mt-4">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{likes.map((element) =>
					<ElementCard data={{ ...element, likedByUser: true }} key={element.id} />
				)}
			</div>
			<PaginationFooter disabledParams totalPages={totalPages} setPage={setPage} page={page} />
		</section>
	);
}
