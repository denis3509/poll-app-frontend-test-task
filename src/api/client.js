import axios from "axios";
import {settings} from "@/config";

export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return {Authorization: 'Bearer ' + user.accessToken};
    } else {
        return {};
    }
}

export function getClient() {
    return axios.create({
        baseURL: settings.API_URL,
        timeout: 5000,
        headers : {...authHeader()}
    });
}