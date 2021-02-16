import "./scss/main.scss";
import React, { useState } from "react";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const API = {
  key: "b0a23f6e90480e33936456139644bff5",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

const [newCity, setNewCity] = useState();
const [weather, setWeather] = useState({});

const search = event => {
  if(event.key === "Enter") {
    fetch(`${API.base}weather?q=${newCity}&units=metric&APPID=${API.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setNewCity("");
        console.log(result);
      });
  }
}

  return (
    <div className="App">
      <div className="main">
        <div className="input-container">
          {/*<input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e =>setNewCity(e.target.value)}
            value={newCity}
            onKeyPress={search}
          />*/}
          <GooglePlacesAutocomplete
            onChange={e =>setNewCity(e.target.value)}
            value={newCity}
            onKeyPress={search}
            apiKey="AIzaSyDF-hI9NJYO3fDYt6fDCyRwtHi0wPyckWc"
          />
        </div>
        {(typeof weather.main != "undefined") ? ( 
        <div>
          <div className="location-container">
            <div className="location">{weather.name}</div>
            <div className="humidity"></div>
          </div>
          <div className="weather-container">
            <div className="temp">{Math.round(weather.main.temp)}°C</div>
            <div className="weather">{weather.weather[0].main}</div>
            <div className="humidity">Humidity {weather.main.humidity}%</div>
          </div>
        </div>
         ) : ("")}
      </div>

    </div>
  );
}

export default App;
