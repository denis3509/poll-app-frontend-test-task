import {settings} from "@/config";


import axios from 'axios';
import {getClient} from "@/api/client";


class AuthApi {
    async login({username, password}) {
        const client = getClient()
        const response = await client.post(`auth/login/`,
            {username: username, password: password})
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;

    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        const client = getClient()
        const response = await client.post(`auth/register/`, {
            username: user.username,
            email: user.email,
            password: user.password
        });
        return response.data
    }
}

export default new AuthApi();

