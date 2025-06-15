import type { Communicate } from "~/types/communicate";
import { ValidateOnlyEmail } from "../user-models/login";

export type EmployeeModel = {
    id: number,
    identifier: string,
    first_name: string,
    last_name: string,
    email: string,
    organization_id: string
}


export const Empty: EmployeeModel = {
    identifier: '',
    first_name: '',
    last_name: '',
    email: '',
    id: 0,
    organization_id: ''
}

export function Validate(item: EmployeeModel): Communicate {
    if (item.first_name.length > 20 || item.first_name.length < 1) {
        return { success: false, message: 'FIRST_NAME_HAS_INCORRECT_LENGTH' };
    }
    if (item.last_name.length > 20 || item.last_name.length < 1) {
        return { success: false, message: 'LAST_NAME_HAS_INCORRECT_LENGTH' };
    }
    return ValidateOnlyEmail(item.email);

}
