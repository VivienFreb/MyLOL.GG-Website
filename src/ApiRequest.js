import React, { Component } from 'react'
import axios from 'axios';

const API_KEY = process.env.REACT_APP_RIOT_API_KEY;


class ApiRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {

        fetch("https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/TooFat4You?api_key=" + API_KEY)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        items: result
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    <p>User : {items.id}</p>
                    <p>Account Id : {items.accountId}</p>
                    <p>puuid : {items.puuid}</p>
                    <p>Nme : {items.name}</p>
                    <img src={"http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + items.profileIconId + ".png"}/>
                    <p>Level : {items.summonerLevel}</p>
                </ul>
            );
        }
    }
}

export default ApiRequest