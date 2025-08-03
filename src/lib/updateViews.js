'use client'
import { updateViews } from '@/lib/actions';
import { useEffect } from 'react';

export default function UpdateViewsAction ({ id, views }) {
	useEffect(() => {
		const key = `viewed-${id}`;
		const hasViewed = sessionStorage.getItem(key);

		if (!hasViewed) {
			updateViews(id, views);
			sessionStorage.setItem(key, 'true');
		}
	}, []);

	return null;
}
