import fetchData from "./fetch.api";
import api_url from "./url";

export async function getCommentsByUserId(id) {
	try {
		const result = await fetchData(`${api_url}/comments?postedBy=${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getCommentsByPostId(id) {
	try {
		const result = await fetchData(`${api_url}/comments?postId=${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getAllComents() {
	try {
		const result = await fetchData(`${api_url}/comments`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
