export const dynamic = 'force-dynamic'
import AddTaskForm from './AddTaskForm'
import { createServerSupabaseClient } from './client'

export default async function Dasboard () {
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