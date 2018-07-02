import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./components/Contact";
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
  <Route component={Home} />
  
</Switch>
<Footer />
  </div>
  </Router>;

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
