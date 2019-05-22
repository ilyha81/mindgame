import React from 'react';
import {mainStore, mapStateToProps} from "../../reducers/MapStateToProps";
import {connect} from "react-redux";
import ConfirmView from "./ConfirmView";
import {Provider} from "react-redux";

import NameFormView from "./NameFormView";
import { POPUP_CONFIRMATION_FALSE, SAVE_NEW_NAME} from '../Actions';


const WrappedComponentPopUpWindow = connect(mapStateToProps)(ConfirmView);
const WrappedComponentNameFormWindow = connect(mapStateToProps)(NameFormView);

class PopUpContainer extends React.Component {

    confirmationFalse = ()=>{
        return {
            type:POPUP_CONFIRMATION_FALSE,
        }
    };

    saveNewName = (name)=>{
        return {
            type:SAVE_NEW_NAME,
            payload: name
        }
    };

    render(){

        return(
            <Provider store={mainStore}>
                <WrappedComponentPopUpWindow confirmationFalse={this.confirmationFalse}/>
                <WrappedComponentNameFormWindow saveNewName={this.saveNewName} confirmationFalse={this.confirmationFalse}/>
            </Provider>
        )
    }
}

export default PopUpContainer;