import { quanLyRapServices } from "../../services/QuanLyRapServices";
import { SET_HE_THONG_RAP_CHIEU } from "../types/QuanLyRapType";


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
