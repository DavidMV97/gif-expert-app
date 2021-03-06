import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {
	const [categories, setcategories] = useState(['dragon ball z']);
	/*
	const handdleAdd = () => {
		//setcategories( [...categories , 'Hunter X Hunter'] )
		setcategories(categ => [...categ , 'Hunter X Hunter'])
	}*/

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setcategories={setcategories} />
			<hr />
			<ol>
				{
					categories.map(category => (
						<GifGrid 
							key={category} 
							category={ category } 
						/>
					))
				}
			</ol>
		</>
	)
}

export default GifExpertApp; 