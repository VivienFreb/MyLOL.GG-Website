import React, { Component } from 'react'
import axios from 'axios';

import SummonerPage from "./SummonerPage";

const CORS = "https://cors-anywhere.herokuapp.com/https://";
const SUMMONER_QUERY = ".api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const MASTERY_QUERY = ".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";
const CHAMP_QUERY = "http://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json";
const API_KEY = "?api_key=" + process.env.REACT_APP_RIOT_API_KEY;


class ApiRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            results: [],
        };
    }

    componentDidMount() {
        const datas = [];
        var summonerId = '';
        axios.get(CORS + this.props.region + SUMMONER_QUERY + this.props.summoner + API_KEY)
        //
            .then(
                (res) => {
                    summonerId = res.data.id;
                    datas.push(res.data);
                    this.setState({
                        results: datas
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
            .then(() => axios.get(CORS + this.props.region + MASTERY_QUERY + summonerId + API_KEY)
                .then(
                    (res) => {
                        datas.push(res.data)
                        this.setState({
                            results: datas
                        });
                    }))
            .then(() => axios.get(CHAMP_QUERY)
                .then(
                    (res) => {
                        datas.push(res.data.data)
                        this.setState({
                            isLoaded: true,
                            results: datas
                        });
                    }))
    }


render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <SummonerPage res={results}/>
        );
    }
}
}

export default ApiRequest