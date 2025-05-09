import Link from 'next/link'
import { Atoms, Molecules } from '@/lib/conts'

export default function Footer () {
	return (
		<footer className='section flex gap-5 mt-10 card-border mx-1 rounded-t-xl'>
			<nav>
				<h5 className='text-lg font-medium'>Atoms</h5>
				<ul>
					{Atoms.map((atom, index) => (
						<li key={index}>
							<Link href={`/atom/${atom.slug}`}>{atom.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<nav>
				<h5 className='text-lg font-medium'>Molecules</h5>
				<ul>
					{Molecules.map((molecule, index) => (
						<li key={index}>
							<Link href={`/molecule/${molecule.slug}`}>{molecule.name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<a href="https://github.com/cosmoart/Atomox" target="_blank" rel="noopener noreferrer">GitHub</a>
		</footer>
	)
}