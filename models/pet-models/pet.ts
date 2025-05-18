export type PetModel = {
    name: string,
    date_of_birth: string,
    type_id: number,
    type_name: string,
    gender: string
    description: string
}

export const Empty: PetModel = {
    name: '',
    date_of_birth: '',
    type_id: 0,
    type_name: '',
    gender: '',
    description: ''
}