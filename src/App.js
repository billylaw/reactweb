import React, { Component } from 'react';
import Login from './pages/login';
import Register from './pages/register';
//import Button from 'antd/es/button';
import {Button} from 'antd';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;
