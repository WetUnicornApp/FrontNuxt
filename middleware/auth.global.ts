export default defineNuxtRouteMiddleware((to) => {
    const user = useCookie('user')

    // Lista publicznych ścieżek (nie wymagają logowania)
    const publicPaths = ['/user/login', '/user/register']

    // Jeśli strona jest publiczna — zezwól
    if (publicPaths.includes(to.path)) return

    if (user.value && publicPaths.includes(to.path)) {
        return navigateTo('/') // albo np. do dashboarda
    }

    // Jeśli użytkownik nie jest zalogowany — przekieruj do /user/login
    if (!user.value) {
        return navigateTo('/user/login')
    }
})
