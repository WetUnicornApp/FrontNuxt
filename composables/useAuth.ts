import type { LoginResponse } from '../types/responses/login-response';
import type { LoginModel } from "~/models/user-models/login";
import { getData } from "~/scripts/api/fetch";


export const useAuth = () => {
    const user = useCookie<LoginResponse | null>('user', {
        default: () => null
    });

    const login = async (data: LoginModel) => {

        const res = await getData<LoginModel, LoginModel>({
            endpoint: '/user/login',
            method: 'POST',
            body: data,
        });

        if (Array.isArray(res.data)) {
            user.value = res.data[0] || null;
        } else {
            user.value = res.data;
        }

        return res;

    };

    const logout = () => {
        user.value = null;
        navigateTo('/user/login')
    };

    return { user, login, logout };
};
