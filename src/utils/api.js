const API_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_APP_KEY;

export function fetchRecipes(food = '') {
	const headers = new Headers();
	headers.append('Access-Control-Allow-Origin', '*')

	const init = {headers};

	food = food.trim();

	return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`, init)
				.then(res => res.json())
				.then(({hits}) => hits.map(({recipe}) => recipe));
}