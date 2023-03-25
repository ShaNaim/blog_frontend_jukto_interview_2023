import fetchData, { createData, updateData, deleteData } from "./fetch.api";
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

export async function createComment(data) {
	try {
		const result = await createData(`${api_url}/comments`, data);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
export async function updateComment(data, id) {
	try {
		const result = await updateData(`${api_url}/comments/${id}`, data);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
export async function deleteComment(id) {
	try {
		const result = await deleteData(`${api_url}/comments/${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function postsUserHaveComentedOn(userId) {
	const commentsList = await getAllComents();
	const filteredList = commentsList.filter((comment) => comment.postedBy === userId);
	const postsList = filteredList.map((comment) => comment.postId);
	const uniquePostsList = [...new Set(postsList)];
	return uniquePostsList;
}
