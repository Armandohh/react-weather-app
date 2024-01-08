import Search from "../search/search";
import "./navbar.css"

const Navbar = ({onSearchChange}) => {
    return (
        <nav>
            <div className='navBarTitle'> ClimaSphere </div>
            <div className='SearchWrapper'>
              <Search onSearchChange={onSearchChange} />
            </div>        
        </nav>
    );
};

export default Navbar;