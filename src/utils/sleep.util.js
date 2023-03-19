function timeout(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
async function sleep(ms) {
	await timeout(ms);
	return;
}

export default sleep;
