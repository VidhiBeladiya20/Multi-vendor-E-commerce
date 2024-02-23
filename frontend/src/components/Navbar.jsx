import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";


export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid text-center">
                    <div className="navbar-collapse justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/shop" className="nav-link">Shop</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link">SignUp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/seller" className="nav-link">Become Seller</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
};