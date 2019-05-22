import React from 'react';
import SpaceAuctionView from "./SpaceAuctionView";
import {CSSTransitionGroup} from "react-transition-group";


import { POPUP_CONFIRMATION_TRUE, TOGGLE_ITEM, BUY_ITEM_FROM_AUCTION } from '../Actions';


class SpaceAuctionContainer extends React.Component {

    confirmationTrue = (item)=>{
        return {
            type: POPUP_CONFIRMATION_TRUE,
            text: 'Купить предмет ' + item.item.name + ' за '+item.startPrice+'?',
            payload: {
                type: BUY_ITEM_FROM_AUCTION,
                payload: item
            }
        }
    };

    toggleItem = (item) => {
        return {
            type: TOGGLE_ITEM,
            payload: item
        }
    };


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
                <SpaceAuctionView spaceReducer={this.props.spaceReducer}
                                  displayReducer={this.props.displayReducer}
                                  dispatch={this.props.dispatch}
                                  action={this.confirmationTrue}
                                  toggleItem={this.toggleItem}/>
            </CSSTransitionGroup>
        )
    }


}

export default SpaceAuctionContainer