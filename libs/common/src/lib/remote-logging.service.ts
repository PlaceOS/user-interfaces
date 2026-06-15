import { Injectable, signal } from '@angular/core';
import { getModule } from '@placeos/ts-client';

import { AsyncHandler } from './async-handler.class';
import { log, randomInt, randomString } from './general';

export interface ClientEvent {
    id: string;
    device_id: string;
    type: 'network' | 'console' | 'dom';
    subtype: string;
    timestamp: number;
    raw: any;
    data: any;
    metadata: any;
}

function hookMethod<T, K extends keyof T>(
    rootObject: T,
    functionToHook: K,
    hookingFunction: (...args: any[]) => void,
): T[K] {
    var previousFunction = rootObject[functionToHook];
    (rootObject as any)[functionToHook] = (...args: any[]) => {
        hookingFunction(args);
        (previousFunction as any).call(rootObject, ...args);
    };
    return previousFunction;
}

let DEVICE_ID =
    localStorage.getItem('PLACEOS.DEVICE_ID') || `DEV-${randomString(8)}`;

@Injectable({
    providedIn: 'root',
})
export class RemoteLoggingService extends AsyncHandler {
    private _disable_handling: boolean = false;
    private _system_id = signal<string>('');
    private _logging_system = signal<string>('');
    private _event_history = signal<ClientEvent[]>([]);
    private _metadata = null;

    public readonly history = this._event_history.asReadonly();

    public setMetadata(metadata: any) {}

    constructor() {
        super();
        localStorage.setItem('PLACEOS.DEVICE_ID', DEVICE_ID);
        this._patchConsoleMethods();
        log('Logger', 'Remote logging initialised...');
    }

    public setSystem(id: string) {
        this._system_id.set(id);
        if (id) this._bindTo(id, 'enabled');
    }

    private _patchConsoleMethods() {
        const types: (keyof Console)[] = [
            'log',
            'debug',
            'info',
            'warn',
            'error',
        ];
        for (const key of types) {
            hookMethod(console, key, (...args) => this._handleEvent(key, args));
        }
    }

    private _handleEvent(type: string, data: any, event_type: any = 'console') {
        if (data.includes('"Logger"') || this._disable_handling) return;
        const blob = [...data[0]];
        blob[0] =
            typeof blob[0] === 'string' ? blob[0].replace(/\%c/g, '') : blob[0];
        const event = {
            id: `${event_type}-${randomInt(99999_99999)}`,
            device_id: DEVICE_ID,
            type: event_type,
            subtype: type,
            timestamp: Date.now(),
            raw: data,
            data: blob.filter(
                (_) => typeof _ !== 'string' || !_.startsWith('color:'),
            ),
            metadata: this._metadata || null,
        };
        this._event_history.update((history) =>
            [...history, event].slice(-20000),
        );
        const system_id = this._logging_system();
        if (!system_id) return;
        this._disable_handling = true;
        getModule(system_id, 'Logger')
            .execute('post_event', [event])
            .catch()
            .finally(() => (this._disable_handling = false));
    }

    /** List to binding */
    private _bindTo(id: string, name: string, mod = 'Logger') {
        const module = getModule(id, mod).variable(name);
        this.subscription(`bind:${name}`, module.bind());
        this.subscription(
            `listen:${name}`,
            module.listen().subscribe((enabled) => {
                this._logging_system.set(enabled ? id : '');
            }),
        );
    }
}
