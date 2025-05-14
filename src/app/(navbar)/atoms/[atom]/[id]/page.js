import Element from '@/components/pages/Element'

export default async function Atom ({ params }) {
	const { id, atom } = await params
	console.log(atom);

	return (
		<Element id={id} elementId={atom} />
	)
}