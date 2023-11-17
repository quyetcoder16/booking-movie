import { TOKEN, USER_LOGIN } from "../../utils/Setting/config";
import { DANG_NHAP_ACTION, GET_USER_EDIT, LAY_DANH_SACH_LOAI_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG_THEO_TU_KHOA, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";

let user = {};

if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    thongTinNguoiDung: {},
    danhSachNguoiDung: [],
    danhSachLoaiNguoiDung: [],
    userEdit: {},
}

export const QuanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {

        case DANG_NHAP_ACTION: {
            const { thongTinDangNhap } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
            localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
            return { ...state, userLogin: thongTinDangNhap }
        }

        case SET_THONG_TIN_NGUOI_DUNG: {
            return { ...state, thongTinNguoiDung: action.thongTinNguoiDung };
        }

        case LAY_DANH_SACH_NGUOI_DUNG: {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state };
        }

        case LAY_DANH_SACH_NGUOI_DUNG_THEO_TU_KHOA: {
            return { ...state, danhSachNguoiDung: action.danhSachNguoiDung };
        }

        case LAY_DANH_SACH_LOAI_NGUOI_DUNG: {
            return { ...state, danhSachLoaiNguoiDung: action.danhSachLoaiNguoiDung };
        }

        case GET_USER_EDIT: {
            return { ...state, userEdit: action.userEdit };
        }

        default: {
            return state
        }

    }
}
