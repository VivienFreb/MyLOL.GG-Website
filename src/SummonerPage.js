import PropTypes from 'prop-types'
import React, {Component} from 'react'
import moment from 'moment'

import './SummonerPage.css'


class SummonerPage extends Component{
    state = {
        summoner: this.props.res[0],
        mastery: this.props.res[1],
        champions: this.props.res[2]
    }


    levelBorder(level){
        level = parseInt(level);
        if(level < 30){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/86/Level_1_Summoner_Icon_Border.png/revision/latest?cb=20180324105818";
        }else if(level >= 30 && level < 50){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/40/Level_30_Summoner_Icon_Border.png/revision/latest?cb=20180324105839";
        }else if (level >= 50 && level < 75){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/Level_50_Summoner_Icon_Border.png/revision/latest?cb=20180324105839";
        }else if (level >= 75 && level < 100){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d7/Level_75_Summoner_Icon_Border.png/revision/latest?cb=20180324105840";
        }else if (level >= 100 && level < 125){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/99/Level_100_Summoner_Icon_Border.png/revision/latest?cb=20180324105841";
        }else if (level >= 125 && level < 150){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/eb/Level_125_Summoner_Icon_Border.png/revision/latest?cb=20180324105841";
        }else if (level >= 150 && level < 175){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/8f/Level_150_Summoner_Icon_Border.png/revision/latest?cb=20180324105842";
        }else if (level >= 175 && level < 200){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/9e/Level_175_Summoner_Icon_Border.png/revision/latest?cb=20180324105842";
        }else if (level >= 200 && level < 225){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/1/11/Level_200_Summoner_Icon_Border.png/revision/latest?cb=20180324105843";
        }else if (level >= 225 && level < 250){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e6/Level_225_Summoner_Icon_Border.png/revision/latest?cb=20180324105844";
        }else if (level >= 250 && level < 275){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/bd/Level_250_Summoner_Icon_Border.png/revision/latest?cb=20180324105838";
        }else if (level >= 275 && level < 300){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/2/27/Level_275_Summoner_Icon_Border.png/revision/latest?cb=20180324105914";
        }else if (level >= 300 && level < 325){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/70/Level_300_Summoner_Icon_Border.png/revision/latest?cb=20180324105915";
        }else{
            return "ah"
        }
    }

    getChampionNameById = (championId) =>{
        const champions = this.state.champions;
        var result = champions.find(ele => ele.value === championId.toString());
        return result.name;
    }

    getImage(champion){
        const champions = this.state.champions;
        var result = champions.find(ele => ele.value === champion.toString());
        return "http://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/" + result.clef + ".png"
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    unixConvert(unix){
        var workingUnix = unix.toString().slice(0, -3);
        return moment.unix(workingUnix).format("DD/MM/YYYY")
    }

    getMasteryLevelIcon(masteryLevel){
        switch(masteryLevel){
            case 1:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d8/Champion_Mastery_Level_1_Flair.png/revision/latest/scale-to-width-down/50?cb=20150312005229"
            case 2:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/4d/Champion_Mastery_Level_2_Flair.png/revision/latest/scale-to-width-down/50?cb=20150312005244"
            case 3:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/e/e5/Champion_Mastery_Level_3_Flair.png/revision/latest/scale-to-width-down/50?cb=20150312005319"
            case 4:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/b6/Champion_Mastery_Level_4_Flair.png/revision/latest/scale-to-width-down/50?cb=20200113041829"
            case 5:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/96/Champion_Mastery_Level_5_Flair.png/revision/latest/scale-to-width-down/50?cb=20200113041512"
            case 6:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/b/be/Champion_Mastery_Level_6_Flair.png/revision/latest/scale-to-width-down/50?cb=20200113041636"
            case 7:
                return "https://vignette.wikia.nocookie.net/leagueoflegends/images/7/7a/Champion_Mastery_Level_7_Flair.png/revision/latest/scale-to-width-down/50?cb=20200113041615"
            default:
                return
        }
    }

    render(){
        const { summoner, champions, mastery } = this.state;
        return[
            <div className="summonerPage">
                <div className="sidebar">
                    <p className="summonerName">{summoner.name}</p>
                    <div className="iconContainer">
                        <img className="profileIcon" src={"http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + summoner.profileIconId + ".png"}/>
                        <img className="levelBorder" src={this.levelBorder(summoner.summonerLevel)}/>
                        <div className="summonerLevel">{summoner.summonerLevel}</div>
                    </div>
                </div>
                <div className="content">
                    <table id="sampleTable" className="masteries table table-striped sampleTable">
                        <thead>
                        <tr className="header head">
                            <th className="rank"> </th>
                            <th className="rank">Champion</th>
                            <th className="">Level</th>
                            <th className="date">Mastery Points</th>
                            <th className="guesses">Last Time Played</th>
                            <th className="guesses">Points for next level</th>
                            <th className="guesses">Chest ?</th>
                            <th className="guesses">Tokens Earned</th>
                        </tr>
                        </thead>
                        <tbody>
                        {mastery.map(champion => (
                            <tr key={champion.championId} className="header head">
                                <th className=" avatar"><img src={this.getImage(champion.championId)} alt=""/></th>
                                <th className=" rank">{this.getChampionNameById(champion.championId)}</th>
                                <th className="">
                                    {champion.championLevel}
                                    <span>
                                        <img alt="mastery level icon" src={this.getMasteryLevelIcon(champion.championLevel)}/>
                                    </span>
                                </th>
                                <th className="date">{this.numberWithCommas(champion.championPoints)}</th>
                                <th className="guesses">{this.unixConvert(champion.lastPlayTime)}</th>
                                <th className="guesses">{this.numberWithCommas(champion.championPointsUntilNextLevel)}</th>
                                <th className="guesses">{champion.chestGranted ? 'Oui' : 'Non'}</th>
                                <th className="guesses">{champion.tokensEarned}</th>
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