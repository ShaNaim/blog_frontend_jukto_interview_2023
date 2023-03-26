import { getUserByEmail } from "./users.api";

export async function checkEmailExists(email) {
	try {
		const isUser = await getUserByEmail(email);
		if (isUser) return true;
		return false;
	} catch (error) {
		throw error;
	}
}

export async function loginUser(email, password) {
	try {
		const user = await getUserByEmail(email);
		if (!user) {
			throw "Email Dosen't Exists";
		}
		if (user.password === password) return user;
		throw "Passwords Don't Match";
	} catch (error) {
		throw error;
	}
}
