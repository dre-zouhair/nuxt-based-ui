import type {RouteLocationNormalized} from "vue-router";

export default defineNuxtRouteMiddleware((to: RouteLocationNormalized, _) => {

    if (to.meta.layout === "unauthenticated") {
        return;
    }

    const token = useCookie('token');
    const payload = parseJwt(token.value);

    if (!payload.valid) {
        abortNavigation();
        return navigateTo('/auth/login');
    }

    // continue token validation

});