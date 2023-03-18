async function fetchData(url) {
	try {
		const response = await fetch(url);
		if (response.ok) {
			return await response.json();
		}
		throw response;
	} catch (error) {
		throw handleError(error.status ?? error.status);
		throw "Something Went wrong , Please try again later";
	}
}
export default fetchData;
function handleError(status) {
	if (status === 400) throw "Bad Request, Provided information is not correct";
	if (status === 404)
		throw "Resources not found,No resources was found with the provided information";
	if (status >= 500) throw "Something Went wrong , Please try again later";
}
