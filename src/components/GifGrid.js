import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs'; 

const GifGrid = ({ category }) => {
	//const [images, setImages] = useState([]);
	const { data:images ,  loading } = useFetchGifs( category ) ; 
	/*
	useEffect(() => {
		getGifs( category )
			.then( setImages ); 
	}, [ category ])*/

	
	return (
		<>
			<h3> {category} </h3>

			{ loading && <div class="lds-ripple"><div></div><div></div></div>}

			
			<div className="card-grid">
				{
					images.map(img => (
						<GifGridItem
							key={img.id}
							{...img}
						/>
					))
				}
			</div>
		</>
	)

}

export default GifGrid; 