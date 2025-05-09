'use server'

import { createServerSupabaseClient } from './client'

export async function addTask (name) {
	const client = createServerSupabaseClient()

	try {
		const response = await client.from('tasks').insert({
			name,
		})

		console.log('Task successfully added!', response)
	} catch (error) {
		console.error('Error adding task:', error.message)
		throw new Error('Failed to add task')
	}
}