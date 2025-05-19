'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserLikes } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';

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

	if (loading || likes === "loading") return <div className="pb-4">
		<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
			{[...Array(8)].map((_, i) => <ElementCardSkeleton key={i} />)}
		</div>
	</div>

	if (likes.length === 0) return <div className="pb-4">
		<p>You haven't liked any element yet.</p>
	</div>

	if (likes.error) return <div className="pb-4">
		<p>Error al obtener likes</p>
	</div>

	return (
		<div className="pb-4">
			<div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
				{likes.map((element) =>
					<ElementCard data={{ ...element, likedByUser: true }} key={element.id} />
				)}
			</div>
		</div>
	);
}
