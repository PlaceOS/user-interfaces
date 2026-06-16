import { Injectable, signal } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { AsyncHandler } from './async-handler.class';

@Injectable({
    providedIn: 'root',
})
export class KeepAliveService extends AsyncHandler {
    private _system_id = signal<string>('');
    private _delay = 3 * 60 * 1000;

    constructor() {
        super();
    }

    public setSystem(id: string) {
        this._system_id.set(id);
        if (id) this._bindTo(id, 'poll');
    }

    public setReloadDelay(delay: number) {
        this._delay = delay;
    }

    /** List to binding */
    private _bindTo(id: string, name: string, mod = 'SystemHealth') {
        const module = getModule(id, mod).variable(name);
        this.subscription(`bind:${name}`, module.bind());
        this.subscription(
            `listen:${name}`,
            module
                .listen()
                .subscribe(() =>
                    this.timeout('poll', () => location.reload(), this._delay),
                ),
        );
    }
}
