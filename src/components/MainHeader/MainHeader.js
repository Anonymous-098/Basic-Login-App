import React from "react";
import "./MainHeader.css";
import Navigation from "./Navigation";

const MainHeader = (props) =>{
    return(
        <>
            <header className="header">
                <h1>A Typical Page</h1>
                <Navigation logOutHandler={props.logOutHandler} />
            </header>
        </>
    )
}

export default MainHeader;