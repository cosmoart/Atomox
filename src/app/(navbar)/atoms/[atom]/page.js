import { Atoms } from '@/lib/conts';
import { notFound } from 'next/navigation'
import Elements from '@/components/pages/Elements';

export async function generateStaticParams () {
	return Atoms.map(atom => ({ atom: atom.id }));
}

export default async function AtomPage ({ params }) {
	const { atom } = await params
	const data = Atoms.find(a => a.id === atom);

	if (!atom || !data) return notFound();

	return (<Elements data={data} type="Atoms" />)

}