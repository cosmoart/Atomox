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
		if (response.error) throw new Error('Failed to add element', response.error)
	} catch (error) {
		console.error('Error adding element:', error.message)
		throw new Error('Failed to add element', error)
	}
}

export default async function getElements ({ elementId, query, page = 1, pageSize = 10, sort = 'likes', style = 'all' }) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	try {
		let baseQuery = client
			.from('elements')
			.select('*', { count: 'exact' })
			.eq('published', true)
			.eq('element_id', elementId);

		if (query) baseQuery = baseQuery.ilike('tags', `%${query}%`)
		if (style !== 'all') baseQuery = baseQuery.eq('use_tailwind', style === 'tailwind')

		const from = (page - 1) * pageSize;
		const to = from + pageSize - 1;

		const { data: elements, error: elementsError, count } = await baseQuery
			.order(sort, { ascending: false })
			.range(from, to);

		if (elementsError) return { error: 'Error getting elements' };

		if (!userId) return { data: elements, totalCount: count || 0 };

		const { data: likedElements, error: likesError } = await client
			.from('elements_likes')
			.select('element_id')
			.eq('user_id', userId);

		if (likesError) return { error: 'Error getting likes' };

		const likedElementsIds = new Set(likedElements.map(like => like.element_id));

		const postsWithLikeStatus = elements.map(el => ({
			...el,
			likedByUser: likedElementsIds.has(el.id),
		}));

		return {
			data: postsWithLikeStatus,
			totalCount: count || 0
		};

	} catch (error) {
		return { error: 'Error getting elements' };
	}
}

export async function getElement (id, elementId) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	if (!id || !elementId) return;

	const { data, error } = await client
		.from('elements')
		.select('*')
		.eq('id', id)
		.eq('element_id', elementId)
		.eq('published', true)

	if (error) return { error: 'Error getting element' };
	if (!data || data.length === 0) return null
	if (!userId) return data[0];

	const { data: likedByUser, error: likeError } = await client
		.from('elements_likes')
		.select('*')
		.eq('user_id', userId)
		.eq('element_id', id)
		.single();

	if (likeError && likeError.code !== 'PGRST116' && likeError.code !== 'PGRST123') return { error: 'Error getting like status' };
	return { ...data[0], likedByUser: Boolean(likedByUser) };
}

export async function getUserElements (username, page = 1, pageSize = 10) {
	const clerkUser = await currentUser();
	if (!username) return [];
	const client = createServerSupabaseClient();

	const from = (page - 1) * pageSize;
	const to = from + pageSize - 1;

	try {
		const baseQuery = client.from('elements')
			.select('*', { count: 'exact' })
			.eq('username', username)
			.order('created_at', { ascending: false })
			.range(from, to);

		if (clerkUser?.username !== username) baseQuery.eq('published', true);
		const { data, error, count } = await baseQuery;
		if (error) return { error: 'Error getting elements' };

		if (!clerkUser?.id) return { data, totalCount: count || 0 };

		const { data: likedElements, error: likesError } = await client
			.from('elements_likes')
			.select('element_id')
			.eq('user_id', clerkUser.id);

		if (likesError) return { error: 'Error getting likes' };

		const likedElementsIds = new Set(likedElements.map(like => like.element_id));

		const postsWithLikeStatus = data.map(el => ({
			...el,
			likedByUser: likedElementsIds.has(el.id),
		}));

		return { data: postsWithLikeStatus, totalCount: count || 0 };
	} catch (error) {
		return { error: 'Error getting elements' };
	}
}

export async function deleteElement (id) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	if (!id || !userId) throw new Error('Post ID and User ID are required.');

	const { error } = await client.from('elements').delete().eq('id', id).eq('user_id', userId);

	if (error) throw new Error('Error al eliminar el elemento');
}

// Likes ==============

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

// Comments ==============
export async function createComment ({ comment, element_id, parent_id }) {
	const user = await currentUser();
	const client = createServerSupabaseClient();

	if (!comment || !user) throw new Error('Comment and user are required.');

	const { data, error } = await client.from('comments').insert([
		{
			user: user.firstName + (user.lastName ? ' ' + user.lastName : ''),
			username: user.username,
			content: comment,
			avatar: user.imageUrl,
			element_id,
			parent_id,
		}
	]);

	if (error) return { error: 'Error creating comment' };

	return data
}

export async function getComments (elementId) {
	const client = createServerSupabaseClient();

	const { data, error } = await client
		.from('comments')
		.select('*')
		.eq('element_id', elementId)
		.order('created_at', { ascending: false })

	if (error) return { error: 'Error getting comments' };
	return data
	// const { data: likedComments, error: likesError } = await client
	// 	.from('comments_likes')
	// 	.select('*')
	// 	.eq('element_id', elementId)

	// if (likesError) return { error: 'Error getting likes' };

	// const likedCommentsIds = new Set(likedComments.map(like => like.comment_id));

	// return data.map(comment => ({
	// 	...comment,
	// 	likedByUser: likedCommentsIds.has(comment.id),
	// }))
}

export async function deleteComment (id) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	if (!id || !userId) throw new Error('Post ID and User ID are required.');
	const { data, error } = await client
		.from('comments')
		.delete()
		.eq('id', id)
		.eq('user_id', userId)
		.select();

	if (error) return { error: 'Error deleting comment' };
	if (!data || data.length === 0) return { error: 'Comment not found' };

	return { success: true };
}

export async function likeComment (id) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	if (!id || !userId) throw new Error('Post ID and User ID are required.');

	const client = createServerSupabaseClient();

	const { data: existingLike, error: fetchError } = await client
		.from('comments_likes')
		.select('*')
		.eq('user_id', userId)
		.eq('comment_id', id)
		.single();

	if (fetchError && fetchError.code !== 'PGRST116' && fetchError.code !== 'PGRST123') {
		console.error(fetchError);
		throw new Error('Error al verificar el estado del like');
	}

	if (existingLike) {
		const { error: deleteError } = await client
			.from('comments_likes')
			.delete()
			.eq('user_id', userId)
			.eq('comment_id', id);
		if (deleteError) throw deleteError;
	} else {
		const { error: insertError } = await client
			.from('comments_likes')
			.insert([{ user_id: userId, comment_id: id }]);
		if (insertError) throw insertError;
	}
}