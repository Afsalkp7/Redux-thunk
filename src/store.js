import { applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const initialState = {}

const middlewares = [thunk]

const store = createStore(rootReducer,initialState,applyMiddleware(...middlewares))

export default store