import './SelectField.scss';
import React, { useEffect } from 'react';

const SelectField = ({search, setSearch}) => {

	/*useEffect (() => {
		setSearch(search);
	}, [search, setSearch]);*/

	const handleChange = (event) => {
		setSearch(event.target.value);
	}


	return (
		<div className='select-field-container'>
			<select onChange={handleChange}>
				<option>Budapest</option>
				<option>Debrecen</option>
				<option>Szeged</option>
				<option>Pécs</option>
				<option>Győr</option>
			</select>
		</div>
	);
}

export default SelectField;