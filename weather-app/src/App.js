import "./scss/main.scss";
import React, { useState } from "react";
//import { useWeather } from "./components/fetch";

const API = {
  key: "b0a23f6e90480e33936456139644bff5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  /*
  const [newCity, setNewCity] = useState();
  const city = useWeather(newCity);

  const changeCity = (event) => {
    setNewCity(event.target.value);
  };
*/
  return (
    <div className="App">
      <div className="main">
        <div className="input-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-container">
          <div className="location">Budapest, HU</div>
          <div className="humidity"></div>
        </div>
      </div>
  



      {/*
     <label htmlFor="cities">Choose a city:</label>

      <select name="cities" id="cities" onChange={changeCity}>
        <option value="London">London</option>
        <option value="Budapest">Budapest</option>
        <option value="Köln">Köln</option>
        <option value="Sydney">Sydney</option>
        <option value="Detroit">Detroit</option>
      </select>
      <div>
        {city === "Loading..."
          ? "Placeholder text"
          : `Temp: ${city.list[0].main.temp} ℃`}
      </div>
      */}
    </div>
  );
}

export default App;
