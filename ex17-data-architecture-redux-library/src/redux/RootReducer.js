import { combineReducers } from "redux";
import numberReducer from "./number";
import accountReducer from "./account";

const RootReducer= combineReducers( { numberReducer,accountReducer } )

export default RootReducer