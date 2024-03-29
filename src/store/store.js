import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import initialState from "./initial.state";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
