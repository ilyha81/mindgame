import React, {Component} from 'react';
import { Route } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';

import HomeList from "./HomeList";



const objArrMain = [
        {id:'0', href: "/Mindgame/Games", text:"Проекты", textMin:"Наши проекты"},
        /*{id:'1', href: "#", text:"НОВОСТИ", textMin:"Отсутствуют"},*/
        /*    {id:'2', href: "/", text:"КОМПАНИЯ", textMin:"Информация о компании"},*/
        /*{id:'3', href: "#", text:"ФОРУМ", textMin:"Отсутствует"}*/
];

const objArrGames = [
    {id:'0', href: "/Space", text:"ReactDemo", textMin:"демоверсия приложения"},
    {id:'1', href: "/new.lukomor.mobi", text:"Лукоморье", textMin:"Браузерная игра"},
/*    {id:'2', href: "/", text:"MagicKingdom", textMin:"В разработке"},*/
    {id:'3', href: "/Mindgame", text:"Назад", textMin:"Назад в главное меню"}
];

const GameList = ()=>{
    return (
        <CSSTransitionGroup
            transitionName="transitionOpacity"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
            <HomeList listHeight='400px' objArr={objArrGames}/>
        </CSSTransitionGroup>
    )
};

const MainList = ()=>{
    return (
        <CSSTransitionGroup
            transitionName="transitionOpacity"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={true}
            transitionEnterTimeout={500}
            transitionLeave={true}
            transitionLeaveTimeout={500}>
            <HomeList listHeight='220px' objArr={objArrMain}/>
        </CSSTransitionGroup>

    )
};

class RainbowMenu extends Component {

    render() {
        return(
            <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'column wrap', width: '100%', height: '100vh'}}>
                <Route exact path='/mindgame' component={MainList} />
                <Route exact path='/mindgame/Games' component={GameList} />
                <Route exact path='/new.lukomor.mobi' component={()=>{window.location = 'http://new.lukomor.mobi'; return null;} } />
            </div>
        )
    };
}

export default RainbowMenu;
