import Link from 'next/link';
import { Atoms, Molecules } from '@/lib/conts';
import { ArrowRight, Code, Package, Zap } from 'lucide-react';
import StarOnGitHub from '@/components/StarOnGithub'
import ComponentsGrid from '@/components/home/ComponentsGrid';
import Image from 'next/image';
import Logo from '@/assets/icons/logo.svg';

export default async function Home () {
	return (
		<div className='section'>
			<div className='absolute w-full top-0 h-[calc(100svh+10px)] -z-10 left-0 bg-gradient-to-br dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 from-slate-50 via-indigo-200 to-slate-50 border-b border-white/10 opacity-60 dark:opacity-40'></div>

			<div className='absolute max-h-[880px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_top] bg-no-repeat sm:bg-positiox-[38%_top] md:bg-positiox-[40%_top] lg:bg-positiox-[44%_top] bg-[url("https://headlessui.com/_next/static/media/bg-top.c54a3f7e.jpg")] xl:bg-top forced-colors:hidden' aria-hidden='true'></div>
			<div className='absolute max-h-[880px] opacity-75 inset-0 top-0 m-0.5 left-0 rounded-xl -z-10  bg-positiox-[35%_bottom] bg-no-repeat mix-blend-screen sm:bg-positiox-[38%_bottom] bg-[url("https://headlessui.com/_next/static/media/bg-bottom.e4e0724b.jpg")] md:bg-positiox-[40%_bottom] lg:bg-positiox-[44%_bottom] xl:bg-bottom forced-colors:hidden' aria-hidden='true'></div>

			<section className='heightScreen max-h-[800px] flex items-center flex-row-reverse justify-center gap-12 relative pb-12'>
				<div className='w-full mt-10 flex flex-col sm:justify-between items-center lg:items-start'>
					<div className='flex gap-3 items-center mb-4'>
						<Image src={Logo} alt='Logo' width={200} height={200} className='dark:invert right-0 left-0 mx-auto lg:mx-0 size-24' />
						<div>
							<StarOnGitHub />
							<h1 className='text-7xl font-bold my-2'>Atomox</h1>
						</div>
					</div>
					{/* <StarOnGitHub />
					<Image src={Logo} alt='Logo' width={200} height={200} className='dark:invert right-0 left-0 mx-auto lg:mx-0 size-28 mt-5 ' />
					<h1 className='text-7xl font-bold my-2'>Atomox</h1> */}
					<p className='text-[17px] mb-5 max-w-[60ch]'>A collaborative platform where developers and designers can share, explore, and give feedback on reusable web components.</p>

					<nav className='flex gap-2 w-full max-w-[400px]'>
						<Link href='/atoms' className='btn-primary px-4 shining-button py-1.5 rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2'>
							View atoms
							<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
						</Link>
						<Link href='/molecules' className='btn-primary px-4 shining-button py-1.5 rounded-lg grow text-[15px] tracking-wide pl-6 cursor-pointer justify-center group flex items-center gap-2'>
							View molecules
							<ArrowRight size={19} className='w-0 transition-all group-hover:w-5 ' />
						</Link>
					</nav>
				</div>

				<ComponentsGrid />
			</section>

			<section className='container mx-auto px-4 py-16'>
				<div className='grid gap-8 md:grid-cols-3'>
					<article className='rounded-xl bg-gradient-to-br from-indigo-200/50 to-indigo-200/50 dark:from-indigo-900/40 dark:to-indigo-900/40 backdrop-blur-sm p-6 border border-white/10 shadow-lg'>
						<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
							<Zap className='h-6 w-6 text-indigo-400' />
						</div>
						<h3 className='mb-2 text-xl font-semibold dark:text-white'>Fast Development</h3>
						<p className='dark:text-gray-300'>
							Build UIs in record time with pre-built, optimized components that work out of the box.
						</p>
					</article>

					<article className='rounded-xl bg-gradient-to-br from-indigo-200/50 to-indigo-200/50 dark:from-indigo-900/40 dark:to-indigo-900/40 backdrop-blur-sm p-6 border border-white/10 shadow-lg'>
						<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
							<Code className='h-6 w-6 text-indigo-400' />
						</div>
						<h3 className='mb-2 text-xl font-semibold dark:text-white'>Easy Maintenance</h3>
						<p className='dark:text-gray-300'>
							Consistent patterns and well-documented code make maintenance a breeze for teams of any size.
						</p>
					</article>

					<div className='rounded-xl bg-gradient-to-br from-indigo-200/50 to-indigo-200/50 dark:from-indigo-900/40 dark:to-indigo-900/40 backdrop-blur-sm p-6 border border-white/10 shadow-lg'>
						<div className='mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500/20 to-indigo-500/20'>
							<Package className='h-6 w-6 text-indigo-400' />
						</div>
						<h3 className='mb-2 text-xl font-semibold dark:text-white'>Accessibility Built-in</h3>
						<p className='dark:text-gray-300'>
							Every component follows WCAG guidelines, ensuring your applications are usable by everyone.
						</p>
					</div>
				</div>
			</section>

			<section className='container mx-auto px-4 py-16'>
				<div className='mx-auto max-w-3xl'>
					<div className='mb-8 text-center'>
						<h2 className='mb-4 text-3xl font-bold md:text-4xl'>Simple to Use</h2>
						<p className='opacity-90'>Just copy and paste the code of the component you want to use.</p>
					</div>
					<div className='rounded-xl overflow-hidden bg-slate-950 border border-indigo-500/20 shadow-xl'>
						<div className='flex items-center gap-2 bg-slate-900 px-4 py-2'>
							<div className='h-3 w-3 rounded-full bg-red-500'></div>
							<div className='h-3 w-3 rounded-full bg-indigo-500'></div>
							<div className='h-3 w-3 rounded-full bg-indigo-500'></div>
							<div className='ml-2 text-sm text-gray-400'>Button.html</div>
						</div>
						<div className='p-4 text-sm font-mono text-gray-300 overflow-x-auto'>
							<pre>{`import { Button } from 'atomox/components';

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <h1>Welcome to My App</h1>
      <p>Built with Atomox components</p>
      <Button variant="primary">
        Get Started
      </Button>
    </div>
  );
}`}</pre>
						</div>
					</div>
				</div>
			</section>

			<article className='bg-grid pb-10 pt-6 mt-8'>
				<h2 className='text-2xl md:text-4xl text-center font-medium pb-5 2xl:mb-7'>Atoms</h2>
				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Atoms.map(atom => (
							<Link href={`atoms/${atom.id}`} key={atom.id} className='flex bg-gradient-to-b flex-col justify-center rounded-lg card-border p-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.01] dark:from-zinc-900/50 dark:to-zinc-950 backdrop-blur-sm'>

								<h3 className='text-lg font-medium'>{atom.name}</h3>
								<p className='text-[15px] line-clamp-2 opacity-85'>{atom.description}</p>
							</Link>
						))
					}
				</div>
			</article>

			<article className='bg-grid pb-10 pt-6 mt-8'>
				<h2 className='text-2xl md:text-4xl text-center font-medium pb-5 2xl:mb-7'>Molecules</h2>

				<div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
					{
						Molecules.map(molecule => (
							<Link href={`molecules/${molecule.id}`} key={molecule.id} className='flex bg-gradient-to-b flex-col justify-center rounded-lg card-border p-4 shadow-md transition-all hover:shadow-lg hover:scale-[1.01] dark:from-zinc-900/50 dark:to-zinc-950 backdrop-blur-sm'>

								<h3 className='text-lg font-medium'>{molecule.name}</h3>
								<p className='text-sm line-clamp-2 opacity-85'>{molecule.description}</p>
							</Link>
						))
					}
				</div>
			</article>
		</div>
	);
}
