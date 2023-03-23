import fetchData, { createData } from "./fetch.api";
import api_url from "./url";

export async function getAllUsers() {
	try {
		const result = await fetchData(`${api_url}/users`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getUserById(id) {
	try {
		const result = await fetchData(`${api_url}/users/${id}`);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function getUserByEmail(email) {
	try {
		const result = await fetchData(`${api_url}/users?email=${email}`);
		if (result.length === 0) return false;
		return result[0];
	} catch (error) {
		console.error({ error });
		throw error;
	}
}

export async function createNewUser(body) {
	try {
		const result = await createData(`${api_url}/users`, body);
		return result;
	} catch (error) {
		console.error({ error });
		throw error;
	}
}
