import React from 'react'

function Output({cityOut, inputValue}) {
  return (
    <div>
      {cityOut === "Loading..." || inputValue === "" ? (
          "Placeholder text"
        ) : (
          <div>
            <h2> Temp: {cityOut.list[0].main.temp} ℃ </h2>
            <h2> Sky Condition: {cityOut.list[0].weather[0].main}</h2>
            <h2> Humidity: {cityOut.list[0].main.humidity}%</h2>
          </div>
        )}
    </div>
  )
}

export default Output
