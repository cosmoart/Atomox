import { Dialog, DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Atoms, Molecules } from '@/lib/conts'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export default function DialogStart ({ useTailwind, setUseTailwind, setHtml, setCss, setElementType, setElementId }) {
	return (
		<Dialog defaultOpen={true}>
			<DialogContent>
				<DialogTitle>What do you want to do?</DialogTitle>
				<div className="flex items-center gap-2 ">
					<label htmlFor="mode">Tailwind</label>
					<Switch
						id="mode"
						checked={useTailwind}
						onCheckedChange={setUseTailwind}
					/>
				</div>
				<Tabs defaultValue="atom" className="flex-1 flex flex-col">
					<TabsList className="w-full justify-start">
						<TabsTrigger value="atom" onClick={() => setElementType('Atom')}>Atom</TabsTrigger>
						<TabsTrigger value="molecule" onClick={() => setElementType('Molecule')}>Molecule</TabsTrigger>
					</TabsList>

					<TabsContent value="atom" className="flex-1 rounded overflow-hidden flex flex-wrap gap-2">
						{
							Atoms.map((atom, index) => (
								<button onClick={() => {
									setHtml(atom.html),
										setCss(atom.css)
									setElementId(atom.id)
								}}
									key={index} className='rounded bg-zinc-800 px-5 py-2 cursor-pointer grow'>
									{atom.name}
								</button>
							))
						}
					</TabsContent>

					<TabsContent value="molecule" className="flex-1 rounded overflow-hidden flex flex-wrap gap-2">
						{
							Molecules.map((molecule, index) => (
								<button key={index} className='rounded bg-zinc-800 px-5 py-2 cursor-pointer grow'>
									{molecule.name}
								</button>
							))
						}
					</TabsContent>
				</Tabs>

				<DialogClose asChild>
					<button type="button" variant="secondary">
						Close
					</button>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}