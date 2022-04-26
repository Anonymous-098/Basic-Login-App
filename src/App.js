import React, { useEffect, useState } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (userLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginClickHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
      }}
    >
      <MainHeader logOutHandler={logOutHandler} />
      {!isLoggedIn && <Login loginClickHandler={loginClickHandler} />}
      {isLoggedIn && <Home />}
    </AuthContext.Provider>
  );
};

export default App;
