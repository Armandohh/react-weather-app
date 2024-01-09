import Search from "../search/search";
import LocationButton from "../location-button/location-button";
import "./navbar.css"

const Navbar = ({onSearchChange}) => {


    const handleLocationSearch = (locationData) => {
        //pass the location data to the onSearchChange prop
        onSearchChange(locationData);
      };

    return (
        <nav>
            <div className='navBarTitle'> ClimaSphere </div>

            <div className='SearchWrapper'>
              <Search onSearchChange={onSearchChange} />
            </div> 
            
            <div className='location-button'>
                <LocationButton onClick={handleLocationSearch}></LocationButton>  
            </div>   
        </nav>
    );
};

export default Navbar;