const dataFetcher = async function (url = null) {
	const response = await fetch(url);
	return await response.json(); // parses JSON response into native JavaScript objects
};

export { dataFetcher };
