import Link from 'next/link';

export default function ElementsList ({ data, title, description }) {
	return (
		<div className='section'>
			<article className='flex flex-col md:flex-row gap-3 items-center'>
				<section className='grow'>
					<h1 className='text-3xl font-medium'>{title}</h1>
					<p className='max-w-[80ch] text-pretty mt-1 text-zinc-900/80 dark:text-white/80 text-[15px]'>
						{description}
					</p>
				</section>
			</article>

			<article className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-6'>
				{
					data.map(element => (
						<Link href={`${title.toLowerCase()}/${element.id}`} key={element.id} className='flex card-border flex-col  justify-center rounded-lg py-4 px-6 shadow-md transition-shadow hover:shadow-lg '>

							<h3 className="text-lg font-medium ">{element.name}</h3>
							<p className='text-[15px] line-clamp-2'>{element.description}</p>
						</Link>
					))
				}
			</article>
		</div>
	)
}