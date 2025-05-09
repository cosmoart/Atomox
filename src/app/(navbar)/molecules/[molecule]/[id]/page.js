export default async function Molecule ({ params }) {
	const { id } = await params

	return (
		<div className='section'>
			Molecule {id}
		</div>
	)
}