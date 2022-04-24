import React from "react";
import "./Navigation.css";

const Navigation = (props) =>{
    const isLoggedin = props.isLoggedin;
    return(
        <nav className="nav">
            {isLoggedin && <ul>
                <li>
                    <a href="/">Users</a>
                </li>
                <li>
                    <a href="/">Admin</a>
                </li>
                <li>
                    <button onClick={props.logOutHandler}>Logout</button>
                </li>
            </ul>}
        </nav>
    )
}

export default Navigation;