import React from 'react';
import SpaceSidebarView from './SpaceSidebarView'
import { SELECT_ITEM_TYPE, SELECT_TOGGLE_MODE, SET_PRICE_RANGE } from '../Actions'

class SpaceSidebarContainer extends React.Component {

    selectItemType = (text)=>{
        return {
            type: SELECT_ITEM_TYPE,
            payload: text
        }
    };
    selectToggleMode = (text)=>{
        return {
            type:SELECT_TOGGLE_MODE,
            payload: text
        }
    };

    setPriceRange = (value)=>{
        return {
            type:SET_PRICE_RANGE,
            payload: value
        }
    };

    render(){

        return(
            <SpaceSidebarView dispatch={this.props.dispatch}
                              state={this.props.displayReducer.typeSelector}
                              toggleMode={this.props.displayReducer.toggleSelector}
                              action={this.selectItemType}
                              actionToggle={this.selectToggleMode}
                              setPriceRange={this.setPriceRange}
            />
        )
    }
}

export default SpaceSidebarContainer