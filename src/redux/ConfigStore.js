const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const rootReducer = combineReducers({

});

export const store = createStore(rootReducer, applyMiddleware(thunk));