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

    themPhimUploadHinh = (formData) => {
        return this.post(`QuanLyPhim/ThemPhimUploadHinh`, formData);
    }

    layThongTinPhim = (maPhim) => {
        return this.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
    }

    capNhatPhimUpload = (formData) => {
        return this.post(`QuanLyPhim/CapNhatPhimUpload`, formData);
    }
}

export const quanLyPhimService = new QuanLyPhimService();