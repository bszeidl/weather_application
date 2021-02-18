import "./scss/main.scss";
import { useState } from "react";
import { useWeather } from "./components/fetch";
import data from "./data/betterCityList.json";
import FavCity from "./components/FavCity/FavCity";
import MainCities from "./components/MainCities/MainCities";
import Output from "./components/Output/Output";
import DateBuild from "./components/DateBuild/DateBuild";

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
      <h1 className="app-h1">Weather App</h1>
      <DateBuild/>
      <div className="fav-container">
        <FavCity change={changeCity}/>
        <Output
          cityOut={city}
          inputValue={"."}
        />
      </div>
      <div className="main-container">
        <MainCities 
          change={changeListCity}
          mainCities={cities}
        />
        <Output
          cityOut={city2}
          inputValue={listInputValue}
        />
      </div>
    </div>
  );
}

export default App;
