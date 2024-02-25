// Weather.js

import React from "react"

const Weather = ({ data }) => {
  // Check if data is undefined or null
  if (!data) {
    return <p>Loading...</p> // You can display a loading message or handle the loading state in a different way
  }

  // Destructure properties from data to avoid accessing undefined properties
  const { name, main, weather } = data

  return (
    <div className="weather-container">
      <h2>{name}</h2>
      {main && <p>Temperature: {main.temp} °C</p>}
      {weather && weather[0] && <p>Conditions: {weather[0].description}</p>}
      {/* Add more elements as needed */}
    </div>
  )
}

export default Weather
