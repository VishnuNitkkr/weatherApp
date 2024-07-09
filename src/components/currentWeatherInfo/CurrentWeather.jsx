
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import './CurrentWeather.css'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AirIcon from '@mui/icons-material/Air';
import SickIcon from '@mui/icons-material/Sick';

import PlaceIcon from '@mui/icons-material/Place';
import CompressIcon from '@mui/icons-material/Compress';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const CurrentWeather = ({data}) => {
  return (
    <>
     <Box className="currentWeatherInfo" >


         <Card sx={{ maxWidth: 400,minWidth:400}}className='card'>
      <Box  className='temptype'>
      <Typography gutterBottom variant="h3" component="div" className='temp'>
          <DeviceThermostatIcon
            sx={{fontSize:30}}
          />
          {Math.round(data.main.temp)}°C
        </Typography>
      <CardMedia
        className='cardMedia'
        component="img"
        alt="green iguana"
        
        image={`/icons/${data.weather[0].icon}.png`}
      />
      </Box>
      <CardContent >
        <Box >
       
        <Typography gutterBottom variant="h5" component="div" className='temp'>
        <PlaceIcon
            sx={{fontSize:25}}
          />
          {data.city } ({(data.weather[0].description)})
        </Typography>
        </Box>
        <Box className="weatherDetails">
        <Box className='details'>
        <Typography variant="h5" color="text.secondary">
        <SickIcon
            sx={{fontSize:25}}
          />
          Feels Like
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {Math.round(data.main.feels_like)}°C
          </Typography>
        </Box>
        <Box className='details'>
        <Typography variant="h5" color="text.secondary">
        <WaterDropIcon
            sx={{fontSize:25}}
          />
          Humidity
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {data.main.humidity} %
          </Typography>
        </Box>
        <Box className='details'>
        <Typography variant="h5" color="text.secondary">
        <AirIcon
            sx={{fontSize:25}}
          />
          Wind
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {data.wind.speed} m/s
          </Typography>
        </Box>
        <Box className='details'>
        <Typography variant="h5" color="text.secondary">
        <CompressIcon
            sx={{fontSize:25}}
          />
          Pressure
          </Typography>
          <Typography variant="h5" color="text.secondary">
          {data.main.pressure} hPa
          </Typography>
        </Box>
        </Box>
      </CardContent>
      
    </Card> 
        </Box> 
    </>
  )
}

export default CurrentWeather
