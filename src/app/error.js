'use client'
import Link from 'next/link'

export default function Error ({ error }) {

	return (
		<div className='text-center min-h-svh flex justify-center items-center flex-col'>
			<h2 className='text-2xl font-bold'>Something went wrong!</h2>
			<Link href='/'>Go back home</Link>
		</div>
	)
}