import React from 'react';

import SpaceHeaderView from './SpaceHeaderView';
import {CREATE_SETNAME_POPUP} from '../Actions';

class SpaceHeaderContainer extends React.Component {

    makeSetNamePopUp = () => {
        return {
            type: CREATE_SETNAME_POPUP
        }
    };

    render(){

        return(
            <SpaceHeaderView spaceReducer={this.props.spaceReducer}
                             dispatch={this.props.dispatch}
                             makeSetNamePopUp={this.makeSetNamePopUp}/>
        )
    }
}

export default SpaceHeaderContainer