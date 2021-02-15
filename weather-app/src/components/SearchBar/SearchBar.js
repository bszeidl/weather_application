import './SearchBar.scss';
import React, { useEffect } from 'react';

const SearchBar = ({search, setSearch}) => {
			
	useEffect (() => {
		setSearch(search);
	}, [search, setSearch]);

	const handleChange = (event) => {
		setSearch(event.target.value);
	}

	return (
		<div className='searchbar-container'>
			<input type="text" onchange={handleChange} />
		</div>

	);
}

export default SearchBar;