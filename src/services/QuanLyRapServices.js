import { GROUPID } from "../utils/Setting/config";
import { BaseService } from "./BaseServices";


export class QuanLyRapServices extends BaseService {
    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }

    layThongTinLichChieuPhim = (maPhim) => {
        return this.get(`QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
    }
}

export const quanLyRapServices = new QuanLyRapServices();