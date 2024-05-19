import React, { useState, useEffect } from 'react';

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=04fade0111b44c79836104300240105&q=Chennai&aqi=no');
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>Current Weather in {weatherData.location.name}</h2>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      {/* You can display more weather information here */}
    </div>
  );
};

export default WeatherDisplay;
