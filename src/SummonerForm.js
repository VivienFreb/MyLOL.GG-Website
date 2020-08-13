import React, { Component } from 'react'
import SummonerPage from "./SummonerPage";
import ApiRequest from "./ApiRequest";

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
            apiCall: null
        };
    }

    handleChange = (event) => {
        this.setState({[event.target.id]: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const call = 'https://' + this.state.region.toLowerCase() + '.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + this.state.summoner;
        console.log(call);
        event.target.className += " was-validated";
        if(event.target.checkValidity()){
            this.setState({apiCall: call})
        }
    };

    persistSummoner = (event) => {
        event.preventDefault();
        const newSummoner = {summoner: this.props.summoner, region: this.props.region};

    }

    render() {
        const { apiCall } = this.state;
        return (
            <div>
            {(apiCall === null ? (
                <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Summoner Name</label>
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
                        <div className="invalid-feedback">
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
                    <input type="submit" value="Envoyer" />
                </form>
            ) : (
                <ApiRequest apiCall={apiCall}/>
            ))}
            </div>
        );
    }
}

export default SummonerForm