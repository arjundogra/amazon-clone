import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth, db } from "./firebase";

function Login() {
  const history = useHistory();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const signIn = (e) => {
    auth()
      .signInWithEmailAndPassword(Email, Password)
      .then((user) => {
        console.log("Signed In");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(Email, Password)
      .then((user) => {
        console.log("🌝", user);
        if (user) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        src="https://www.marketplace.org/wp-content/uploads/2019/07/ama2.png?w=800"
        alt="logo"
        className="login_logo"
      />
      <div className="login_form">
        <h4 className="login_title">Login</h4>
        <form>
          <h2>Email</h2>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h2>Password</h2>
          <input
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn}>
            Login
          </button>
        </form>
        <p>Agree to login</p>
        <button className="create_acc" onClick={signUp}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
