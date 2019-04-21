import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;