import {
    randomString,
    REMOTE_SETUP_MOCK_SYSTEM,
    REMOTE_SETUP_MODULE,
    RemoteSetupApp,
    RemoteSetupCommand,
    remoteSetupCommandBinding,
    RemoteSetupConfig,
    RemoteSetupDevice,
} from '@placeos/common';
import { registerSystem } from '@placeos/ts-client';

/** Time before the mock device applies a command */
const APPLY_DELAY_MS = 1500;
/** Most devices that the driver keeps. See `docs/remote-setup.md` */
const MAX_DEVICES = 4000;

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
 * apply their commands after a short delay, the same as a real device.
 */
export class RemoteSetupModule {
    public connected = true;
    public devices: Record<string, RemoteSetupDevice>;

    constructor(seed: RemoteSetupDevice[]) {
        this.devices = Object.fromEntries(seed.map((d) => [d.id, d]));
    }

    $register(
        this: MockModule & RemoteSetupModule,
        device_id: string,
        app: RemoteSetupApp,
        config: RemoteSetupConfig | null,
    ) {
        const devices = Object.values({
            ...this.devices,
            [device_id]: { id: device_id, app, config, last_seen: Date.now() },
        })
            .sort((a, b) => b.last_seen - a.last_seen)
            .slice(0, MAX_DEVICES);
        this.devices = Object.fromEntries(devices.map((d) => [d.id, d]));
    }

    $configure(
        this: MockModule & RemoteSetupModule,
        device_id: string,
        config: RemoteSetupConfig,
    ) {
        return sendCommand(this, device_id, {
            id: randomString(12),
            action: 'configure',
            config,
            issued_at: Date.now(),
        });
    }

    $clear(this: MockModule & RemoteSetupModule, device_id: string) {
        return sendCommand(this, device_id, {
            id: randomString(12),
            action: 'clear',
            issued_at: Date.now(),
        });
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
                    config:
                        command.action === 'configure' ? command.config : null,
                    last_seen: Date.now(),
                    last_command: command.id,
                },
            };
        }
        setBinding(this, name, null);
    }
}

/**
 * Set the command for a device and return its ID. Seeded devices complete
 * the command on their own.
 */
function sendCommand(
    mod: MockModule & RemoteSetupModule,
    device_id: string,
    command: RemoteSetupCommand,
) {
    if (!mod.devices[device_id]) throw { message: 'Device not found' };
    setBinding(mod, remoteSetupCommandBinding(device_id), command);
    if (device_id.startsWith('DEV-MOCK')) {
        setTimeout(() => mod.$complete(device_id, command.id), APPLY_DELAY_MS);
    }
    return command.id;
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
