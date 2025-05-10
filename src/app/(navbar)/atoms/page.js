import { Atoms as data } from '@/lib/conts'
import ElementsList from '@/components/pages/ElementsList';

export default function Atoms () {
	return (<ElementsList data={data} title="Atoms" description="Atoms are the smallest components that can be used to create more complex components. They are usually used to create buttons, icons, and other small elements." />
	)
}