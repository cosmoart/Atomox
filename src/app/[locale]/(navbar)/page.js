// import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';
import { Atoms, Molecules } from '@/lib/conts';
import { currentUser } from '@clerk/nextjs/server'

export default async function Home () {
	const user = await currentUser();
	console.log(user);

	// const t = useTranslations('HomePage');

	return (
		<div className='section'>
			<section className='h-[calc(100svh-60px)] flex items-center justify-center flex-col'>
				<Image src={Logo} alt="Logo" width={250} height={250} className="dark:invert right-0 left-0 mx-auto -z-10" />
				<h1 className='text-6xl font-bold bg-zinc-950 mb-5'>Atomox</h1>
			</section>

			<h2 className='text-2xl font-medium'>Atoms</h2>
			<article className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6'>
				{
					Atoms.map(atom => (
						<Link href={`atoms/${atom.id}`} key={atom.id} className='flex flex-col items-center justify-center rounded-lg card-border p-4  transition-shadow '>

							<h3 className="text-lg font-medium">{atom.name}</h3>
							{atom.description}
						</Link>
					))
				}
			</article>

			<h2 className='text-2xl font-medium'>Molecules</h2>
			<article className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6'>

				{
					Molecules.map(atom => (
						<Link href={`molecules/${atom.id}`} key={atom.id} className='flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-4 shadow-md transition-shadow hover:shadow-lg dark:border-zinc-700 dark:hover:border-zinc-600'>

							<h3 className="text-lg font-medium">{atom.name}</h3>
							{atom.description}
						</Link>
					))
				}
			</article>
		</div>
	);
}
