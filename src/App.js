import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Alacarte from "./pages/Alacarte";
import ClassPkgs from "./pages/ClassPkgs";
import Contact from "./pages/Contact";
import Chatbot from "./pages/Chatbot";
import UserProfile from "./pages/UserProfile";
import Admin from "./pages/Admin";
import './App.css';

const App = () =>
  <Router>
  <div>
    <Nav />
<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Contact" component={Contact} />
  <Route exact path="/Register" component={Register} />
  <Route exact path="/Login" component={Login} />
  <Route exact path="/Alacarte" component={Alacarte} />
  <Route exact path="/ClassPkgs" component={ClassPkgs} />
  <Route exact path="/Chatbot" component = {Chatbot} />
  <Route exact path="/UserProfile" component = {UserProfile} />
  <Route exact path="/Admin" component = {Admin} />
  <Route component={Home} />
</Switch>
<Footer />
  </div>
  </Router>;

export default App;