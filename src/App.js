import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ApiRequest from "./ApiRequest";
import SummonerForm from "./SummonerForm";


class App extends Component {
  render() {


      return (
      <div className="App">
          <SummonerForm/>
      </div>
      );
  }
}

export default App;
