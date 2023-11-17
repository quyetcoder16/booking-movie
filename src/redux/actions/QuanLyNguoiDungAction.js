import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { DANG_NHAP_ACTION, LAY_DANH_SACH_LOAI_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG, LAY_DANH_SACH_NGUOI_DUNG_THEO_TU_KHOA, SET_THONG_TIN_NGUOI_DUNG } from "../types/QuanLyNguoiDungType";
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
                history.push("/home");
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.dangKy(thongTinDangKy);
            // console.log(data);
            if (status === 200) {
                history.push('/login');
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

export const capNhatThongTinNguoiDungAction = (thongTinNguoiDungUpdate) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.capNhatThongTinNguoiDung(thongTinNguoiDungUpdate);
            // console.log(data);
            // console.log(data);
            if (status === 200) {
                alert("Cập nhật thành công")
                dispatch(LayThongTinNguoiDungAction());
            }
        } catch (err) {
            console.log(err);
        }
    }
}


export const layDanhSachNguoiDungTheoTuKhoaAction = (tuKhoa) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.layDanhSachNguoiDungTheoTuKhoa(tuKhoa);
            // console.log(data);
            if (status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG_THEO_TU_KHOA,
                    danhSachNguoiDung: data.content,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const layDanhSachNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.layDanhSachNguoiDung();
            // console.log(data);
            if (status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG,
                    danhSachNguoiDung: data.content,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const layDanhSachLoaiNguoiDungAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.layDanhSachLoaiNguoiDung();
            if (status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_LOAI_NGUOI_DUNG,
                    danhSachLoaiNguoiDung: data.content,
                })
            }
        } catch (err) {
            console.log(err);
        }
    }
}

export const themNguoiDungAction = (newUser) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyNguoiDungService.themNguoiDung(newUser);
            // console.log(data);
            if (status === 200) {
                alert("Thêm Người dùng Thành công!");
                history.push('/admin');
            }
        } catch (err) {
            console.log(err);
        }
    }
}