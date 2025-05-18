'use server'
import { currentUser } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from './client'

export async function addElement (data) {
	const clerkUser = await currentUser();
	if (!data || !clerkUser) return
	const client = createServerSupabaseClient()

	const element = {
		...data,
		user_avatar: clerkUser.imageUrl,
		username: clerkUser.username,
		user_id: clerkUser.id
	}

	try {
		const response = await client.from('elements').insert(element)

		console.log('respuesta: ', data, element, response)
		if (response.error) throw new Error('Failed to add element', response.error)
		console.log('Element successfully added!', response)
	} catch (error) {
		console.error('Error adding element:', error.message)
		throw new Error('Failed to add element', error)
	}
}

export default async function getElements (elementId, query) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	try {
		let supabaseQuery = client
			.from('elements')
			.select('*')
			.eq('published', true)
			.eq('element_id', elementId);

		if (query) supabaseQuery = supabaseQuery.ilike('tags', `%${query}%`);
		supabaseQuery = supabaseQuery.order('likes', { ascending: false });

		const { data: elements, error: elementsError } = await supabaseQuery;

		if (elementsError) {
			console.error('Error al obtener los elements:', elementsError);
			throw new Error('Failed to fetch elements.');
		}

		if (!userId) return elements;

		const { data: likedElements, error: likesError } = await client
			.from('elements_likes')
			.select('element_id')
			.eq('user_id', userId);

		if (likesError) {
			console.error('Error al obtener los likes del usuario:', likesError);
			throw new Error('Failed to fetch user likes.');
		}

		const likedElementsIds = new Set(likedElements.map(like => like.element_id));

		const postsWithLikeStatus = elements.map(el => ({
			...el,
			likedByUser: likedElementsIds.has(el.id),
		}));

		return postsWithLikeStatus;

	} catch (error) {
		console.error('Error al obtener posts con estado de like:', error.message);
		throw error;
	}
}

export async function getElement (elementId) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	const { data, error } = await client.from('elements').select('*').eq('id', elementId).single();
	if (error) throw new Error('Error al obtener el elemento');

	if (!userId) return data;

	const { data: likedByUser, error: likeError } = await client
		.from('elements_likes')
		.select('*')
		.eq('user_id', userId)
		.eq('element_id', elementId)
		.single();

	if (likeError && likeError.code !== 'PGRST116' && likeError.code !== 'PGRST123') {
		console.error(fetchError);
		throw new Error('Error al verificar el estado del like');
	}

	return { ...data, likedByUser: Boolean(likedByUser) };
}

export async function toggleLike (elementId) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	if (!elementId || !userId) throw new Error('Post ID y User ID son necesarios.');

	const client = createServerSupabaseClient();

	const { data: existingLike, error: fetchError } = await client
		.from('elements_likes')
		.select('*')
		.eq('user_id', userId)
		.eq('element_id', elementId)
		.single();

	if (fetchError && fetchError.code !== 'PGRST116' && fetchError.code !== 'PGRST123') {
		console.error(fetchError);
		throw new Error('Error al verificar el estado del like');
	}

	if (existingLike) {
		const { error: deleteError } = await client
			.from('elements_likes')
			.delete()
			.eq('user_id', userId)
			.eq('element_id', elementId);
		if (deleteError) throw deleteError;
	} else {
		const { error: insertError } = await client
			.from('elements_likes')
			.insert([{ user_id: userId, element_id: elementId }]);
		if (insertError) throw insertError;
	}
}

export async function getUserLikes () {
	const user = await currentUser();
	const userId = user?.id;
	if (!userId) return [];
	const supabase = createServerSupabaseClient();

	const { data, error } = await supabase
		.from('elements_likes')
		.select('element_id, elements (*)')
		.eq('user_id', userId);

	if (error) throw new Error('Error al obtener likes');

	return data.map((like) => like.elements);
}

export async function getUserElements ({ username }) {
	const user = await currentUser();
	if (!username) return [];

	const supabase = createServerSupabaseClient();

	let query = supabase.from('elements').select('*').eq('username', username);
	if (user?.username !== username) query = query.eq('published', true);

	const { data, error } = await query;

	if (error) throw new Error('Error al obtener los elements');

	return data;
}
