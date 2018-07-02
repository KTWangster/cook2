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
import Contact from "./components/Contact";
import './App.css';

class App extends Component {
  createUser = user => {
    var request = new XMLHttpRequest();
    request.open('POST', '/createUser', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    let data = {
      display_name: user.display_name,
      username: user.username,
      password: user.password,
      location: user.location
    };
    request.send(data);
    console.log(data);
  }

  render() {
    return (
      <Router>
        <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Register" component={Register} createUser={this.createUser}/>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Alacarte" component={Alacarte} />
          <Route exact path="/ClassPkgs" component={ClassPkgs} />
          <Route component={Home} />
        </Switch>
        <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App; */
