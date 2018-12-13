import React, { Component } from 'react';
import SideBar from './components/side-bar/sideBar';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
      </div>
    );
  }
}

export default App;
