import { BaseService } from "./BaseServices";


export class QuanLyPhimService extends BaseService {
    constructor() {
        super();
    }

    layDanhSachBanner = () => {
        return this.get("QuanLyPhim/LayDanhSachBanner");
    }
}

export const quanLyPhimService = new QuanLyPhimService();