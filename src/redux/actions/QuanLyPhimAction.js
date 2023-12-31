import { history } from "../../App";
import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "../types/QuanLyPhimType";

export const layDanhSachPhimAction = (tenPhim = '') => {


    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layDanhSachPhim(tenPhim);

            //Sau khi lấy dữ liệu từ api về => redux (reducer)
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })
        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.themPhimUploadHinh(formData);
            alert('Thêm phim thành công!')
            console.log('result', result.data.content);



        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}

export const capNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {


            let result = await quanLyPhimService.capNhatPhimUpload(formData);
            alert('Cập nhật phim thành công!')
            console.log('result', result.data.content);

            dispatch(layDanhSachPhimAction());
            history.push('/admin/films');


        } catch (errors) {
            console.log(errors.response?.data)
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            //Sử dụng tham số thamSo
            const result = await quanLyPhimService.layThongTinPhim(maPhim);

            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content

            })

        } catch (errors) {
            console.log('errors', errors)
        }
    };
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimService.xoaPhim(maPhim);
            console.log(data);
            if (status === 200) {
                alert("xóa phim thành công");
                dispatch(layDanhSachPhimAction());
            }
        } catch (err) {
            console.log(err);
        }
    }
}