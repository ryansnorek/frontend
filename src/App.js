import './App.css';
import { Route } from "react-router-dom";
import React from "react";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Signup from "./components/Signup";
import View from './components/View';
import Header from './components/Header';
import ViewItem from './components/ViewItem';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        
        <PrivateRoute exact path="/items/:id" component={ViewItem}/>
        <PrivateRoute exact path="/view" component={View}/>
    </div>
  );
}

export default App;
