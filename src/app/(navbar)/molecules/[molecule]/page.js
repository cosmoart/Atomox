import { Molecules } from '@/lib/conts';
import { notFound } from 'next/navigation'
import Elements from '@/components/pages/Elements';
import { Suspense } from 'react';

export async function generateStaticParams () {
	return Molecules.map(molecule => ({ molecule: molecule.id }));
}

export async function generateMetadata ({ params }) {
	const { molecule } = await params;
	const data = Molecules.find(a => a.id === molecule);

	if (!molecule || !data) return null;

	return {
		title: `${data.name} | Atomox`,
		description: data.description
	};
}

export default async function MoleculePage ({ params }) {
	const { molecule } = await params
	const data = Molecules.find(a => a.id === molecule);

	if (!molecule || !data) return notFound();

	return <Suspense fallback={<div className='minHeightScreen'></div>}>
		<Elements data={data} type='Molecules' />
	</Suspense>

}