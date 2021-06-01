import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import { distinct, map, shareReplay } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { BaseClass, HashMap } from '@placeos/common';
import { SourceSelectModalComponent } from './ui/source-select-modal.component';

export interface EnvironmentSource {
    name: string;
    states: string[];
    state: string;
}

export interface RoomInput {
    id?: string;
    name: string;
    type: string;
    mod: string;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
    hidden?: boolean;
}

export interface RoomOutput {
    id?: string;
    name: string;
    type: string;
    mod: string;
    mute: boolean;
    locked: boolean;
    source: string;
    inputs: string[];
    following: string;
    hidden?: boolean;
}

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
    private _inputs = new BehaviorSubject<string[]>([]);
    private _outputs = new BehaviorSubject<string[]>([]);
    private _volume = new BehaviorSubject<number>(0);
    private _mute = new BehaviorSubject<boolean>(false);
    private _input_data = new BehaviorSubject<RoomInput[]>([]);
    private _output_data = new BehaviorSubject<RoomOutput[]>([]);
    private _lights = new BehaviorSubject<string[]>([]);
    private _blinds = new BehaviorSubject<string[]>([]);
    private _screens = new BehaviorSubject<string[]>([]);

    /** General data associated with the active system */
    public readonly system = this._system.asObservable();
    /** List of available input sources */
    public readonly input_list = this._input_data.pipe(
        map((_) => _.filter((_) => !_.hidden)),
        shareReplay(1)
    );
    /** List of available output sources */
    public readonly output_list = this._output_data.pipe(
        map((_) => _.filter((_) => !_.hidden)),
        shareReplay(1)
    );
    /** List of available light sources */
    public readonly lights = this._lights.asObservable();
    /** List of available blind sources */
    public readonly blinds = this._blinds.asObservable();
    public readonly screens = this._screens.asObservable();
    public readonly volume = this._volume.asObservable();
    public readonly mute = this._mute.asObservable();
    /** List of available capture output sources */
    public readonly capture_list = this._output_data.pipe(
        map((list) =>
            list?.filter(
                (_) => _.type === 'recording' || _.mod?.includes('Capture')
            )
        )
    );
    /** List of available microphone input sources */
    public readonly mic_list = this._input_data.pipe(
        map((list) =>
            list?.filter(
                (_) => _.type === 'mic' || _.mod?.includes('Microphone')
            )
        )
    );
    /** List of available camera input sources */
    public readonly camera_list = this._input_data.pipe(
        map((list) =>
            list?.filter((_) => _.type === 'cam' || _.mod?.includes('Camera'))
        )
    );

    public get id() {
        return this._id.getValue();
    }

    constructor(private _dialog: MatDialog) {
        super();
        this._id.pipe(distinct()).subscribe((id) => this.bindToState(id));
        this._inputs.subscribe((_) => this.bindSources('input', _ || []));
        this._outputs.subscribe((_) => this.bindSources('output', _ || []));
    }

    public setID(id: string) {
        this._id.next(id);
    }

    /** Power on the active system */
    public powerOn() {
        return this.execute('powerup');
    }

    /** Power off the active system */
    public powerOff() {
        return this.execute('shutdown');
    }

    /** Route input source to output */
    public setRoute(input: string, output: string) {
        return this.execute('route', [input, output]);
    }

    public setMute(state: boolean = true, source: string = '') {
        if (!source) {
            this._mute.next(state);
        }
        return this.execute('mute', source ? [state, source] : [state]);
    }

    public setVolume(value: number = 0, source: string = '') {
        if (!source) {
            this._volume.next(value);
        }
        return this.execute('volume', source ? [value, source] : [value]);
    }

    private execute(
        name: string,
        params: any[] = [],
        mod_name: string = 'System'
    ) {
        const mod = getModule(this._id.getValue(), mod_name);
        if (!mod) return;
        return mod.execute(name, params);
    }

    public switchSource(output: string) {
        this._dialog.open(SourceSelectModalComponent, {
            data: { output },
        });
    }

    private bindToState(id: string) {
        if (!id) return;
        this.bindTo(id, 'name');
        this.bindTo(id, 'active');
        this.bindTo(id, 'connected');
        this.bindTo(id, 'recording');
        this.bindTo(id, 'has_zoom');
        this.bindTo(id, 'inputs', undefined, (l) => this._inputs.next(l));
        this.bindTo(id, 'outputs', undefined, (l) => this._outputs.next(l));
        this.bindTo(id, 'lights', undefined, (l) => this._lights.next(l));
        this.bindTo(id, 'blinds', undefined, (l) => this._blinds.next(l));
        this.bindTo(id, 'screen', undefined, (l) => this._screens.next(l));
    }

    /** Bind to changes on input or output sources */
    private bindSources(type: 'input' | 'output', alias_list: string[]) {
        const id = this._id.getValue();
        if (!id) return;
        for (const alias of alias_list) {
            this.bindTo(id, `${type}/${alias}`, undefined, (d) =>
                this.updateSourceData(type, alias, d)
            );
        }
    }

    /** Update listed data for given source */
    private updateSourceData(
        type: 'input' | 'output',
        id: string,
        data: HashMap
    ) {
        const list_observer =
            type === 'input' ? this._input_data : this._output_data;
        const list: any[] = [...list_observer.getValue()];
        const index = list.findIndex((item) => item.id === id);
        if (index >= 0) {
            list.splice(index, 1, { id, ...data });
        } else {
            list.push({ id, ...data });
        }
        list_observer.next(list);
    }

    /** List to binding */
    private bindTo(
        id: string,
        name: string,
        mod: string = 'System',
        on_change: (v: any) => void = (v) => this.updateProperty(name, v)
    ) {
        const module = getModule(id, mod).binding(name);
        this.subscription(
            `listen:${name}`,
            module.listen().subscribe(on_change)
        );
        this.subscription(`bind:${name}`, module.bind());
    }

    /** Update properties of the system data */
    private updateProperty(name: string, value: any) {
        const item = { ...this._system.getValue() };
        item[name] = value;
        this._system.next(item);
    }
}
