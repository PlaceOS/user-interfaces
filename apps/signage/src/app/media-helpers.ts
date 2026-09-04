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

export function validateMedia(item: MediaPlayerItem) {
    if (!item) return 'Invalid media: missing media data.';
    if (!item.id) return 'Invalid media: missing media ID.';
    const now = time();
    if (item.valid_from && item.valid_from * 1000 > now) {
        const source = validitySourceLabel(item.validity?.valid_from_source);
        return `${source} not valid yet. Starts at ${formatMediaTime(item.valid_from)}. Current player time is ${formatMediaTime(now / 1000)}.`;
    }
    if (item.valid_until && item.valid_until * 1000 < now) {
        const source = validitySourceLabel(item.validity?.valid_until_source);
        return `${source} expired. Ended at ${formatMediaTime(item.valid_until)}. Current player time is ${formatMediaTime(now / 1000)}.`;
    }
    return '';
}

function validitySourceLabel(
    source: 'playlist' | 'media' | 'playlist_media' | undefined,
) {
    if (source === 'playlist') return 'Playlist';
    if (source === 'media') return 'Media item';
    if (source === 'playlist_media') return 'Playlist and media item';
    return 'Media';
}

function formatMediaTime(seconds: number) {
    return new Intl.DateTimeFormat(undefined, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    }).format(new Date(seconds * 1000));
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
