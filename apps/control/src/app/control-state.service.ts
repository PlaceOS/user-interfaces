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
    tap,
} from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';

import { AsyncHandler, currentUser, HashMap } from '@placeos/common';
import { Calendar, CalendarService } from '@placeos/calendar';
import { SourceSelectModalComponent } from './ui/source-select-modal.component';
import { CalendarEvent, queryEvents } from '@placeos/events';
import { endOfDay, getUnixTime } from 'date-fns';
import { SelectMeetingModalComponent } from './ui/select-meeting-modal.component';
import { HelpModalComponent } from './ui/help-modal.component';
import { SpacesService } from '@placeos/spaces';

export interface EnvironmentSource {
    name: string;
    states: string[];
    state: string;
}

export interface RoomAccessory {
    name: string;
    module: string;
    controls: RoomAccessoryAction[];
}

export interface RoomAccessoryAction {
    name: string;
    icon: string;
    function_name: string;
    arguments: any[];
}
export interface LightScene {
    id: number;
    name: string;
    icon: string;
    opacity: number;
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
    index?: string;
    volume: number;
    mute: boolean;
    locked: boolean;
    routes: string[];
    outputs: string[];
    hidden?: boolean;
    presentable?: boolean;
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
    selected_input?: string;
    mute?: boolean;
    volume?: number;
}

@Injectable({
    providedIn: 'root',
})
export class ControlStateService extends AsyncHandler {
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
    private _ignore_changes: string[] = [];

    /** General data associated with the active system */
    public readonly system = this._system.asObservable();
    /** List of available input sources */
    public readonly input_list = this._input_data.pipe(
        map((l) => l.filter((_) => !_.hidden)),
        shareReplay(1)
    );
    public readonly presentables$ = this._input_data.pipe(
        map((l) => l.filter((_) => _.presentable !== false)),
        shareReplay(1)
    );
    /** List of available output sources */
    public readonly output_list = combineLatest([
        this._output_data,
        this._outputs,
    ]).pipe(
        map(([l, a]) =>
            l.filter((_) => !_.hidden && (!_.id || (a || []).includes(_.id)))
        ),
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
    public readonly selected_camera = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'selected_camera')),
        shareReplay(1)
    );
    public readonly microphones: Observable<string[]> = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'microphones')),
        shareReplay(1)
    );
    public readonly join_modes: Observable<
        HashMap<{ name: string; room_ids: string[] }>
    > = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'join_modes')),
        shareReplay(1)
    );
    public readonly joined_id: Observable<string> = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'joined')),
        shareReplay(1)
    );
    public readonly lighting_scenes: Observable<LightScene[]> =
        this.system_id.pipe(
            switchMap((id) =>
                this._listenToSystemBinding(id, 'lighting_scenes')
            ),
            shareReplay(1)
        );
    public readonly lighting_scene: Observable<string> = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'lighting_scene')),
        shareReplay(1)
    );
    public readonly room_accessories: Observable<RoomAccessory[]> =
        this.system_id.pipe(
            switchMap((id) =>
                this._listenToSystemBinding(id, 'room_accessories')
            ),
            shareReplay(1)
        );
    public readonly joined = combineLatest([
        this.join_modes,
        this.joined_id,
    ]).pipe(map(([modes, id]) => (modes ? modes[id] : null)));
    /** List of help items */
    public readonly help_items = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'help')),
        map((_) =>
            !_ ? null : Object.keys(_).map((key) => ({ id: key, ..._[key] }))
        ),
        shareReplay(1)
    );
    public readonly preview_outputs = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'preview_outputs')),
        map((_) => _?.length > 0),
        shareReplay(1)
    );
    public readonly tabs: Observable<TabDetails[]> = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'tabs')),
        map((_) => _ || []),
        shareReplay(1)
    );
    public readonly hide_join_button: Observable<boolean> = this.system_id.pipe(
        switchMap((id) => this._listenToSystemBinding(id, 'join_hide_button')),
        map((_) => !!_),
        shareReplay(1)
    );

    public readonly join_status: Observable<[boolean, boolean]> =
        this.system_id.pipe(
            switchMap((id) =>
                combineLatest([
                    this._listenToSystemBinding(id, 'join_master'),
                    this._listenToSystemBinding(id, 'join_lockout_secondary'),
                ])
            ),
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

    constructor(
        private _dialog: MatDialog,
        private _cal: CalendarService,
        private _spaces: SpacesService
    ) {
        super();
        this._id.pipe(distinct()).subscribe((id) => this.bindToState(id));
        this._inputs.subscribe((_) => this.bindSources('input', _ || []));
        this._outputs.subscribe((_) => this.bindSources('output', _ || []));
    }

    public setID(id: string) {
        if (id !== this._id.getValue()) {
            this._id.next(id);
            this._spaces.loadSpace(id);
        }
    }

    /** Power on the active system */
    public join(id: string) {
        return this._execute('join_mode', [id]);
    }

    /** Power on the active system */
    public powerOn() {
        return this._execute('power', [true]);
    }

    /** Power off the active system */
    public powerOff(unlink: boolean = false) {
        return this._execute('power', [false, unlink]);
    }

    /** Set the active calendar */
    public setCalendar(cal: Calendar) {
        this._calendar.next(cal);
    }

    /** Set the active calendar */
    public setOutput(id: string) {
        this._active_output.next(id);
        if (this._system.getValue()?.selected_input) {
            this.setOutputSource(this._system.getValue()?.selected_input);
            this._active_output.next('');
        }
    }

    /** Route input source to output */
    public setRoute(input: string, output: string, set_input = true) {
        if (set_input) this.setSelectedInput(input);
        return this._execute('route', [input, output]);
    }

    /** Clear the route on the output source */
    public unroute(output: string) {
        return this._execute('unroute', [output]);
    }

    /** Set the route of the active output */
    public async setOutputSource(input: string, clear = true) {
        const output = this._active_output.getValue();
        const data = (this._output_data.getValue() || []).find(
            (_) => _.id === output
        );
        this.setSelectedInput(input);
        if (!output || data?.source === input) return;
        await this.setRoute(input, output);
        if (clear) this._active_output.next('');
    }

    public setSelectedInput(input: string) {
        if (this._system.getValue().selected_input === input) return;
        return this.timeout(
            `selected`,
            () => this._execute('selected_input', [input]),
            50
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
        this._execute('volume', source ? [value, source] : [value]).then();
        this._ignore_changes.push('volume');
        this.timeout(
            `set-volume`,
            () =>
                (this._ignore_changes = this._ignore_changes.filter(
                    (_) => _ !== 'volume'
                )),
            500
        );
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
        this.bindTo(id, 'selected_input');
        this.bindTo(id, 'mute');
        this.bindTo(id, 'volume');
        this.bindTo(id, 'inputs', undefined, (l) => this._inputs.next(l));
        this.bindTo(id, 'available_outputs', undefined, (l) =>
            this._outputs.next(l)
        );
        this.bindTo(id, 'lights', undefined, (l) => this._lights.next(l));
        this.bindTo(id, 'blinds', undefined, (l) => this._blinds.next(l));
        this.bindTo(id, 'screen', undefined, (l) => this._screens.next(l));
        this.bindTo(id, 'qsc_dial_number', undefined, (v) =>
            this.updateProperty('phone', v)
        );
        this.bindTo(id, 'qsc_dial_bindings', undefined, (v) => {
            if (v) {
                this.bindTo(id, v.offhook_id, 'Mixer', (l) =>
                    this.updateProperty('offhook', l)
                );
                this.bindTo(id, v.ringing_id, 'Mixer', (l) =>
                    this.updateProperty('ringing', l)
                );
            }
            this.updateProperty('dial_bindings', v);
        });
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
        const unbind = module.bind();
        // setTimeout(() => this.subscription(`bind:${name}`, unbind), 300);
    }

    /** Update properties of the system data */
    private updateProperty(name: string, value: any) {
        if (this._ignore_changes.includes(name)) return;
        const item = { ...this._system.getValue() };
        item[name] = value;
        this._system.next(item);
    }

    private _listenToSystemBinding(id: string, name: string) {
        const mod = getModule(id, 'System');
        const binding = mod.binding(name);
        const unbind = binding.bind();
        this.subscription(`binding:${name}`, unbind);
        return binding.listen();
    }
}
