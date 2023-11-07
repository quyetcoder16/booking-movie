import { GROUPID } from "../utils/Setting/config";
import { BaseService } from "./BaseServices";


export class QuanLyPhimService extends BaseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get("QuanLyPhim/LayDanhSachBanner");
    }
    layDanhSachPhim = () => {
        return this.get(`QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`)
    }
}

export const quanLyPhimService = new QuanLyPhimService();