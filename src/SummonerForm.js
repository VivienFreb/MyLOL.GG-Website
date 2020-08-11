import React, { Component } from 'react'

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
        this.state = {summoner: '', region: 'EUW1'};
    }

    handleSummonerChange = (event) => {
        this.setState({summoner: event.target.value});
    };
    handleRegionChange = (event) => {
        this.setState({region: event.target.value});
    };

    handleSubmit = (event) => {
        alert('https://' + this.state.region.toLowerCase() +'.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.state.summoner);
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom d'invocateur :
                    <input type="text" value={this.state.summoner} onChange={this.handleSummonerChange} />
                </label>
                <label>
                    Région
                    <div className="custom-select">
                        <select onChange={this.handleRegionChange}>
                            {REGIONS.map(({region, val}) => (
                                <option key={region} value={val}>{region}</option>
                            ))}
                        </select>
                    </div>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default SummonerForm