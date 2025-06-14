import type { Communicate } from "~/types/communicate";

export type LoginModel = {
    email: string,
    password: string,

}

export const Empty: LoginModel = {
    email: '',
    password: '',
}



export function ValidateOnlyEmail(email: string): Communicate {
    if (!email) {
        return { success: false, message: 'EMAIL_IS_REQUIRED' };
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
        return { success: true, message: 'OK' };
    } else {
        return { success: false, message: 'INCORRECT_EMAIL' };
    }
}