/** Return the API's string error without leaking response objects to the UI. */
export function errorMessage(error: unknown, fallback: string): string {
    if (typeof error === 'string') return error;
    if (!isRecord(error)) return fallback;

    const nested = error['error'];
    if (typeof nested === 'string') return nested;
    if (isRecord(nested)) {
        const detail = nested['error'];
        if (typeof detail === 'string') return detail;
        const nested_message = nested['message'];
        if (typeof nested_message === 'string') return nested_message;
    }

    const message = error['message'];
    return typeof message === 'string' ? message : fallback;
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
}

/** Return an HTTP status from either the error or its wrapped API response. */
export function errorStatus(error: unknown): number | undefined {
    if (!isRecord(error)) return undefined;
    const status = error['status'];
    if (typeof status === 'number') return status;
    const nested = error['error'];
    if (!isRecord(nested)) return undefined;
    const nested_status = nested['status'];
    return typeof nested_status === 'number' ? nested_status : undefined;
}

/** Perceived sRGB brightness on a 0 to 255 scale. */
export function perceivedLightness(
    red: number,
    green: number,
    blue: number,
): number {
    return (red * 299 + green * 587 + blue * 114) / 1000;
}
