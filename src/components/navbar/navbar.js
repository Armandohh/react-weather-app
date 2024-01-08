import Search from "../search/search";
import "./navbar.css"

const Navbar = ({onSearchChange}) => {
    return (
        <nav>
            <div className='navBarTitle'> ClimaSphere </div>
            <ul>
                <li>
                <Search onSearchChange={onSearchChange} />
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;