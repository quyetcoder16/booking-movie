import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";


export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}