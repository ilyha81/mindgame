import React from 'react';
import SpaceInventoryView from "./SpaceInventoryView";
import {CSSTransitionGroup} from "react-transition-group";
import { POPUP_CONFIRMATION_TRUE, SELL_ITEM_FROM_INVENTORY, TOGGLE_ITEM } from '../Actions';

class SpaceInventoryContainer extends React.Component {

    /* Коэффициент, по которому высчитывается ликвидационная цена (делим цену магазина на эту величину) */
    priceReduceToSell = 2;

    confirmationTrue = (item)=>{
        return {
            type: POPUP_CONFIRMATION_TRUE,
            text: 'Удалить предмет ' + item.name + ' за '+(item.price/2)+'?',
            payload: {
                type: SELL_ITEM_FROM_INVENTORY,
                payload: item,
                priceReduceToSell: this.priceReduceToSell
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
                <SpaceInventoryView priceReduceToSell={this.priceReduceToSell}
                                    spaceReducer={this.props.spaceReducer}
                                    displayReducer={this.props.displayReducer}
                                    dispatch={this.props.dispatch}
                                    actionSell={this.confirmationTrue}
                                    toggleItem={this.toggleItem}/>
            </CSSTransitionGroup>
        )
    }
}

export default SpaceInventoryContainer