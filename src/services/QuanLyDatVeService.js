import { ThongTinDatVe } from "../_core/models/ThongTinDatVe";
import { BaseService } from "./BaseServices";


export class QuanLyDatVeService extends BaseService {
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

    datVe = (thongTinDatVe = new ThongTinDatVe()) => {
        return this.post("QuanLyDatVe/DatVe", thongTinDatVe);
    }

    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
    }

}

export const quanLyDatVeService = new QuanLyDatVeService();