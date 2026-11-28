import {
    short_url,
    type ShortUrl,
    type ShortUrlInput,
} from '@placeos/ts-client';
import { orThrow } from '@placeos/ts-client/compat';

import { isMock } from './place-client';
import { generateQRCode } from './qr-code';

/** A short URL of the REST API */
export type ShortURL = ShortUrl;

const QR_STORE = new Map<string, string>();

/**
 * Object URL of the QR code image of a short URL. Each format loads once.
 * @param id ID of the short URL
 */
export async function getShortUrlQRCode(
    id: string,
    format: 'svg' | 'png' = 'svg',
): Promise<string> {
    const key = `${id}.${format}`;
    if (QR_STORE.has(key)) return QR_STORE.get(key);
    // Mock mode has no server to draw the code, so draw the short link here
    if (isMock()) {
        const url = generateQRCode(`${location.origin}/r/${id.split('-')[1]}`);
        QR_STORE.set(key, url);
        return url;
    }
    // A copy, as a `Blob` takes only bytes on an `ArrayBuffer`
    const blob =
        format === 'png'
            ? new Blob(
                  [new Uint8Array(await short_url.pngQr({ id }).then(orThrow))],
                  { type: 'image/png' },
              )
            : new Blob([await short_url.svgQr({ id }).then(orThrow)], {
                  type: 'image/svg+xml',
              });
    const url = URL.createObjectURL(blob);
    QR_STORE.set(key, url);
    return url;
}

export async function createShortURL(data: ShortUrlInput): Promise<ShortURL> {
    return short_url.create({ body: data }).then(orThrow);
}

export async function updateShortURL(
    id: string,
    data: ShortUrlInput,
): Promise<ShortURL> {
    return short_url.update({ id, body: data }).then(orThrow);
}

export function saveShortURL(data: ShortUrlInput): Promise<ShortURL> {
    return data.id ? updateShortURL(data.id, data) : createShortURL(data);
}

export async function deleteShortURL(id: string): Promise<void> {
    await short_url.destroy({ id }).then(orThrow);
}
