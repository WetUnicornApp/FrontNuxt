import type { ApiResponse } from "~/types/responses/api-response";
import type { LoginResponse } from '../types/responses/login-response';
export const useAuth = () => {
    const user = useCookie<LoginResponse | null>('user', {
        default: () => null
    });

    const login = async (data: string) => {

        try {
            const res = await $fetch<ApiResponse<LoginResponse>>('/api/user/login', {
                method: 'POST',
                body: data
            });

            user.value = res.data;
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
