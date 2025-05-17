import { Molecules } from '@/lib/conts';
import { notFound } from 'next/navigation'
import Elements from '@/components/pages/Elements';

export async function generateStaticParams () {
	return Molecules.map(molecule => ({ molecule: molecule.id }));
}

export default async function MoleculePage ({ params }) {
	const { molecule } = await params
	const data = Molecules.find(a => a.id === molecule);

	if (!molecule || !data) return notFound();

	return (<Elements data={data} type='Molecules' />)

}