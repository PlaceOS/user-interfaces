import { set } from 'date-fns';
import { MediaPlayerItem } from './types';

let _time_override = 0;
let _time_offset = 0;

export function setMockTime(date: number, progress = false): void {
    _time_override = date;
    _time_offset = progress ? Date.now() : 0;
}

export function time() {
    const offset = _time_offset ? Date.now() - _time_offset : 0;
    return (_time_override || Date.now()) + offset;
}

export function validateMedia(item: MediaPlayerItem) {
    if (!item || !item.id) return 'Invalid media';
    if (item.valid_from && item.valid_from * 1000 > Date.now())
        return 'Media not valid yet.';
    if (item.valid_until && item.valid_until * 1000 < Date.now())
        return 'Media expired.';
    const [from, until] = `${item.play_hours || '00:00-00:00'}`.split('-');
    if (from && until && from !== until) {
        const [from_hours, from_minutes] = from.split(':');
        const [until_hours, until_minutes] = until.split(':');
        const start = set(time(), {
            hours: parseInt(from_hours),
            minutes: parseInt(from_minutes),
        }).valueOf();
        const end = set(time(), {
            hours: parseInt(until_hours),
            minutes: parseInt(until_minutes),
        }).valueOf();
        if (start > Date.now()) return 'Before hours';
        if (end < Date.now()) return 'After hours';
    }
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
