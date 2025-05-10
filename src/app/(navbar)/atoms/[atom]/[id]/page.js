import Element from '@/components/pages/Element'

export default async function Atom ({ params }) {
	const { id } = await params

	return (
		<Element id={id} />
	)
}