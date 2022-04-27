import React, { useContext } from "react";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && <Home />}
    </>
  );
};

export default App;
