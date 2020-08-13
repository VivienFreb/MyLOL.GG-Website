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
            results: [],
        };
    }

    componentDidMount() {
        const datas = [];
        axios.get(CORS + this.props.apiCall + API_KEY)
        // axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(
                (res) => {
                    datas.push(res.data);
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
                })
    }


render() {
    const { error, isLoaded, results } = this.state;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <SummonerPage summoner={results}/>
        );
    }
}
}

export default ApiRequest