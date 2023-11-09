import { quanLyDatVeService } from "../../services/QuanLyDatVeService";
import { SET_CHI_TIET_PHONG_VE } from "../types/QuanLyDatVeType";


export const layChiTietPhongVeAction = (maLichChieu) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
            if (status === 200) {
                dispatch({
                    type: SET_CHI_TIET_PHONG_VE,
                    chiTietPhongVe: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}