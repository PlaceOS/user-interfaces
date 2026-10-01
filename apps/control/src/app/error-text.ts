import { errorMessage } from '@placeos/common';

/**
 * Readable text for a failed request, for error notifications.
 * Driver and API errors are plain objects, so they print as
 * `[object Object]` when passed to a message directly.
 */
export function errorText(error: unknown): string {
    const message = errorMessage(error);
    if (message) return message;
    const { code, status } = (error ?? {}) as {
        code?: number;
        status?: number;
    };
    return `${code ?? status ?? 'unknown'}`;
}
