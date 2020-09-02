import React, { Component } from 'react'

import brand from "./brand.png"
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
        event.preventDefault();
        if(event.target.checkValidity()){
            this.setState({isValid: true})
        }
    };

    newSearch = () => {
        this.setState({
            isValid: false
        })
    };

    componentDidMount() {

    }

    render() {
        const { summoner, region, isValid } = this.state;
        return [
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between sticky-top">
                <div className="navbar-brand" href="#">
                    <img src={brand}
                         height="35"
                         className="d-inline-block align-top"
                         alt="Logo MyLOL.GG"
                         onClick={this.newSearch}/>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="search-form form-inline my-2 my-lg-0 needs-validation" onSubmit={this.handleSubmit}>
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
                        </div>

                        <div className="form-group">
                            <select
                                className="custom-select mr-sm-2"
                                id="region"
                                onChange={this.handleChange}
                            >
                                {REGIONS.map(({region, val}) => (
                                    <option key={region} value={val}>{region}</option>
                                ))}
                            </select>
                        </div>

                        <button className="btn btn-outline-purple my-2 my-sm-0" type="submit" onClick={this.newSearch}>Search</button>
                    </form>
                </div>
            </nav>,
            <div className="summonerContent">
                {isValid ? (
                    <ApiRequest summoner={summoner} region={region} />
                ) : (
                    <p className="presentationSite">MyLOL.GG is a simple way to check your champion mastery progress and help you decide what champion you should go for.</p>
                )}
            </div>,

            <footer className="site-footer">
                {!isValid &&
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <p className="copyright-text"> &copy; 2020 MyLOL.GG. MyLOL.GG isn’t endorsed by Riot Games
                                and doesn’t reflect the views or opinions of Riot Games or anyone officially involved in
                                producing or managing League of Legends. League of Legends and Riot Games are trademarks
                                or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
                            </p>
                        </div>
                    </div>
                </div>
                }
            </footer>

        ];
    }
}

export default SummonerForm