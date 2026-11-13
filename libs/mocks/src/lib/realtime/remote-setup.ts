import {
    randomString,
    REMOTE_SETUP_MOCK_SYSTEM,
    REMOTE_SETUP_MODULE,
    RemoteSetupApp,
    RemoteSetupCommand,
    remoteSetupCommandBinding,
    RemoteSetupConfig,
    RemoteSetupDevice,
    RemoteSetupSystemClear,
} from '@placeos/common';
import { registerSystem } from '@placeos/ts-client';

/** Time before a seeded mock device applies a change */
const APPLY_DELAY_MS = 1500;
/** Most devices that the driver keeps. See `docs/remote-setup.md` */
const MAX_DEVICES = 1000;
/** Time that the driver keeps a system clear */
const SYSTEM_CLEAR_MS = 15 * 60 * 1000;

/** Binding access of a mock module. Methods run with the module as `this` */
interface MockModule {
    [name: string]: unknown;
    listen(name: string): unknown;
}

/** Set a binding that the mock module may not have yet */
function setBinding(mod: MockModule, name: string, value: unknown) {
    mod.listen(name);
    mod[name] = value;
}

/**
 * Mock of the RemoteSetup driver. See `docs/remote-setup.md`.
 *
 * Other apps on the same origin do not share the mock, so the seeded devices
 * apply their changes after a short delay, the same as a real device.
 */
export class RemoteSetupModule {
    public connected = true;
    public devices: Record<string, RemoteSetupDevice>;
    public clear_list: string[] = [];
    public clear_systems: RemoteSetupSystemClear[] = [];

    constructor(seed: RemoteSetupDevice[]) {
        this.devices = Object.fromEntries(seed.map((d) => [d.id, d]));
    }

    $register(
        this: MockModule & RemoteSetupModule,
        device_id: string,
        app: RemoteSetupApp,
    ) {
        const devices = Object.values({
            ...this.devices,
            [device_id]: {
                ...this.devices[device_id],
                id: device_id,
                app,
                config: null,
                last_seen: Date.now(),
            },
        })
            .sort((a, b) => b.last_seen - a.last_seen)
            .slice(0, MAX_DEVICES);
        this.devices = Object.fromEntries(devices.map((d) => [d.id, d]));
        if (this.clear_list.includes(device_id)) {
            this.clear_list = this.clear_list.filter((id) => id !== device_id);
        }
    }

    $configure(
        this: MockModule & RemoteSetupModule,
        device_id: string,
        config: RemoteSetupConfig,
    ) {
        const device = this.devices[device_id];
        if (!device) throw { message: 'Device not found' };
        const command: RemoteSetupCommand = {
            id: randomString(12),
            config,
            issued_at: Date.now(),
        };
        setBinding(this, remoteSetupCommandBinding(device_id), command);
        if (isSeeded(device_id)) {
            setTimeout(
                () => this.$complete(device_id, command.id),
                APPLY_DELAY_MS,
            );
        }
        return command.id;
    }

    $clear(this: MockModule & RemoteSetupModule, device_id: string) {
        if (!this.clear_list.includes(device_id)) {
            this.clear_list = [...this.clear_list, device_id].slice(
                -MAX_DEVICES,
            );
        }
        const device = this.devices[device_id];
        if (device && isSeeded(device_id)) {
            setTimeout(
                () => this.$register(device_id, device.app),
                APPLY_DELAY_MS,
            );
        }
    }

    $clear_system(
        this: MockModule & RemoteSetupModule,
        app: RemoteSetupApp,
        system_id: string,
    ) {
        const now = Date.now();
        this.clear_systems = [
            ...this.clear_systems.filter(
                (entry) => now - entry.issued_at < SYSTEM_CLEAR_MS,
            ),
            { id: randomString(12), app, system_id, issued_at: now },
        ].slice(-MAX_DEVICES);
        for (const device of Object.values(this.devices)) {
            if (
                isSeeded(device.id) &&
                device.app === app &&
                device.config?.system_id === system_id
            ) {
                setTimeout(
                    () => this.$register(device.id, device.app),
                    APPLY_DELAY_MS,
                );
            }
        }
    }

    $complete(
        this: MockModule & RemoteSetupModule,
        device_id: string,
        command_id: string,
    ) {
        const name = remoteSetupCommandBinding(device_id);
        const command = this[name] as RemoteSetupCommand | null;
        if (command?.id !== command_id) return;
        const device = this.devices[device_id];
        if (device) {
            this.devices = {
                ...this.devices,
                [device_id]: {
                    ...device,
                    config: command.config,
                    last_seen: Date.now(),
                    last_command: command.id,
                },
            };
        }
        setBinding(this, name, null);
    }
}

/** Whether a device is a seeded mock device that applies changes itself */
function isSeeded(device_id: string) {
    return device_id.startsWith('DEV-MOCK');
}

/** Register the mock system with the RemoteSetup driver */
export function createRemoteSetupSystem(system_ids: string[]) {
    const now = Date.now();
    const seed: RemoteSetupDevice[] = [
        {
            id: 'DEV-MOCK0001',
            app: 'booking-panel',
            config: null,
            last_seen: now,
        },
        {
            id: 'DEV-MOCK0002',
            app: 'control',
            config: system_ids[0] ? { system_id: system_ids[0] } : null,
            last_seen: now - 60 * 60 * 1000,
        },
        {
            id: 'DEV-MOCK0003',
            app: 'signage',
            config: null,
            last_seen: now - 24 * 60 * 60 * 1000,
        },
    ];
    registerSystem(REMOTE_SETUP_MOCK_SYSTEM, {
        [REMOTE_SETUP_MODULE]: [new RemoteSetupModule(seed)],
    });
}
