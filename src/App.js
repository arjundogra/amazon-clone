import logo from "./logo.svg";
import "./App.css";
import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/base.scss";
import Login from "./Login";
import { auth, db } from "./firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((User) => {
      if (User) {
        console.log("Logged In");
        dispatch({
          type: "SET_USER",
          user: User,
        });
      } else {
        console.log("Logged Out");
        dispatch({
          type: "REMOVE_USER",
          user: null,
        });
      }
    });
  }, []);
  console.log("Basket>>", user);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
