import type { Communicate } from "~/types/communicate";

export type OrganizationModel = {
    id: number,
    name: string,
    address: string,
}


export const Empty: OrganizationModel = {
    id: 0,
    name: '',
    address: '',
}

export function Validate(item: OrganizationModel): Communicate {
    if (item.name.length > 40 || item.name.length < 1) {
        return { success: false, message: 'NAME_HAS_INCORRECT_LENGTH' };
    }
    if (item.address.length > 40 || item.address.length < 1) {
        return { success: false, message: 'ADDRESS_HAS_INCORRECT_LENGTH' };
    }
    return { success: true, message: 'OK' };

}
