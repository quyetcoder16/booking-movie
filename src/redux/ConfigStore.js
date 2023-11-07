import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));