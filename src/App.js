import React, { useState } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from './components/Home/Home';

const App = () => {

  const [isLoggedin,setIsLoggedin] = useState(false);

  const loginClickHandler = () =>{
    setIsLoggedin(true);
  }

  const logOutHandler = () =>{
    setIsLoggedin(false);
  }
  
  return (
    <>
      <MainHeader isLoggedin={isLoggedin} logOutHandler={logOutHandler} />
      {!isLoggedin && <Login loginClickHandler={loginClickHandler} />}
      {isLoggedin && <Home />}
    </>
  );
};

export default App;
