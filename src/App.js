import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;