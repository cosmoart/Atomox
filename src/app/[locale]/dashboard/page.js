import AddTaskForm from './AddTaskForm'
import { createServerSupabaseClient } from './client'

export default async function Home () {
	// Use the custom Supabase client you created
	const client = createServerSupabaseClient()

	// Query the 'tasks' table to render the list of tasks
	const { data, error } = await client.from('tasks').select()
	if (error) {
		throw error
	}
	const tasks = data

	return (
		<div className='max-w-2xl mx-auto p-4'>
			<h1 className='text-2xl'>Tasks</h1>

			<ul className='flex flex-col gap-2 mb-2'>
				{tasks?.map((task) => <li className='p-2 rounded-lg bg-slate-900' key={task.id}>{task.name}</li>)}
			</ul>

			<AddTaskForm />
		</div>
	)
}


// import { currentUser } from '@clerk/nextjs/server'
// import Image from 'next/image';

// export default async function Protected () {
// 	const user = await currentUser()
// 	console.log(user);

// 	return (
// 		<div>
// 			Protected
// 			<Image src={user.imageUrl} alt="" width={60} height={60} />
// 			<h1>Hello {user?.firstName}</h1>
// 		</div>
// 	)
// }