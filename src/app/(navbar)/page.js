import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import { Atoms, Molecules } from '@/lib/conts';
import { currentUser } from '@clerk/nextjs/server'

export default async function Home () {
	const user = await currentUser();

	return (
		<div className='section'>
			<section className='heightScreen flex items-center justify-center flex-col'>
				<Image src={Logo} alt='Logo' width={250} height={250} className='dark:invert right-0 left-0 mx-auto -z-10' />
				<h1 className='text-6xl font-bold  mb-5'>Atomox</h1>
			</section>

			<article>
				<h2 className='text-2xl font-medium mb-4 mt-8'>Atoms</h2>
				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Atoms.map(atom => (
							<Link href={`atoms/${atom.id}`} key={atom.id} className='flex flex-col justify-center rounded-lg card-border p-4  transition-shadow '>

								<h3 className='text-lg font-medium'>{atom.name}</h3>
								<p className='text-[15px] line-clamp-2'>{atom.description}</p>
							</Link>
						))
					}
				</div>
			</article>

			<article >
				<h2 className='text-2xl font-medium mb-4 mt-8'>Molecules</h2>

				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Molecules.map(molecule => (
							<Link href={`molecules/${molecule.id}`} key={molecule.id} className='flex flex-col justify-center rounded-lg border border-zinc-200 p-4 shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700 dark:hover:border-zinc-600'>

								<h3 className='text-lg font-medium'>{molecule.name}</h3>
								<p className='text-[15px] line-clamp-2'>{molecule.description}</p>
							</Link>
						))
					}
				</div>
			</article>
		</div>
	);
}
