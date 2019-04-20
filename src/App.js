import React, { Component } from 'react';
import './App.css';
import Main from './components/Main'
import About from './components/About'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
      </div>
    );
  }
}

export default App;
