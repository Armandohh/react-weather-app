import "./forecast.css"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

//array of week days
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
    //get today's day
    const dayInAWeek = new Date().getDay();

    ///create an array of forecast days starting from the current day
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    
    return (
        <div className="forecast">
            <label className="title"> Daily </label>
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) =>(
                    <AccordionItem keay = {idx}> 
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}/>
                                    <label className="day">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min-max">{((item.main.temp_min - 273.15) * (9/5) + 32).toFixed(0)}°F / {((item.main.temp_max - 273.15) * (9/5) + 32).toFixed(0)}°F</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind Speed</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea Level</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels Like</label>
                                    <label>{((item.main.feels_like- 273.15) * (9/5) + 32).toFixed(0)}°F</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Forecast;