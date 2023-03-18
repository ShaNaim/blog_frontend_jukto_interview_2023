import fetchData from "./fetch.api";

export async function getAllUsers() {
	try {
		const local =
			"https://my-json-server.typicode.com/ShaNaim/blog_frontend_jukto_interview_2023/posts/1";
		const serv = "https://jsonplaceholder.typicode.com/posts?_page=2&_limit=20";

		const result = await fetchData(local);
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
