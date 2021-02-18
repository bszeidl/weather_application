import React from 'react'

function MainCities({change,mainCities }) {
  return (
    <div>
      <h2 className="main-h2">City List</h2>
      <label className="main-label" htmlFor="cityList"></label>
      <input placeholder="Write or Select a City" list="listOfCities" id="cityList" onKeyDown={change} />

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
