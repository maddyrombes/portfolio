import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import About from './components/About';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        <About />
        <Technologies />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;