import { Atoms } from '@/lib/conts';
import { notFound } from 'next/navigation'
import Elements from '@/components/pages/Elements';
import { Suspense } from 'react';

export async function generateStaticParams () {
	return Atoms.map(atom => ({ atom: atom.id }));
}

export default async function AtomPage ({ params }) {
	const { atom } = await params
	const data = Atoms.find(a => a.id === atom);

	if (!atom || !data) return notFound();

	return (<Suspense fallback={<div className='minHeightScreen'></div>}>
		<Elements data={data} type='Atoms' />
	</Suspense>)
}