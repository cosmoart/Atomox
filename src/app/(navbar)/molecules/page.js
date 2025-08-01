import { Molecules as data } from '@/lib/conts'
import ElementsList from '@/components/pages/ElementsList';

export const metadata = {
	title: 'Molecules | Atomox',
	description: 'They can be used to create more complex components, such as forms, cards, and modals. Examples of molecules include input forms, buttons with icons, and cards with images and text.'
}


export default function Molecules () {
	return (<ElementsList data={data} title='Molecules' description='They can be used to create more complex components, such as forms, cards, and modals. Examples of molecules include input forms, buttons with icons, and cards with images and text.' />
	)
}