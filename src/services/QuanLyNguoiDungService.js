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

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();