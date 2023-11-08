import { BaseService } from "./BaseServices";


export class QuanLyNguoiDungService extends BaseService {
    constructor() {
        super()
    }

    dangNhap = (thongTinDangNhap) => {
        return this.post("QuanLyNguoiDung/DangNhap", thongTinDangNhap);
    }

}

export const quanLyNguoiDungService = new QuanLyNguoiDungService();