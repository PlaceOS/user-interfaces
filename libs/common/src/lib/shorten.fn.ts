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
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

export function queryShortURLs(q: Record<string, any> = {}) {
    return query<ShortURL>({
        query_params: q,
        fn: (item) => item as ShortURL,
        endpoint: ENDPOINT,
        path: '',
    }).pipe(map((_) => _.data));
}

export function showShortURL(id: string): Observable<ShortURL> {
    return get(`${ENDPOINT}/${id}`).pipe(map((_) => _ as ShortURL));
}

const QR_STORE = new Map<string, string>();

export async function getShortUrlQRCode(
    id: string,
    format: 'svg' | 'png' = 'svg'
): Promise<string> {
    const key = `${id}.${format}`;
    if (QR_STORE.has(key)) return QR_STORE.get(key);
    const tkn = token();
    console.log('Token:', tkn);
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

export function createShortURL(data: ShortURL): Observable<ShortURL> {
    return post(ENDPOINT, data).pipe(map((_) => _ as ShortURL));
}

export function updateShortURL(
    id: string,
    data: ShortURL
): Observable<ShortURL> {
    return put(`${ENDPOINT}/${id}`, data).pipe(map((_) => _ as ShortURL));
}

export function saveShortURL(data: ShortURL): Observable<ShortURL> {
    return data.id ? updateShortURL(data.id, data) : createShortURL(data);
}

export function patchShortURL(
    id: string,
    data: Partial<ShortURL>
): Observable<ShortURL> {
    return patch(`${ENDPOINT}/${id}`, data).pipe(map((_) => _ as ShortURL));
}

export function deleteShortURL(id: string): Observable<void> {
    return del(`${ENDPOINT}/${id}`).pipe(map((_) => null));
}
