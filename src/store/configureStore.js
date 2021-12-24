import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CurrencyReducer from "./reducers/currency";
import LoginReducer from "./reducers/login";

const rootReducer = combineReducers({
  login: LoginReducer,
  currency: CurrencyReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
