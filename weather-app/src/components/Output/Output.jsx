import React from 'react'

function Output({cityOut, inputValue}) {
  return (
    <div className="output-container">
      {cityOut === "Loading..." || inputValue === "" || cityOut.list[0] === undefined ? (
          <h2 className="">Press Enter</h2>
        ) : (
          <div className="output">
            <h3 className="temp"> {Math.round(cityOut.list[0].main.temp)} ℃ </h3>
            <h3> {cityOut.list[0].weather[0].main}</h3>
            <h3> Humidity: {cityOut.list[0].main.humidity}%</h3>
          </div>
        )}
    </div>
  )
}

export default Output
