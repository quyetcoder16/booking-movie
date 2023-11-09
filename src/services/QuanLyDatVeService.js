import { BaseService } from "./BaseServices";


export class QuanLyDatVeService extends BaseService {
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => {
        return this.get(`QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

}

export const quanLyDatVeService = new QuanLyDatVeService();