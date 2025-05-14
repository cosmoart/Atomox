import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import InputMultiTag from './InputMultiTag'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	creditsLink: z.string().min(5, "Enter a link").max(30, `Maximum 30 characters`).optional(),
	creditsName: z.string().min(3, "Enter a name").max(20, `Maximum 20 characters`).optional(),
	tags: z.array(z.string().min(3, "Enter a tag").max(15, `Maximum 15 characters`)).max(10, `Maximum 10 tags`),
})

export default function DialogSubmit ({ onSubmit, elementId, elementType }) {
	const { handleSubmit, control, register, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

	// const onSubmit = (data) => {
	// 	console.log(data)
	// }

	return (
		<Dialog>
			<DialogTrigger className='px-8 font-medium py-1.5 rounded-lg bg-blue-600'>Send</DialogTrigger>
			<DialogContent>
				<DialogTitle>Are you absolutely sure?</DialogTitle>
				<div className='max-w-sm mx-auto w-full py-6'>
					<h3 className='font-medium text-lg mb-4'>{elementType} - {elementId}</h3>
					<form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
						<fieldset>
							<legend className='font-medium text-lg mb-4'>Credits</legend>
							<div className='flex gap-3'>
								<input type="text" placeholder='shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('creditsName')} />
								<input type="text" placeholder='https://x.com/shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('creditsLink')} />
							</div>
						</fieldset>

						<InputMultiTag name="tags" placeholder="Tags" maxTags={10} control={control} maxLength={15} />

						{/* <input type="text" placeholder='Licence' className='px-3 py-2 rounded-lg card-border w-full' /> */}

						<button type='submit' className='px-10 py-2 rounded-lg bg-blue-600 mt-5'>Send</button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}