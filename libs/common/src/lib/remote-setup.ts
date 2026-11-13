import { computed, effect, Injectable, signal, untracked } from '@angular/core';
import {
    authority,
    getModule,
    host,
    isMock,
    isSecure,
    PlaceModuleBinding,
} from '@placeos/ts-client';

import { initialisationComplete } from './application';
import { AsyncHandler } from './async-handler.class';
import { deviceId } from './device-id';
import { log } from './general';
import { getNativeSystemId, syncNativeManagedConfig } from './native-app';
import { settingSignal } from './settings.service';

/** Applications that a remote setup flow can configure */
export type RemoteSetupApp = 'booking-panel' | 'control' | 'signage';

/** Configuration that remote setup applies to a device */
export interface RemoteSetupConfig {
    /** System that the device shows. For signage, the display system */
    system_id: string;
    /** Signage only. Template that the display shows */
    template_id?: string;
    /** Booking panel only. Open the events view of the system */
    event_view?: boolean;
}

/**
 * Device details in the `devices` binding of the RemoteSetup driver. The
 * driver keeps 1,000 devices maximum and removes stale devices.
 */
export interface RemoteSetupDevice {
    id: string;
    app: RemoteSetupApp;
    /** Configuration from the last completed command. `null` after `register` */
    config: RemoteSetupConfig | null;
    /** Unix epoch in milliseconds of the last `register` or `complete` call */
    last_seen: number;
    /** ID of the last command that the device completed */
    last_command?: string;
}

/** Entry in the `clear_systems` binding of the RemoteSetup driver */
export interface RemoteSetupSystemClear {
    id: string;
    /** Devices of this application clear */
    app: RemoteSetupApp;
    /** Devices that show this system clear */
    system_id: string;
    issued_at: number;
}

/** Configure command in the `device_<id>` binding of the RemoteSetup driver */
export interface RemoteSetupCommand {
    id: string;
    config: RemoteSetupConfig;
    issued_at: number;
}

/** System with the RemoteSetup driver in mock mode */
export const REMOTE_SETUP_MOCK_SYSTEM = 'sys-remote-setup';
/** Default module name of the RemoteSetup driver */
export const REMOTE_SETUP_MODULE = 'RemoteSetup';
/** Driver binding with the IDs of the devices to clear */
export const REMOTE_SETUP_CLEAR_LIST = 'clear_list';
/** Driver binding with the systems whose devices must clear */
export const REMOTE_SETUP_CLEAR_SYSTEMS = 'clear_systems';
/** Time between `register` calls that keep `last_seen` current */
const HEARTBEAT_MS = 15 * 60 * 1000;
/**
 * Most time that a device on its setup screen waits to register after the
 * driver connects. The random wait spreads the calls of devices that start
 * at the same time. The wait is short, because the setup flow cannot send
 * a command to the device before it registers.
 */
const REGISTER_SPREAD_MS = 10 * 1000;
/** Local storage key of the last command that this device applied */
const LAST_COMMAND_KEY = 'PLACEOS.remote_setup.last_command';
/** Local storage key of the system clear state of this device */
const CLEAR_STATE_KEY = 'PLACEOS.remote_setup.clear_systems';
/** Most handled system clear IDs that a device remembers */
const MAX_HANDLED_CLEARS = 20;
/** Most entry IDs that the driver keeps in `clear_systems` */
const MAX_SYSTEM_CLEARS = 1000;

/** What a device remembers from its last check of `clear_systems` */
interface ClearSystemsState {
    /** System that the device showed at the last check */
    system_id: string | null;
    /** IDs of the entries for this app at the last check */
    seen: string[];
    /** IDs of the entries that this device must not apply */
    handled: string[];
}

/**
 * Module binding of the RemoteSetup driver. The system comes from the
 * `remote_setup.system_id` field of the authority config. `null` when the
 * domain has no remote setup system.
 */
export function remoteSetupModule(): PlaceModuleBinding | null {
    const config = authority()?.config?.['remote_setup'];
    const system_id =
        config?.system_id || (isMock() ? REMOTE_SETUP_MOCK_SYSTEM : '');
    if (!system_id) return null;
    return getModule(
        `${system_id}`,
        `${config?.module || REMOTE_SETUP_MODULE}`,
    );
}

/** Name of the driver binding that holds the pending command for a device */
export function remoteSetupCommandBinding(device_id: string) {
    return `device_${device_id}`;
}

/** Whether a value from the driver is a command that a device can apply */
export function isRemoteSetupCommand(
    value: unknown,
): value is RemoteSetupCommand {
    if (!value || typeof value !== 'object') return false;
    const command = value as Partial<RemoteSetupCommand>;
    if (typeof command.id !== 'string' || !command.id) return false;
    const system_id = command.config?.system_id;
    return typeof system_id === 'string' && !!system_id;
}

/** IDs in the `clear_list` binding. Values that are not lists give none */
export function remoteSetupClearList(value: unknown): string[] {
    return Array.isArray(value)
        ? value.filter((id): id is string => typeof id === 'string')
        : [];
}

/** Entries in the `clear_systems` binding. Values that are not valid give none */
export function remoteSetupClearSystems(
    value: unknown,
): RemoteSetupSystemClear[] {
    if (!Array.isArray(value)) return [];
    return value.filter(
        (entry): entry is RemoteSetupSystemClear =>
            !!entry &&
            typeof entry === 'object' &&
            typeof entry.id === 'string' &&
            typeof entry.app === 'string' &&
            typeof entry.system_id === 'string' &&
            !!entry.system_id,
    );
}

/** How an application applies its remote setup configuration */
export interface RemoteSetupTarget {
    app: RemoteSetupApp;
    /**
     * Path of the setup flow on the PlaceOS domain. Used when the
     * `remote_setup_url` setting is not set.
     */
    default_path: string;
    /** System that the device shows now. `null` when it is not set up */
    system_id(): string | null;
    /**
     * Apply a configuration. `null` clears the configuration. Resolves
     * `false` when the change does not go through.
     */
    apply(config: RemoteSetupConfig | null): Promise<unknown>;
}

/**
 * Device side of remote setup.
 *
 * Call `start` once at application startup. After initialisation the service
 * binds to the RemoteSetup driver. It applies the configure command in the
 * `device_<id>` binding. It clears the device when its ID is in the
 * `clear_list` binding, or when its app and system are in the
 * `clear_systems` binding.
 *
 * The device registers only while a setup screen shows, that is, when the
 * device is not set up. `<remote-setup-qr />` tells the service when it
 * shows. `available` is true when the driver is set up and connected. The
 * setup screen then shows a QR code of `setup_url`.
 */
@Injectable({ providedIn: 'root' })
export class RemoteSetupService extends AsyncHandler {
    private readonly _target = signal<RemoteSetupTarget | null>(null);
    private readonly _connected = signal(false);
    /** Number of setup screens that show now */
    private readonly _setup_screens = signal(0);
    private readonly _url_setting = settingSignal<string>(
        'remote_setup_url',
        '',
    );
    private _module: PlaceModuleBinding | null = null;
    private _clearing = false;

    /** ID that the setup flow uses to find this device */
    public readonly device_id = deviceId();
    /** Whether the remote setup driver is set up and connected */
    public readonly available = computed(
        () => !!this._target() && this._connected(),
    );
    /** Address of the setup flow for this device */
    public readonly setup_url = computed(() => {
        const target = this._target();
        if (!target) return '';
        const base =
            this._url_setting() ||
            `${isSecure() ? 'https' : 'http'}://${host()}${target.default_path}`;
        const separator = base.includes('?') ? '&' : '?';
        return `${base}${separator}device=${encodeURIComponent(this.device_id)}`;
    });

    constructor() {
        super();
        effect(() => {
            const target = this._target();
            if (!target || !initialisationComplete()()) return;
            untracked(() => this._connect());
        });
        effect(() => {
            const register = this.available() && this._setup_screens() > 0;
            untracked(() =>
                register ? this._startRegister() : this._stopRegister(),
            );
        });
    }

    /** Listen for remote setup commands for this application */
    public start(target: RemoteSetupTarget) {
        this._target.set(target);
    }

    /**
     * Tell the service that a setup screen shows. The device registers while
     * a setup screen shows. Call the returned function when it closes.
     */
    public showSetupScreen() {
        this._setup_screens.update((count) => count + 1);
        let closed = false;
        return () => {
            if (closed) return;
            closed = true;
            this._setup_screens.update((count) => count - 1);
        };
    }

    private async _connect() {
        // A system from MDM managed config has priority, so a managed device
        // does not take part in remote setup.
        await syncNativeManagedConfig();
        if (getNativeSystemId()) {
            log('RemoteSetup', 'System is set by MDM managed config');
            return;
        }
        const mod = remoteSetupModule();
        if (!mod) {
            log('RemoteSetup', 'No remote setup system on this domain');
            return;
        }
        this._module = mod;
        this.subscription(
            'connected',
            mod
                .variable<boolean>('connected')
                .bindThenSubscribe((value) =>
                    this._connected.set(value === true),
                ),
        );
        this.subscription(
            'command',
            mod
                .variable<unknown>(remoteSetupCommandBinding(this.device_id))
                .bindThenSubscribe((value) => this._applyCommand(value)),
        );
        this.subscription(
            'clear',
            mod
                .variable<unknown>(REMOTE_SETUP_CLEAR_LIST)
                .bindThenSubscribe((value) => this._applyClearList(value)),
        );
        this.subscription(
            'clear_systems',
            mod
                .variable<unknown>(REMOTE_SETUP_CLEAR_SYSTEMS)
                .bindThenSubscribe((value) => this._applyClearSystems(value)),
        );
    }

    /**
     * Register after a random wait, then again at each heartbeat. The random
     * wait also sets when the heartbeat occurs, so the heartbeats of devices
     * that start at the same time stay spread.
     */
    private _startRegister() {
        this.timeout(
            'register',
            () => {
                this._register();
                this.interval(
                    'heartbeat',
                    () => this._register(),
                    HEARTBEAT_MS,
                );
            },
            Math.random() * REGISTER_SPREAD_MS,
        );
    }

    private _stopRegister() {
        this.clearTimeout('register');
        this.clearInterval('heartbeat');
    }

    /** Add this device to the devices that wait for setup */
    private _register() {
        const target = this._target();
        if (!this._module || !target) return;
        this._module
            .execute('register', [this.device_id, target.app])
            .catch((error) =>
                log('RemoteSetup', 'Failed to register', error, 'warn'),
            );
    }

    /**
     * Apply a configure command from the driver once, then tell the driver
     * it is complete. The command ID is saved first, so a reload during the
     * change does not apply the command again. A failed command is not
     * completed. A failed `complete` call is not sent again. The driver
     * removes stale commands in both cases.
     */
    private async _applyCommand(value: unknown) {
        const target = this._target();
        if (!target || !this._module || !isRemoteSetupCommand(value)) return;
        if (localStorage.getItem(LAST_COMMAND_KEY) === value.id) return;
        localStorage.setItem(LAST_COMMAND_KEY, value.id);
        log('RemoteSetup', 'Applying configure command', value);
        if (!(await this._apply(target, value.config))) return;
        // The driver records a completed command as the device configuration
        await this._module
            .execute('complete', [this.device_id, value.id])
            .catch((error) =>
                log('RemoteSetup', 'Failed to complete command', error, 'warn'),
            );
    }

    /**
     * Clear the device when its ID is in the clear list. The driver removes
     * the ID when the device registers from its setup screen. Thus a device
     * that shows its setup screen is already clear.
     */
    private async _applyClearList(value: unknown) {
        if (!remoteSetupClearList(value).includes(this.device_id)) return;
        await this._clear();
    }

    /**
     * Clear the device when an entry in the clear systems list has its app
     * and system. An entry applies only when it arrives after the device got
     * its system: when the system changes, the entries that the device saw
     * before the change are handled without a clear. The device also
     * applies each entry one time only. The driver removes the entries after
     * a time limit.
     */
    private async _applyClearSystems(value: unknown) {
        const target = this._target();
        if (!target) return;
        const system_id = target.system_id() || null;
        const entries = remoteSetupClearSystems(value).filter(
            (item) => item.app === target.app,
        );
        const matching = entries.filter(
            (item) => !!system_id && item.system_id === system_id,
        );
        const last = readClearState();
        const handled = last?.handled ?? [];
        if (!last || last.system_id !== system_id) {
            // Without a record, the device cannot know when the entries
            // arrived, so it handles them all.
            const before = last ? last.seen : entries.map((item) => item.id);
            for (const item of matching) {
                if (before.includes(item.id)) handled.push(item.id);
            }
        }
        const entry = matching.find((item) => !handled.includes(item.id));
        if (entry) handled.push(entry.id);
        saveClearState({
            system_id,
            seen: entries.map((item) => item.id).slice(-MAX_SYSTEM_CLEARS),
            handled: handled.slice(-MAX_HANDLED_CLEARS),
        });
        if (entry) await this._clear();
    }

    /** Clear the configuration on this device, when it is set up */
    private async _clear() {
        const target = this._target();
        if (!target || this._clearing || this._setup_screens() > 0) return;
        log('RemoteSetup', 'Clearing the device configuration');
        this._clearing = true;
        await this._apply(target, null);
        this._clearing = false;
    }

    /** Apply a change. Resolves `true` when the change went through */
    private async _apply(
        target: RemoteSetupTarget,
        config: RemoteSetupConfig | null,
    ) {
        try {
            return (await target.apply(config)) !== false;
        } catch (error) {
            log('RemoteSetup', 'Failed to apply change', error, 'warn');
            return false;
        }
    }
}

/** System clear state from the last check. `null` when there is none */
function readClearState(): ClearSystemsState | null {
    try {
        const state = JSON.parse(
            localStorage.getItem(CLEAR_STATE_KEY) || 'null',
        );
        if (!state || typeof state !== 'object') return null;
        return {
            system_id:
                typeof state.system_id === 'string' ? state.system_id : null,
            seen: remoteSetupClearList(state.seen),
            handled: remoteSetupClearList(state.handled),
        };
    } catch {
        return null;
    }
}

/** Save the system clear state of this check */
function saveClearState(state: ClearSystemsState) {
    try {
        localStorage.setItem(CLEAR_STATE_KEY, JSON.stringify(state));
    } catch {
        // Ignore quota and privacy-mode failures.
    }
}
