import fetchData, { createData } from "./fetch.api";
import api_url from "./url";

export async function getAllUsers() {
	try {
		const result = await fetchData(`${api_url}/users`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getUserById(id) {
	try {
		const result = await fetchData(`${api_url}/users/${id}`);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function createNewUser(body) {
	try {
		const result = await createData(`${api_url}/users`, body);
		console.log({ result });
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
