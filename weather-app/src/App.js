import "./scss/main.scss";
import { useState } from "react";
import { useWeather } from "./components/fetch";
import data from "./data/betterCityList.json";

function App() {
  const [newCity, setNewCity] = useState();
  const city = useWeather(newCity);
  const [listItemCity, setListItemCity] = useState("London");
  const city2 = useWeather(listItemCity);
  const cities = data;

  const changeCity = (event) => {
    setNewCity(event.target.value);
  };

  const changeListCity = (event) => {
    if (event.key === "Enter") {
      setListItemCity(event.target.value);
    }
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="cityList">Choose a city from the list:</label>
        <input list="listOfCities" id="cityList" onKeyDown={changeListCity} />

        <datalist id="listOfCities">
          {cities.map((option) => (
            <option key={option.geonameid} value={option.name}>
              {option.name}
            </option>
          ))}
        </datalist>
        <h2>
          {city2 === "Loading..."
            ? "Placeholder text"
            : `Temp: ${city2.list[0].main.temp} ℃`}
        </h2>
      </div>

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
    </div>
  );
}

export default App;
