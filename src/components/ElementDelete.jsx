'use client'

import { useState } from 'react'
import { EllipsisVertical, Trash, Loader2, CheckCircle2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
				mode === 'menu' && <DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon">
							<EllipsisVertical className="h-5 w-5" />
						</Button>
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
						<DialogTitle>Confirm deletion</DialogTitle>
					</DialogHeader>

					<div className="min-h-[80px] flex items-center justify-center">
						<AnimatePresence mode="wait">
							{status === 'idle' && (
								<motion.div
									key="idle"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="text-muted-foreground"
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
									className="flex flex-col items-center text-blue-600"
								>
									<Loader2 className="w-5 h-5 animate-spin mb-1" />
									Deleting...
								</motion.div>
							)}

							{status === 'success' && (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									className="flex flex-col items-center text-green-600"
								>
									<CheckCircle2 className="w-5 h-5 mb-1" />
									Element deleted successfully
								</motion.div>
							)}

							{status === 'error' && (
								<motion.div
									key="error"
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									className="flex flex-col items-center text-red-600"
								>
									<XCircle className="w-5 h-5 mb-1" />
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
									<Button variant="outline" onClick={resetDialog}>
										Cancel
									</Button>
									<Button onClick={handleDelete} disabled={status === 'loading'}>
										Delete
									</Button>
								</motion.div>
							)}

							{(status === 'success' || status === 'error') && (
								<motion.div
									key="done-footer"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Button onClick={resetDialog}>Close</Button>
								</motion.div>
							)}
						</AnimatePresence>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}
