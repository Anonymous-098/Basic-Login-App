import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const userLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (userLoggedInInformation === "1") {
      setIsLoggedin(true);
    }
  }, []);

  const loginClickHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedin(true);
  };

  const logOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedin(false);
  };

  return (
    <>
      <MainHeader isLoggedin={isLoggedin} logOutHandler={logOutHandler} />
      {!isLoggedin && <Login loginClickHandler={loginClickHandler} />}
      {isLoggedin && <Home />}
    </>
  );
};

export default App;
