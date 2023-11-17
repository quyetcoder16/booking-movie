import { GROUPID } from "../utils/Setting/config";
import { BaseService } from "./BaseServices";


export class QuanLyNguoiDungService extends BaseService {
    constructor() {
        super()
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post("QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    }

    layThongTinNguoidung = () => {
        return this.post("QuanLyNguoiDung/ThongTinTaiKhoan");
    }

    dangKy = (dataDangKy) => {
        return this.post("QuanLyNguoiDung/DangKy", dataDangKy);
    }

    capNhatThongTinNguoiDung = (thongTinUpdate) => {
        return this.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung", thongTinUpdate);
    }

    layDanhSachNguoiDung = () => {
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}`);
    }

    layDanhSachNguoiDungTheoTuKhoa = (tuKhoa) => {
        return this.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUPID}&tuKhoa=${tuKhoa}`);
    }

    layDanhSachLoaiNguoiDung = () => {
        return this.get("QuanLyNguoiDung/LayDanhSachLoaiNguoiDung");
    }

    themNguoiDung = (newUser) => {
        return this.post("QuanLyNguoiDung/ThemNguoiDung", newUser);
    }

    xoaNguoiDung = (taiKhoan) => {
        return this.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);
    }

    updateUserByAdmin = (userUpdate) => {
        return this.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", userUpdate);
    }
}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();