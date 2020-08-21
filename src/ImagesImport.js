import level1 from './assets/levelBorder/level1.png'
import level30 from './assets/levelBorder/level30.png'
import level50 from './assets/levelBorder/level50.png'
import level75 from './assets/levelBorder/level75.png'
import level100 from './assets/levelBorder/level100.png'
import level125 from './assets/levelBorder/level125.png'
import level150 from './assets/levelBorder/level150.png'
import level175 from './assets/levelBorder/level175.png'
import level200 from './assets/levelBorder/level200.png'
import level225 from './assets/levelBorder/level225.png'
import level250 from './assets/levelBorder/level250.png'
import level275 from './assets/levelBorder/level275.png'
import level300 from './assets/levelBorder/level300.png'
import level325 from './assets/levelBorder/level325.png'
import level350 from './assets/levelBorder/level350.png'
import level375 from './assets/levelBorder/level375.png'
import level400 from './assets/levelBorder/level400.png'
import level425 from './assets/levelBorder/level425.png'
import level450 from './assets/levelBorder/level450.png'
import level475 from './assets/levelBorder/level475.png'
import level500 from './assets/levelBorder/level500.png'

import mastery1 from './assets/masteryLevel/mastery1.png'
import mastery2 from './assets/masteryLevel/mastery2.png'
import mastery3 from './assets/masteryLevel/mastery3.png'
import mastery4 from './assets/masteryLevel/mastery4.png'
import mastery5 from './assets/masteryLevel/mastery5.png'
import mastery6 from './assets/masteryLevel/mastery6.png'
import mastery7 from './assets/masteryLevel/mastery7.png'

export function getLevelBorder(level) {
    level = parseInt(level);
    if(level < 30){
        return level1;
    }else if(level >= 30 && level < 50){
        return level30;
    }else if (level >= 50 && level < 75){
        return level50;
    }else if (level >= 75 && level < 100){
        return level75;
    }else if (level >= 100 && level < 125){
        return level100;
    }else if (level >= 125 && level < 150){
        return level125;
    }else if (level >= 150 && level < 175){
        return level150;
    }else if (level >= 175 && level < 200){
        return level175;
    }else if (level >= 200 && level < 225){
        return level200;
    }else if (level >= 225 && level < 250){
        return level225;
    }else if (level >= 250 && level < 275){
        return level250;
    }else if (level >= 275 && level < 300){
        return level275;
    }else if (level >= 300 && level < 325){
        return level300;
    }else if (level >= 325 && level < 350){
        return level325;
    }else if (level >= 350 && level < 375){
        return level350;
    }else if (level >= 375 && level < 400){
        return level375;
    }else if (level >= 400 && level < 425){
        return level400;
    }else if (level >= 425 && level < 450){
        return level425;
    }else if (level >= 450 && level < 475){
        return level450;
    }else if (level >= 475 && level < 500){
        return level475;
    }else{
        return level500;
    }
}

export function getMasteryLevel(masteryLevel){
    switch(masteryLevel){
        case 1:
            return mastery1;
        case 2:
            return mastery2;
        case 3:
            return mastery3;
        case 4:
            return mastery4;
        case 5:
            return mastery5;
        case 6:
            return mastery6;
        case 7:
            return mastery7;
        default:
            return
    }
}
