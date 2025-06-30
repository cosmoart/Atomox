import Element from '@/components/pages/Element'
import { Molecules } from '@/lib/conts'

export async function generateMetadata ({ params }) {
	const { id, molecule } = await params
	const mol = Molecules.find(el => el.id === molecule)

	return {
		title: `${mol.name} | Atomox`,
		description: `Atomox ${mol.name} component`
	}
}

export default async function Molecule ({ params }) {
	const { id, molecule } = await params
	return <Element id={id} elementId={molecule} />
}