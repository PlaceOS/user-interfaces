import { errorMessage } from '@placeos/common';

/**
 * Readable text for a failed request, for error notifications.
 * Driver and API errors are plain objects (realtime errors carry `msg`),
 * so they print as `[object Object]` when passed to a message directly.
 */
export function errorText(error: unknown): string {
    const message = errorMessage(error);
    if (message) return message;
    const { msg, code, status } = (error ?? {}) as {
        msg?: unknown;
        code?: number;
        status?: number;
    };
    if (typeof msg === 'string' && msg) return msg;
    return `${code ?? status ?? 'unknown'}`;
}
