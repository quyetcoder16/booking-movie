import { CarouselReducer } from "./reducers/CarouselReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));