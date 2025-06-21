import type { Communicate } from "~/types/communicate";


export type VisitModel = {
    id: number,
    employee_name: string;
    employee_id: string;
    owner_name: string;
    owner_id: string;
    pet_name: string;
    pet_id: string;
    name: string;
    description: string;
    date: string;
    time: string;

}

export const Empty = {
    employee: '',
    owner: '',
    pet: '',
    name: '',
    description: '',
    date: '',
    time: '',
    id: 0
}


export function Validate(item: VisitModel): Communicate {

    if (item.name.length > 100 || item.name.length < 1) {
        return { success: false, message: 'FIRST_NAME_HAS_INCORRECT_LENGTH' };
    }

    if (item.employee_id == '' || item.employee_id == null) {
        return { success: false, message: 'EMPLOYEE_IS_REQUIRED' };
    }

    if (item.pet_id == '' || item.pet_id == null) {
        return { success: false, message: 'PET_IS_REQUIRED' };
    }

    return { success: true, message: 'OK' };

}
