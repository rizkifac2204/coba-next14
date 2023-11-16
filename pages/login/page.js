"use client";

import { useState, useRef } from "react";
import axios from "axios";

function Login() {
  const [apa, setApa] = useState(null);
  const usernameRef = useRef();
  const passwordRef = useRef();

  function onUserLogin(e) {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      return;
    }

    axios
      .post(`/api/auth/login`, {
        username: username,
        password: password,
      })
      .then((res) => {
        setApa(res);
        setTimeout(() => {
          window.location.href = "/admin";
        }, 1000);
      })
      .catch((err) => {
        setApa(err.response);
        console.log(err.response);

        const msg = err.response.data.message
          ? err.response.data.message
          : "Terjadi Kesalahan";
        console.log(msg);
      })
      .then(() => {});
  }
  return (
    <>
      LOGIN
      <br />
      <form onSubmit={(e) => onUserLogin(e)}>
        <input
          ref={usernameRef}
          required
          type="text"
          name="username"
          className="border"
          placeholder="username"
        />
        <br />
        <input
          ref={passwordRef}
          required
          type="password"
          name="password"
          className="border"
          placeholder="username"
        />
        <br />
        <input type="submit" />
        <br />
        {JSON.stringify(apa)}
      </form>
    </>
  );
}

export default Login;
