'use server'

import { createServerSupabaseClient } from './client'

export async function addTask (name) {
	const client = createServerSupabaseClient()

	try {
		const response = await client.from('tasks').insert({
			name,
		})
		if (response.error) {
			throw new Error('Failed to add task')
		}

		console.log('Task successfully added!', response)
	} catch (error) {
		console.error('Error adding task:', error.message)
		throw new Error('Failed to add task')
	}
}

export async function addElement (elementId, data) {
	const client = createServerSupabaseClient()

	try {
		const response = await client.from(elementId).insert(data)

		console.log('Element successfully added!', response)
	} catch (error) {
		console.error('Error adding element:', error.message)
		throw new Error('Failed to add element')
	}
}