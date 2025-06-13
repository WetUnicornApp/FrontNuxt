import type { Communicate } from "~/types/communicate";
import { ValidateOnlyPassword } from "./password-model";

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
    return ValidateOnlyPassword(item.password)
}
