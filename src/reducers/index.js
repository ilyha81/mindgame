import { combineReducers } from "redux";

import itemList from "../database/itemList";
import userStats from "../database/userStatsDefault";
import { CREATE_SETNAME_POPUP, POPUP_CONFIRMATION_TRUE, TOGGLE_ITEM, BUY_ITEM_FROM_AUCTION, SELL_ITEM_FROM_INVENTORY, POPUP_CONFIRMATION_FALSE, SAVE_NEW_NAME, SELECT_TOGGLE_MODE, SELECT_ITEM_TYPE, FETCH_AUCTION_DATA } from '../reactcomp/Actions';




const initialState = {
    itemList: itemList,
    auctionList: [],
    userStats: userStats,
    confirmPopUp: {
        state: false,
        text: 'initial confirm',
        action: {}
    },
    userNameForm:{
        state: false,
    }
};

const spaceReducer = function (state = initialState, action) {
    switch (action.type) {
        case BUY_ITEM_FROM_AUCTION :
            if(state.userStats.money < action.payload.startPrice) {
                alert('Нехватает денег! У вас: ' + state.userStats.money + ', а надо: ' + action.payload.startPrice);
            }
            else if(state.userStats.itemList.length === state.userStats.slotsMaxNumber ){
                alert('Все слоты заняты! У вас ' + state.userStats.itemList.length + ' предметов, и ' + state.userStats.slotsMaxNumber + ' мест. Продайте что-нибудь ненужное!');
            }
            else {
                return ({...state,
                    auctionList: state.auctionList.filter(item => item !== action.payload),
                    userStats: {...state.userStats,
                        money: state.userStats.money - action.payload.startPrice,
                        itemList: state.userStats.itemList.slice().concat(action.payload.item)
                    },
                    confirmPopUp: {
                        state: false,
                        text: '',
                        action: {}
                    }
                })
            }
            break;
        case SELL_ITEM_FROM_INVENTORY :
            return ({...state,
                userStats: {...state.userStats,
                    money: state.userStats.money + (action.payload.price / 2),
                    itemList: state.userStats.itemList.slice().filter(item => item !== action.payload)
                },
                confirmPopUp: {
                    state: false,
                    text: '',
                    action: {}
                }
            });
        case TOGGLE_ITEM :
            let newItemList = {...state.itemList};
            let key = Object.keys(newItemList).find(key => newItemList[key] === action.payload);
            let newItem = newItemList[key];
            newItem.state = !newItem.state;
            return ({...state,
                itemList: {...state.itemList,
                    key: newItem}});
        case POPUP_CONFIRMATION_FALSE:
            return ({...state,
                confirmPopUp: {
                    state: false,
                    text: '',
                    action: {}
                },
                userNameForm:{
                    state: false,
                }
            });
        case POPUP_CONFIRMATION_TRUE:
            return ({...state,
                confirmPopUp: {
                    state: true,
                    text: action.text,
                    action: action.payload}
            });
        case CREATE_SETNAME_POPUP:
            return ({...state,
                userNameForm: {state: true}
            });
        case SAVE_NEW_NAME:
            let reg =  /^[a-zA-Zа-яёА-ЯЁ0-9-_]{3,10}$/;
            if(!reg.test(action.payload)) {
                alert('Недопустимое имя! Длина 3-10 символов. Допустимы буквы, цифры, - и _');
                return state;
        }
            else return({...state,
                userStats: {...userStats,
                name: action.payload
                },
                userNameForm:{
                    state: false,
                }
            });
        case FETCH_AUCTION_DATA:
            return({...state,
            auctionList: action.payload});
        default : return state
    }
    return state;
};

const displayReducer = function (state = {typeSelector: 'AllTypes', toggleSelector: 'AllToggled'}, action) {
    switch (action.type) {
        case SELECT_TOGGLE_MODE :
            return ({...state,
                    toggleSelector: action.payload}
            );
        case SELECT_ITEM_TYPE :
            return ({...state,
                    typeSelector: action.payload}
            );
        default : return state
    }

};

const rootReducer = combineReducers({
    spaceReducer,
    displayReducer
});

export default rootReducer