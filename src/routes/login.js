import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "../utils/fakeAuth";

function Login() {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer === true) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

export default Login;
