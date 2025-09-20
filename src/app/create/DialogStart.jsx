import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Atoms, Molecules } from '@/lib/conts'
import { Switch } from '@/components/ui/switch'
import Tabs from '@/components/Tabs'
import { useState } from 'react'
import Image from 'next/image'
// import tailwindIcon from '@/assets/icons/tailwind.svg'

export default function DialogStart ({ useTailwind, setUseTailwind, setHtml, setCss, setElementType, setElementId }) {
	const [selectedItem, setSelectedItem] = useState(Atoms[0])

	const handleSelect = (item, isTailwind) => {
		setSelectedItem(item)
		setHtml(isTailwind ? item.htmlTailwind ?? '' : item.html ?? '')
		setCss(isTailwind ? '' : item.css ?? '')
		setElementId(item.id)
	}

	const handleSwitch = (e) => {
		setUseTailwind(e)

		if (selectedItem) {
			setHtml(e ? selectedItem.htmlTailwind ?? '' : selectedItem.html ?? '')
			setCss(e ? '' : selectedItem.css ?? '')
		}
	}


	return (
		<Dialog defaultOpen={true} >
			<DialogContent className="p-6! max-w-3xl! dark:bg-zinc-900!  hidde-close">
				<DialogTitle className="flex justify-between gap-3">
					What do you want to create?

					<button
						onClick={() => setUseTailwind(!useTailwind)}
						title={useTailwind ? 'Disable Tailwind CSS' : 'Enable Tailwind CSS'}
						className={`rounded-lg p-1 shadow transition group cursor-pointer active:scale-95 ${useTailwind
							? 'bg-sky-500 text-white'
							: 'bg-gray-200 dark:bg-gray-800 dark:text-white'
							}`}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 54 33'
							className='size-[26px] group-hover:scale-110 transition-transform'
							fill='currentColor'
						>
							<path d='M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-5 9.45-4.2 2.05.5 3.5 2 5.1 3.65C30.57 12.65 33.07 15 38.4 15c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 5-9.45 4.2-2.05-.5-3.5-2-5.1-3.65C34.83 2.35 32.33 0 27 0zM13.5 18c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-5 9.45-4.2 2.05.5 3.5 2 5.1 3.65C17.07 30.65 19.57 33 24.9 33c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 5-9.45 4.2-2.05-.5-3.5-2-5.1-3.65C21.33 20.35 18.83 18 13.5 18z' />
						</svg>
					</button>
				</DialogTitle>

				<Tabs
					styled
					tabs={[
						{
							label: 'Atom',
							value: 'atom',
							content: (
								<div className="grid grid-cols-3 gap-2.5 pt-1 mt-3 content-start">
									{Atoms.map((atom, index) => (
										<button
											key={index}
											onClick={() => {
												setElementType('Atoms')
												handleSelect(atom, useTailwind)
											}}
											className={`rounded-md relative group bg-zinc-50 dark:bg-zinc-800 cursor-pointer grow transition-colors ${selectedItem.id === atom.id ? 'bg-gradient-to-l after:bg-gradient-to-l after:-z-20 before:-z-10 after:from-blue-500 after:to-indigo-500 after:via-blue-600 after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:absolute after:-top-1 after:-left-1 after:rounded-md before:bg-zinc-900 before:-top-0.5 before:absolute before:rounded-md before:-left-0.5 before:w-[calc(100%+4px)] before:h-[calc(100%+4px)]  from-blue-500  to-indigo-500 via-blue-600! text-white' : 'card-border'}`}
										>
											<div className='w-full *:scale-x-105 h-21 overflow-hidden rounded-md'>
												{atom.icon}
											</div>
											<div className={`absolute pointer-events-none transition-all py-1 rounded-b-md mx-0 left-0 w-full  flex justify-center items-center bg-gradient-to-l from-blue-500  to-indigo-500 via-blue-600! text-white text-sm font-medium ${selectedItem.id === atom.id ? 'opacity-100 bottom-0' : 'opacity-0 -bottom-4 group-hover:opacity-100 group-hover:bottom-0'}`}>
												{atom.name}
											</div>
										</button>
									))}
								</div>
							)
						},
						{
							label: 'Molecule',
							value: 'molecule',
							content: (
								<div className="grid grid-cols-4 text-[15px] gap-2.5 pt-1 mt-3 content-start">
									{Molecules.map((molecule, index) => (
										<button
											key={index}
											onClick={() => {
												setElementType('Molecules')
												handleSelect(molecule, false)
											}}
											className={`rounded-md relative group bg-zinc-50 dark:bg-zinc-800 cursor-pointer grow transition-colors  ${selectedItem.id === molecule.id ? 'bg-gradient-to-l after:bg-gradient-to-l after:-z-20 before:-z-10 after:from-blue-500 after:to-indigo-500  after:via-blue-600 after:w-[calc(100%+8px)] after:h-[calc(100%+8px)] after:absolute after:-top-1 after:-left-1 after:rounded-md before:bg-zinc-900 before:-top-0.5 before:absolute before:rounded-md before:-left-0.5 before:w-[calc(100%+4px)] before:h-[calc(100%+4px)]  from-blue-500  to-indigo-500 via-blue-600! text-white' : 'card-border'}`}
										>
											<div className='w-full *:scale-x-105 h-21 overflow-hidden rounded-md'>
												{molecule.icon}
											</div>
											<div className={`absolute pointer-events-none transition-all py-1 rounded-b-md mx-0 left-0 w-full  flex justify-center items-center bg-gradient-to-l from-blue-500 gradient1 to-indigo-500 via-blue-600! text-white text-sm font-medium ${selectedItem.id === molecule.id ? 'opacity-100 bottom-0' : 'opacity-0 -bottom-4 group-hover:opacity-100 group-hover:bottom-0'}`}>
												{molecule.name}
											</div>
										</button>
									))}
								</div>
							)
						}
					]}
				/>

				<DialogClose asChild>
					<button className='w-full rounded-lg max-w-[22rem] ml-auto btn-primary gradient1 cursor-pointer mt-3 shining'>
						{/* Start Creating */}
						Create {selectedItem.name}
					</button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}