import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from './ComEditor'

export default async function Atom ({ params }) {
	const { id } = await params


	return (
		<div className='section'>
			<div className='flex justify-between gap-3'>
				<h1 className='text-xl font-medium'>Atom Title {id}</h1>
				<div className='flex gap-2 items-center'>
					<Avatar className="size-8" >
						<AvatarImage src="https://github.com/cosmoart.png" />
						<AvatarFallback>CA</AvatarFallback>
					</Avatar>

					<h1 className='font-medium'>Cosmo</h1>
				</div>
			</div>

			<ComEditor />
		</div>
	)
}