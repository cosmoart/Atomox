import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ComEditor from '@/components/ComEditor';

export default async function Element ({ id }) {
	return (
		<div className='section min-h-svh'>
			<div className='flex justify-between gap-3 h-full'>
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