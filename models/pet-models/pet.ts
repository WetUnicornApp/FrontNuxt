import type { Communicate } from "~/types/communicate";

export type PetModel = {
    id: number
    name: string,
    date_of_birth: string,
    type: string,
    gender: string,
    description: string,
    owner_id: string
}

export const Empty: PetModel = {
    id: 0,
    name: '',
    date_of_birth: '',
    type: '',
    gender: '',
    description: '',
    owner_id: ''
}


export function Validate(item: PetModel): Communicate {

    if (item.name.length > 20 || item.name.length < 1) {
        return { success: false, message: 'FIRST_NAME_HAS_INCORRECT_LENGTH' };
    }

    if (item.type == '' || item.type == null) {
        return { success: false, message: 'TYPE_IS_REQUIRED' };
    }

    if (item.date_of_birth == '' || item.date_of_birth == null) {
        return { success: false, message: 'DATE_OF_BIRTH_IS_REQUIRED' };
    }

    if (item.gender == '' || item.gender == null) {
        return { success: false, message: 'GENDER_IS_REQUIRED' };
    }

    return { success: true, message: 'OK' };

}
