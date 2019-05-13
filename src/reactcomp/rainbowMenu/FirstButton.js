import React from 'react';
import logo from "./RainbowMenuButton/logo.svg";

const FirstButton = function(){
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexFlow: 'column wrap', width: '100%', height: '100vh'}}>
        <button onClick={()=>{window.location = '/mindgame'}}
                    style={{width: '250px', height: '100px', font: '30px', border: '5px rgb(0,0,0) solid', borderRadius: '10px', background: 'rgb(50,50,50)', color: 'white'}}>
            <div style={{width: '100%'}}>
                <img src={logo} className='App-logo' width='48' height='48' alt='logo' style={{margin:'auto'}}/>
            </div>
            <div style={{width: '100%', textAlign: 'center', fontSize: '18px'}}>Кликните на эту кнопку!</div>
        </button>
        </div>
    )
};

export default FirstButton