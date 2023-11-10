import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
import { history } from '../../App';

export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
            if (status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: data.content,
                })
                history.goBack();
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const LayThongTinNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.layThongTinNguoidung();
            if (status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}