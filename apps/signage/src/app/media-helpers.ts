import { Observable } from 'rxjs';
import { MediaPlayerItem } from './types';

let _time_override = 0;
let _time_anchor: number | null = null;
let _time_speed = 0;

export function setMockTime(date: number, speed: boolean | number = 0): void {
    _time_override = date;
    _time_anchor = date ? Date.now() : null;
    _time_speed = typeof speed === 'boolean' ? (speed ? 1 : 0) : speed;
    if (!date) _time_speed = 0;
}

export function time() {
    const offset =
        _time_anchor !== null ? (Date.now() - _time_anchor) * _time_speed : 0;
    return (_time_override || Date.now()) + offset;
}

export function mockTimeState() {
    return {
        active: !!_time_override,
        speed: _time_override ? _time_speed : 1,
        time: time(),
    };
}

export function mockAwareInterval(
    interval_ms: number,
    minimum_interval_ms = 250,
) {
    return new Observable<number>((observer) => {
        let tick = 0;
        let timer: ReturnType<typeof setTimeout>;
        const schedule = () => {
            const { active, speed } = mockTimeState();
            const effective_speed = active && speed > 1 ? speed : 1;
            const delay = Math.max(
                minimum_interval_ms,
                Math.min(interval_ms, interval_ms / effective_speed),
            );
            timer = setTimeout(() => {
                observer.next(tick++);
                schedule();
            }, delay);
        };
        observer.next(tick++);
        schedule();
        return () => clearTimeout(timer);
    });
}

export function validateMedia(item: MediaPlayerItem) {
    if (!item || !item.id) return 'Invalid media';
    const now = time();
    if (item.valid_from && item.valid_from * 1000 > now)
        return 'Media not valid yet.';
    if (item.valid_until && item.valid_until * 1000 < now)
        return 'Media expired.';
    return '';
}

export function findValidPlaylistIndex(
    playlist: MediaPlayerItem[],
    start_index: number,
    step: 1 | -1,
    include_start = false,
) {
    if (!playlist?.length) return -1;
    let index = start_index;
    let checked = 0;
    while (checked < playlist.length) {
        if (
            (include_start || checked > 0) &&
            validateMedia(playlist[index]) === ''
        ) {
            return index;
        }
        index = (index + step + playlist.length) % playlist.length;
        checked += 1;
    }
    return -1;
}
