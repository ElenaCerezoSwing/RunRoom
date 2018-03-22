import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js';
import Daenerys from './components/characterCards/Daenerys';
import DaenerysRanking from './components/characterRanking/DaenerysRanking';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Daenerys />
        <DaenerysRanking />
      </div>
    );
  }
}

export default App;
