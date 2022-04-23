import React from "react";
import "./Login.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = () => {
  return (
    <Card className="login">
      <form>
        <div className="control">
          <label>E-Mail</label>
          <input type="text"></input>
        </div>
        <div className="control">
          <label>Password</label>
          <input type="password"></input>
        </div>
        <div className="actions">
            <Button type="submit">Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
