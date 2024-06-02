// It will be available as buildSearchQuery() (camelCase of file name without extension)

export default function (token: string | undefined | null): TokenPayload {
    if (!token) {
        return {valid: false} as TokenPayload;
    }

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export interface TokenPayload {
    valid: boolean,
    exp: any;
    iat: any;
    role: string[];
    restriction: {
        [key: string]: string[];
    };
}