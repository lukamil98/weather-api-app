import React, { useState } from "react"
import "./App.css"
import Weather from "./Weather"

function App() {
  const [city, setCity] = useState("") // State to store the city
  const [weatherData, setWeatherData] = useState(null) // State to store weather data

  const handleSearch = async (event) => {
    event.preventDefault() // Prevents the default form submission behavior

    // Use your OpenWeatherMap API key
    const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      if (!response.ok) {
        throw new Error("Failed to fetch weather data")
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && <Weather data={weatherData} />}
    </div>
  )
}

export default App
