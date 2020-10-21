const getGifs = async ( category ) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=16&api_key=Bi6M21YYzQZL5ga2gRFqbne9d1cft3jo`
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})
	
	return gifs; 
}

export default getGifs; 

