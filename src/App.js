import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/> 
            {/* <h1>Checkout</h1> */}
            <Checkout/>
          </Route>

          <Route path="/Login">
            <Login/>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
            
          </Route>

        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
