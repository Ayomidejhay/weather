import React from "react";
import PropTypes from "prop-types";

export default function WeatherCard({ weather }) {
  
  return (
    <div className="text-black">
      <h2>
        {weather.name}, {weather.sys.country}
      </h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );


}

