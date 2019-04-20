import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import About from './components/About'
import Portfolio from './components/Portfolio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;