import { CarouselReducer } from "./reducers/CarouselReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer";
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer";
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer";
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer";

const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));