import axios from "axios";
import { BASE_URL } from "../config";

const tokenAuthorization = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: { authorization: token },
        baseURL: BASE_URL
    });
};

export default tokenAuthorization;