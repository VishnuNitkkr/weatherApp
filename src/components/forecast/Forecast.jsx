import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './Forecast.css'

import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';

import PlaceIcon from '@mui/icons-material/Place';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
const Forecast = ({forecast}) => {
  const weekDays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

  const days=new Date().getDay();
  const dates=new Date().getDate();

  const forecastDays=weekDays.slice(days,weekDays.length).concat(weekDays.slice(0,days))

  console.log(forecastDays)
  console.log(forecast)
  return (
    <>
    <Box className='forecastDays'>
    {forecast.list.slice(1, 8).map((item, key) => (
  <Box 
    key={key}
    component='div'
    className='ForecastDetail'
  >
    <Typography component='h3'>
    {forecastDays[key]}
    </Typography>
    <Box>
      <CardMedia
        className='cardMedia-img'
        component='img'
        alt='weather'
        image={`/icons/${item.weather[0].icon}.png`}
      />
      <Typography component='h5'>
        {item.weather[0].description}
      </Typography>
    </Box>
    <Box className="weatherDetails">
      <Box className='details'>
        <Typography variant="h6" color="text.secondary">
        <DeviceThermostatIcon
            sx={{fontSize:20}}
          />
         Temperature
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {Math.round(item.main.temp)}°C
        </Typography>
      </Box>
      <Box className='details'>
        <Typography variant="h6" color="text.secondary">
        <WaterDropIcon
            sx={{fontSize:20}}
          />
          Humidity
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.main.humidity}%
        </Typography>
      </Box>
      <Box className='details'>
        <Typography variant="h6" color="text.secondary">
        <AirIcon
            sx={{fontSize:25}}
          />
          Wind
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.wind.speed} m/s
        </Typography>
      </Box>
      <Box className='details'>
        <Typography variant="h6" color="text.secondary">
        <CompressIcon
            sx={{fontSize:25}}
          />
          Pressure
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.main.pressure} hPa
        </Typography>
      </Box>
    </Box>
  </Box>
))}
    </Box>
 
    </>
  )
}

export default Forecast
