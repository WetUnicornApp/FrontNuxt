import type { Communicate } from "~/types/communicate";

export type RegisterModel = {
    email: string,
    password: string,
    repeat_password: string,
    first_name: string,
    last_name: string
}

export const Empty: RegisterModel = {
    email: '',
    password: '',
    repeat_password: '',
    first_name: '',
    last_name: ''
}

export function Validate(item: RegisterModel): Communicate {
    if (item.password !== item.repeat_password) {
        return { success: false, message: 'MISMATCHED_PASSWORDS' };
    }
    if (item.password.length < 6) {        // długość < 6, nie > 5
        return { success: false, message: 'TOO_SHORT_PASSWORD' };
    }
    return { success: true, message: 'OK' };
}
