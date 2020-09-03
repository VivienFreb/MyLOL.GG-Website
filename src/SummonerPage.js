import React, {Component} from 'react'
import moment from 'moment'

import './SummonerPage.css'
import './SummonerPageResponsive.css'

import { getLevelBorder, getMasteryLevel } from "./ImagesImport";

class SummonerPage extends Component{
    state = {
        summoner: this.props.res[0],
        mastery: this.props.res[1],
        champions: this.props.res[2]
    }

    getChampionNameById = (championId) =>{
        const champions = this.state.champions;
        var result = champions.find(ele => ele.value === championId.toString());
        return result.name;
    }

    getImage(champion){
        const champions = this.state.champions;
        var result = champions.find(ele => ele.value === champion.toString());
        return "https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/" + result.clef + ".png"
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    unixConvert(unix){
        var workingUnix = unix.toString().slice(0, -3);
        return moment.unix(workingUnix).format("DD/MM/YYYY")
    }

    componentDidMount() {
        const popper = document.createElement('script');
        const bootstraptable = document.createElement('script');
        popper.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        bootstraptable.src = "https://unpkg.com/bootstrap-table@1.17.1/dist/bootstrap-table.min.js"
        document.body.appendChild(popper)
        document.body.appendChild(bootstraptable)
    }

    render(){
        const { summoner, mastery } = this.state;
        return[
            <div className="summonerPage">
                <div className="sidebar">
                    <div className="iconContainer">
                        <img className="profileIcon" src={"https://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summoner.profileIconId + ".png"} alt={"Summoner Icon"}/>
                        <img className="levelBorder" src={getLevelBorder(summoner.summonerLevel)} alt={"Level border"}/>
                        <div className="summonerLevel">{summoner.summonerLevel}</div>
                    </div>
                    <p className="summonerName">{summoner.name}</p>
                    <div className="mobileInfo">
                        <p className="summonerInfoMobile">{summoner.name}</p>
                        <p className="summonerInfoMobile">{"Level " + summoner.summonerLevel}</p>
                    </div>
                </div>
                <div className="content">
                    <table data-toggle="table"
                           data-sortable="true"
                           data-sort-name="level"
                           data-sort-order="desc"
                           data-search="true"
                           data-search-align="left"
                           data-thead-classes="thead-dark"
                           className="masteries table table-striped">
                        <thead>
                        <tr className="header head">
                            <th  data-searchable="false" className="avatar"> </th>
                            <th data-sortable="true" className="champion">Champion</th>
                            <th data-field="level" data-sortable="true" className="level">Level</th>
                            <th data-sortable="true" data-sorter="pointsSorter" className="mastery">Mastery Points</th>
                            <th data-sortable="true" className="played">Last Time Played</th>
                            <th data-sortable="true" className="pointsNext">Points for next level</th>
                            <th data-sortable="true" className="chest">Chest</th>
                            <th data-sortable="true" className="tokens">Tokens Earned</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mastery.map(champion => (
                            <tr key={champion.championId} className="header head">
                                <th className="avatar"><img src={this.getImage(champion.championId)} alt=""/>                                    <span>
                                        <img alt="mastery level icon" src={getMasteryLevel(champion.championLevel)}/>
                                    </span></th>
                                <th className="champion">{this.getChampionNameById(champion.championId)}</th>
                                <th className="level">
                                    {champion.championLevel}

                                </th>
                                <th className="mastery">{this.numberWithCommas(champion.championPoints)}</th>
                                <th className="played">{this.unixConvert(champion.lastPlayTime)}</th>
                                <th className="pointsNext">{(champion.championPointsUntilNextLevel === 0) ? 'Mastered' : champion.championPointsUntilNextLevel}</th>
                                <th className="chest">{champion.chestGranted ? 'Granted' : 'Available'}</th>
                                <th className="tokens">{champion.tokensEarned}</th>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        ]
    }

}
export default SummonerPage