import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import '../../assets/css/App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/About/AboutContainer.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default About;
