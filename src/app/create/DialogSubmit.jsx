import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import InputMultiTag from './InputMultiTag'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Loader2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

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
		.min(2, "Enter at least 2 tags")
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


export default function DialogSubmit ({ onSubmit, elementId, elementType, status }) {
	const { handleSubmit, control, register, formState: { errors } } = useForm({ resolver: zodResolver(schema) });
	const { user } = useUser();

	return (
		<Dialog >
			<DialogTrigger className='px-10 py-1.5 rounded-lg bg-gradient-to-l from-0% to-100% from-blue-500 to-indigo-500 text-[15px] tracking-wide font-medium text-white via-blue-600 via-20% ring-blue-500 transition-all active:scale-95 card-border cursor-pointer'>Send</DialogTrigger>
			<DialogContent className={`p-6! max-w-[600px]! bg-zinc-900! ${status !== undefined ? "hidde-close" : ""}`}>
				<DialogTitle className="text-center mt-1">
					{status === undefined && <span>Create {elementType} - {elementId}</span>}
					{status === "loading" && <span>Creating {elementType} - {elementId}</span>}
					{status === 'success' && <span>Component created successfully!</span>}
					{status === 'error' && <span>Failed to create component</span>}
				</DialogTitle>
				<div className='mx-auto w-full'>
					{
						(status === undefined || status === 'loading') && <form className='flex flex-col gap-2 mt-3' onSubmit={handleSubmit(onSubmit)} disabled={true}>
							<fieldset>
								<legend className='font-medium mb-2'>Credits</legend>
								<div className='flex gap-3'>
									<input disabled={status === "loading"} type="text" placeholder='shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('credits_name')} />
									<input disabled={status === "loading"} type="text" placeholder='https://x.com/shadcn' className='px-3 py-2 rounded-lg card-border w-full' {...register('credits_link')} />
								</div>
							</fieldset>
							{errors.credits_link && <p className='text-red-500 text-xs'>{errors.credits_link.message}</p>}
							{errors.credits_name && <p className='text-red-500 text-xs'>{errors.credits_name.message}</p>}

							<label>
								<p className='font-medium mt-3 mb-2'>Tags</p>
								<InputMultiTag name="tags" placeholder="3D, Purple, Animation..." maxTags={10} control={control} maxLength={15} disabled={status === "loading"} />
								{errors.tags && <p className='text-red-500 text-xs mt-0.5'>{errors.tags.message}</p>}
							</label>
							{/* <input type="text" placeholder='Licence' className='px-3 py-2 rounded-lg card-border w-full' /> */}

							<button type='submit' disabled={status === "loading"} className='px-10 max-w-xs ml-auto w-full btn-primary flex gap-1 justify-center items-center not-disabled:cursor-pointer mt-3 disabled:cursor-progress'>
								<Loader2 className={`${status === 'loading' ? 'w-5 ' : 'w-0'} h-5 animate-spin duration-100`} />
								{status === 'loading' ? 'Creating...' : 'Create'}
							</button>
						</form>
					}
					{
						status === 'success' && <div className='flex flex-col items-center '>
							<CheckCircle2 size={70} className='text-green-600' />
							<p className='mt-2 text-base'>
								Component created successfully!. You can see it in your elements list.
							</p>
							<Link href={`/u/${user.username}`} className='px-5 max-w-xs ml-auto w-full btn-primary flex gap-1 justify-center items-center not-disabled:cursor-pointer mt-3 disabled:cursor-progress text-[15px] group'>
								View your components
								<ArrowRight size={20} className='w-0 transition-all group-hover:w-4' />
							</Link>
						</div>
					}
					{
						status === 'error' && <div className='flex flex-col items-center '>
							<XCircle size={70} />
							<p className='mt-2'>
								Please try again
							</p>
						</div>
					}
				</div>
			</DialogContent>
		</Dialog>
	)
}