import {createStore, applyMiddleware} from "redux";
import rootReducer from "./index";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';


const mainStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const mapStateToProps = (store = mainStore)=>{
    return store
};

export  { mapStateToProps, mainStore }