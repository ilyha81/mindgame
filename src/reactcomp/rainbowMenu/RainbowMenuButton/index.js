import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './rainbowMenuButton.css';
import clickSound from './click.mp3';
import logo from './logo.svg';
import './logo.css';

class RainbowMenuButton extends Component {
    playAudio = () =>{
        ReactDOM.findDOMNode(this).querySelector('audio').play();
    };

    render() {
        const text = this.props.text;
        const textMin = this.props.textMin;
        return(
            <li className='rainbow-menu__li' onMouseEnter={this.playAudio}>
                <div className='rainbow-menu__logo'><img src={logo} className='App-logo' width='48' height='48' alt='logo'/></div>
                <div className='rainbow-menu__text'>{text}</div>
                <div className='rainbow-menu__textmin'>{textMin}</div>
                <audio preload='auto' src={clickSound} style={{display: 'none'}} volume='0.5'></audio>
            </li>
        )
    }
}



export default RainbowMenuButton;