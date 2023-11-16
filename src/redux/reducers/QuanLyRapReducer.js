import { LAY_THONG_TIN_HE_THONG_RAP, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";

const stateDefault = {
    heThongRapChieu: [],
    thongTinHeThongRap: [],
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case SET_HE_THONG_RAP_CHIEU: {
            state.heThongRapChieu = action.heThongRapChieu;
            return { ...state };
        }

        case LAY_THONG_TIN_HE_THONG_RAP: {
            state.thongTinHeThongRap = action.thongTinHeThongRap;
            return { ...state };
        }

        default: {
            return { ...state };
        }
    }
}