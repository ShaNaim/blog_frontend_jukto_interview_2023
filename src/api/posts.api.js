import fetchData from "./fetch.api";
import api_url from "./url";

export async function getAllPosts() {
	try {
		const result = await fetchData(`${api_url}/posts`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostsByPage(pageNumber, limit = 9) {
	try {
		const result = await fetchData(`${api_url}/posts?_page=${pageNumber}&_limit=${limit}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostById(id) {
	try {
		const result = await fetchData(`${api_url}/posts/${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getPostsByUserId(id) {
	try {
		const result = await fetchData(`${api_url}/posts?userId=${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
