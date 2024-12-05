'use client'
import { useState } from "react";
import SearchBar from "./component/SearchBar";
import WeatherCard from "./component/WeatherCard";


export default function Home() {

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const apiKey = "6c8347de99c40b92fac585372d6888ae";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

      if (!response.ok) {
        throw new Error("City not found")
      }
      const data = await response.json()
      
      setWeather(data)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <h1>Weather App</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
