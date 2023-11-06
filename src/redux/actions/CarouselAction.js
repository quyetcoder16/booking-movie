import { quanLyPhimService } from "../../services/QuanLyPhimService";
import { SET_CAROUSEL } from "../types/CarouselTypes";


export const getCarouselAction = () => {
    return async (dispatch) => {
        try {
            const { data, status } = await quanLyPhimService.layDanhSachBanner();

            if (status === 200) {
                dispatch({
                    type: SET_CAROUSEL,
                    arrImg: data.content,
                });
            }
        } catch (err) {
            console.log(err);
        }
    }
}