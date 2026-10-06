import { log } from '@placeos/common';

/** An error whose message is written for the person, already translated. */
export class UserFacingError extends Error {}

/**
 * The text to show when a user action fails. Raw API and upload errors read
 * as noise ("Creating upload ... failed with status 500"), so the action's own
 * message shows and the raw error goes to the console. Only a UserFacingError
 * keeps its message. A failed job's server message is shown elsewhere, as
 * that one is written for the person.
 */
export function actionError(error: unknown, fallback: string): string {
    if (error instanceof UserFacingError) return error.message;
    log('ImageGen', fallback, error, 'error', true);
    return fallback;
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

/**
 * A colour as lowercase `#rrggbb`, the only form an `<input type="color">`
 * takes and reports, so swatches and the picker compare equal. Empty when the
 * value is not `#rgb` or `#rrggbb`.
 */
export function hexColour(value: string): string {
    const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value.trim());
    if (!match) return '';
    const digits =
        match[1].length === 3
            ? [...match[1]].map((digit) => digit + digit).join('')
            : match[1];
    return `#${digits.toLowerCase()}`;
}

/**
 * How a media item is labelled for an image of this size. The aspect ratio,
 * as `width:height`, stands in when the size is not known.
 */
export function orientationOf(
    width = 0,
    height = 0,
    aspect_ratio = '',
): 'portrait' | 'landscape' {
    if (!width || !height) {
        [width, height] = aspect_ratio.split(':').map(Number);
    }
    return height > width ? 'portrait' : 'landscape';
}
