import { legacy_createStore as createStore, combineReducers } from "redux";

import produtosReducer from "./modules/user/reducer";

const reducers = combineReducers({ produto: produtosReducer });

const store = createStore(reducers);

export default store;
