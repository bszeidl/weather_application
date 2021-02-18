import "./scss/main.scss";
import { useState } from "react";
import { useWeather } from "./components/fetch";
import data from "./data/betterCityList.json";
import FavCity from "./components/FavCity/FavCity";
import MainCities from "./components/MainCities/MainCities";
import Output from "./components/Output/Output";
import DateBuild from "./components/DateBuild/DateBuild";

function App() {
  const [dropDownCity, setDropDownCity] = useState();
  const favCity = useWeather(dropDownCity);
  const [dataListCity, setDataListCity] = useState("London");
  const mainCity = useWeather(dataListCity);
  const cities = data;
  const [listInputValue, setListInputValue] = useState("");

  const changeDropDownCity = (event) => {
    setDropDownCity(event.target.value);
  };

  const changeDataListCity = (event) => {
    if (event.key === "Enter") {
      setDataListCity(event.target.value);
      setListInputValue(event.target.value);
    }
  };

  return (
    <div className="App">
      <h1 className="app-h1">Weather App</h1>
      <DateBuild />
      <div className="container">
        <div className="fav-container">
          <FavCity change={changeDropDownCity} />
          <Output cityOut={favCity} inputValue={"."} />
        </div>
        <div className="main-container">
          <MainCities change={changeDataListCity} mainCities={cities} />
          <Output cityOut={mainCity} inputValue={listInputValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
