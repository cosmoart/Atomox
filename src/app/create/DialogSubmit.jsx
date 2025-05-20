import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import InputMultiTag from './InputMultiTag'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	credits_link: z.string()
		.transform(val => val === "" ? undefined : val)
		.optional()
		.refine(val => val === undefined || val.length >= 5, {
			message: "Enter a link with at least 5 characters",
		})
		.refine(val => val === undefined || /^https?:\/\//.test(val), {
			message: "Invalid URL",
		})
		.refine(val => val === undefined || val.length <= 120, {
			message: "Maximum 120 characters",
		}),
	credits_name: z.string()
		.transform(val => val === "" ? undefined : val)
		.optional()
		.refine(val => val === undefined || val.length >= 3, {
			message: "Enter a name with at least 3 characters",
		})
		.refine(val => val === undefined || val.length <= 20, {
			message: "Maximum 20 characters",
		}),
	tags: z
		.array(z.string().min(2, "Enter a tag").max(15, "Maximum 15 characters"))
		.min(3, "Enter at least 3 tags")
		.max(10, "Maximum 10 tags"),
}).superRefine((data, ctx) => {
	const { credits_link, credits_name } = data;

	if (credits_link && !credits_name) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["credits_name"],
			message: "credits_name is required when credits_link is provided",
		});
	}

	if (credits_name && !credits_link) {
		ctx.addIssue({
			code: z.ZodIssueCode.custom,
			path: ["credits_link"],
			message: "credits_link is required when credits_name is provided",
		});
	}
});


export default function DialogSubmit ({ onSubmit, elementId, elementType }) {
	const { handleSubmit, control, register, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

	return (
		<Dialog>
			<DialogTrigger className='px-7 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all active:scale-95 card-border cursor-pointer'>Send</DialogTrigger>
			<DialogContent>
				<DialogTitle>Create {elementType} - {elementId}</DialogTitle>
				<div className='mx-auto w-full'>
					<form className='flex flex-col gap-2' onSubmit={handleSubmit(onSubmit)}>
						<fieldset>
							<legend className='font-medium text-lg mb-4'>Credits</legend>
							<div className='flex gap-3'>
								<input type="text" placeholder='shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('credits_name')} />
								<input type="text" placeholder='https://x.com/shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('credits_link')} />
							</div>
						</fieldset>
						{errors.credits_link && <p className='text-red-500 text-xs'>{errors.credits_link.message}</p>}
						{errors.credits_name && <p className='text-red-500 text-xs'>{errors.credits_name.message}</p>}

						<label>
							<p>Tags</p>
							<InputMultiTag name="tags" placeholder="3D, Purple, Animation..." maxTags={10} control={control} maxLength={15} />
							{errors.tags && <p className='text-red-500 text-xs'>{errors.tags.message}</p>}
						</label>
						{/* <input type="text" placeholder='Licence' className='px-3 py-2 rounded-lg card-border w-full' /> */}

						<button type='submit' className='px-10 py-2 rounded-lg bg-blue-600 mt-5'>Send</button>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	)
}