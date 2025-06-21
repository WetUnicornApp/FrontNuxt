import type { Communicate } from "~/types/communicate";
import { ValidateOnlyEmail } from "../user-models/login";

export type OwnerModel = {
    id: number,
    identifier: string,
    first_name: string,
    last_name: string,
    email: string
}


export const Empty: OwnerModel = {
    id: 0,
    identifier: '',
    first_name: '',
    last_name: '',
    email: '',
}

export function Validate(item: OwnerModel): Communicate {
    if (item.first_name.length > 100 || item.first_name.length < 1) {
        return { success: false, message: 'FIRST_NAME_HAS_INCORRECT_LENGTH' };
    }
    if (item.last_name.length > 100 || item.last_name.length < 1) {
        return { success: false, message: 'LAST_NAME_HAS_INCORRECT_LENGTH' };
    }
    return ValidateOnlyEmail(item.email);

}
