import {
    apiKey,
    del,
    get,
    patch,
    post,
    put,
    query,
    token,
} from '@placeos/ts-client';

const ENDPOINT = '/api/engine/v2/short_url';

export interface ShortURL {
    id: string;
    name: string;
    description: string;
    uri: string;

    user_id: string;
    user_name: string;
    user_email: string;

    redirect_count: number;

    enabled: boolean;
    valid_from: number;
    valid_to: number;

    created_at: number;
    updated_at: number;
}

export async function queryShortURLs(
    q: Record<string, any> = {},
): Promise<ShortURL[]> {
    const { data } = await query<ShortURL>({
        query_params: q,
        fn: (item) => item as ShortURL,
        endpoint: ENDPOINT,
        path: '',
    });
    return data;
}

export async function showShortURL(id: string): Promise<ShortURL> {
    return (await get(`${ENDPOINT}/${id}`)) as ShortURL;
}

const QR_STORE = new Map<string, string>();

export async function getShortUrlQRCode(
    id: string,
    format: 'svg' | 'png' = 'svg',
): Promise<string> {
    const key = `${id}.${format}`;
    if (QR_STORE.has(key)) return QR_STORE.get(key);
    const tkn = token();
    document.cookie = `${
        tkn === 'x-api-key'
            ? 'api-key=' + encodeURIComponent(apiKey())
            : 'bearer_token=' + encodeURIComponent(tkn)
    };max-age=30;path=/api/engine/v2/short_url/;samesite=strict;${
        location.protocol === 'https:' ? 'secure;' : ''
    }`;
    const response = await fetch(`${ENDPOINT}/${id}/qr_code.${format}`);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    QR_STORE.set(key, url);
    return url;
}

export async function createShortURL(data: ShortURL): Promise<ShortURL> {
    return (await post(ENDPOINT, data)) as ShortURL;
}

export async function updateShortURL(
    id: string,
    data: ShortURL,
): Promise<ShortURL> {
    return (await put(`${ENDPOINT}/${id}`, data)) as ShortURL;
}

export function saveShortURL(data: ShortURL): Promise<ShortURL> {
    return data.id ? updateShortURL(data.id, data) : createShortURL(data);
}

export async function patchShortURL(
    id: string,
    data: Partial<ShortURL>,
): Promise<ShortURL> {
    return (await patch(`${ENDPOINT}/${id}`, data)) as ShortURL;
}

export async function deleteShortURL(id: string): Promise<void> {
    await del(`${ENDPOINT}/${id}`);
}
