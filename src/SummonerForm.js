import React, { Component } from 'react'

import ApiRequest from "./ApiRequest";

import './SummonerForm.css'

const REGIONS = [
    {region:'EUW', val: "EUW1"},
    {region:'NA', val: "NA1"},
    {region:'BR', val: "BR1"},
    {region:'EUNE', val: "EUN1"},
    {region:'JP', val: "JP1"},
    {region:'LA', val: "LA1"},
    {region:'OC', val: "OC1"},
    {region:'RU', val: "RU"},
    {region:'TR', val: "TR1"}
];

class SummonerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            summoner: '',
            region: 'EUW1',
            isValid: false
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = (event) => {
        this.setState({isValid: false});
        event.preventDefault();
        event.target.className += " was-validated";
        if(event.target.checkValidity()){
            this.setState({isValid: true})
        }
    };

    newSearch = () => {
        this.setState({
            isValid: false
        })
    };

    render() {
        const { summoner, region, isValid } = this.state;
        return [
            <nav className="navbar sticky-top navbar-light bg-light">
                <form className="search-form form-inline needs-validation" noValidate onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            id="summoner"
                            type="text"
                            onChange={this.handleChange}
                            placeholder="Enter your Summoner Name"
                            required
                            minLength="3"
                            maxLength="16"
                            value={this.state.summoner}
                        />
                        <div className="invalid-feedback alert alert-danger">
                            Summoner is required with minimum length of 3 and max of 16
                        </div>
                    </div>
                    <div className="form-group">
                        <select
                            className="custom-select"
                            id="region"
                            onChange={this.handleChange}
                        >
                            {REGIONS.map(({region, val}) => (
                                <option key={region} value={val}>{region}</option>
                            ))}
                        </select>
                    </div>
                    <input type="submit" value="Envoyer" onClick={this.newSearch}/>
                </form>

            </nav>,
            <div class="summonerContent">
                {isValid ? (
                    <ApiRequest summoner={summoner} region={region} />
                ) : (
                    <p className="summonerName">Presentation du site</p>
                )}
            </div>

        ];
    }
}

export default SummonerForm