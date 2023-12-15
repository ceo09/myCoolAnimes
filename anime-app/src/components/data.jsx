const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '714685b24cmshe2dc3655d4e352ep16f772jsn2766f3f047b9',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

const animeData = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
animeData()