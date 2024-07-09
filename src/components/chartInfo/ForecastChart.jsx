import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ForecastChart = ({data}) => {
  
  const formatDate = (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  };

  const dailyData = data.list.reduce((acc, entry) => {
    const date = formatDate(entry.dt_txt);
    if (!acc[date]) {
      acc[date] = { tempSum: 0, count: 0 };
    }
    acc[date].tempSum += entry.main.temp;
    acc[date].count += 1;
    return acc;
  }, {});

  const dates = Object.keys(dailyData);
  const temperatures = dates.map(date => dailyData[date].tempSum / dailyData[date].count);

  console.log(temperatures);
  console.log(dates);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatures,
        fill: false,
        borderColor: 'rgb(238, 181, 36)',
        tension: 0.1,
      },
    ],
  };

  return (
    <Card className='card '>
      <CardContent className='currentWeatherInfo'>
        <Typography variant="h5" component="div">
          Temperature Chart
        </Typography>
        <Line data={chartData} />
      </CardContent>
    </Card>
  );
}

export default ForecastChart;
