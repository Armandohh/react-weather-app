import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

//functional component declared
const Search = ({onSearchChange}) => {

    //State to hold the current search value entered by the user
    const[search, setSearch] = useState(null);

    //Event handler when the search value changes
    const handleOnChange = (searchData) => {
        //update local state with new search value
        setSearch(searchData);

        //
        onSearchChange(searchData);
    }

    return(
        //asyncpaginate component is used to create an asynchrnous, paginated dropddown input for cities
        <AsyncPaginate
            //placeholder text for the input
            placeholder="Search for City"

            //debounce timeout to wait before triggerring search to avoid search spam
            debounceTimeout={600}

            //controlled value for the input
            value={search}


            onChange={handleOnChange}
        />
    )
}

export default Search;