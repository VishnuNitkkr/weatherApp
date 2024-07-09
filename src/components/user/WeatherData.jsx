import React, { useState, useEffect } from 'react';
import Search from '../search/Search';
import { Box, Typography } from '@mui/material';
import CurrentWeather from '../currentWeatherInfo/CurrentWeather';
import ForecastChart from '../chartInfo/ForecastChart';
import Forecast from '../forecast/Forecast';
import { apiKey, openWeatherApiUrl } from '../../Api';

const WeatherData = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (inputData) => {
    let [lat, lon] = inputData.value.split(' ');

    console.log(lat);
    console.log(lon);

    const currentWeatherData = fetch(`${openWeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const forecastWeatherData = fetch(`${openWeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    Promise.all([currentWeatherData, forecastWeatherData])
      .then(async (response) => {
        const weatherResult = await response[0].json();
        const forecastResult = await response[1].json();
        setWeather({ city: inputData.label, ...weatherResult });
        setForecast({ city: inputData.label, ...forecastResult });
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    const lat = 28.7041;
    const lon = 77.1025;
    const currentWeatherData = fetch(`${openWeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
    const forecastWeatherData = fetch(`${openWeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

    Promise.all([currentWeatherData, forecastWeatherData])
      .then(async (response) => {
        const weatherResult = await response[0].json();
        const forecastResult = await response[1].json();
        setWeather({ city: 'Delhi', ...weatherResult });
        setForecast({ city: 'Delhi', ...forecastResult });
      })
      .catch((error) => {
        console.error('Error fetching default weather data:', error);
      });
  }, []);

  console.log(weather);
  console.log(forecast);

  return (
    <>
    
      <Search onSearchChange={handleOnSearchChange} />

      <Typography
    className='alert'>
    Please wait a moment while the API processes your request.
    </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 5 }}>
        <Box className="weatherInfo">
          {weather && <CurrentWeather data={weather} />}
          {forecast && <ForecastChart data={forecast} />}
        </Box>
      </Box>
      <Box>
        <Typography className="mainHeading">Weather Forecasting</Typography>
        <hr />
        {forecast && <Forecast forecast={forecast} />}
      </Box>
    </>
  );
};

export default WeatherData;
