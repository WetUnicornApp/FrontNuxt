export type PetModel = {
    name: string,
    date_of_birth: string,
    type_identifier: string,
    type_name: string,
    gender: string,
    description: string,
    owner_identifier: string
}

export const Empty: PetModel = {
    name: '',
    date_of_birth: '',
    type_identifier: '',
    type_name: '',
    gender: '',
    description: '',
    owner_identifier: ''
}