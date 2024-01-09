const HourlyForecast = ({data}) => {

    console.log({data});

    return (
        <div className="hourly-forecast">
            <p className="hourlyTitle">Hourly Forecast</p>
            <div className="hour-item"> 
                <p className="hour-day"> </p>
                <p className="temperature"> </p>
                <p className="details"></p>
            </div>
            <img alt="weather" className="weather-icon" />
        </div>
    )
}

export default HourlyForecast;