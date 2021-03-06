import React, { useContext, useEffect, useReducer, useState } from "react";
import "./Login.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const authCtx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form!!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const enteredEmailHandler = (e) => {
    dispatchEmail({ type: "USER_INPUT", val: e.target.value });

    // setFormIsValid(e.target.value.includes("@") && passwordState.isValid);
  };

  const enteredPasswordHandler = (e) => {
    dispatchPassword({ type: "USER_INPUT", val: e.target.value });

    // setFormIsValid(emailState.isValid && e.target.value.trim().length > 6);
  };

  const validateEmail = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePassword = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    authCtx.onLogin();
  };

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <Input
          label="E-Mail"
          type="text"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={enteredEmailHandler}
          onBlur={validateEmail}
        />
        <Input
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={enteredPasswordHandler}
          onBlur={validatePassword}
        ></Input>
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
