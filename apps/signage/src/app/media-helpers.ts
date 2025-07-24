import { set } from 'date-fns';
import { MediaPlayerItem } from './types';

let _time_override = 0;

export function setMockTime(date: number): void {
    _time_override = date;
}

export function time() {
    return _time_override || Date.now();
}

export function validateMedia(item: MediaPlayerItem) {
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
