import Link from 'next/link';

export default function ElementsList ({ data, title, description }) {
	return (
		<div className='section pt-6 relative'>
			<div className='absolute h-1/2 dark:invert opacity-30 -z-20 pointer-events-none bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-medium'>{title}</h1>
					<p className='max-w-[80ch] text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{description}
					</p>
				</section>
			</article>

			<article className={`flex flex-wrap gap-4 mt-8 ${title.toLowerCase()}-gri`}>
				{
					data.map(element => (
						<Link href={`${title.toLowerCase()}/${element.id}`} key={element.id} className={'group relative overflow-hidden rounded-xl flex-1 min-w-78 bg-[#111111] border border-[#222222] transition-all duration-300 hover:border-indigo-500 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]'}>
							<div className='px-6 py-5 z-10 relative h-full'>
								<div className='absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/0 to-indigo-600/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300'></div>

								<div className='absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
								<h3 className='text-lg font-medium'>{element.name}</h3>
								<p className='text-[15px] opacity-80 line-clamp-2'>{element.description}</p>
							</div>
						</Link>
						// <Link href={`${title.toLowerCase()}/${element.id}`} key={element.id} className={`flex card-border flex-1 min-w-78 justify-center flex-col rounded-lg py-4 px-6 shadow-md transition-shadow hover:shadow-lg ${element.id.toLowerCase()}`}>
						// 	<h3 className='text-lg font-medium '>{element.name}</h3>
						// 	<p className='text-[15px] line-clamp-2'>{element.description}</p>
						// </Link>
					))
				}
			</article>
		</div>
	)
}