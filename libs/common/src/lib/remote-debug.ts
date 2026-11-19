import {
    effect,
    inject,
    Injectable,
    InjectionToken,
    Injector,
    untracked,
} from '@angular/core';
import { Router } from '@angular/router';
import {
    authority,
    getModule,
    is_connected,
    isMock,
    PlaceModuleBinding,
    showMetadata,
} from '@placeos/ts-client';

import { hasNewVersion } from './application';
import { AsyncHandler } from './async-handler.class';
import { listenToConsole, type CapturedConsoleMethod } from './console-capture';
import { deviceId } from './device-id';
import { appName, log, setDebugLogging, withTimeout } from './general';
import { formatLogArgs } from './log-format';
import { isNativeApp } from './native-app';
import { OrganisationService } from './org/organisation.service';
import { scrubSecrets } from './sentry';
import { SettingsService } from './settings.service';
import { UploadsService } from './uploads.service';
import { currentUser } from './user-state';
import { VERSION } from './version';

/** Log levels, lowest first. A request gets the entries at its level and higher */
export const REMOTE_LOG_LEVELS = ['debug', 'info', 'warn', 'error'] as const;

export type RemoteLogLevel = (typeof REMOTE_LOG_LEVELS)[number];

/** Log entry that a device sends to the RemoteDebug driver */
export interface RemoteLogEntry {
    /** Number of the entry on the device. Starts at 1 when the app loads. A gap shows entries that were dropped */
    seq: number;
    /** Unix epoch in milliseconds on the device clock */
    timestamp: number;
    level: RemoteLogLevel;
    /** `console` for console calls, `error` for uncaught errors, `rejection` for unhandled promise rejections */
    source: 'console' | 'error' | 'rejection';
    /** Plain text. No colour or styling, no credentials, 2,000 characters maximum */
    message: string;
}

/** Log request in the `device:<id>` binding of the RemoteDebug driver */
export interface RemoteLogRequest {
    /** Unique ID of the request. A device applies each ID one time */
    id: string;
    /** Lowest level to send. The driver can change it while the request is active */
    level: RemoteLogLevel;
    /** Most buffered entries to send first. The device picks the newest entries that match. Default and maximum 1,000. `0` sends only new entries */
    history?: number;
    /** Send only buffered entries with a `seq` lower than this value. Use it to get older entries, 1,000 at a time */
    before?: number;
    /** Milliseconds that the device sends new entries after it gets the request. Default 15 minutes, maximum 1 hour */
    duration?: number;
}

/** Commands that a device runs one time and then sends a result for */
export const REMOTE_DEBUG_COMMANDS = [
    'status',
    'settings',
    'storage',
    'navigate',
    'reload',
    'clear_cache',
    'snapshot',
    'animation',
] as const;

export type RemoteDebugCommandType = (typeof REMOTE_DEBUG_COMMANDS)[number];

/** Command in the `device:<id>` binding of the RemoteDebug driver */
export type RemoteDebugCommand =
    | { id: string; type: 'status' | 'storage' | 'reload' | 'clear_cache' }
    /** Values of these settings keys, such as `app.title`. 50 keys maximum */
    | { id: string; type: 'settings'; keys: string[] }
    /** Open this route of the app, such as `/bootstrap` */
    | { id: string; type: 'navigate'; path: string }
    /** Image of the screen. `width` in pixels, default 1,280, maximum 1,920 */
    | { id: string; type: 'snapshot'; width?: number }
    /**
     * Short animation of the screen. `width` in pixels, default 640, maximum
     * 960. `duration` in milliseconds, default 5,000, maximum 10,000. `fps`
     * default 2, maximum 5. `format` default `webp`
     */
    | {
          id: string;
          type: 'animation';
          width?: number;
          duration?: number;
          fps?: number;
          format?: 'webp' | 'gif';
      };

/** Value of the `device:<id>` binding of the RemoteDebug driver */
export interface RemoteDebugDeviceState {
    /** Active log request. `null` or not set when there is none */
    logs?: RemoteLogRequest | null;
    /** Commands for the device, oldest first. The device reads the first 20 */
    commands?: RemoteDebugCommand[];
}

/** Result of a command that a device sends with `command_result` */
export interface RemoteDebugResult {
    ok: boolean;
    /** Data of the command. See `RemoteDebugStatus`, `RemoteDebugStorageItem` and the `settings` command */
    data?: unknown;
    /** Reason that the command failed */
    error?: string;
}

/** Details of the device that the device sends with each call */
export interface RemoteDebugDevice {
    id: string;
    /** Short name of the application */
    app: string;
    version: string;
    /** Git hash of the build */
    build: string;
    /** Page address, without credentials */
    url: string;
    user_agent: string;
    /** Unix epoch in milliseconds when the app loaded. A new value shows that the app reloaded */
    started_at: number;
}

/** Data of the `status` command */
export interface RemoteDebugStatus {
    device: RemoteDebugDevice;
    /** Device clock, Unix epoch in milliseconds. Compare it with the driver clock to find clock errors */
    device_time: number;
    timezone: string;
    language: string;
    /** Whether the browser has a network connection */
    online: boolean;
    /** Whether the PlaceOS websocket is connected */
    websocket: boolean;
    /** Whether the app shows on the screen */
    visible: boolean;
    native: boolean;
    screen: { width: number; height: number; pixel_ratio: number };
    /** JavaScript memory in bytes. Only in Chromium browsers */
    memory: { used: number; limit: number } | null;
    /** Storage of the origin in bytes */
    storage: { usage: number; quota: number } | null;
    service_worker: { active: boolean; new_version: boolean };
    user: { id: string; email: string } | null;
    building_id: string;
    /** Local settings overrides from the settings debug panel */
    setting_overrides: string[];
    /** Entries since the app loaded, by level */
    log_counts: Record<RemoteLogLevel, number>;
    last_error: RemoteLogEntry | null;
    /** Entries that the device keeps now */
    buffered: number;
    /** ID of the active log request. `null` when there is none */
    log_request: string | null;
}

/**
 * Data of the `snapshot` and `animation` commands. The device uploads the
 * file to PlaceOS uploads, readable by support and admin users only. The
 * file is at `/api/engine/v2/uploads/<upload_id>/url`.
 */
export interface RemoteDebugMedia {
    /** `image/webp` or `image/png` for a snapshot, `image/webp` or `image/gif` for an animation */
    mime: string;
    width: number;
    height: number;
    frames: number;
    /** Milliseconds of the animation. `0` for a snapshot */
    duration: number;
    /** Bytes of the file */
    bytes: number;
    /** ID of the PlaceOS upload. In mock mode, a `blob:` URL of the file in the page */
    upload_id: string;
}

/** Item of the `storage` command. Values are not sent, as they can hold credentials */
export interface RemoteDebugStorageItem {
    key: string;
    /** Characters in the value */
    length: number;
}

/** Screen capture functions of `screen-capture.ts` */
export type ScreenCapture = Pick<
    typeof import('./screen-capture'),
    'captureSnapshot' | 'captureAnimation' | 'MAX_MEDIA_BYTES'
>;

/**
 * Loads the screen capture code on first use, so it is not in the app
 * start-up bundle. Tests replace it, as drawing the page needs a browser.
 */
export const SCREEN_CAPTURE = new InjectionToken<() => Promise<ScreenCapture>>(
    'SCREEN_CAPTURE',
    { providedIn: 'root', factory: () => () => import('./screen-capture') },
);

/**
 * Uploads a captured file and returns the upload ID. The file goes to
 * PlaceOS uploads, not through the driver, because PlaceOS logs each
 * argument of a driver call. Uploads are not mocked, so in mock mode the
 * file stays in the page as a `blob:` URL. Tests replace it.
 */
export const REMOTE_DEBUG_UPLOAD = new InjectionToken<
    (file: File) => Promise<string>
>('REMOTE_DEBUG_UPLOAD', {
    providedIn: 'root',
    factory: () => {
        const injector = inject(Injector);
        return async (file: File) =>
            isMock()
                ? URL.createObjectURL(file)
                : injector
                      .get(UploadsService)
                      .uploadFileToCompletion(file, false, 'support');
    },
});

/** Organisation or building binding that holds the RemoteDebug system */
export const REMOTE_DEBUG_BINDING = 'remote_debug';
/** Default module name of the RemoteDebug driver */
export const REMOTE_DEBUG_MODULE = 'RemoteDebug';
/**
 * Memory budget of remote debugging on a device: 32 MB. Logs keep 10 MB
 * (the buffer and the send queue), and a screen capture keeps 22 MB while it
 * runs (see `MAX_CAPTURE_BYTES` in `screen-capture.ts`).
 */
export const REMOTE_DEBUG_MEMORY_BYTES = 32 * 1024 * 1024;
/** Most entries that the device keeps */
export const MAX_REMOTE_LOG_ENTRIES = 8000;
/** Most estimated memory of the entries that the device keeps */
export const MAX_REMOTE_LOG_BUFFER_BYTES = 8 * 1024 * 1024;
/** Most buffered entries that one request gets. Also the most entries that wait to send */
export const MAX_REMOTE_LOG_HISTORY = 1000;
/** Most estimated memory of the entries that wait to send */
export const MAX_REMOTE_LOG_QUEUE_BYTES = 2 * 1024 * 1024;
/** Estimated memory of an entry object without its message */
const LOG_ENTRY_BYTES = 64;
/** Most entries in one `post_logs` call */
export const MAX_REMOTE_LOG_BATCH = 100;
/** Most commands that the device reads from the binding */
export const MAX_REMOTE_DEBUG_COMMANDS = 20;
/** Most settings keys in a `settings` command */
const MAX_SETTINGS_KEYS = 50;
/** Most characters in the JSON of a command result */
const MAX_RESULT_LENGTH = 100_000;
/** Most handled command IDs that the device remembers */
const MAX_HANDLED_COMMANDS = 50;
/** Local storage key of the command IDs that this device handled */
const HANDLED_COMMANDS_KEY = 'PLACEOS.remote_debug.handled_commands';
/** Time that the upload of a captured file can take */
const UPLOAD_TIMEOUT_MS = 2 * 60 * 1000;
/** Width limits of the `snapshot` and `animation` commands, in pixels */
const SNAPSHOT_WIDTH = { default: 1280, max: 1920 };
const ANIMATION_WIDTH = { default: 640, max: 960 };
/** Duration limits of the `animation` command, in milliseconds */
const ANIMATION_DURATION = { default: 5000, max: 10_000 };
/** Frames each second of the `animation` command */
const ANIMATION_FPS = { default: 2, max: 5 };
/** Time between `post_logs` calls while a request is active */
const SEND_INTERVAL_MS = 1000;
/** Time that a driver call can take before it fails */
const CALL_TIMEOUT_MS = 30 * 1000;
/** Time before the device reads the zone bindings again after a failed read */
const BINDING_RETRY_MS = 60 * 1000;
const DEFAULT_DURATION_MS = 15 * 60 * 1000;
const MAX_DURATION_MS = 60 * 60 * 1000;
/** Tag of the log lines of this service. The service does not capture its own lines */
const LOG_TAG = 'RemoteDebug';

/** ts-client debug line of a `post_logs` or `command_result` call */
const OWN_CALL_LINE =
    /^\[PlaceOS\]\[WS\] \[EXEC\]\([^)]*\) [^,]*, [^,]*, (post_logs|command_result)\b/;

/** Level of the entries from a console method */
const CONSOLE_LEVEL: Record<CapturedConsoleMethod, RemoteLogLevel> = {
    debug: 'debug',
    log: 'info',
    info: 'info',
    warn: 'warn',
    error: 'error',
};

/** Name of the driver binding that holds the state of a device */
export function remoteDebugDeviceBinding(device_id: string) {
    return `device:${device_id}`;
}

/** Whether a value from the driver is a log request that a device can apply */
export function isRemoteLogRequest(value: unknown): value is RemoteLogRequest {
    if (!value || typeof value !== 'object') return false;
    const request = value as Partial<RemoteLogRequest>;
    return (
        typeof request.id === 'string' &&
        !!request.id &&
        REMOTE_LOG_LEVELS.includes(request.level as RemoteLogLevel)
    );
}

/** Whether a value from the driver is a command that a device can run */
export function isRemoteDebugCommand(
    value: unknown,
): value is RemoteDebugCommand {
    if (!value || typeof value !== 'object') return false;
    const command = value as Partial<Record<string, unknown>>;
    if (typeof command['id'] !== 'string' || !command['id']) return false;
    switch (command['type']) {
        case 'settings':
            return (
                Array.isArray(command['keys']) &&
                command['keys'].every((_) => typeof _ === 'string')
            );
        case 'navigate':
            return (
                typeof command['path'] === 'string' &&
                command['path'].startsWith('/')
            );
        case 'snapshot':
            return optionalNumber(command['width']);
        case 'animation':
            return (
                optionalNumber(command['width']) &&
                optionalNumber(command['duration']) &&
                optionalNumber(command['fps']) &&
                (command['format'] === undefined ||
                    command['format'] === 'webp' ||
                    command['format'] === 'gif')
            );
        default:
            return REMOTE_DEBUG_COMMANDS.includes(
                command['type'] as RemoteDebugCommandType,
            );
    }
}

/** Whether an entry at `level` is at `minimum` or higher */
export function isAtLogLevel(level: RemoteLogLevel, minimum: RemoteLogLevel) {
    return (
        REMOTE_LOG_LEVELS.indexOf(level) >= REMOTE_LOG_LEVELS.indexOf(minimum)
    );
}

/**
 * Device side of remote debugging. A PlaceOS driver can ask a device for its
 * logs and send it commands by the device ID. See `docs/remote-debug.md`.
 *
 * `PlaceOS_Service` injects the service, so capture starts when the app
 * starts. The device keeps the last 8,000 console calls, uncaught errors and
 * unhandled promise rejections as plain text in memory. When the
 * organisation zone has no `remote_debug` binding, capture stops and the
 * entries are removed.
 *
 * With the binding, the device listens to the `device:<id>` binding of the
 * driver. For a log request, the device sends its buffered entries at the
 * requested level, then sends new entries until the request ends. For each
 * new command, the device runs the command and sends the result.
 */
@Injectable({ providedIn: 'root' })
export class RemoteDebugService extends AsyncHandler {
    private readonly _org = inject(OrganisationService);
    private readonly _settings = inject(SettingsService);
    private readonly _router = inject(Router);
    private readonly _loadCapture = inject(SCREEN_CAPTURE);
    private readonly _upload = inject(REMOTE_DEBUG_UPLOAD);
    private readonly _started_at = Date.now();
    /** Last entries on the device, oldest first */
    private readonly _buffer = new BoundedEntries(
        MAX_REMOTE_LOG_ENTRIES,
        MAX_REMOTE_LOG_BUFFER_BYTES,
    );
    /** Entries that wait to send for the active request, oldest first */
    private readonly _queue = new BoundedEntries(
        MAX_REMOTE_LOG_HISTORY,
        MAX_REMOTE_LOG_QUEUE_BYTES,
    );
    private _seq = 0;
    private _log_counts: Record<RemoteLogLevel, number> = {
        debug: 0,
        info: 0,
        warn: 0,
        error: 0,
    };
    private _last_error: RemoteLogEntry | null = null;
    private _capturing = false;
    private _module: PlaceModuleBinding | null = null;
    /** Key of the module that the device listens to. `null` before the first check */
    private _module_key: string | null = null;
    private _request: RemoteLogRequest | null = null;
    /** ID of the last request that ended. The device does not apply it again */
    private _ended_id = '';
    private _sending = false;
    /** Driver calls of this service that run now */
    private _calls = 0;
    /** Commands from the last value of the binding */
    private _commands: RemoteDebugCommand[] = [];
    private _running_commands = false;
    /** True when the binding changed while commands ran */
    private _run_again = false;
    /** Command IDs handled since the app loaded. Used also when storage is not available */
    private _handled: string[] = [];

    /** ID that the driver uses to find this device */
    public readonly device_id = deviceId();

    constructor() {
        super();
        this._startCapture();
        effect(() => {
            if (!this._org.initialised()) return;
            untracked(() => this._loadBinding());
        });
    }

    /** Entries that the device keeps now, oldest first */
    public get entries(): readonly RemoteLogEntry[] {
        return this._buffer.list;
    }

    /** Log request that is active now. `null` when there is none */
    public get request(): RemoteLogRequest | null {
        return this._request;
    }

    protected override destroy() {
        // Ends the request first, so debug logging does not stay on
        this._endRequest();
        super.destroy();
    }

    /**
     * Read the `remote_debug` binding of the organisation zone. The service
     * reads it itself, as some apps do not load zone bindings
     * (`dont_load_metadata`). Capture continues until a read shows that
     * there is no binding. When there is no organisation zone yet, or the
     * read fails, for example after an offline start, the device tries again
     * each minute until a read succeeds.
     */
    private async _loadBinding() {
        this.clearTimeout('binding');
        // A limited start, such as Signage, initialises without the organisation
        const org_id =
            this._org.organisation?.id ||
            `${authority()?.config?.['org_zone'] ?? ''}`;
        const bindings = org_id
            ? await showMetadata(org_id, 'bindings')
                  .then((_) => (_?.details ?? {}) as Record<string, unknown>)
                  .catch(() => null)
            : null;
        if (!bindings) {
            log(LOG_TAG, `Failed to read the bindings of "${org_id}"`);
            this.timeout(
                'binding',
                () => this._loadBinding(),
                BINDING_RETRY_MS,
            );
            return;
        }
        const binding = bindings[REMOTE_DEBUG_BINDING];
        const { id, module } = (
            typeof binding === 'string' ? { id: binding } : (binding ?? {})
        ) as { id?: unknown; module?: unknown };
        this._connect(
            typeof id === 'string' && id
                ? getModule(
                      id,
                      typeof module === 'string' && module
                          ? module
                          : REMOTE_DEBUG_MODULE,
                  )
                : null,
        );
    }

    /** Listen to the driver of the binding. `null` stops remote debugging */
    private _connect(mod: PlaceModuleBinding | null) {
        const key = mod ? `${mod.system.id}/${mod.id}` : '';
        if (key === this._module_key) return;
        this._endRequest();
        this.unsub('state');
        this._module = mod;
        this._module_key = key;
        this._commands = [];
        if (!mod) {
            this._stopCapture();
            return;
        }
        this._startCapture();
        log(LOG_TAG, `Listening for debug requests for ${this.device_id}`);
        this.subscription(
            'state',
            mod
                .variable<unknown>(remoteDebugDeviceBinding(this.device_id))
                .bindThenSubscribe((value) => this._applyState(value)),
        );
    }

    private _applyState(value: unknown) {
        const state: RemoteDebugDeviceState =
            value && typeof value === 'object' ? value : {};
        this._applyRequest(state.logs);
        this._commands = Array.isArray(state.commands)
            ? state.commands
                  .slice(0, MAX_REMOTE_DEBUG_COMMANDS)
                  .filter(isRemoteDebugCommand)
            : [];
        this._runCommands();
    }

    private _startCapture() {
        if (this._capturing) return;
        this._capturing = true;
        this.subscription(
            'console',
            listenToConsole((method, args) =>
                this._add(
                    CONSOLE_LEVEL[method],
                    'console',
                    formatLogArgs(args),
                ),
            ),
        );
        const onError = (event: ErrorEvent) => {
            const where = event.filename
                ? ` (${event.filename}:${event.lineno}:${event.colno})`
                : '';
            this._add(
                'error',
                'error',
                formatLogArgs([event.error ?? `${event.message}${where}`]),
            );
        };
        const onRejection = (event: PromiseRejectionEvent) =>
            this._add(
                'error',
                'rejection',
                formatLogArgs(['Unhandled rejection:', event.reason]),
            );
        window.addEventListener('error', onError);
        window.addEventListener('unhandledrejection', onRejection);
        this.subscription('errors', () => {
            window.removeEventListener('error', onError);
            window.removeEventListener('unhandledrejection', onRejection);
        });
    }

    private _stopCapture() {
        this._capturing = false;
        this.unsub('console');
        this.unsub('errors');
        this._buffer.set([]);
    }

    private _add(
        level: RemoteLogLevel,
        source: RemoteLogEntry['source'],
        message: string,
    ) {
        if (message.includes(`[${LOG_TAG}]`) || this._isOwnCallLine(message)) {
            return;
        }
        const entry: RemoteLogEntry = {
            seq: ++this._seq,
            timestamp: Date.now(),
            level,
            source,
            message,
        };
        this._log_counts[level]++;
        if (level === 'error') this._last_error = entry;
        this._buffer.push(entry);
        if (this._request && isAtLogLevel(level, this._request.level)) {
            this._queue.push(entry);
        }
    }

    /**
     * Whether a line is a ts-client debug line about a call of this service.
     * These lines show only with `window.debug`. If the device sent them,
     * each `post_logs` call would cause the next one.
     */
    private _isOwnCallLine(message: string) {
        if (!message.startsWith('[PlaceOS][WS] [')) return false;
        if (OWN_CALL_LINE.test(message)) return true;
        return this._calls > 0 && message.startsWith('[PlaceOS][WS] [SUCCESS]');
    }

    /** Call a method of the driver */
    private async _call(
        mod: PlaceModuleBinding,
        method: string,
        args: unknown[],
    ) {
        this._calls++;
        try {
            return await mod.execute(method, args, CALL_TIMEOUT_MS);
        } finally {
            this._calls--;
        }
    }

    /**
     * Apply the log request of the binding. A new request ID queues the
     * buffered entries. The same ID with a new level or duration changes the
     * level and starts the duration again. Other values end the request.
     */
    private _applyRequest(value: unknown) {
        if (!isRemoteLogRequest(value)) return this._endRequest();
        if (value.id === this._ended_id) return;
        const active = this._request;
        if (
            active?.id === value.id &&
            active.level === value.level &&
            active.duration === value.duration
        ) {
            return;
        }
        const level = value.level;
        if (value.id !== this._request?.id) {
            const history = clamp(value.history, MAX_REMOTE_LOG_HISTORY);
            const before =
                typeof value.before === 'number' ? value.before : Infinity;
            const matching = this._buffer.list.filter(
                (_) => _.seq < before && isAtLogLevel(_.level, level),
            );
            this._queue.set(history ? matching.slice(-history) : []);
            log(LOG_TAG, `Sending logs for request ${value.id}`);
        } else {
            this._queue.set(
                this._queue.list.filter((_) => isAtLogLevel(_.level, level)),
            );
        }
        this._request = value;
        setDebugLogging(level === 'debug');
        this.timeout(
            'request_end',
            () => this._endRequest(),
            clamp(value.duration ?? DEFAULT_DURATION_MS, MAX_DURATION_MS),
        );
        if (!this._intervals['send']) {
            this.interval('send', () => this._send(), SEND_INTERVAL_MS);
        }
        this._send();
    }

    private _endRequest() {
        if (!this._request) return;
        log(LOG_TAG, `Log request ${this._request.id} ended`);
        this._ended_id = this._request.id;
        this._request = null;
        this._queue.set([]);
        setDebugLogging(false);
        this.clearTimeout('request_end');
        this.clearInterval('send');
    }

    /**
     * Send the next batch of queued entries. One call runs at a time. Entries
     * leave the queue only when the call succeeds, so a failed batch is sent
     * again. The queue keeps `MAX_REMOTE_LOG_HISTORY` entries and
     * `MAX_REMOTE_LOG_QUEUE_BYTES` maximum.
     */
    private async _send() {
        const request = this._request;
        const mod = this._module;
        const queue = this._queue.list;
        if (this._sending || !request || !mod || !queue.length) return;
        const batch = queue.slice(0, MAX_REMOTE_LOG_BATCH);
        const last_seq = batch[batch.length - 1].seq;
        this._sending = true;
        try {
            await this._call(mod, 'post_logs', [
                this.device_id,
                request.id,
                batch,
                this._deviceDetails(),
            ]);
            if (this._request?.id === request.id) {
                this._queue.set(
                    this._queue.list.filter((_) => _.seq > last_seq),
                );
            }
        } catch (error) {
            log(LOG_TAG, 'Failed to send logs', error, 'warn');
        } finally {
            this._sending = false;
        }
    }

    /**
     * Run the commands that the device did not handle yet, one at a time and
     * oldest first. The command ID is saved before the command runs, so a
     * reload does not run it again. A failed `command_result` call is not
     * sent again.
     */
    private async _runCommands() {
        if (this._running_commands) {
            this._run_again = true;
            return;
        }
        this._running_commands = true;
        this._run_again = false;
        let reloading = false;
        try {
            // A new binding value starts a new run, so the run stops at the list limit
            for (let i = 0; i < MAX_REMOTE_DEBUG_COMMANDS; i++) {
                const handled = [...readHandledCommands(), ...this._handled];
                const command = this._commands.find(
                    (_) => !handled.includes(_.id),
                );
                const mod = this._module;
                if (!command || !mod) break;
                this._handled = [...this._handled, command.id].slice(
                    -MAX_HANDLED_COMMANDS,
                );
                const saved = saveHandledCommands([
                    ...readHandledCommands(),
                    command.id,
                ]);
                log(LOG_TAG, `Running command ${command.type}`, command.id);
                const result = await this._runCommand(command, saved);
                await this._call(mod, 'command_result', [
                    this.device_id,
                    command.id,
                    result,
                    this._deviceDetails(),
                ]).catch((error) =>
                    log(LOG_TAG, 'Failed to send result', error, 'warn'),
                );
                if (result.ok && isReloadCommand(command)) {
                    reloading = true;
                    location.reload();
                    return;
                }
            }
        } finally {
            this._running_commands = false;
            // A binding change during the run starts one more bounded run
            if (this._run_again && !reloading) this._runCommands();
        }
    }

    /**
     * Result of a command. `reload` and `clear_cache` run only when the
     * device saved the command ID, so a device without storage does not
     * reload again and again.
     */
    private async _runCommand(
        command: RemoteDebugCommand,
        saved: boolean,
    ): Promise<RemoteDebugResult> {
        if (isReloadCommand(command) && !saved) {
            return { ok: false, error: 'Local storage is not available' };
        }
        try {
            const data = await this._commandData(command);
            // Scrub the JSON text, so nested values are scrubbed at any depth
            const json = scrubSecrets(JSON.stringify(data ?? null));
            if (json.length > MAX_RESULT_LENGTH) {
                return { ok: false, error: 'Result is too large' };
            }
            return { ok: true, data: JSON.parse(json) };
        } catch (error) {
            return { ok: false, error: formatLogArgs([error]) };
        }
    }

    private async _commandData(command: RemoteDebugCommand) {
        switch (command.type) {
            case 'status':
                return this._status();
            case 'settings':
                return Object.fromEntries(
                    command.keys
                        .slice(0, MAX_SETTINGS_KEYS)
                        .map((key) => [key, this._settings.get(key) ?? null]),
                );
            case 'storage':
                return storageItems();
            case 'navigate': {
                const done = await this._router.navigateByUrl(command.path);
                if (!done) throw new Error(`Cannot open ${command.path}`);
                return { url: this._router.url };
            }
            case 'reload':
                return null;
            case 'clear_cache':
                return clearCaches();
            case 'snapshot':
            case 'animation':
                return this._captureMedia(command);
        }
    }

    /** Capture the screen, then upload the file. See `REMOTE_DEBUG_UPLOAD` */
    private async _captureMedia(
        command: Extract<
            RemoteDebugCommand,
            { type: 'snapshot' | 'animation' }
        >,
    ): Promise<RemoteDebugMedia> {
        const capture = await this._loadCapture();
        const media =
            command.type === 'snapshot'
                ? await capture.captureSnapshot(
                      limit(command.width, SNAPSHOT_WIDTH),
                  )
                : await capture.captureAnimation({
                      width: limit(command.width, ANIMATION_WIDTH),
                      duration: limit(command.duration, ANIMATION_DURATION),
                      fps: limit(command.fps, ANIMATION_FPS),
                      format: command.format ?? 'webp',
                  });
        if (media.bytes.length > capture.MAX_MEDIA_BYTES) {
            throw new Error('The file is too large. Use a smaller width');
        }
        const extension = media.mime.split('/')[1];
        const file = new File(
            [media.bytes],
            `remote-debug-${this.device_id}-${command.id}.${extension}`,
            { type: media.mime },
        );
        const upload_id = await withTimeout(
            this._upload(file),
            UPLOAD_TIMEOUT_MS,
            'The upload did not finish in time',
        );
        return {
            mime: media.mime,
            width: media.width,
            height: media.height,
            frames: media.frames,
            duration: media.duration,
            bytes: media.bytes.length,
            upload_id,
        };
    }

    private async _status(): Promise<RemoteDebugStatus> {
        const memory = (
            performance as Performance & {
                memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number };
            }
        ).memory;
        const storage = await navigator.storage?.estimate().catch(() => null);
        const user = currentUser();
        return {
            device: this._deviceDetails(),
            device_time: Date.now(),
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            language: navigator.language,
            online: navigator.onLine,
            websocket: is_connected(),
            visible: document.visibilityState === 'visible',
            native: isNativeApp(),
            screen: {
                width: window.screen.width,
                height: window.screen.height,
                pixel_ratio: window.devicePixelRatio,
            },
            memory: memory
                ? {
                      used: memory.usedJSHeapSize,
                      limit: memory.jsHeapSizeLimit,
                  }
                : null,
            storage: storage
                ? { usage: storage.usage ?? 0, quota: storage.quota ?? 0 }
                : null,
            service_worker: {
                active: !!navigator.serviceWorker?.controller,
                new_version: hasNewVersion(),
            },
            user: user?.id ? { id: user.id, email: user.email } : null,
            building_id: this._org.building?.id ?? '',
            setting_overrides: Object.keys(this._settings.debug_overrides()),
            log_counts: { ...this._log_counts },
            last_error: this._last_error,
            buffered: this._buffer.list.length,
            log_request: this._request?.id ?? null,
        };
    }

    private _deviceDetails(): RemoteDebugDevice {
        return {
            id: this.device_id,
            app: appName(),
            version: `${VERSION.version ?? ''}`,
            build: `${VERSION.hash ?? ''}`,
            url: scrubSecrets(location.href),
            user_agent: navigator.userAgent,
            started_at: this._started_at,
        };
    }
}

/**
 * Log entries, oldest first, with a limit on their count and on their
 * estimated memory. The oldest entries are removed first.
 */
class BoundedEntries {
    private _entries: RemoteLogEntry[] = [];
    private _bytes = 0;

    constructor(
        private readonly _max_count: number,
        private readonly _max_bytes: number,
    ) {}

    public get list(): readonly RemoteLogEntry[] {
        return this._entries;
    }

    public push(entry: RemoteLogEntry) {
        this._entries.push(entry);
        this._bytes += entryBytes(entry);
        this._trim();
    }

    public set(entries: readonly RemoteLogEntry[]) {
        this._entries = [...entries];
        this._bytes = this._entries.reduce((sum, _) => sum + entryBytes(_), 0);
        this._trim();
    }

    /** Each step removes one entry, so the loop ends when the list is empty */
    private _trim() {
        while (
            this._entries.length > this._max_count ||
            this._bytes > this._max_bytes
        ) {
            const removed = this._entries.shift();
            if (!removed) break;
            this._bytes -= entryBytes(removed);
        }
    }
}

/** Estimated memory of an entry: 2 bytes for each character, as text can be UTF-16 */
function entryBytes(entry: RemoteLogEntry) {
    return entry.message.length * 2 + LOG_ENTRY_BYTES;
}

/** Whether a command reloads the app after it sends its result */
function isReloadCommand(command: RemoteDebugCommand) {
    return command.type === 'reload' || command.type === 'clear_cache';
}

/** Keys and value lengths of local storage */
function storageItems(): RemoteDebugStorageItem[] {
    const items: RemoteDebugStorageItem[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key === null) continue;
        items.push({ key, length: localStorage.getItem(key)?.length ?? 0 });
    }
    return items.sort((a, b) => a.key.localeCompare(b.key));
}

/** Remove the service worker caches and registrations. The app reloads after */
async function clearCaches() {
    const names = (await globalThis.caches?.keys()) ?? [];
    await Promise.all(names.map((name) => caches.delete(name)));
    const workers = (await navigator.serviceWorker?.getRegistrations()) ?? [];
    await Promise.all(workers.map((worker) => worker.unregister()));
    return { caches: names.length, workers: workers.length };
}

/** IDs of the commands that this device handled, oldest first */
function readHandledCommands(): string[] {
    try {
        const list = JSON.parse(
            localStorage.getItem(HANDLED_COMMANDS_KEY) || '[]',
        );
        return Array.isArray(list)
            ? list.filter((_): _ is string => typeof _ === 'string')
            : [];
    } catch {
        return [];
    }
}

/** Save the handled command IDs. Returns false when storage is not available */
function saveHandledCommands(ids: string[]) {
    try {
        localStorage.setItem(
            HANDLED_COMMANDS_KEY,
            JSON.stringify(ids.slice(-MAX_HANDLED_COMMANDS)),
        );
        return true;
    } catch {
        return false;
    }
}

/** Whether a command option is not set or is a finite number */
function optionalNumber(value: unknown) {
    return (
        value === undefined || (typeof value === 'number' && isFinite(value))
    );
}

/** Option value in the range 1 to `max`. A missing value gives the default */
function limit(
    value: number | undefined,
    range: { default: number; max: number },
) {
    if (typeof value !== 'number' || !isFinite(value)) return range.default;
    return Math.min(Math.max(value, 1), range.max);
}

/** Value in the range 0 to `max`. Values that are not numbers give `max` */
function clamp(value: number | undefined, max: number) {
    if (typeof value !== 'number' || isNaN(value)) return max;
    return Math.min(Math.max(Math.floor(value), 0), max);
}
