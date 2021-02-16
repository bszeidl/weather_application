import "./scss/main.scss";
import { useState } from "react";
import { useWeather } from "./components/fetch";

function App() {
  const [newCity, setNewCity] = useState();
  const city = useWeather(newCity);

  const changeCity = (event) => {
    setNewCity(event.target.value);
  };

  return (
    <div className="App">
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
