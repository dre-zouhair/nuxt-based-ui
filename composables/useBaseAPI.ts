import type {Token} from "~/store/auth";

export default function useBaseAPI() {
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

    const getHeaders = (token: Token): HeadersInit => {
        return {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token
        }
    }

    return {
        getApiUrl,
        getHeaders
    }
}

