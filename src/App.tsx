import React, { Component } from 'react';
import './App.scss';
import AppNavBar from './components/AppNavBar/AppNavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavBar />
      </div>
    );
  }
}

export default App;
