import { MediaAnimation, SignagePlaylistSchedule } from '@placeos/ts-client';

/** Play period of a schedule that does not set one: the whole day */
export const DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;

/** Schedule start in Unix seconds and the mask that repeats by occurrence. */
export type ScheduleMask = Pick<SignagePlaylistSchedule, 'valid_from' | 'mask'>;

/** Whether a mask is valid: 1 to 128 characters of `0` and `1`. */
export function isValidScheduleMask(mask: string) {
    return mask.length > 0 && mask.length <= 128 && !/[^01]/.test(mask);
}

/**
 * Whether a schedule can have an enabled occurrence. A mask needs at least
 * one `1` and a `valid_from` that is a valid date after 1970 to count from.
 */
export function hasPlayableScheduleMask({
    mask = '',
    valid_from,
}: ScheduleMask) {
    return (
        !mask ||
        (isValidScheduleMask(mask) &&
            mask.includes('1') &&
            Number.isFinite(valid_from) &&
            valid_from > 0 &&
            Number.isFinite(new Date(valid_from * 1000).getTime()))
    );
}

/** Whether the schedule plays once at `play_at` or `play_at_local`. */
export function isPlayOnceSchedule(
    schedule: Pick<SignagePlaylistSchedule, 'play_at' | 'play_at_local'>,
) {
    return !!schedule.play_at || !!schedule.play_at_local;
}

const PLAY_AT_LOCAL_PATTERN =
    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})$/;

/**
 * Parse a `play_at_local` value as a wall-clock time in the local timezone.
 * @returns The time in milliseconds, or null when the value is not an
 * ISO 8601 date time with no offset
 */
export function parsePlayAtLocal(value: string | null | undefined) {
    const match = PLAY_AT_LOCAL_PATTERN.exec(value || '');
    if (!match) return null;
    const [year, month, day, hours, minutes, seconds] = match
        .slice(1)
        .map(Number);
    const date = new Date(year, month - 1, day, hours, minutes, seconds);
    // Reject values such as February 30 or 00:60 that roll over.
    return date.getDate() === day &&
        date.getMonth() === month - 1 &&
        minutes < 60 &&
        seconds < 60
        ? date.getTime()
        : null;
}

const MEDIA_ANIMATIONS = Object.values(MediaAnimation);

/**
 * Animation as a `MediaAnimation` value. The API accepts animation names
 * but stores and returns the index of the name in `MediaAnimation`, e.g.
 * 2 for `cross_fade`.
 * @returns The default animation for an unknown name, an index out of range
 * or no value
 */
export function mediaAnimation(value: unknown): MediaAnimation {
    if (typeof value === 'number') {
        return Number.isInteger(value) &&
            value >= 0 &&
            value < MEDIA_ANIMATIONS.length
            ? MEDIA_ANIMATIONS[value]
            : MediaAnimation.Default;
    }
    return (
        MEDIA_ANIMATIONS.find((animation) => animation === value) ||
        MediaAnimation.Default
    );
}
