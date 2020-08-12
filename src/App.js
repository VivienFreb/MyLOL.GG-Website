import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import ApiRequest from "./ApiRequest";
import SummonerForm from "./SummonerForm";
import SummonerPage from "./SummonerPage";


class App extends Component {
    state = {
      summoner: null
    };

    displaySummoner = (summoner) => {
        this.setState({summoner})
        console.log("aa " + summoner)
    };

  render() {
      const { summoner } = this.state;
      return (
      <div className="App">
          <ApiRequest/>
          {(summoner ? (
            <SummonerPage summoner={summoner}/>
          ) : (
            <SummonerForm onStored={this.displaySummoner}/>
          ))}
      </div>
      );
  }
}

export default App;
