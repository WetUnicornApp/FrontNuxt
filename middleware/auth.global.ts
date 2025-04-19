export default defineNuxtRouteMiddleware((to) => {
    const user = useState('user');

    const publicPages = ['/user/login', '/user/login'];

    const isPublic = publicPages.includes(to.path);
    const isAuthenticated = !!user.value;

    if (!isAuthenticated && !isPublic) {
        return navigateTo('/user/login');
    }

    if (isAuthenticated && isPublic) {
        return navigateTo('/');
    }
});
