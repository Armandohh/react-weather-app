import "./location-button.css";
import { REVERSE_GEO_API_URL, WEATHER_API_KEY } from "../../api";

const LocationButton = ({ onClick }) => {

    const handleLocationOnClick = async ()=> {
        try {
            //get your current position
            navigator.geolocation.getCurrentPosition(
                async(position) => {

                    //get the latitude and longitude from your current position
                    const {latitude, longitude} = position.coords;

                    //get city name based on coordinates with a api call
                    const response = await fetch(`${REVERSE_GEO_API_URL}/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${WEATHER_API_KEY}`);
                    
                    //parse the json content from the response
                    const result = await response.json();
                    
                    //set the city name and conuntry
                    const city = result[0].name;
                    const country = result[0].country;

                    //perform a serach with the information
                    onClick({
                        value: `${latitude} ${longitude}`, 
                        label: `${city}, ${country}`,
                    });

                },
                (error) => {
                    console.error('Error getting location', error);
                }
            );
        } catch(error) {
            console.error("Error handling location click", error);
        }
    };

  return (
    <button className="locationButton" onClick={handleLocationOnClick}>
        <span className="icon">my_location</span>
        <span className="locationButtonText">Current Location</span>
    </button>
  );
};

export default LocationButton;   