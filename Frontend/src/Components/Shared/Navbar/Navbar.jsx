import React, { useState } from "react";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    function DropdownItem(props) {
        return (
            <li className="dropdownItem">
                <p>{props.text}</p>
            </li>
        );
    }
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <nav className="flex space-between">
                <div className="left flex items-center">
                    <NavLink to="/">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/748/748481.png?w=740&t=st=1666000669~exp=1666001269~hmac=c1a70a67ef3824596ce3f4c76b7536dc630bb5ca01d24102561a56d626d92372"
                            className="logo-img"
                            alt="logo"
                        ></img>
                    </NavLink>

                    <h3 className="navbar-brand">
                        <NavLink to="/">Know Your Bus</NavLink>
                    </h3>
                    <ul className="flex items-center justify-center uppercase semibold">
                        {/* <li>Know Your Bus</li>
                        <li>
                            <NavLink to="/buses">Bus Tickets</NavLink>
                        </li>
                        <li>New rides</li>
                        <li></li> */}
                    </ul>
                </div>
                <div className="right flex items-center">
                    <div className="mx-2">
                        <NavLink to="/offers">Offers</NavLink>
                    </div>
                    <div className="mx-2">About</div>
                    <div className="mx-2">
                        <NavLink to="/contact">Contact Us</NavLink>
                    </div>
                    <div className="mx-2" onClick={() => setOpen(!open)}>
                        <AccountCircleIcon />
                    </div>
                    <div
                        className={`dropdown-menu ${
                            open ? "active" : "inactive"
                        }`}
                    >
                        <ul>
                            <DropdownItem text={"My Profile"} />
                            <DropdownItem text={"My Trips"} />
                            <DropdownItem text={"Logout"} />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
