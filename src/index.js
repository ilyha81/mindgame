import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  "./css/main.css";

import { BrowserRouter, Route } from "react-router-dom";
import createBrowserHistroy from "history/createBrowserHistory";

import RainbowMenu from './reactcomp/rainbowMenu/RainbowMenu';
import FirstButton from './reactcomp/rainbowMenu/FirstButton';
import SpaceIndex from './SpaceIndex'
import PopUpContainer from "./reactcomp/popUps/PopUpContainer";
import clickSound from "./reactcomp/rainbowMenu/RainbowMenuButton/click.mp3";
import { Provider } from "react-redux";
import { mainStore } from "./reducers/MapStateToProps";



const history = createBrowserHistroy();

ReactDOM.render(
    <BrowserRouter history={history}>
            <Route exact path='/' component={FirstButton} />
            <Route path='/Mindgame' component={RainbowMenu} />
            <Route exact path='/new.lukomor.mobi' component={()=>{window.location = 'http://new.lukomor.mobi'; return null;} } />
            <Route path='/Space'>
                <Provider store={mainStore}>
                    <SpaceIndex />
                </Provider>
            </Route>

    </BrowserRouter>,
    document.getElementById('mainWindow')
);

ReactDOM.render(
    <PopUpContainer />,
    document.getElementById('popUps')
);

ReactDOM.render(
    <audio id='onClickSound' preload='auto' src={clickSound} style={{display: 'none'}} volume='0.5'></audio>,
    document.getElementById('soundSection')
);