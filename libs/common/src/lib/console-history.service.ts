import { Injectable, OnDestroy, signal, untracked } from '@angular/core';

import { listenToConsole } from './console-capture';
import { randomInt } from './general';

/** Console call that the debug console shows */
export interface ClientEvent {
    id: string;
    type: 'network' | 'console' | 'dom';
    /** Console method of the call */
    subtype: string;
    timestamp: number;
    /** Arguments of the call, without console colour styles */
    data: unknown[];
}

/** Most console calls that the history keeps */
const MAX_HISTORY = 20000;

/**
 * Local history of console calls for the debug console. The history stays
 * on the device. To send logs to a PlaceOS driver, see `RemoteDebugService`.
 *
 * Capture starts when the service is first injected.
 */
@Injectable({
    providedIn: 'root',
})
export class ConsoleHistoryService implements OnDestroy {
    private readonly _history = signal<ClientEvent[]>([]);
    // Logs can come from inside a computed or a template, where signal
    // writes throw. Record them outside the reactive context.
    private readonly _unlisten = listenToConsole((method, args) =>
        untracked(() => this._record(method, args)),
    );

    public readonly history = this._history.asReadonly();

    public ngOnDestroy() {
        this._unlisten();
    }

    private _record(method: string, args: unknown[]) {
        const data = [...args];
        if (typeof data[0] === 'string') {
            data[0] = data[0].replace(/%c/g, '');
        }
        const event: ClientEvent = {
            id: `console-${randomInt(99999_99999)}`,
            type: 'console',
            subtype: method,
            timestamp: Date.now(),
            data: data.filter(
                (_) => typeof _ !== 'string' || !_.startsWith('color:'),
            ),
        };
        this._history.update((history) =>
            [...history, event].slice(-MAX_HISTORY),
        );
    }
}
