import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import {
    distinct,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

import { BaseClass, currentUser, HashMap } from '@placeos/common';
import { Calendar, CalendarService } from '@placeos/calendar';
import { SourceSelectModalComponent } from './ui/source-select-modal.component';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { endOfDay, getUnixTime } from 'date-fns';
import { SelectMeetingModalComponent } from './ui/select-meeting-modal.component';
import { HelpModalComponent } from './ui/help-modal.component';

export interface EnvironmentSource {
    name: string;
    states: string[];
    state: string;
}

export interface TabDetails {
    icon: string;
    name: string;
    inputs: string[];
    help: string;
    controls: string;
    type: string;
}

export interface RoomInput {
    id?: string;
    ref: string;
    name: string;
    type: string;
    mod: string;
    volume: number;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
    hidden?: boolean;
}

export interface RoomOutput {
    id?: string;
    ref: string;
    name: string;
    type: string;
    mod: string;
    mute: boolean;
    volume: number;
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
    selected_tab?: string;
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
    private _url = new BehaviorSubject<string>('');
    private _active_output = new BehaviorSubject<string>('');
    private _calendar = new BehaviorSubject<Calendar>(null);

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
    public readonly system_id = this._id.asObservable();
    public readonly calendar = this._calendar.asObservable();
    /** List of available light sources */
    public readonly lights = this._lights.asObservable();
    /** List of available blind sources */
    public readonly blinds = this._blinds.asObservable();
    public readonly screens = this._screens.asObservable();
    public readonly volume = this._volume.asObservable();
    public readonly mute = this._mute.asObservable();
    public readonly active_output = this._active_output.asObservable();
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
    public readonly help_items = this.system_id.pipe(
        switchMap((id) => {
            const mod = getModule(id, 'System');
            const binding = mod.binding('help');
            this.subscription('binding:help', binding.bind());
            return binding.listen();
        }),
        map((_) =>
            !_ ? null : Object.keys(_).map((key) => ({ id: key, ..._[key] }))
        ),
        shareReplay(1)
    );
    public readonly tabs: Observable<TabDetails[]> = this.system_id.pipe(
        switchMap((id) => {
            const mod = getModule(id, 'System');
            const binding = mod.binding('tabs');
            this.subscription('binding:tabs', binding.bind());
            return binding.listen();
        }),
        map((_) => _ || []),
        shareReplay(1)
    );

    public readonly calendars = this._cal.calendar_list;

    public readonly events = combineLatest([this._url, this._calendar]).pipe(
        switchMap(([url, cal]) => {
            if (!cal || !url) return of([] as CalendarEvent[]);
            return queryEvents({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(endOfDay(Date.now())),
                calendars: cal.id,
            });
        }),
        map((list) => {
            const url = this._url.getValue();
            return list.filter((_) => _.meeting_url.startsWith(url));
        }),
        shareReplay(1)
    );

    public get id() {
        return this._id.getValue();
    }

    constructor(private _dialog: MatDialog, private _cal: CalendarService) {
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
        return this._execute('power', [true]);
    }

    /** Power off the active system */
    public powerOff() {
        return this._execute('power', [false]);
    }

    /** Set the active calendar */
    public setCalendar(cal: Calendar) {
        this._calendar.next(cal);
    }

    /** Set the active calendar */
    public setOutput(id: string) {
        this._active_output.next(id);
    }

    /** Route input source to output */
    public setRoute(input: string, output: string) {
        this.setSelectedInput(input);
        return this._execute('route', [input, output]);
    }

    /** Set the route of the active output */
    public setOutputSource(input: string) {
        const output = this._active_output.getValue();
        const data = (this._output_data.getValue() || []).find(
            (_) => _.id === output
        );
        this.setSelectedInput(input);
        if (!output || data?.source === input) return;
        return this.setRoute(input, output);
    }

    public setSelectedInput(input: string) {
        return this.timeout(
            `selected`,
            () => this._execute('selected_input', [input]),
            10
        );
    }

    /** Update the econtrol meeting */
    public setEvent(event: CalendarEvent) {
        return this._execute(
            'econtrol',
            [
                currentUser().name,
                event.meeting_url,
                event.meeting_id,
                event.meeting_provider,
                event.event_start,
                event.event_end,
            ],
            'MeetingPush'
        );
    }

    public setMute(state: boolean = true, source: string = '') {
        const outputs = this._output_data.getValue();
        if (!source) {
            this._mute.next(state);
            source = outputs[0]?.id || '';
        }
        if (source) {
            const data = outputs.find((_) => _.id === source);
            if (data) {
                this.updateSourceData('output', data.id, {
                    ...data,
                    mute: state,
                });
            }
        }
        return this._execute('mute', source ? [state, source] : [state]);
    }

    public setVolume(value: number = 0, source: string = '') {
        const outputs = this._output_data.getValue();
        if (!source) {
            this._volume.next(value);
            source = outputs[0]?.id || '';
        }
        if (source) {
            const data = outputs.find((_) => _.id === source);
            if (data) {
                this.updateSourceData('output', data.id, {
                    ...data,
                    volume: value,
                });
            }
        }
        return this._execute('volume', source ? [value, source] : [value]);
    }

    /** Execute driver method */
    private _execute(
        name: string,
        params: any[] = [],
        mod_name: string = 'System'
    ) {
        const mod = getModule(this._id.getValue(), mod_name);
        if (!mod) return;
        return mod.execute(name, params);
    }

    /** Open switch source modal */
    public switchSource(output: string) {
        this._dialog.open(SourceSelectModalComponent, {
            data: { output },
        });
    }

    /** Open select meeting modal */
    public async selectMeeting(input?: string) {
        const cals = await this.calendars.pipe(take(1)).toPromise();
        if (cals?.length) this.setCalendar(cals[0]);
        this._dialog.open(SelectMeetingModalComponent, {
            data: { input },
        });
    }

    /** Open view help modal */
    public async viewHelp(id?: string) {
        this._dialog.open(HelpModalComponent, {
            data: {
                items: await this.help_items
                    .pipe(
                        filter((_) => !!_),
                        take(1)
                    )
                    .toPromise(),
                active_id: id,
            },
        });
    }

    private bindToState(id: string) {
        if (!id) return;
        this.bindTo(id, 'supported_meeting_url', 'MeetingPush', (u) => {
            this.updateProperty('meeting_url', u);
            this._url.next(u);
        });
        this.bindTo(id, 'name');
        this.bindTo(id, 'active');
        this.bindTo(id, 'connected');
        this.bindTo(id, 'recording');
        this.bindTo(id, 'has_zoom');
        this.bindTo(id, 'selected_tab');
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
        let list: any[] = [...list_observer.getValue()];
        const index = list.findIndex((item) => item.id === id);
        if (index >= 0) {
            list.splice(index, 1, { id, ...data });
        } else {
            list.push({ id, ...data });
        }
        if (type === 'output') {
            this._volume.next(list[0].volume || 0);
            this._mute.next(!!list[0].mute);
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
