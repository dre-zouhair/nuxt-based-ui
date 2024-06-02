export default function useCounter() {
    const runtimeConfig = useRuntimeConfig();

    const paths: {
        [key: string]: string;
    } = {
        "login": "/auth/login",
        "logout": "/auth/logout",
    }

    const getApiUrl = (path: string): string => {
        return `${runtimeConfig.public.apiBase}${paths[path]}`;
    }

    return {
        getApiUrl,
    }
}

