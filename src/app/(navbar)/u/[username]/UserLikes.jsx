'use client';

import { useEffect, useState, useTransition } from 'react';
import { getUserLikes } from '@/lib/actions';
import ElementCard, { ElementCardSkeleton } from '@/components/ElementCard';

export default function UserLikes () {
	const [likes, setLikes] = useState([]);
	const [loading, startTransition] = useTransition();

	useEffect(() => {
		startTransition(() => {
			getUserLikes()
				.then(setLikes)
				.catch(() => setLikes({ error: true }));
		});
	}, []);

	if (loading) return <div className="pb-4">
		<h2 className="text-xl font-semibold mb-4">Your Likes</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{[...Array(6)].map((_, i) => <ElementCardSkeleton key={i} />)}
		</div>
	</div>

	if (likes.length === 0) return <div className="pb-4">
		<h2 className="text-xl font-semibold mb-4">Your Likes</h2>
		<p>You haven't liked any element yet.</p>
	</div>

	if (likes.error) return <div className="pb-4">
		<h2 className="text-xl font-semibold mb-4">Your Likes</h2>
		<p>Error al obtener likes</p>
	</div>

	return (
		<div className="pb-4">
			<h2 className="text-xl font-semibold mb-4">Your Likes</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{likes.map((element) =>
					<ElementCard data={{ ...element, likedByUser: true }} key={element.id} />
				)}
			</div>
		</div>
	);
}
