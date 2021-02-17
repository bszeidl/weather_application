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
  const [listInputValue, setListInputValue] = useState("");

  const changeCity = (event) => {
    setNewCity(event.target.value);
  };

  const changeListCity = (event) => {
    if (event.key === "Enter") {
      setListItemCity(event.target.value);
      setListInputValue(event.target.value);
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
        <div>
          {city2 === "Loading..." || listInputValue === "" ? (
            "Placeholder text"
          ) : (
            <div>
              <h2> Temp: {city2.list[0].main.temp} ℃ </h2>
              <h2> Sky Condition: {city2.list[0].weather[0].main}</h2>
              <h2> Humidity: {city2.list[0].main.humidity}%</h2>
            </div>
          )}
        </div>
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
        {city === "Loading..." ? (
          "Placeholder text"
        ) : (
          <div>
            <h2> Temp: {city.list[0].main.temp} ℃ </h2>
            <h2> Sky Condition: {city.list[0].weather[0].main}</h2>
            <h2> Humidity: {city.list[0].main.humidity}%</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
