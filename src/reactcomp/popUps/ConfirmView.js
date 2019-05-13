import React from 'react';

class ConfirmView extends React.Component {

    render(){

        return(
            <div style={{position: 'fixed', width: '100%', height: '100%', display: (this.props.spaceReducer.confirmPopUp.state)?'flex':'none', background: 'rgba(100,100,100,0.5)', justifyContent: 'center', alignContent: 'center', flexFlow: 'column wrap', pointerEvents: 'auto'}}
                 onClick={(event)=>{
                     event.stopPropagation();
                     this.props.dispatch(this.props.confirmationFalse());
                     document.getElementById('onClickSound').play()
                 }}>
                <div className='space-style_outer' style={{width: '250px'}}
                     onClick={(event)=>{event.stopPropagation()}}
                >
                    <div className='space-style_inner' style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <div style={{marginTop:'10px'}}>{this.props.spaceReducer.confirmPopUp.text}</div>
                        <div style={{marginTop:'10px'}}>
                            (У Вас {this.props.spaceReducer.userStats.money} денег <br />и занято слотов {this.props.spaceReducer.userStats.itemList.length} из {this.props.spaceReducer.userStats.slotsMaxNumber})
                        </div>
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop: '20px', marginBottom: '10px'}}>
                            <button className='button-style1'
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        this.props.dispatch(this.props.spaceReducer.confirmPopUp.action);
                                        document.getElementById('onClickSound').play()
                                    }}
                            >Да
                            </button>
                            <button className='button-style1'
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        this.props.dispatch(this.props.confirmationFalse());
                                        document.getElementById('onClickSound').play()
                                    }}
                            >Нет
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ConfirmView