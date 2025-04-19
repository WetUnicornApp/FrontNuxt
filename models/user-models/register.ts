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