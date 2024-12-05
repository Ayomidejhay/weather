"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function SearchBar({ fetchWeather }) {
  const [city, setCity] = useState("");

  const handleSearch = (e) => {
    e.preventDefault()
    if (city.trim()) fetchWeather(city);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
