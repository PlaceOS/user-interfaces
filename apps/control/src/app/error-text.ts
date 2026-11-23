import { errorMessage, ModuleCallFailed } from '@placeos/common';

/**
 * Readable text for a failed request, for error notifications.
 * A failed module call gives the message of the driver. Other driver and
 * API errors are plain objects (6.x realtime errors carry `msg`), so they
 * print as `[object Object]` when passed to a message directly.
 */
export function errorText(error: unknown): string {
    if (error instanceof ModuleCallFailed) {
        const failure = error.error;
        if (failure.kind === 'server' && failure.message) {
            return failure.message;
        }
    }
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
