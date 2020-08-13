import React, { Component } from 'react'
import axios from 'axios';
import SummonerPage from "./SummonerPage";

const CORS = "https://cors-anywhere.herokuapp.com/";
const API_KEY = "?api_key=" + process.env.REACT_APP_RIOT_API_KEY;


class ApiRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            summoner: []
        };
    }

    componentDidMount() {
        fetch(CORS + this.props.apiCall + API_KEY)
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        summoner: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, summoner } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <SummonerPage summoner={summoner}/>
            );
        }
    }
}

export default ApiRequest