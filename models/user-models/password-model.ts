import type { Communicate } from "~/types/communicate"

export type PasswordModel = {
    old_password: string
    new_password: string
    repeat_new_password: string
}

export const Empty: PasswordModel = {
    old_password: '',
    new_password: '',
    repeat_new_password: ''

}



export function Validate(item: PasswordModel): Communicate {
    if (item.repeat_new_password !== item.new_password) {
        return { success: false, message: 'MISMATCHED_PASSWORDS' };
    }

    return ValidateOnlyPassword(item.new_password);
}



export function ValidateOnlyPassword(pass: string): Communicate {
    if (pass.length < 8) {
        return { success: false, message: 'TOO_SHORT_PASSWORD' };
    }

    if (!/[A-Z]/.test(pass)) {
        return { success: false, message: 'MISSING_UPPERCASE_LETTER' };
    }

    if (!/[a-z]/.test(pass)) {
        return { success: false, message: 'MISSING_LOWERCASE_LETTER' };
    }

    if (!/[0-9]/.test(pass)) {
        return { success: false, message: 'MISSING_NUMBER' };
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
        return { success: false, message: 'MISSING_SPECIAL_CHARACTER' };
    }

    return { success: true, message: 'OK' };
}