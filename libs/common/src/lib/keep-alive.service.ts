import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { filter, switchMap, tap } from 'rxjs/operators';
import { AsyncHandler } from './async-handler.class';

@Injectable({
    providedIn: 'root',
})
export class KeepAliveService extends AsyncHandler {
    private _system_id = new BehaviorSubject<string>('');
    private _delay = 3 * 60 * 1000;

    private _status = this._system_id.pipe(
        filter((_) => !!_),
        switchMap((id) => combineLatest([of(id), this._bindTo(id, 'poll')])),
        tap(() => this.timeout('poll', () => location.reload(), this._delay))
    );

    constructor() {
        super();
        this.subscription('status', this._status.subscribe());
    }

    public setSystem(id: string) {
        this._system_id.next(id);
    }

    public setReloadDelay(delay: number) {
        this._delay = delay;
    }

    /** List to binding */
    private _bindTo(id: string, name: string, mod: string = 'SystemHealth') {
        const module = getModule(id, mod).binding(name);
        this.subscription(`bind:${name}`, module.bind());
        return module.listen();
    }
}
