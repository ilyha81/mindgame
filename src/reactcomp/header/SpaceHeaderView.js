import React from 'react';
import {CSSTransitionGroup} from "react-transition-group";
import {Route,Link} from "react-router-dom";

class SpaceHeaderView extends React.Component {

    render(){
        return(
            <CSSTransitionGroup
                transitionName="transitionOpacity"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={true}
                transitionEnterTimeout={500}
                transitionLeave={true}
                transitionLeaveTimeout={500}>
                <div className='space-header space-area' style={{height: '60px', color: 'white', textAlign: 'center'}}>
                    <div className='space-style_outer' style={{gridArea: 'logo', borderRadius: '10px 0px 5px 10px'}}>
                        <div className='space-style_inner'
                             onClick={()=>{this.props.dispatch(this.props.makeSetNamePopUp());
                             document.getElementById('onClickSound').play()}}
                        >
                            <div style={{fontSize: '20px', height: '30px', lineHeight: '30px', color: (this.props.spaceReducer.userStats.name === 'Guest')?"red":'inherit'}}>{this.props.spaceReducer.userStats.name}, </div>
                            <div style={{fontSize: '16px', height: '20px', lineHeight: '20px'}}>у вас {this.props.spaceReducer.userStats.money} денег!</div>
                        </div>
                    </div>

                    <div className='space-style_outer' style={{gridArea: 'button-box', borderRadius: '0 0 5px 5px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                        <Link to={'/'} style={{textDecoration: 'none'}} key={'linkToBack'}>
                            <div className='space-style_inner' style={{lineHeight: '50px'}} onClick={()=>{document.getElementById('onClickSound').play()}}>
                                В начало
                            </div>
                        </Link>
                        <Link to={'/Space'} style={{textDecoration: 'none'}} key={'linkToAuction'}>
                            <div className='space-style_inner' style={{lineHeight: '50px'}} onClick={()=>{document.getElementById('onClickSound').play()}}>
                                Магазин
                            </div>
                        </Link>
                        <Link to={'/Space/Inventory'} style={{textDecoration: 'none', color: '#ddf'}} key={'linkToInventory'}>
                            <div className='space-style_inner' style={{lineHeight: '50px'}} onClick={()=>{document.getElementById('onClickSound').play()}}>
                                Инвентарь
                            </div>
                        </Link>
                    </div >

                    <div className='space-style_outer' style={{gridArea: 'status', borderRadius: '0 10px 10px 5px'}}>
                        <div className='space-style_inner' style={{lineHeight: '50px', fontSize: '32px', fontWeight: 'bold', color: '#DDBB00'}}>
                            DEMO MODE
                        </div>
                    </div>
                </div>
            </CSSTransitionGroup>
        )
    }
}

export default SpaceHeaderView