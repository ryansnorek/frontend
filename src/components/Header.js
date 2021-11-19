import { NavLink } from "react-router-dom";
 
const Header = () => {
    return (
        <div className="header">
            <h2>african market</h2>
            <nav>
                <ul>
                 <li className="green"><NavLink to="/signup">Signup</NavLink></li>
                 <li className="yellow"><NavLink to="/login">Login</NavLink></li>
                 <li className="red"><NavLink to="/view">Market</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;