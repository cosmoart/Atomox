import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import InputMultiTag from './InputMultiTag'
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { Atoms, Molecules } from '@/lib/conts';
import { Switch } from '@/components/ui/switch';

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

	const component = (elementType === 'Atoms'
		? Atoms.find(el => el.id === elementId)
		: Molecules.find(el => el.id === elementId))

	return (
		<Dialog>
			<DialogTrigger className='px-9 py-1.5 rounded-lg shining gradient1 text-[15px] tracking-wide font-medium text-white transition-all active:scale-95 cursor-pointer'>Create</DialogTrigger>
			<DialogContent className={`p-6! ${status === undefined || status === "loading" ? " max-w-[600px]!" : "max-w-[580px]!"} dark:bg-zinc-900! `}>
				<DialogTitle className="text-center mt-1">
					{status === undefined && <span>Create {component.name} ({elementType})</span>}
					{status === "loading" && <span>Creating {elementType} - {component.name}...</span>}
					{status === 'success' && <span className='flex flex-col items-center gap-5'>
						<CheckCircle2 size={60} className='text-indigo-500' />
						Component created successfully!
					</span>}
					{status === 'error' && <span className='flex flex-col items-center gap-5'>
						<XCircle size={60} />
						Failed to create component
					</span>}
				</DialogTitle>
				<div className='mx-auto w-full'>
					{
						(status === undefined || status === 'loading') && <form className='flex flex-col gap-2 mt-1.5' onSubmit={handleSubmit(onSubmit)} disabled={true}>
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
								<p className='font-medium mt-2 mb-2'>Tags</p>
								<InputMultiTag name="tags" placeholder={component.tagsPlaceholder ?? "Minimalist, 3D, Purple, Animation..."} maxTags={10} control={control} maxLength={15} disabled={status === "loading"} />
								{errors.tags && <p className='text-red-500 text-xs mt-0.5'>{errors.tags.message}</p>}
							</label>
							{/* <input type="text" placeholder='Licence' className='px-3 py-2 rounded-lg card-border w-full' /> */}

							<div className='flex gap-3 items-center justify-end mt-4 '>
								<label className='flex gap-2 items-center'>
									<p className='font-medium '>
										Accept <Link href='/guidelines' className='underline'>Guidelines</Link>
									</p>
									<Switch name="guidelines" control={control} disabled={status === "loading"} />
									{errors.guidelines && <p className='text-red-500 text-xs'>{errors.guidelines.message}</p>}
								</label>

								<button type='submit' disabled={status === "loading"} className='px-8 shining max-w-[180px]  w-full btn-primary flex gap-1 justify-center items-center not-disabled:cursor-pointer disabled:cursor-progress'>
									<svg className={`animate-[spin_300ms_linear_900ms_forwards_infinite] ${status === 'loading' ? 'w-5 ' : 'w-0'} h-5 transition-all`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9" /><path d="M17 12a5 5 0 1 0-5 5" /></g></svg>
									{status === 'loading' ? 'Creating...' : 'Create'}
								</button>
							</div>
						</form>
					}
					{
						status === 'success' && <div className='flex flex-col items-center'>
							<p className='opacity-95 mb-4'>
								Remember that the component will not be visible until it is manually accepted; if it is not accepted, it will be deleted. You can view and delete your unpublished components in your profile.
							</p>
							<Link href={`/u/${user.username}`} className='px-8 ml-auto btn-primary flex gap-1 justify-center items-center not-disabled:cursor-pointer mt-3 text-[15px] group'>
								View your components
								<ArrowRight size={20} className='w-0 transition-all group-hover:w-4' />
							</Link>
						</div>
					}
					{
						status === 'error' && <p className='text-center mb-2'>
							An unexpected error has occurred. Please try again later.
						</p>
					}
				</div>
			</DialogContent>
		</Dialog>
	)
}