import { CarouselReducer } from "./reducers/CarouselReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const rootReducer = combineReducers({
    CarouselReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));