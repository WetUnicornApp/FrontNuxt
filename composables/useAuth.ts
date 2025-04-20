export const useAuth = () => {
    const user = useCookie('user', { default: () => null })

    const login = async (email: string, password: string) => {
        try {
            const { data, error } = await useFetch('/api/user/login', {
                method: 'POST',
                body: { email, password }
            })

            if (error.value || !data.value?.success) {
                throw new Error('Nieprawidłowe dane logowania')
            }

            user.value = data.value.data
            return true
        } catch (err) {
            console.error(err)
            return false
        }
    }

    const logout = () => {
        user.value = null
    }

    return { user, login, logout }
}
