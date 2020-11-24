import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { BaseClass } from '@user-interfaces/common';

export interface SystemState {
    name?: string;
    power?: boolean;
    connected?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class ControlStateService extends BaseClass {
    private _id = new BehaviorSubject<string>('');
    private _system = new BehaviorSubject<SystemState>({});

    public readonly system = this._system.asObservable();

    public get id() {
        return this._id.getValue();
    }

    constructor() {
        super();
        this._id.subscribe((id) => this.bindToState(id));
    }

    public setID(id: string) {
        this._id.next(id);
    }

    /** Power on the active system */
    public powerOn() {
        const mod = getModule(this._id.getValue(), 'System');
        if (!mod) return;
        return mod.execute('power_on');
    }

    /** Power off the active system */
    public powerOff() {
        const mod = getModule(this._id.getValue(), 'System');
        if (!mod) return;
        return mod.execute('power_off');
    }

    private bindToState(id: string) {
        if (!id) return;
        let module = getModule(id, 'System').binding('name');
        this.subscription(
            'name',
            module
                .listen()
                .subscribe((name) =>
                    this._system.next({ ...this._system.getValue(), name })
                )
        );
        this.subscription('bind:name', module.bind());
        module = getModule(id, 'System').binding('power');
        this.subscription(
            'power',
            module
                .listen()
                .subscribe((power) =>
                    this._system.next({ ...this._system.getValue(), power })
                )
        );
        this.subscription('bind:power', module.bind());
        module = getModule(id, 'System').binding('connected');
        this.subscription(
            'connected',
            module
                .listen()
                .subscribe((connected) =>
                    this._system.next({ ...this._system.getValue(), connected })
                )
        );
        this.subscription('bind:connected', module.bind());
    }
}
