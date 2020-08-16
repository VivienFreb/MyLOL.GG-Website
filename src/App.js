import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import SummonerForm from "./SummonerForm";

class App extends Component {
    state = {
      summoner: null
    };

  render() {
      return (
      <div className="App">
          <SummonerForm/>
      </div>
      );
  }
}

export default App;
