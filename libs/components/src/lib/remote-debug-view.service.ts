import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import { PlaceModuleBinding } from '@placeos/ts-client';

import {
    AsyncHandler,
    notifyError,
    OrganisationService,
    readRemoteDebugModule,
    REMOTE_DEBUG_DEVICES,
    remoteDebugOrgId,
    RemoteDebugSeenDevice,
} from '@placeos/common';

/** State of the RemoteDebug driver for the admin views */
export type RemoteDebugViewState = 'loading' | 'ready' | 'missing' | 'failed';

/**
 * Viewer side of remote debugging, for the admin views in Concierge and
 * Signage Manager. Finds the RemoteDebug driver from the `remote_debug`
 * binding of the organisation zone, and lists the devices that called it.
 * See `docs/remote-debug.md`.
 */
@Injectable({ providedIn: 'root' })
export class RemoteDebugViewService extends AsyncHandler {
    private readonly _org = inject(OrganisationService);
    private readonly _module = signal<PlaceModuleBinding | null>(null);
    private readonly _state = signal<RemoteDebugViewState>('loading');
    private readonly _devices = signal<Record<string, RemoteDebugSeenDevice>>(
        {},
    );

    /** Module of the driver. `null` until the state is `ready` */
    public readonly module = this._module.asReadonly();
    public readonly state = this._state.asReadonly();
    /** Devices that called the driver, last seen first */
    public readonly devices = computed(() =>
        Object.values(this._devices()).sort(
            (a, b) => b.last_seen - a.last_seen,
        ),
    );

    constructor() {
        super();
        effect(() => {
            if (!this._org.initialised()) return;
            untracked(() => this.load());
        });
    }

    /** Find the driver again, for example after a failed read */
    public async load() {
        this._state.set('loading');
        const mod = await readRemoteDebugModule(remoteDebugOrgId(this._org));
        this.unsub('devices');
        this._module.set(mod ?? null);
        this._state.set(mod ? 'ready' : mod === null ? 'missing' : 'failed');
        if (!mod) return;
        this.subscription(
            'devices',
            mod
                .variable<unknown>(REMOTE_DEBUG_DEVICES)
                .bindThenSubscribe((value) =>
                    this._devices.set(
                        value && typeof value === 'object'
                            ? (value as Record<string, RemoteDebugSeenDevice>)
                            : {},
                    ),
                ),
        );
    }

    /**
     * Call a method of the driver for the people who debug, such as
     * `request_logs` or `send_command`. Shows an error and resolves `null`
     * when the call fails.
     */
    public async call<T = unknown>(
        method: string,
        args: unknown[],
    ): Promise<T | null> {
        const mod = this._module();
        if (!mod) return null;
        try {
            return await mod.execute<T>(method, args);
        } catch (error) {
            notifyError(
                `Remote debugging failed: ${(error as Error)?.message || error}`,
            );
            return null;
        }
    }
}
