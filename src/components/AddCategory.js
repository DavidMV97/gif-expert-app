import React, { useState } from 'react';
import PropTypes from 'prop-types' ; 

const AddCategory = ( {setcategories} ) => {

	const [inputValue, setInputValue] = useState('');

	const HandleInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const HandleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setcategories( categ => [ inputValue , ...categ ] ); 
			setInputValue(''); 
		}
	}

	return (
		<form onSubmit={HandleSubmit}>
			<input
				type="text"
				value={inputValue}
				onChange={HandleInputChange}
			/>
		</form>
	)
}

AddCategory.propTypes = {
	setcategories: PropTypes.func.isRequired
}




export default AddCategory; 