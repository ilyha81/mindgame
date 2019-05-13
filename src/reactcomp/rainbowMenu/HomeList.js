import React from 'react';
import {BrowserRouter,Route,Link} from "react-router-dom";
import createBrowserHistroy from "history/createBrowserHistory";
import ReactDOM from "react-dom";

import Blockchain from "./Blockchain";
import RainbowMenuButton from "./RainbowMenuButton";



class HomeList extends React.Component {
    createMenuList = (obj) =>{
        return (
            <Link to={obj.href} style={{textDecoration: 'none'}} key={'link' + obj.id}>
                <RainbowMenuButton text={obj.text} textMin={obj.textMin} key={'RainbowMenuHref' + obj.id} onClick={console.log('Кликнули на ' + obj.text)}/>
            </Link>
        )
    };

    render(){

        return(
            <section className="rainbow-menu grid-1-outer"
                     style={{width: '600px', minHeight: '200px', height: this.props.listHeight}}>
                <div className="rainbow-menu__background grid-1-inner" style={{zIndex:'-1'}}></div>
                <div className="rainbow-div grid-1-inner" style={{zIndex:'1', width:'calc(100% - 6px)'}}>
                   <ul className="rainbow-menu__ul" style={{paddingTop: '10px'}}>
                       {this.props.objArr.slice().map(this.createMenuList)}
                       <Blockchain/>
                    </ul>
                </div>
            </section>
        )
    }
}

export default HomeList
