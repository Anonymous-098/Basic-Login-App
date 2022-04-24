import React, { useState } from "react";
import "./Login.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredEmailHandler = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const enteredPasswordHandler = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmail = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePassword = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.loginClickHandler();
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={`control ${emailIsValid === false? 'invalid':''}`}>
          <label>E-Mail</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={enteredEmailHandler}
            onBlur={validateEmail}
          ></input>
        </div>
        <div className={`control ${passwordIsValid === false? 'invalid':''}`}>
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={enteredPasswordHandler}
            onBlur={validatePassword}
          ></input>
        </div>
        <div className="actions">
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
