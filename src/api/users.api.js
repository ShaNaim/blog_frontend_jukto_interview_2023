import fetchData from "./fetch.api";

export async function getAllUsers() {
	try {
		const result = await fetchData("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=20");
		console.log({ result });
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getUserById(id) {
	try {
		return await fetchData("https://jsonplaceholder.typicode.com/users/" + id);
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
