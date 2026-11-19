import {
    isRemoteDebugCommand,
    isRemoteLogRequest,
    MAX_REMOTE_DEBUG_COMMANDS,
    randomString,
    REMOTE_DEBUG_MODULE,
    RemoteDebugCommand,
    RemoteDebugCommandOptions,
    RemoteDebugCommandResult,
    RemoteDebugCommandType,
    RemoteDebugDevice,
    remoteDebugDeviceBinding,
    RemoteDebugDeviceState,
    remoteDebugLogsBinding,
    RemoteDebugMedia,
    RemoteDebugResult,
    remoteDebugResultsBinding,
    RemoteDebugSeenDevice,
    RemoteLogEntry,
    RemoteLogLevel,
    RemoteLogRequest,
    RemoteLogRequestOptions,
    RemoteLogsView,
} from '@placeos/common';
import { registerSystem } from '@placeos/ts-client';

/** System with the mock RemoteDebug driver. The zone `bindings` mock points `remote_debug` at it */
export const REMOTE_DEBUG_MOCK_SYSTEM = 'sys-remote-debug';
/** Most entries that the mock keeps for each device */
const MAX_DEVICE_ENTRIES = 5000;
/** Most results that the mock keeps for each device */
const MAX_DEVICE_RESULTS = 50;
/** Most devices that the mock keeps data for */
const MAX_DEVICES = 1000;
const DEFAULT_DURATION_MS = 15 * 60 * 1000;
const MAX_DURATION_MS = 60 * 60 * 1000;
/** Time before the mock removes a command that the device did not run */
const COMMAND_TIMEOUT_MS = 15 * 60 * 1000;

/** Binding access of a mock module. Methods run with the module as `this` */
interface MockModule {
    [name: string]: unknown;
    listen(name: string): unknown;
}

/** Registered mock module of the RemoteDebug driver */
export type MockRemoteDebugModule = MockModule &
    RemoteDebugModule & {
        /** Run the `$<command>` method of the module */
        call(command: string, args?: unknown[]): unknown;
    };

/** Set a binding that the mock module may not have yet */
function setBinding(mod: MockModule, name: string, value: unknown) {
    mod.listen(name);
    mod[name] = value;
}

/**
 * Mock of the RemoteDebug driver. See `docs/remote-debug.md`.
 *
 * In mock mode the app listens to this driver, so a request for the ID of
 * the app shows its own logs in `logs:<id>` and its command results in
 * `results:<id>`. The mock also has seeded logs for the seeded remote setup
 * devices.
 *
 * The ts-client mock copies only the fields and the `$` methods of the
 * class, so the helpers are functions outside the class.
 */
export class RemoteDebugModule {
    [binding: string]: unknown;
    /** Devices that called the driver, by ID */
    public devices: Record<string, RemoteDebugSeenDevice> = {};
    /** End timers of the active log requests, by device ID */
    public timers: Record<string, ReturnType<typeof setTimeout>> = {};

    /** Starts with the logs in `seed` */
    constructor(seed: (RemoteLogsView & { device: RemoteDebugDevice })[] = []) {
        for (const view of seed) {
            this[remoteDebugLogsBinding(view.device.id)] = view;
            this.devices[view.device.id] = {
                ...view.device,
                last_seen: view.entries.at(-1)?.timestamp ?? 0,
            };
        }
    }

    /** Set a new log request for a device. Returns the request ID */
    $request_logs(
        this: MockModule & RemoteDebugModule,
        device_id: string,
        level: RemoteLogLevel,
        options: RemoteLogRequestOptions = {},
    ) {
        const request: RemoteLogRequest = {
            ...options,
            id: randomString(12),
            level,
        };
        if (!isRemoteLogRequest(request)) return null;
        setState(this, device_id, { logs: request });
        startExpiry(this, device_id, request.duration);
        return request.id;
    }

    /** Change the level of the active log request of a device */
    $set_level(
        this: MockModule & RemoteDebugModule,
        device_id: string,
        level: RemoteLogLevel,
    ) {
        const logs = deviceState(this, device_id).logs;
        // The device ignores the same level, so its duration does not start again
        if (!isRemoteLogRequest(logs) || logs.level === level) return;
        setState(this, device_id, { logs: { ...logs, level } });
        // The device starts the duration again when the level changes
        startExpiry(this, device_id, logs.duration);
    }

    /** End the active log request of a device */
    $stop_logs(this: MockModule & RemoteDebugModule, device_id: string) {
        clearTimeout(this.timers[device_id]);
        const { [device_id]: _, ...timers } = this.timers;
        this.timers = timers;
        setState(this, device_id, { logs: null });
    }

    /** Add a command for a device. Returns the command ID, or `null` when the command is not valid or the list is full */
    $send_command(
        this: MockModule & RemoteDebugModule,
        device_id: string,
        type: RemoteDebugCommandType,
        options: RemoteDebugCommandOptions = {},
    ) {
        const command = { ...options, id: randomString(12), type };
        const commands = deviceState(this, device_id).commands ?? [];
        if (
            !isRemoteDebugCommand(command) ||
            commands.length >= MAX_REMOTE_DEBUG_COMMANDS
        ) {
            return null;
        }
        setState(this, device_id, { commands: [...commands, command] });
        setTimeout(
            () => removeCommand(this, device_id, command.id),
            COMMAND_TIMEOUT_MS,
        );
        return command.id;
    }

    /** Add entries from a device. Ignores calls for a request that is not active */
    $post_logs(
        this: MockModule & RemoteDebugModule,
        device_id: string,
        request_id: string,
        entries: RemoteLogEntry[],
        device: RemoteDebugDevice,
    ) {
        const logs = deviceState(this, device_id).logs;
        if (!isRemoteLogRequest(logs) || logs.id !== request_id) return;
        seen(this, device);
        const name = remoteDebugLogsBinding(device_id);
        const view = this[name] as RemoteLogsView | undefined;
        // A new `started_at` shows that the app reloaded and `seq` started again
        const same_session = view?.device?.started_at === device.started_at;
        const old = same_session ? view.entries : [];
        const known = new Set(old.map((_) => _.seq));
        const added = entries.filter((_) => !known.has(_.seq));
        if (same_session && !added.length) return;
        setBinding(this, name, {
            device,
            entries: [...old, ...added]
                .sort((a, b) => a.seq - b.seq)
                .slice(-MAX_DEVICE_ENTRIES),
        } satisfies RemoteLogsView);
    }

    /** Keep the result of a command and remove the command */
    $command_result(
        this: MockModule & RemoteDebugModule,
        device_id: string,
        command_id: string,
        result: RemoteDebugResult,
        device: RemoteDebugDevice,
    ) {
        const command = (deviceState(this, device_id).commands ?? []).find(
            (_) => _.id === command_id,
        );
        if (!command) return;
        seen(this, device);
        removeCommand(this, device_id, command_id);
        const name = remoteDebugResultsBinding(device_id);
        const results = [
            ...((this[name] as RemoteDebugCommandResult[] | null) ?? []),
            {
                id: command.id,
                type: command.type,
                result,
                received_at: Date.now(),
            },
        ];
        for (const old of results.splice(
            0,
            results.length - MAX_DEVICE_RESULTS,
        )) {
            releaseMedia(old);
        }
        setBinding(this, name, results);
    }
}

/**
 * In mock mode the upload ID of a snapshot or animation is a `blob:` URL in
 * the page. Release the file of a result that the mock no longer keeps.
 */
function releaseMedia(entry: RemoteDebugCommandResult) {
    const upload_id = (entry.result.data as RemoteDebugMedia | undefined)
        ?.upload_id;
    if (upload_id?.startsWith('blob:')) URL.revokeObjectURL(upload_id);
}

/** Clear the log request of a device when its duration ends. See the driver requirements */
function startExpiry(
    mod: MockModule & RemoteDebugModule,
    device_id: string,
    duration = DEFAULT_DURATION_MS,
) {
    clearTimeout(mod.timers[device_id]);
    mod.timers = {
        ...mod.timers,
        [device_id]: setTimeout(
            () => mod.$stop_logs(device_id),
            Math.min(Math.max(duration, 0), MAX_DURATION_MS),
        ),
    };
}

/** Value of the `device:<id>` binding. Empty when there is none */
function deviceState(
    mod: MockModule,
    device_id: string,
): RemoteDebugDeviceState {
    const state = mod[remoteDebugDeviceBinding(device_id)];
    return state && typeof state === 'object' ? state : {};
}

/** Change fields of the `device:<id>` binding */
function setState(
    mod: MockModule,
    device_id: string,
    change: RemoteDebugDeviceState,
) {
    setBinding(mod, remoteDebugDeviceBinding(device_id), {
        logs: null,
        commands: [],
        ...deviceState(mod, device_id),
        ...change,
    });
}

function removeCommand(mod: MockModule, device_id: string, command_id: string) {
    const commands = deviceState(mod, device_id).commands ?? [];
    if (!commands.some((_) => _.id === command_id)) return;
    setState(mod, device_id, {
        commands: commands.filter(
            (_: RemoteDebugCommand) => _.id !== command_id,
        ),
    });
}

/**
 * Add or update a device in `devices`. Keeps the `MAX_DEVICES` devices that
 * were seen last, and removes the logs and results of the other devices.
 */
function seen(mod: MockModule & RemoteDebugModule, device: RemoteDebugDevice) {
    const list = Object.values({
        ...mod.devices,
        [device.id]: { ...device, last_seen: Date.now() },
    }).sort((a, b) => b.last_seen - a.last_seen);
    for (const removed of list.splice(MAX_DEVICES)) {
        setBinding(mod, remoteDebugLogsBinding(removed.id), null);
        setBinding(mod, remoteDebugResultsBinding(removed.id), null);
    }
    mod.devices = Object.fromEntries(list.map((_) => [_.id, _]));
}

/** Seeded logs for a remote setup mock device */
function seededView(
    id: string,
    app: string,
    now: number,
): RemoteLogsView & { device: RemoteDebugDevice } {
    const lines: [RemoteLogLevel, string][] = [
        ['info', `[${app}][APP] Initialising...`],
        ['debug', `[${app}][Settings] Loaded settings from the server`],
        ['warn', `[${app}][WS] Websocket closed. Reconnecting in 5s`],
        ['info', `[${app}][WS] Websocket connected`],
        [
            'error',
            `TypeError: Cannot read properties of undefined (reading 'id')`,
        ],
    ];
    return {
        device: {
            id,
            app,
            version: 'mock',
            build: 'mock',
            url: `https://placeos.test/${app}/`,
            user_agent: 'Mock device',
            started_at: now - 60 * 60 * 1000,
        },
        entries: lines.map(([level, message], i) => ({
            seq: i + 1,
            timestamp: now - (lines.length - i) * 60 * 1000,
            level,
            source: 'console',
            message,
        })),
    };
}

/** Register the mock system with the RemoteDebug driver */
export function createRemoteDebugSystem() {
    const now = Date.now();
    const mod = new RemoteDebugModule([
        seededView('DEV-MOCK0001', 'booking-panel', now),
        seededView('DEV-MOCK0002', 'control', now),
    ]);
    const system = registerSystem(REMOTE_DEBUG_MOCK_SYSTEM, {
        [REMOTE_DEBUG_MODULE]: [mod],
    });
    // Console handle, as there is no viewer yet. For example:
    // app.remote_debug.call('send_command', ['<device id>', 'snapshot'])
    const registered = system?.[REMOTE_DEBUG_MODULE]?.[0];
    if (registered) {
        window.app ??= {};
        window.app['remote_debug'] = registered;
    }
}
