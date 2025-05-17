import type { ApiResponse } from "~/types/responses/api-response";
import type { LoginResponse } from '../types/responses/login-response';
import type { LoginModel } from "~/models/user-models/login";
export const useAuth = () => {
    const user = useCookie<LoginResponse | null>('user', {
        default: () => null
    });

    const login = async (data: LoginModel) => {

        try {
            const config = useRuntimeConfig();
            const res = await $fetch<ApiResponse<LoginResponse>>(config.public.apiBase + '/user/login', {
                method: 'POST',
                body: data
            });

            if (Array.isArray(res.data)) {
                user.value = res.data[0] || null;
            } else {
                user.value = res.data;
            }
            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    };

    const logout = () => {
        user.value = null;
        navigateTo('/user/login')
    };

    return { user, login, logout };
};
