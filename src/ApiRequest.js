import React, { Component } from 'react'
import axios from 'axios';

import SummonerPage from "./SummonerPage";

const CORS = "https://cors-anywhere.herokuapp.com/";
const SUMMONER_QUERY = ".api.riotgames.com/lol/summoner/v4/summoners/by-name/";
const MASTERY_QUERY = ".api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/";
const CHAMP_QUERY = "https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json";
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


    apiCall(){
        const datas = [];
        var summonerId = '';
        axios.get("https://" + this.props.region + SUMMONER_QUERY + this.props.summoner + API_KEY)
            .then(
                (res) => {
                    summonerId = res.data.id;
                    datas.push(res.data);
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })

            .then(() => axios.get("https://" + this.props.region + MASTERY_QUERY + summonerId + API_KEY)
                .then(
                    (res) => {
                        datas.push(res.data)
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    })
            )

            .then(() => axios.get(CHAMP_QUERY)
                .then(
                    (res) => {
                        const response = res.data.data;
                        const champNameId = [];

                        for (var ele in response) {
                            champNameId.push({clef: ele, name: response[ele].name, value: response[ele].key})
                        }

                        datas.push(champNameId)
                        this.setState({
                            isLoaded: true,
                            results: datas
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }))
    }

    componentDidMount() {
        this.apiCall()
    }


    render() {
        const { error, isLoaded, results } = this.state;
        if (error) {
            if(error.status === 429){
                var retryAfter = (results.header['retry-after'] || 10) * 1000;
                return <div className="alert alert-danger">Error: {error.message} retry in {retryAfter}</div>;
            }
            return <div className="alert alert-danger">Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="alert alert-info">Loading...</div>;
        } else {
            return (
                <SummonerPage res={results}/>
            );
        }
    }
}

export default ApiRequest