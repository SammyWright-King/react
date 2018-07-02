import React, { Component } from 'react';

import {BrowserRouter as Router,Route,
  Link,Redirect} from 'react-router-dom';


import Header from './Component/HeaderComponent/Header';
import Login from './Component/Compnt/Login';
import Signup from './Component/Compnt/Signup';
import Result from './Component/Compnt/Result';
import HomePage from './Component/Compnt/HomePage';
import Footer from './Component/FooterComponent/Footer';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Header />

        <Route exact path="/" component={HomePage} />
        <Route exact path="/HomePage" component={HomePage} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Result" component={Result} />
        
        <Footer />
      
      </div>
      </Router>
    );
  }
}

export default App;
