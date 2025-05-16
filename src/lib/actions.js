'use server'
import { auth, currentUser } from '@clerk/nextjs/server';
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

export async function addElement (data) {
	if (!data) return
	const client = createServerSupabaseClient()

	try {
		const response = await client.from('elements').insert(data)

		console.log('Element successfully added!', response)
	} catch (error) {
		console.error('Error adding element:', error.message)
		throw new Error('Failed to add element')
	}
}

export default async function getElements (elementId) {
	const clerkUser = await currentUser();
	const userId = clerkUser?.id;
	const client = createServerSupabaseClient();

	try {
		// 1. Obtener todos los elements publicados
		const { data: elements, error: elementsError } = await client
			.from('elements')
			.select('*')
			.eq('published', true)
			.eq('element_id', elementId)
			.order('likes', { ascending: false });

		if (elementsError) {
			console.error('Error al obtener los elements:', elementsError);
			throw new Error('Failed to fetch elements.');
		}

		// Si no hay userId (usuario no autenticado), devolvemos los elements sin información de like
		if (!userId) return elements;

		// 2. Obtener todos los elements_id a los que el usuario ha dado like
		const { data: likedElements, error: likesError } = await client
			.from('elements_likes')
			.select('element_id')
			.eq('user_id', userId);

		if (likesError) {
			console.error('Error al obtener los likes del usuario:', likesError);
			throw new Error('Failed to fetch user likes.');
		}

		// 3. Crear un Set de los element_id a los que el usuario ha dado like para una búsqueda eficiente
		const likedElementsIds = new Set(likedElements.map(like => like.element_id));

		// 4. Mapear los posts y agregar una propiedad 'likedByUser'
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

export async function toggleLike (elementId) {
	console.log(elementId);

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

	console.log(fetchError);

	if (fetchError && fetchError.code !== 'PGRST116' && fetchError.code !== 'PGRST123') {
		console.error(fetchError);
		throw new Error('Error al verificar el estado del like');
	}

	if (existingLike) {
		await client
			.from('elements_likes')
			.delete()
			.eq('user_id', userId)
			.eq('element_id', elementId);
	} else {
		await client
			.from('elements_likes')
			.insert([{ user_id: userId, element_id: elementId }]);
	}

	// Obtener el nuevo total de likes
	const { count, error: countError } = await client
		.from('elements_likes')
		.select('*', { count: 'exact', head: true })
		.eq('element_id', elementId);

	if (countError) {
		console.error(countError);
		throw new Error('Error al contar likes');
	}

	return {
		liked: !existingLike,
		likeCount: count,
	};
}

// export async function toggleLike (elementId) {
// 	const clerkUser = await currentUser();
// 	const userId = clerkUser?.id;
// 	if (!elementId || !userId) throw new Error('Post ID y User ID son necesarios para dar o quitar like.');

// 	try {
// 		// 1. Verificar si el usuario ya dio like a este post
// 		const { data: existingLike, error: selectError } = await supabase
// 			.from('elements_likes')
// 			.select('*')
// 			.eq('element_id', elementId)
// 			.eq('user_id', userId)
// 			.single(); // Esperamos como máximo un like por usuario por post

// 		if (selectError && selectError.code !== 'PGRST116') { // 'PGRST116' indica que no se encontraron filas (no dio like)
// 			console.error('Error al verificar el like:', selectError.message);
// 			throw new Error('Failed to check existing like.');
// 		}

// 		// 2. Si el usuario ya dio like, quitarlo
// 		if (existingLike) {
// 			const { error: deleteError } = await supabase
// 				.from('elements_likes')
// 				.delete()
// 				.eq('element_id', elementId)
// 				.eq('user_id', userId);

// 			if (deleteError) {
// 				console.error('Error al quitar el like:', deleteError.message);
// 				throw new Error('Failed to remove like.');
// 			}

// 			console.log('Like eliminado del post:', elementId, 'por el usuario:', userId);
// 			return { liked: false };
// 		}
// 		// 3. Si el usuario no ha dado like, agregarlo
// 		else {
// 			const { error: insertError } = await supabase
// 				.from('elements_likes')
// 				.insert({ element_id: elementId, user_id: userId });

// 			if (insertError) {
// 				console.error('Error al dar like:', insertError.message);
// 				throw new Error('Failed to add like.');
// 			}

// 			console.log('Like agregado al post:', elementId, 'por el usuario:', userId);
// 			return { liked: true };
// 		}

// 	} catch (error) {
// 		console.error('Error al dar o quitar like:', error.message);
// 		throw new Error('Failed to toggle like.');
// 	}
// }