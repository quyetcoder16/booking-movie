import { quanLyRapServices } from "../../services/QuanLyRapServices";
import { LAY_THONG_TIN_HE_THONG_RAP, SET_CHI_TIET_PHIM, SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";


export const layDanhSachHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapServices.layDanhSachHeThongRap();

            if (status === 200) {
                dispatch({
                    type: SET_HE_THONG_RAP_CHIEU,
                    heThongRapChieu: data.content,
                })
            }

        } catch (err) {
            console.log(err);
        }
    }
}

export const layThongTinChiTietPhim = (id) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapServices.layThongTinLichChieuPhim(id);
            if (status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHIM,
                    filmDetail: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const layThongTinHeThongRapAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyRapServices.layThongTinHeThongRap();
            if (status === 200) {
                dispatch({
                    type: LAY_THONG_TIN_HE_THONG_RAP,
                    thongTinHeThongRap: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}
