import { useEffect, useState } from "react";
import "./current-weather.css"

const CurrentWeather = ({data}) => {
     
    const [currentDateTime, setCurrentDateTime] = useState('');

    useEffect (() => {

        //function to update current date and time
        const updateDateTime = () => {
            const currentDate = new Date();

            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: 'true',
            };

            const formattedDDate = currentDate.toLocaleString('en-US', options);
            setCurrentDateTime(formattedDDate);
        };

        updateDateTime();

        return () => {};
    }, [data])

    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className="currentWeatherTitle">Today's Weather</p>
                    <div class="seperator"></div>
                    <p className="city">{data.city}</p>
                    <p className="currentDateAndTime">{currentDateTime}</p>
                    <p className="weather-description">{data.weather[0].description}</p>
                </div>

                <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temperature">{((data.main.temp - 273.15) * (9/5) + 32).toFixed(0)}°F</p>
                <div className="details">
                    <div className="parameter-row">
                        <span className="parameter-label">feels like</span>
                        <span className="parameter-value">{((data.main.feels_like- 273.15) * (9/5) + 32).toFixed(0)}°F</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parameter-label">pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;