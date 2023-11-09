import { ThongTinLichChieu } from "../../_core/models/ThongTinPhongVe"
import { SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType"

const initialState = {
    chiTietPhongVe: new ThongTinLichChieu(),

}

export const QuanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_CHI_TIET_PHONG_VE: {
            return { ...state, chiTietPhongVe: action.chiTietPhongVe };
        }
        default:
            return state
    }
}
