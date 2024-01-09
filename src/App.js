import './App.css';
import HourlyForecast from './components/hourly-forecast/hourly-forecast';
import Navbar from './components/navbar/navbar';
import CurrentWeather from './components/current-weather/current-weather';
import Forecast from './components/forecast/forecast';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';

function App() {

  //state to hold the currentWeather and forecast data
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [forecast, setForecast] = useState(null);

  //event handler to fetch  weather and forecast data when something is searched
  const handleOnSearchChange = (searchData) => {

    //extract the latitude and longitude from searchData.value
    const [lat, lon] = searchData.value.split(" ");

    //fetch current weather and forecast using API
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const hourlyForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);

    //use Promise.all
    Promise.all([currentWeatherFetch, hourlyForecastFetch, forecastFetch])
      .then(async (response) => {

        //parse JSON response from API
        const weatherResponse = await response[0].json();
        const hourlyForecastResponse = await response[1].json();
        const forecastResponse = await response[2].json();

        //update state with current weather and forecast data
        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setHourlyForecast({city: searchData.label, ...hourlyForecastResponse});
        setForecast({city: searchData.label, ...forecastResponse});
      })
      .catch((err) => console.log(err));
  };

  //render the main app componenet
  return (
    <div className="container">
      <Navbar onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather}/>}
      {hourlyForecast && <HourlyForecast data={hourlyForecast}/>}
      {forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default App;
