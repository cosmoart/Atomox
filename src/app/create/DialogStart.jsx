import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Atoms, Molecules } from '@/lib/conts'
import { Switch } from '@/components/ui/switch'
import Tabs from '@/components/Tabs'
import { useState } from 'react'
import Image from 'next/image'
import tailwindIcon from '@/assets/icons/tailwind.svg'

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
			<DialogContent className="p-6! max-w-2xl! bg-zinc-900!  hidde-close">
				<DialogTitle className="flex justify-between gap-3">
					What do you want to create?
					<div className="flex items-center gap-3 ">
						<label htmlFor="mode">
							<Image src={tailwindIcon} alt='Tailwind logo' title='Tailwind' width={24} height={24} />
						</label>
						<Switch
							id="mode"
							checked={useTailwind}
							onCheckedChange={handleSwitch}
						/>
					</div>
				</DialogTitle>

				<Tabs
					tabs={[
						{
							label: 'Atom',
							value: 'atom',
							content: (
								<div className="flex flex-wrap gap-2.5 pt-1 mt-3 content-start">
									{Atoms.map((atom, index) => (
										<button
											key={index}
											onClick={() => {
												setElementType('Atom')
												handleSelect(atom, useTailwind)
											}}
											className="rounded min-w-36 bg-zinc-50 card-border dark:bg-zinc-800 px-5 py-2 cursor-pointer grow"
										>
											{atom.name}
										</button>
									))}
								</div>
							)
						},
						{
							label: 'Molecule',
							value: 'molecule',
							content: (
								<div className="flex flex-wrap gap-2.5 pt-1 mt-3 content-start">
									{Molecules.map((molecule, index) => (
										<button
											key={index}
											onClick={() => {
												setElementType('Molecule')
												handleSelect(molecule, false)
											}}
											className="rounded min-w-36 bg-zinc-50 card-border dark:bg-zinc-800 px-5 py-2 cursor-pointer grow"
										>
											{molecule.name}
										</button>
									))}
								</div>
							)
						}
					]}
				/>

				<DialogClose asChild>
					<button className='w-full btn-primary cursor-pointer mt-5'>
						Start Creating
					</button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}