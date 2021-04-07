import { Injectable } from '@angular/core';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { BaseClass, HashMap } from '@placeos/common';
import { MatDialog } from '@angular/material/dialog';
import { SourceSelectModalComponent } from './ui/source-select-modal.component';
import { map } from 'rxjs/operators';

export interface EnvironmentSource {
    name: string;
    states: string[];
    state: string;
}

export interface RoomInput {
    id?: string;
    name: string;
    type: string;
    module: string;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
}

export interface RoomOutput {
    id?: string;
    name: string;
    type: string;
    module: string;
    mute: boolean;
    locked: boolean;
    source: string;
    inputs: string[];
    following: string;
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
    private _input_data = new BehaviorSubject<RoomInput[]>([]);
    private _output_data = new BehaviorSubject<RoomOutput[]>([]);
    private _lights = new BehaviorSubject<string[]>([]);
    private _blinds = new BehaviorSubject<string[]>([]);

    /** General data associated with the active system */
    public readonly system = this._system.asObservable();
    /** List of available input sources */
    public readonly input_list = this._input_data.asObservable();
    /** List of available output sources */
    public readonly output_list = this._output_data.asObservable();
    /** List of available light sources */
    public readonly lights = this._lights.asObservable();
    /** List of available light sources */
    public readonly blinds = this._blinds.asObservable();
    public readonly volume = this._volume.asObservable();
    /** List of available microphone input sources */
    public readonly mic_list = this._input_data.pipe(
        map((list) =>
            list?.filter(
                (_) =>
                    _.type === 'Microphone' || _.module?.includes('Microphone')
            )
        )
    );
    /** List of available camera input sources */
    public readonly camera_list = this._input_data.pipe(
        map((list) =>
            list?.filter(
                (_) =>
                    _.type === 'Camera' || _.module?.includes('Camera')
            )
        )
    );

    public get id() {
        return this._id.getValue();
    }

    constructor(private _dialog: MatDialog) {
        super();
        this._id.subscribe((id) => this.bindToState(id));
        this._inputs.subscribe((_) => this.bindSources('input', _ || []));
        this._outputs.subscribe((_) => this.bindSources('output', _ || []));
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
        return mod.execute('shutdown');
    }

    /** Route input source to output */
    public setRoute(input: string, output: string) {
        const mod = getModule(this._id.getValue(), 'System');
        if (!mod) return;
        return mod.execute('route', [input, output]);
    }

    public setMute(source: string = '', state: boolean = true) {
        const mod = getModule(this._id.getValue(), 'System');
        if (!mod) return;
        return mod.execute('mute', [source, state]);
    }

    public setVolume(source: string = '', value: number = 0) {
        const mod = getModule(this._id.getValue(), 'System');
        if (!mod) return;
        return mod.execute('volume', [source, value]);
    }

    public switchSource(output: string) {
        this._dialog.open(SourceSelectModalComponent, {
            data: { output },
        });
    }

    private bindToState(id: string) {
        if (!id) return;
        this.bindTo(id, 'name');
        this.bindTo(id, 'power');
        this.bindTo(id, 'connected');
        this.bindTo(id, 'recording');
        this.bindTo(id, 'inputs', undefined, (l) => this._inputs.next(l));
        this.bindTo(id, 'outputs', undefined, (l) => this._outputs.next(l));
        this.bindTo(id, 'lights', undefined, (l) => this._lights.next(l));
        this.bindTo(id, 'blinds', undefined, (l) => this._blinds.next(l));
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
