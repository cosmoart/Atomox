import Element from '@/components/pages/Element'

export default async function Molecule ({ params }) {
	const { id, molecule } = await params
	return <Element id={id} elementId={molecule} />
}