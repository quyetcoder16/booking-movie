import { GROUPID } from "../utils/Setting/config";
import { BaseService } from "./BaseServices";


export class QuanLyRapServices extends BaseService {
    constructor() {
        super();
    }

    layDanhSachHeThongRap = () => {
        return this.get(`QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`);
    }
}

export const quanLyRapServices = new QuanLyRapServices();