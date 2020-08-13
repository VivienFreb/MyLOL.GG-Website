import PropTypes from 'prop-types'
import React, {Component} from 'react'

import './SummonerPage.css'

class  SummonerPage extends Component{

    levelBorder(level){
        console.log("Call with level : " + level);
        level = parseInt(level);
        if(level < 30){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/8/86/Level_1_Summoner_Icon_Border.png/revision/latest?cb=20180324105818";
        }else if(level >= 30 && level < 50){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/4/40/Level_30_Summoner_Icon_Border.png/revision/latest?cb=20180324105839";
        }else if (level >= 50 && level < 30){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/Level_50_Summoner_Icon_Border.png/revision/latest?cb=20180324105839";
        }else if (level >= 75 && level < 50){
            return "https://vignette.wikia.nocookie.net/leagueoflegends/images/d/d7/Level_75_Summoner_Icon_Border.png/revision/latest?cb=20180324105840";
        }else if (level >= 100 && level < 75){
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



    render(){
        return(
            <div>
                {/*<ul>*/}
                {/*    <p>User : {this.props.summoner.id}</p>*/}
                {/*    <p>Account Id : {this.props.summoner.accountId}</p>*/}
                {/*    <p>puuid : {this.props.summoner.puuid}</p>*/}
                {/*    <p>Nme : {this.props.summoner.name}</p>*/}
                {/*</ul>*/}

                <p className="summonerName">{this.props.summoner.name}</p>
                <div className="iconContainer">
                    <img className="profileIcon" src={"http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/" + this.props.summoner.profileIconId + ".png"}/>
                    <img className="levelBorder" src={this.levelBorder(this.props.summoner.summonerLevel)}/>
                    <p className="summonerLevel">{this.props.summoner.summonerLevel}</p>
                </div>
            </div>

        )
    }

}
export default SummonerPage