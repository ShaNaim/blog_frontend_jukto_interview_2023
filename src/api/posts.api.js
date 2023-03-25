import fetchData, { createData, updateData, deleteData } from "./fetch.api";
import api_url from "./url";

export async function getAllPosts() {
	try {
		const result = await fetchData(`${api_url}/posts`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostsByPage(pageNumber, limit = 9) {
	try {
		const result = await fetchData(`${api_url}/posts?_page=${pageNumber}&_limit=${limit}`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostById(id) {
	try {
		const result = await fetchData(`${api_url}/posts/${id}`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostsByUserId(id) {
	try {
		const result = await fetchData(`${api_url}/posts?userId=${id}`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function createPost(data) {
	try {
		const result = await createData(`${api_url}/posts`, data);
		return result;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function updatePost(data, id) {
	try {
		const result = await updateData(`${api_url}/posts/${id}`, data);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function deletePost(id) {
	try {
		const result = await deleteData(`${api_url}/posts/${id}`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
