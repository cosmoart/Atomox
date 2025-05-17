'use server'
import { currentUser } from '@clerk/nextjs/server';
import { createServerSupabaseClient } from './client'

// export async function addElement (data) {
// 	const clerkUser = await currentUser();
// 	if (!data || !clerkUser) return
// 	const client = createServerSupabaseClient()
// 	const element = {
// 		...data,
// 		user_avatar: clerkUser.imageUrl,
// 		username: clerkUser.username,
// 		user_id: clerkUser.id
// 	}

// 	try {
// 		const response = await client.from('elements').insert(element)

// 		console.log('respuesta: ', data, element, response)
// 		if (response.error) throw new Error('Failed to add element', response.error)
// 		console.log('Element successfully added!', response)
// 	} catch (error) {
// 		console.error('Error adding element:', error.message)
// 		throw new Error('Failed to add element', error)
// 	}
// }

export async function addElement (data) {
	const clerkUser = await currentUser();
	if (!data || !clerkUser) return;

	const client = createServerSupabaseClient();

	const element = {
		...data,
		user_avatar: clerkUser.imageUrl,
		username: clerkUser.username,
		user_id: clerkUser.id
	};

	try {
		// 1. Insertar el elemento
		const { data: insertedElements, error: elementError } = await client
			.from('elements')
			.insert(element)
			.select('id') // obtener el id del elemento insertado

		if (elementError) throw new Error('Failed to insert element: ' + elementError.message);
		const elementId = insertedElements?.[0]?.id;
		if (!elementId) throw new Error('Element ID not returned');

		// 2. Procesar tags
		// trim() y toLowerCase() para evitar errores de duplicación de tags
		// filter para eliminar tags vacíos y duplicados
		const normalizedTags = [...new Set(data.tags.map(tag => tag.trim().toLowerCase()).filter(tag => tag))];
		for (const tagName of normalizedTags) {
			// a. Buscar la tag (si existe)
			let { data: existingTags, error: findTagError } = await client
				.from('tags')
				.select('id')
				.eq('name', tagName)
				.limit(1);

			if (findTagError) throw new Error('Error checking tag: ' + findTagError.message);

			let tagId;

			if (existingTags.length > 0) {
				tagId = existingTags[0].id;
			} else {
				// b. Si no existe, insertarla
				const { data: newTags, error: insertTagError } = await client
					.from('tags')
					.insert({ name: tagName })
					.select('id');

				if (insertTagError) throw new Error('Error inserting new tag: ' + insertTagError.message);
				tagId = newTags[0].id;
			}

			// c. Insertar en elements_tags
			const { error: tagRelationError } = await client
				.from('elements_tags')
				.insert({
					element_id: elementId,
					tag_id: tagId
				});

			if (tagRelationError) throw new Error('Error linking tag to element: ' + tagRelationError.message);
		}

		console.log('Elemento y tags insertados correctamente');
	} catch (error) {
		console.error('Error en addElement:', error.message);
		throw error;
	}
}

export default async function getElements (elementId, query) {
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
		.select('element_id, elements (*)') // solo si tienes relación
		.eq('user_id', userId);

	if (error) throw new Error('Error al obtener likes');

	return data.map((like) => like.elements);
}

export async function getUserElements () {
	const user = await currentUser();
	const userId = user?.id;
	if (!userId) return [];
	const supabase = createServerSupabaseClient();

	const { data, error } = await supabase
		.from('elements')
		.select('*')
		.eq('user_id', userId);

	if (error) throw new Error('Error al obtener los elements');

	return data;
}