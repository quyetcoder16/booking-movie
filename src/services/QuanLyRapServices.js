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

    layThongTinHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinHeThongRap`);
    }
    layThongTinCumRap = (maHeThongRap) => {
        return this.get(`QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`);
    }
}

export const quanLyRapServices = new QuanLyRapServices();