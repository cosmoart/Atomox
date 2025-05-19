import Element from '@/components/pages/Element'

export default async function Molecule ({ params }) {
	const { id } = await params
	return <Element id={id} />
}