import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoAPIOptions } from "../../api";

//functional component declared
const Search = ({ onSearchChange }) => {

    //State to hold the current search value entered by the user
    const [search, setSearch] = useState(null);

    //Event handler when the search value changes
    const handleOnChange = (searchData) => {
        //update local state with new search value
        setSearch(searchData);

        //call the onSearchChange prop passed from parent component (Search)
        //pass the search data to notify the parent about the saerch Change
        onSearchChange(searchData);
    }

    const loadOptions = async (searchValue) => {
        try {

            //send a request to GeoDB Cities API to fetcgh cities with a min population of a million
            const response = await fetch(`${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${searchValue}`, geoAPIOptions);
            
            ///parse the json content from the response 
            const result = await response.json();
            

            //return a array of options, used for dropown and autocomplete component
            return {
                //the options property will contain the array of formatted objects
                //to format them, map is used to iterate over each city in the result.data array
                options: result.data.map((city) => {
                    return {
                        //create an option object with value and label properties

                        //concatenate latitude and longitude into a string that is used for value
                        value: `${city.latitude} ${city.longitude}`,

                        //concatenate name and countryCode into a string that is use for label
                        label: `${city.name}, ${city.countryCode}`,
                    };
                }),
            };
        } catch (error) {
            console.error(error);

            return {
                options: [],
                hasMore: false,
            };
        }
    };

    return (
        //asyncpaginate component is used to create an asynchrnous, paginated dropddown input for cities
        <AsyncPaginate
            //placeholder text for the input
            placeholder="Search for City"

            //debounce timeout to wait before triggerring search to avoid search spam
            debounceTimeout={1000}

            //controlled value for the input
            value={search}

            //event handler for when the input value changes
            onChange={handleOnChange}

            loadOptions={loadOptions}
        />
    )
}

//search component is made available for use in other parts off weather app
export default Search;