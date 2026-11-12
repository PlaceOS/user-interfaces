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
 * driver keeps 4,000 devices maximum and removes stale devices.
 */
export interface RemoteSetupDevice {
    id: string;
    app: RemoteSetupApp;
    /** Configuration on the device. `null` when it is not set up */
    config: RemoteSetupConfig | null;
    /** Unix epoch in milliseconds of the last `register` or `complete` call */
    last_seen: number;
    /** ID of the last command that the device completed */
    last_command?: string;
}

/** Command in the `device_<id>` binding of the RemoteSetup driver */
export type RemoteSetupCommand =
    | {
          id: string;
          action: 'configure';
          config: RemoteSetupConfig;
          issued_at: number;
      }
    | { id: string; action: 'clear'; issued_at: number };

/** System with the RemoteSetup driver in mock mode */
export const REMOTE_SETUP_MOCK_SYSTEM = 'sys-remote-setup';
/** Default module name of the RemoteSetup driver */
export const REMOTE_SETUP_MODULE = 'RemoteSetup';
/** Time between `register` calls that keep `last_seen` current */
const HEARTBEAT_MS = 15 * 60 * 1000;
/** Local storage key of the last command that this device applied */
const LAST_COMMAND_KEY = 'PLACEOS.remote_setup.last_command';

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
    if (command.action === 'clear') return true;
    if (command.action !== 'configure') return false;
    const config = (command as { config?: Partial<RemoteSetupConfig> }).config;
    return typeof config?.system_id === 'string' && !!config.system_id;
}

/** How an application reads and applies its remote setup configuration */
export interface RemoteSetupTarget {
    app: RemoteSetupApp;
    /**
     * Path of the setup flow on the PlaceOS domain. Used when the
     * `remote_setup_url` setting is not set.
     */
    default_path: string;
    /** Configuration that is on this device now */
    current(): RemoteSetupConfig | null;
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
 * binds to the RemoteSetup driver. It registers the device, and applies the
 * commands that the driver puts in the `device_<id>` binding.
 *
 * `available` is true when the driver is set up and connected. The bootstrap
 * screen then shows a QR code of `setup_url`.
 */
@Injectable({ providedIn: 'root' })
export class RemoteSetupService extends AsyncHandler {
    private readonly _target = signal<RemoteSetupTarget | null>(null);
    private readonly _connected = signal(false);
    private readonly _url_setting = settingSignal<string>(
        'remote_setup_url',
        '',
    );
    private _module: PlaceModuleBinding | null = null;

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
    }

    /** Listen for remote setup commands for this application */
    public start(target: RemoteSetupTarget) {
        this._target.set(target);
    }

    /** Send the configuration on this device to the driver */
    public register() {
        const target = this._target();
        if (!this._module || !target || !this._connected()) return;
        this._module
            .execute('register', [this.device_id, target.app, target.current()])
            .catch((error) =>
                log('RemoteSetup', 'Failed to register', error, 'warn'),
            );
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
            mod.variable<boolean>('connected').bindThenSubscribe((value) => {
                const was_connected = this._connected();
                this._connected.set(value === true);
                if (value === true && !was_connected) this.register();
            }),
        );
        this.subscription(
            'command',
            mod
                .variable<unknown>(remoteSetupCommandBinding(this.device_id))
                .bindThenSubscribe((value) => this._applyCommand(value)),
        );
        this.interval('heartbeat', () => this.register(), HEARTBEAT_MS);
    }

    /**
     * Apply a command from the driver once, then tell the driver it is
     * complete. The command ID is saved first, so a reload during the
     * change does not apply the command again. A failed command is not
     * completed. A failed `complete` call is not sent again. The driver
     * removes stale commands in both cases.
     */
    private async _applyCommand(value: unknown) {
        const target = this._target();
        if (!target || !this._module || !isRemoteSetupCommand(value)) return;
        if (localStorage.getItem(LAST_COMMAND_KEY) === value.id) return;
        localStorage.setItem(LAST_COMMAND_KEY, value.id);
        log('RemoteSetup', `Applying ${value.action} command`, value);
        let applied = false;
        try {
            const result = await target.apply(
                value.action === 'configure' ? value.config : null,
            );
            applied = result !== false;
        } catch (error) {
            log('RemoteSetup', 'Failed to apply command', error, 'warn');
        }
        // The driver records a completed command as the device configuration
        if (!applied) return;
        await this._module
            .execute('complete', [this.device_id, value.id])
            .catch((error) =>
                log('RemoteSetup', 'Failed to complete command', error, 'warn'),
            );
    }
}
