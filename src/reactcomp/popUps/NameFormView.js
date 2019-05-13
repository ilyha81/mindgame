import React from 'react';

class NameFormView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: ''
        }
    }

    render(){

        return(
            <div style={{position: 'fixed', width: '100%', height: '100%', display: (this.props.spaceReducer.userNameForm.state)?'flex':'none', background: 'rgba(100,100,100,0.5)', justifyContent: 'center', alignContent: 'center', flexFlow: 'column wrap', pointerEvents: 'auto'}}
                 onClick={(event)=>{
                     event.stopPropagation();
                     this.props.dispatch(this.props.confirmationFalse());
                     document.getElementById('onClickSound').play()
                 }}>
                <div className='space-style_outer' style={{width: '250px'}}
                     onClick={(event)=>{event.stopPropagation()}}
                >
                    <div className='space-style_inner' style={{paddingLeft: '10px', paddingRight: '10px'}}>
                        <div style={{marginTop:'10px'}}>Введите новое имя</div>
                        <input type='text'  onChange={(event)=>{
                                            this.setState({
                                                name: event.target.value})
                                            }}
                        />
                        <div style={{display:'flex', justifyContent:'space-evenly', marginTop: '20px', marginBottom: '10px'}}>
                            <button className='button-style1'
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        this.props.dispatch(this.props.saveNewName(this.state.name));
                                        document.getElementById('onClickSound').play()
                                    }}
                            >Сохранить
                            </button>
                            <button className='button-style1'
                                    onClick={(event)=>{
                                        event.stopPropagation();
                                        this.props.dispatch(this.props.confirmationFalse());
                                        document.getElementById('onClickSound').play()
                                    }}
                            >Отменить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NameFormView