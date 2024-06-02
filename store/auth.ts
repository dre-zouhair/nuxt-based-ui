export const useAuthStore = defineStore("auth", () => {
    const token = useCookie("token");

    const { getApiUrl } = useBaseAPI();

    const login = async (credentials: { email: string, password: string }) => {
        // Replace with your login API request
        const response = await fetch(getApiUrl('login'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        if (data.token) {
            token.value = data.token
        }
    }

    const logout = () => {
        token.value = ''
    }

    return {
        login, logout
    }
})