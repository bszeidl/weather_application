import './OutputField.scss';
import React, { useState, useEffect } from 'react';

const OutputField = ({search}) => {

	const [results, setResults] = useState('');

	/*fetchet megírni, amiből a pl a citiesbe kerülnek az adatok vagy ha van saját neve, a cities kicserélni!
	
	let cities = [];

	useEffect(() => {
			setResults(cities.filter(
				(city) => city.name.toLoweCase().includes(search.toLowerCase())
		))},[search]);*/

	return (
		<div className='outputfield-container'>
			{results}
		</div>
	);
}

export default OutputField;