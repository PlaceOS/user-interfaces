import {
    readRemoteDebugMedia,
    REMOTE_LOG_LEVELS,
    RemoteDebugCommandResult,
    RemoteDebugCommandType,
    RemoteDebugMedia,
    remoteDebugMediaUrl,
    RemoteDebugStorageItem,
} from '@placeos/common';

/** Names of the commands that the remote debug panel shows */
export const REMOTE_DEBUG_COMMAND_LABELS: Record<
    RemoteDebugCommandType,
    string
> = {
    status: 'Status',
    settings: 'Settings',
    storage: 'Storage keys',
    navigate: 'Open route',
    reload: 'Reload app',
    clear_cache: 'Clear cache and reload',
    snapshot: 'Snapshot',
    animation: 'Animation',
};

/** Row of the status summary. `warn` marks a value that can be a problem */
export interface RemoteDebugStatusRow {
    label: string;
    value: string;
    warn: boolean;
}

/** How the remote debug panel shows the result of a command */
export type RemoteDebugResultView =
    | { kind: 'error'; error: string }
    | { kind: 'media'; file: RemoteDebugMedia; url: string }
    | { kind: 'status'; rows: RemoteDebugStatusRow[] }
    | { kind: 'storage'; items: RemoteDebugStorageItem[] }
    /** Data without a special view, such as settings values. Shows as JSON */
    | { kind: 'data' }
    /** A command without data, such as `navigate` */
    | { kind: 'done' };

/** Clock difference to the driver that shows as a problem */
const CLOCK_WARN_MS = 60 * 1000;
/** Clock difference to the driver that shows as in sync */
const CLOCK_SYNC_MS = 5 * 1000;
/** Part of memory or storage in use that shows as a problem */
const USAGE_WARN = 0.8;
/** Most characters of the last error that the summary shows */
const MAX_ERROR_LENGTH = 300;

/** Select the view of a command result from its type and data */
export function remoteDebugResultView(
    item: RemoteDebugCommandResult,
): RemoteDebugResultView {
    const { result } = item;
    if (!result.ok) return { kind: 'error', error: result.error ?? '' };
    if (item.type === 'snapshot' || item.type === 'animation') {
        const file = readRemoteDebugMedia(result.data);
        if (file) {
            return {
                kind: 'media',
                file,
                url: remoteDebugMediaUrl(file.upload_id),
            };
        }
    }
    if (item.type === 'status') {
        const rows = remoteDebugStatusRows(result.data, item.received_at);
        if (rows) return { kind: 'status', rows };
    }
    if (item.type === 'storage') {
        const items = readStorageItems(result.data);
        if (items) return { kind: 'storage', items };
    }
    return result.data === undefined || result.data === null
        ? { kind: 'done' }
        : { kind: 'data' };
}

/**
 * Summary of the data of a `status` command, as label and value rows.
 * `received_at` is the driver time of the result, to find clock errors.
 * Returns `null` when the data is not a status. Fields with a bad value are
 * left out, because a device can run an older or newer app version.
 */
export function remoteDebugStatusRows(
    data: unknown,
    received_at: number,
): RemoteDebugStatusRow[] | null {
    if (!isRecord(data)) return null;
    const device_time = num(data.device_time);
    if (device_time === null) return null;
    const rows: RemoteDebugStatusRow[] = [];
    const add = (label: string, value: string, warn = false) =>
        rows.push({ label, value, warn });

    const offset = device_time - received_at;
    const timezone = str(data.timezone);
    add(
        'Clock',
        `${Math.abs(offset) < CLOCK_SYNC_MS ? 'In sync with the driver' : `${formatDuration(Math.abs(offset))} ${offset > 0 ? 'ahead of' : 'behind'} the driver`}${timezone ? `, ${timezone}` : ''}`,
        Math.abs(offset) > CLOCK_WARN_MS,
    );
    if (
        typeof data.online === 'boolean' &&
        typeof data.websocket === 'boolean'
    ) {
        add(
            'Connection',
            `Network ${data.online ? 'on' : 'off'}, PlaceOS ${data.websocket ? 'connected' : 'not connected'}`,
            !data.online || !data.websocket,
        );
    }
    if (typeof data.visible === 'boolean') {
        add(
            'Visible',
            data.visible ? 'Yes' : 'No, the app is hidden',
            !data.visible,
        );
    }
    if (isRecord(data.screen)) {
        const width = num(data.screen.width);
        const height = num(data.screen.height);
        const ratio = num(data.screen.pixel_ratio);
        if (width !== null && height !== null) {
            add(
                'Screen',
                `${width} x ${height}${ratio !== null && ratio !== 1 ? ` at ${ratio}x` : ''}`,
            );
        }
    }
    const memory = usage(data.memory, 'used', 'limit');
    if (memory) add('Memory', memory.text, memory.warn);
    else if (data.memory === null) add('Memory', 'Not available');
    const storage = usage(data.storage, 'usage', 'quota');
    if (storage) add('Storage', storage.text, storage.warn);
    if (isRecord(data.service_worker)) {
        const active = data.service_worker.active === true;
        const waiting = data.service_worker.new_version === true;
        add(
            'Service worker',
            `${active ? 'Active' : 'Not active'}${waiting ? ', new version waiting' : ''}`,
            waiting,
        );
    }
    if (data.user === null) add('User', 'Not signed in');
    else if (isRecord(data.user)) {
        add('User', str(data.user.email) || str(data.user.id));
    }
    const building = str(data.building_id);
    if (building) add('Building', building);
    const language = str(data.language);
    if (language) add('Language', language);
    if (Array.isArray(data.setting_overrides)) {
        const keys = data.setting_overrides.filter(
            (_): _ is string => typeof _ === 'string',
        );
        add(
            'Setting overrides',
            keys.length ? keys.join(', ') : 'None',
            keys.length > 0,
        );
    }
    if (isRecord(data.log_counts)) {
        const counts = data.log_counts;
        // Most severe level first
        const parts = [...REMOTE_LOG_LEVELS]
            .reverse()
            .map((level) => [level, num(counts[level]) ?? 0] as const)
            .filter(([, count]) => count > 0)
            .map(([level, count]) => `${count} ${level}`);
        add(
            'Logs since load',
            parts.join(', ') || 'None',
            (num(counts.error) ?? 0) > 0,
        );
    }
    if (isRecord(data.last_error)) {
        const message = str(data.last_error.message);
        if (message) {
            add(
                'Last error',
                message.length > MAX_ERROR_LENGTH
                    ? `${message.slice(0, MAX_ERROR_LENGTH)}…`
                    : message,
                true,
            );
        }
    }
    return rows;
}

/** Bytes as text with a unit, such as `12.5 MB` */
export function formatBytes(bytes: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let value = bytes;
    let unit = 0;
    while (value >= 1024 && unit < units.length - 1) {
        value /= 1024;
        unit++;
    }
    const digits = unit === 0 || value >= 100 ? 0 : 1;
    // `20.0 KB` shows as `20 KB`
    return `${Number(value.toFixed(digits))} ${units[unit]}`;
}

/** Text of a duration in milliseconds, such as `5 s`, `3 min` or `2 h` */
function formatDuration(ms: number) {
    const seconds = Math.round(ms / 1000);
    if (seconds < 120) return `${seconds} s`;
    const minutes = Math.round(seconds / 60);
    if (minutes < 120) return `${minutes} min`;
    return `${Math.round(minutes / 60)} h`;
}

/** Text of a used and total value in bytes, and whether most is in use */
function usage(value: unknown, used_key: string, total_key: string) {
    if (!isRecord(value)) return null;
    const used = num(value[used_key]);
    const total = num(value[total_key]);
    if (used === null || !total) return null;
    const part = used / total;
    return {
        text: `${formatBytes(used)} of ${formatBytes(total)} (${Math.round(part * 100)}%)`,
        warn: part >= USAGE_WARN,
    };
}

/** Items of a `storage` result. `null` when the data is not a list of items */
function readStorageItems(data: unknown): RemoteDebugStorageItem[] | null {
    if (!Array.isArray(data)) return null;
    return data.filter(
        (_): _ is RemoteDebugStorageItem =>
            isRecord(_) && typeof _.key === 'string' && num(_.length) !== null,
    );
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return !!value && typeof value === 'object' && !Array.isArray(value);
}

function num(value: unknown) {
    return typeof value === 'number' && Number.isFinite(value) ? value : null;
}

function str(value: unknown) {
    return typeof value === 'string' ? value : '';
}
