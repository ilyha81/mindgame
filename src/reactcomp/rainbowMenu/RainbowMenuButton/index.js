import React, {Component} from 'react';

import './rainbowMenuButton.css';
import clickSound from './click.mp3';
import logo from './logo.svg';
import './logo.css';

class RainbowMenuButton extends Component {
    constructor(props){
        super(props);
        this.playSound = React.createRef();
    }

    render() {
        const text = this.props.text;
        const textMin = this.props.textMin;
        return(
            <li className='rainbow-menu__li' onMouseEnter={()=>{this.playSound.current.play()}}>
                <div className='rainbow-menu__logo'><img src={logo} className='App-logo' width='48' height='48' alt='logo'/></div>
                <div className='rainbow-menu__text'>{text}</div>
                <div className='rainbow-menu__textmin'>{textMin}</div>
                <audio ref={this.playSound} preload='auto' src={clickSound} style={{display: 'none'}} volume='0.5'></audio>
            </li>
        )
    }
}


export default RainbowMenuButton;