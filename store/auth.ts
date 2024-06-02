export type Token = string | undefined | null;

export const useAuthStore = defineStore("auth", () => {
    const token = useCookie("token");

    const {getApiUrl, getHeaders} = useBaseAPI();

    const login = async (credentials: { email: string, password: string }) => {
        const response = await fetch(getApiUrl('login'), {
            method: "POST",
            headers: getHeaders(token.value as Token),

            body: JSON.stringify(credentials)
        });
        const data = await response.json()
        if (data.token) {
            token.value = data.token
        }
    }

    const logout = async () => {
        const response = await fetch(getApiUrl('logout'), {
            headers: getHeaders(token.value as Token),
            method: "DELETE",
        });
        token.value = undefined;
        navigateTo("/auth/login")
    }

    return {
        login, logout
    }
})