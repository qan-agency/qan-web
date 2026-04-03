import { resolve } from '$app/paths';

export const navigate = (url: string) => {
    window.location.href = resolve(url);
};