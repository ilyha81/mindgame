import React from 'react';


class SpaceSideForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            minValue: 0,
            maxValue: 2000
        }
    }

    setValue = (target)=>{
        if((target.name === 'minValue' && parseInt(target.value) > this.state.maxValue)||(target.name === 'maxValue' && parseInt(target.value) < this.state.minValue)) {
            this.setState({
                minValue: target.value,
                maxValue: target.value
            })
        }
        else this.setState({[target.name]: target.value});
    };

    render(){

        return (
            <div>
                <div style={{width: '60px', display: 'inline-block'}}>От:</div>
                <select name='minValue'
                        style={{width: '120px'}}
                        value={this.state.minValue}
                        placeholder='Цена от'
                        onChange={(event)=>{this.setValue(event.target)}}>
                    <option value={0}>0</option>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                </select>
                <br />
                <div style={{width: '60px', display: 'inline-block'}}>До:</div>
                <select name='maxValue'
                        style={{width: '120px'}}
                        value={this.state.maxValue}
                        placeholder='Цена до'
                        onChange={(event)=>{this.setValue(event.target)}}>
                    <option value={300}>300</option>
                    <option value={500}>500</option>
                    <option value={1000}>1000</option>
                    <option value={2000}>2000</option>
                </select>
                <br />
                <div style={{width: '184px', display: 'flex', justifyContent: 'flex-end', marginTop: '10px'}}>
                    <button className='button-style1'
                            onClick={()=>{  this.setState({minValue: 0, maxValue: 2000});
                                            this.props.dispatch(this.props.setPriceRange({minValue: 0, maxValue: 2000}))}}>
                        Сбросить
                    </button>
                    <button className='button-style1'
                            style={{marginLeft: '5px'}}
                            onClick={()=>{this.props.dispatch(this.props.setPriceRange(this.state))}}>
                        Выбрать
                    </button>
                </div>
            </div>
        )
    }
}

export default SpaceSideForm