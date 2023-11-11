import Axios from "axios"
import { DOMAIN, TOKEN } from "../utils/Setting/config";

export class BaseService {
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            data: model,
            method: 'PUT',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        });
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'POST',
            data: model,
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }
    get = (url) => {
        console.log('Bearer ' + localStorage.getItem(TOKEN));
        // console.log(`${DOMAIN}/${url}`);
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: 'DELETE',
            headers: { 'Authorization': 'Bearer ' + localStorage.getItem(TOKEN) }
        });
    }

}