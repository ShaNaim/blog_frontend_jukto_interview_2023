import { MAX_FEELING, MAX_TITLE } from "./const.provider";

export function validatePostData(title, feelings, description) {
	if (title === "") {
		return {
			success: false,
			origin: "title",
			message: "Title Must be Provided",
		};
	}
	if (title.split("").length >= MAX_TITLE) {
		return {
			success: false,
			origin: "title",
			message: "Title Can't exceed " + MAX_TITLE + " char",
		};
	}
	if (description === "") {
		return {
			success: false,
			origin: "desc",
			message: "Description Must be Provided",
		};
	}
	return {
		success: true,
		origin: "",
		message: "",
	};
}

export function ValidateEmail(input) {
	const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (input.match(validRegex)) {
		return true;
	}
	return false;
}
