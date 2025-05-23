'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserLikes } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';
import Image from 'next/image';
import componentsIcon from '@/assets/icons/components.svg';
import { XCircle } from 'lucide-react';

export default function UserLikes () {
	const [likes, setLikes] = useState("loading");
	const [loading, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			getUserLikes()
				.then(setLikes)
				.catch(() => setLikes({ error: true }));
		});
	}, []);

	if (loading || likes === "loading") return <div className="pb-4 mt-5">
		<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4">
			{[...Array(8)].map((_, i) => <ElementCardSkeleton key={i} />)}
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
		<div className="pb-4">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mt-5">
				{likes.map((element) =>
					<ElementCard data={{ ...element, likedByUser: true }} key={element.id} />
				)}
			</div>
		</div>
	);
}
