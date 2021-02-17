import React from 'react'

function MainCities({change,mainCities }) {
  return (
    <div>
      <h1>Weather App</h1>
      <label htmlFor="cityList">Choose a city from the list:</label>
      <input list="listOfCities" id="cityList" onKeyDown={change} />

      <datalist id="listOfCities">
        {mainCities.map((option) => (
          <option key={option.geonameid} value={option.name}>
            {option.name}
          </option>
        ))}
      </datalist>
    </div>
  )
}

export default MainCities
