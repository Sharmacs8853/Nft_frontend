import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./userReducer/userReducer";
import { authReducer } from "./authReducer/authReducer";
const rootReducer = combineReducers({ userReducer, authReducer })
const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
export { store }