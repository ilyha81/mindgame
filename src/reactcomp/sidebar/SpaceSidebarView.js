import React from 'react';
import itemTypeDef from "../../database/itemType";
import SpaceSideForm from './SpaceSideForm';

class SpaceSidebarView extends React.Component {

    render(){
        return(
            <div className='space-wrapper' style={{width: 'auto', height: 'calc(100% - 20px)', marginTop: '10px'}}>
                <div className='space-style_outer' style={{height: '100%', borderRadius: '3px'}}>
                    <div className='space-style_inner' style={{height: 'calc(100% - 4px)', textAlign: 'left', paddingLeft: '10px', fontSize: '24px'}}>
                        <div style={{marginTop: '10px'}}>Сортировки:</div>
                        <hr />
                        <div style={{marginTop: '10px', cursor: 'pointer', color: (this.props.state === 'AllTypes')? '#EE0' : '#DDF' }}
                             onClick={()=>{
                                 this.props.dispatch(this.props.action('AllTypes'));
                                 document.getElementById('onClickSound').play();
                             }}>
                            Все типы
                        </div>
                        <ul style={{marginTop: '10px'}}>
                            {Object.entries(itemTypeDef).map((type)=>{
                                return (
                                    <li style={{cursor: 'pointer', color: (this.props.state === type[1])? '#EE0' : '#DDF'}}
                                        key={'select-' + type[1]}
                                        onClick={()=>{
                                            this.props.dispatch(this.props.action(type[1]));
                                            document.getElementById('onClickSound').play()
                                        }}>
                                        Тип {type[1]}
                                    </li>)
                            })}
                        </ul>
                        <hr />
                        <div style={{marginTop: '10px', cursor: 'pointer', color: (this.props.toggleMode === 'AllToggled')? '#EE0' : '#DDF' }}
                             onClick={()=>{
                                       this.props.dispatch(this.props.actionToggle('AllToggled'));
                                       document.getElementById('onClickSound').play()
                                }
                             }
                        >
                            Все
                        </div>
                        <ul style={{marginTop: '10px'}}>
                            <li style={{marginTop: '10px', cursor: 'pointer', color: (this.props.toggleMode === '+Toggled')? '#EE0' : '#DDF' }}
                                 onClick={()=>{
                                     this.props.dispatch(this.props.actionToggle('+Toggled'));
                                     document.getElementById('onClickSound').play()
                                 }}>
                                Только отмеченные
                            </li>
                            <li style={{marginTop: '10px', cursor: 'pointer', color: (this.props.toggleMode === '-Toggled')? '#EE0' : '#DDF' }}
                                 onClick={()=>{
                                     this.props.dispatch(this.props.actionToggle('-Toggled'));
                                     document.getElementById('onClickSound').play()
                                 }}>
                                Только не отмеченные
                            </li>
                        </ul>
                        <hr />
                        <div>Диапазон цен:</div>
                        <SpaceSideForm setPriceRange={this.props.setPriceRange}
                                       dispatch={this.props.dispatch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceSidebarView