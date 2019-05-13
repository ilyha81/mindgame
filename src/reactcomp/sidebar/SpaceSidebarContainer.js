import React from 'react';
import SpaceSidebarView from './SpaceSidebarView'


class SpaceSidebarContainer extends React.Component {

    selectItemType = (text)=>{
        return {
            type: 'SELECT_ITEM_TYPE',
            payload: text
        }
    };
    selectToggleMode = (text)=>{
        return {
            type: 'SELECT_TOGGLE_MODE',
            payload: text
        }
    };

    render(){

        return(
            <SpaceSidebarView dispatch={this.props.dispatch}
                              action={this.selectItemType}
                              state={this.props.displayReducer.typeSelector}
                              toggleMode={this.props.displayReducer.toggleSelector}
                              actionToggle={this.selectToggleMode}
            />
        )
    }
}

export default SpaceSidebarContainer