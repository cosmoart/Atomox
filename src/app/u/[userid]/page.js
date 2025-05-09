export default async function UserProfile ({ params }) {
	const { userid } = await params;

	return (
		<div className='section'>
			{userid}
		</div>
	)
}