import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

import { AsyncHandler } from './async-handler.class';
import { randomInt, randomString } from './general';

export interface ClientEvent {
    id: string;
    device_id: string;
    type: 'network' | 'console' | 'dom';
    subtype: string;
    timestamp: number;
    raw: any;
    data: any;
}

function hookMethod<T, K extends keyof T>(
    rootObject: T,
    functionToHook: K,
    hookingFunction: (...args: any[]) => void
): T[K] {
    var previousFunction = rootObject[functionToHook];
    (rootObject as any)[functionToHook] = (...args: any[]) => {
        hookingFunction(args);
        (previousFunction as any).call(rootObject, ...args);
    };
    return previousFunction;
}

const DEVICE_ID =
    localStorage.getItem('PLACEOS.DEVICE_ID') || `DEV-${randomString(8)}`;

@Injectable({
    providedIn: 'root',
})
export class RemoteLoggingService extends AsyncHandler {
    private _system_id = new BehaviorSubject<string>('');
    private _events = new Subject<ClientEvent>();

    private _event_history = this._events.pipe(shareReplay(1000));

    private _logging_bindings = this._system_id.pipe(
        filter((_) => !!_),
        switchMap((id) => combineLatest([of(id), this._bindTo(id, 'enabled')])),
        filter(([_, enabled]) => !!enabled),
        map(([id]) =>
            this.subscription(
                'post_events',
                this._event_history.subscribe((d) =>
                    getModule(id, 'Logger').execute('post_event', [d])
                )
            )
        )
    );

    public readonly history = this._event_history;

    constructor() {
        super();
        localStorage.setItem('PLACEOS.DEVICE_ID', DEVICE_ID);
        this._patchConsoleMethods();
        this._logging_bindings.subscribe();
    }

    public setSystem(id: string) {
        this._system_id.next(id);
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
        const blob = [...data[0]];
        blob[0] =
            typeof blob[0] === 'string' ? blob[0].replace(/\%c/g, '') : blob[0];
        this._events.next({
            id: `${event_type}-${randomInt(99999_99999)}`,
            device_id: DEVICE_ID,
            type: event_type,
            subtype: type,
            timestamp: Date.now(),
            raw: data,
            data: blob.filter(
                (_) => typeof _ !== 'string' || !_.startsWith('color:')
            ),
        });
    }

    /** List to binding */
    private _bindTo(id: string, name: string, mod: string = 'Logger') {
        const module = getModule(id, mod).binding(name);
        this.subscription(`bind:${name}`, module.bind());
        return module.listen();
    }
}
