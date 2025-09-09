'use client'

import { useState } from 'react'
import { EllipsisVertical, Trash, CheckCircle2, XCircle } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { deleteElement } from '@/lib/actions'

export default function ElementDelete ({ id, mode = "menu" }) {
	const [open, setOpen] = useState(false)
	const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'

	async function handleDelete () {
		setStatus('loading')
		try {
			const data = await deleteElement(id)
			if (data?.error) {
				setStatus('error')
			} else {
				setStatus('success')
				setTimeout(() => {
					window.location.reload()
				}, 1000)
			}
		} catch (error) {
			setStatus('error')
		}
	}

	function resetDialog () {
		setOpen(false)
		setTimeout(() => setStatus('idle'), 300)
	}

	return (
		<>
			{
				mode === 'menu' && <DropdownMenu modal={false}>
					<DropdownMenuTrigger asChild>
						<button variant="ghost" size="icon" className="py-1 px-0.5 cursor-pointer active:scale-90 transition-transform">
							<EllipsisVertical className="size-5" />
						</button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onClick={() => setOpen(true)} >
							<Trash className="w-4 h-4 mr-2" />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			}

			{
				mode === "button" && <button onClick={() => setOpen(true)} className='rounded-full cursor-pointer active:scale-95 bg-red-400 p-1.5 hover:scale-105 transition-transform'>
					<Trash size={20} />
				</button>
			}

			<Dialog open={open} onOpenChange={resetDialog}>
				<DialogContent className="sm:max-w-md dark:bg-zinc-900! ">
					<DialogHeader>
						<DialogTitle>
							{status === "idle" && "Confirm deletion"}
							{status === "loading" && "Deleting..."}
							{status === "success" && "Element deleted"}
							{status === "error" && "Error"}
						</DialogTitle>
					</DialogHeader>

					<div className="min-h-[80px] flex items-center justify-center">
						<AnimatePresence mode="wait">
							{status === 'idle' && (
								<motion.div
									key="idle"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="dark:text-zinc-300 text-zinc-700"
								>
									Are you sure you want to delete this element? This action cannot be undone.
								</motion.div>
							)}

							{status === 'loading' && (
								<motion.div
									key="loading"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="flex flex-col gap-2.5 font-medium items-center pt-6.5 pb-3"
								>
									<svg className='animate-[spin_300ms_linear_900ms_forwards_infinite] size-12 transition-all' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8"><path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9" /><path d="M17 12a5 5 0 1 0-5 5" /></g></svg>
									Deleting...
								</motion.div>
							)}

							{status === 'success' && (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									className="flex flex-col items-center font-medium gap-2.5 pt-6.5 pb-3"
								>
									<CheckCircle2 className="size-12" />
									Element deleted successfully
								</motion.div>
							)}

							{status === 'error' && (
								<motion.div
									key="error"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									className="flex flex-col items-center font-medium gap-2.5 pt-6.5 pb-3"
								>
									<XCircle className="size-12" />
									Failed to delete element
								</motion.div>
							)}
						</AnimatePresence>
					</div>

					<DialogFooter>
						<AnimatePresence mode="wait">
							{status === 'idle' && (
								<motion.div
									key="idle-footer"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="flex gap-2 justify-end w-full"
								>
									<button className='font-medium cursor-pointer px-7 py-2 rounded-md shadow-md transition-all not-disabled:active:scale-95 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800/80' onClick={resetDialog}>
										Cancel
									</button>
									<button className='font-medium cursor-pointer px-7 py-2 rounded-md shadow-md transition-all text-white not-disabled:active:scale-95 bg-red-500 hover:bg-red-600/90 flex gap-1.5 items-center' onClick={handleDelete} disabled={status === 'loading'}>
										<Trash className="size-4 font-medium" />
										Delete
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
