import Element from '@/components/pages/Element'
import { Atoms } from '@/lib/conts'

export async function generateMetadata ({ params }) {
	const { atom } = await params
	const ato = Atoms.find(el => el.id === atom)

	return {
		title: `${ato.name} | Atomox`,
		description: `Atomox ${ato.name} component`
	}
}

export default async function Atom ({ params }) {
	const { id, atom } = await params
	return <Element id={id} elementId={atom} />
}