import {createStore} from "redux";
import rootReducer from "./index";


const mainStore = createStore(rootReducer);
const mapStateToProps = (mainStore = mainStore)=>{
    return mainStore
};

export  {mapStateToProps, mainStore}