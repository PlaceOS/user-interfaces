import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    Injector,
    resource,
    signal,
    Signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule, PlaceSystem, showSystem } from '@placeos/ts-client';

import { Router } from '@angular/router';
import {
    AsyncHandler,
    Calendar,
    CalendarEvent,
    currentUser,
    firstValueWhere,
    HashMap,
    log,
    Space,
} from '@placeos/common';
import { CalendarService, queryEvents, SpacesService } from '@placeos/events';
import { endOfDay, getUnixTime } from 'date-fns';
import { HelpModalComponent } from './ui/help-modal.component';
import { SelectMeetingModalComponent } from './ui/select-meeting-modal.component';
import { SourceSelectModalComponent } from './ui/source-select-modal.component';

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
    id?: string;
    icon: string;
    name: string;
    inputs: string[];
    help: string;
    controls: string;
    type: string;
    presentation_source?: string;
    mod?: string;
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
    icon?: string;
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
    hide_on_join?: boolean;
}

export interface SystemState {
    name?: string;
    power?: boolean;
    connected?: boolean;
    selected_tab?: string;
    selected_input?: string;
    mute?: boolean;
    volume?: number;
    voice_control?: boolean;
    active?: boolean;
    recording?: boolean;
    has_zoom?: boolean;
    meeting_url?: string;
    phone?: any;
    offhook?: any;
    ringing?: any;
    dial_bindings?: any;
}

@Injectable({
    providedIn: 'root',
})
export class ControlStateService extends AsyncHandler {
    private _dialog = inject(MatDialog);
    private _cal = inject(CalendarService);
    private _spaces = inject(SpacesService);
    private _router = inject(Router);
    private _injector = inject(Injector);

    private readonly _id = signal<string>('');
    private readonly _system = signal<SystemState>({});
    private readonly _inputs = signal<string[]>([]);
    private readonly _available_inputs = signal<string[]>([]);
    private readonly _outputs = signal<string[]>([]);
    private readonly _volume = signal<number>(0);
    private readonly _mute = signal<boolean>(false);
    private readonly _input_data = signal<RoomInput[]>([]);
    private readonly _output_data = signal<RoomOutput[]>([]);
    private readonly _lights = signal<string[]>([]);
    private readonly _blinds = signal<string[]>([]);
    private readonly _screens = signal<string[]>([]);
    private readonly _url = signal<string>('');
    private readonly _active_output = signal<string>('');
    private readonly _calendar = signal<Calendar>(null);
    private _ignore_changes: string[] = [];

    /** ID of the active system */
    public readonly system_id = this._id.asReadonly();
    /** General data associated with the active system */
    public readonly system = this._system.asReadonly();
    public readonly calendar = this._calendar.asReadonly();
    /** List of available light sources */
    public readonly lights = this._lights.asReadonly();
    /** List of available blind sources */
    public readonly blinds = this._blinds.asReadonly();
    public readonly screens = this._screens.asReadonly();
    public readonly volume = this._volume.asReadonly();
    public readonly mute = this._mute.asReadonly();
    public readonly active_output = this._active_output.asReadonly();

    private readonly _debounced_id = debounced(this._id, 1000, {
        injector: this._injector,
    });
    /** Active system details loaded from the API */
    private readonly _space = resource({
        params: () => this._debounced_id.value(),
        loader: async ({ params: id }) => {
            if (!id) return new Space(new PlaceSystem() as any);
            log('Panel', `Loading system "${id}"...`);
            try {
                const system = await showSystem(id);
                return new Space(system as any);
            } catch (error: any) {
                const { status, message } = error || {};
                log(
                    'Control',
                    'Error loading system details:',
                    [status, message],
                    'error',
                );
                if (status === 404) this._router.navigate(['/bootstrap']);
                return new Space(new PlaceSystem() as any);
            }
        },
    });
    public readonly space = computed(() => this._space.value());

    /** List of available input sources */
    public readonly input_list = computed(() =>
        this._input_data().filter((_) => !_.hidden),
    );
    public readonly available_inputs = computed(() => {
        const ids = this._available_inputs();
        return this.input_list().filter((_) => ids.includes(_.id));
    });
    public readonly presentables = computed(() =>
        this._input_data().filter((_) => _.presentable !== false),
    );
    /** List of available capture output sources */
    public readonly capture_list = computed(() =>
        this._output_data().filter(
            (_) => _.type === 'recording' || _.mod?.includes('Capture'),
        ),
    );
    /** List of available microphone input sources */
    public readonly mic_list = computed(() =>
        this._input_data().filter(
            (_) => _.type === 'mic' || _.mod?.includes('Microphone'),
        ),
    );
    /** List of available camera input sources */
    public readonly camera_list = computed(() =>
        this._input_data().filter(
            (_) => _.type === 'cam' || _.mod?.includes('Camera'),
        ),
    );
    public readonly available_camera_list = this._systemBinding<string[]>(
        'available_cameras',
        'System',
        [],
    );
    public readonly available_cameras = computed(() => {
        const camera_list = this.camera_list();
        const available_cameras = this.available_camera_list();
        if (!available_cameras?.length) return camera_list;
        return camera_list.filter((camera) =>
            available_cameras.includes(camera.id),
        );
    });
    public readonly selected_camera =
        this._systemBinding<string>('selected_camera');
    public readonly microphones = this._systemBinding<any[]>(
        'microphones',
        'System',
        [],
    );
    public readonly join_modes =
        this._systemBinding<HashMap<{ name: string; room_ids: string[] }>>(
            'join_modes',
        );
    public readonly joined_id = this._systemBinding<string>('joined');
    public readonly lighting_scenes = this._systemBinding<LightScene[]>(
        'lighting_scenes',
        'System',
        [],
    );
    public readonly lighting_scene =
        this._systemBinding<number>('lighting_scene');
    public readonly lighting_levels =
        this._systemBinding<
            { name: string; area: any; binding: string; value?: number }[]
        >('lighting_levels');
    public readonly room_accessories = this._systemBinding<RoomAccessory[]>(
        'room_accessories',
        'System',
        [],
    );
    public readonly joined = computed(() => {
        const modes = this.join_modes();
        const id = this.joined_id();
        return modes ? modes[id] : null;
    });
    /** List of available output sources */
    public readonly output_list = computed(() => {
        const list = this._output_data();
        const available = this._outputs();
        const joined = this.joined();
        return list.filter(
            (_) =>
                !_.hidden &&
                (!_.hide_on_join || !joined?.room_ids?.length) &&
                (!_.id || (available || []).includes(_.id)),
        );
    });
    private readonly _help = this._systemBinding<HashMap>('help');
    /** List of help items */
    public readonly help_items = computed(() => {
        const help = this._help();
        return !help
            ? null
            : Object.keys(help).map((key) => ({ id: key, ...help[key] }));
    });
    private readonly _preview_outputs =
        this._systemBinding<unknown[]>('preview_outputs');
    public readonly preview_outputs = computed(
        () => this._preview_outputs()?.length > 0,
    );
    public readonly tabs = this._systemBinding<TabDetails[]>(
        'tabs',
        'System',
        [],
    );
    private readonly _hide_join_button =
        this._systemBinding('join_hide_button');
    public readonly hide_join_button = computed(
        () => !!this._hide_join_button(),
    );
    private readonly _hide_present_all =
        this._systemBinding('hide_present_all');
    public readonly hide_present_all = computed(
        () => !!this._hide_present_all(),
    );
    public readonly has_master_audio =
        this._systemBinding<boolean>('has_master_audio');

    private readonly _join_master = this._systemBinding<boolean>('join_master');
    private readonly _join_lockout = this._systemBinding<boolean>(
        'join_lockout_secondary',
    );
    public readonly join_status = computed<[boolean, boolean]>(() => [
        this._join_master(),
        this._join_lockout(),
    ]);

    public readonly calendars = this._cal.calendar_list;

    private readonly _events = resource({
        params: () => ({ url: this._url(), calendar: this._calendar() }),
        loader: async ({ params: { url, calendar } }) => {
            if (!calendar || !url) return [] as CalendarEvent[];
            const list = await queryEvents({
                period_start: getUnixTime(Date.now()),
                period_end: getUnixTime(endOfDay(Date.now())),
                calendars: calendar.id,
            });
            return list.filter((_) => _.meeting_url.startsWith(url));
        },
    });
    public readonly events = computed(() => this._events.value() ?? []);

    public get id() {
        return this._id();
    }

    constructor() {
        super();
        // Only the source signals (`_id`/`_inputs`/`_outputs`) should trigger
        // rebinding. The bodies set up ts-client bindings whose callbacks fire
        // synchronously and read+write `_input_data`/`_output_data`/`_system`;
        // running them untracked stops those reads becoming dependencies (which
        // would otherwise re-run the effect on every write — an infinite loop).
        effect(() => {
            const id = this._id();
            untracked(() => this.bindToState(id));
        });
        effect(() => {
            const inputs = this._inputs() || [];
            untracked(() => this.bindSources('input', inputs));
        });
        effect(() => {
            const outputs = this._outputs() || [];
            untracked(() => this.bindSources('output', outputs));
        });
    }

    public setID(id: string) {
        if (id !== this._id()) {
            this._id.set(id);
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
    public powerOff(unlink = false) {
        return this._execute('power', [false, unlink]);
    }

    /** Set the active calendar */
    public setCalendar(cal: Calendar) {
        this._calendar.set(cal);
    }

    /** Set the active calendar */
    public setOutput(id: string) {
        this._active_output.set(id);
        if (this._system()?.selected_input) {
            this.setOutputSource(this._system()?.selected_input);
            this._active_output.set('');
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

    public routeToAll(input = '') {
        if (!input) input = this._system().selected_input;
        return this._execute('route_all', [input]);
    }

    /** Set the route of the active output */
    public async setOutputSource(input: string, clear = true) {
        const output = this._active_output();
        const data = (this._output_data() || []).find((_) => _.id === output);
        this.setSelectedInput(input);
        if (!output || data?.source === input) return;
        await this.setRoute(input, output);
        if (clear) this._active_output.set('');
    }

    public setSelectedInput(input: string) {
        if (this._system().selected_input === input) return;
        console.warn('Select:', input);
        return this.timeout(
            `selected`,
            () => this._execute('selected_input', [input]),
            50,
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
            'MeetingPush',
        );
    }

    public setMute(state = true, source = '') {
        const outputs = this._output_data();
        if (!source) {
            this._mute.set(state);
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

    public setVolume(value = 0, source = '') {
        this.timeout(
            `set:volume:${source}`,
            () => {
                value = Math.floor(value);
                const outputs = this._output_data();
                if (!source) {
                    this._volume.set(value);
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
                this._execute(
                    'volume',
                    source ? [value, source] : [value],
                ).then();
                this._ignore_changes.push('volume');
                this.timeout(
                    `set-volume`,
                    () =>
                        (this._ignore_changes = this._ignore_changes.filter(
                            (_) => _ !== 'volume',
                        )),
                    500,
                );
            },
            100,
        );
    }

    /** Execute driver method */
    private _execute(name: string, params: any[] = [], mod_name = 'System') {
        const mod = getModule(this._id(), mod_name);
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
        const cals = this.calendars();
        if (cals?.length) this.setCalendar(cals[0]);
        this._dialog.open(SelectMeetingModalComponent, {
            data: { input },
        });
    }

    /** Open view help modal */
    public async viewHelp(id?: string) {
        this._dialog.open(HelpModalComponent, {
            data: {
                items: await firstValueWhere(
                    this.help_items,
                    (_) => !!_,
                    this._injector,
                ),
                active_id: id,
            },
        });
    }

    private bindToState(id: string) {
        if (!id) return;
        this.bindTo(id, 'supported_meeting_url', 'MeetingPush', (u) => {
            this.updateProperty('meeting_url', u);
            this._url.set(u);
        });
        this.bindTo(id, 'name');
        this.bindTo(id, 'voice_control');
        this.bindTo(id, 'active');
        this.bindTo(id, 'connected');
        this.bindTo(id, 'recording');
        this.bindTo(id, 'has_zoom');
        this.bindTo(id, 'selected_tab');
        this.bindTo(id, 'selected_input');
        this.bindTo(id, 'mute');
        this.bindTo(id, 'volume');
        this.bindTo(id, 'inputs', undefined, (l) => this._inputs.set(l));
        this.bindTo(id, 'available_inputs', undefined, (l) =>
            this._available_inputs.set(l || []),
        );
        this.bindTo(id, 'available_outputs', undefined, (l) =>
            this._outputs.set(l),
        );
        this.bindTo(id, 'lights', undefined, (l) => this._lights.set(l));
        this.bindTo(id, 'blinds', undefined, (l) => this._blinds.set(l));
        this.bindTo(id, 'screen', undefined, (l) => this._screens.set(l));
        this.bindTo(id, 'qsc_dial_number', undefined, (v) =>
            this.updateProperty('phone', v),
        );
        this.bindTo(id, 'qsc_dial_bindings', undefined, (v) => {
            if (v) {
                this.bindTo(id, v.offhook_id, 'Mixer', (l) =>
                    this.updateProperty('offhook', l),
                );
                this.bindTo(id, v.ringing_id, 'Mixer', (l) =>
                    this.updateProperty('ringing', l),
                );
            }
            this.updateProperty('dial_bindings', v);
        });
    }

    /** Bind to changes on input or output sources */
    private bindSources(type: 'input' | 'output', alias_list: string[]) {
        const id = this._id();
        if (!id) return;

        if (type === 'input') this._input_data.set([]);
        else this._output_data.set([]);

        for (const alias of alias_list) {
            this.bindTo(id, `${type}/${alias}`, undefined, (d) =>
                this.updateSourceData(type, alias, d),
            );
        }
    }

    /** Update listed data for given source */
    private updateSourceData(
        type: 'input' | 'output',
        id: string,
        data: HashMap,
    ) {
        const list_signal =
            type === 'input' ? this._input_data : this._output_data;
        let list: any[] = [...list_signal()];
        const index = list.findIndex((item) => item.id === id);
        if (index >= 0) {
            list.splice(index, 1, { id, ...data });
        } else {
            list.push({ id, ...data });
        }
        if (type === 'output') {
            this._volume.set(list[0].volume || 0);
            this._mute.set(!!list[0].mute);
        }
        list_signal.set(list);
    }

    /** List to binding */
    private bindTo(
        id: string,
        name: string,
        mod = 'System',
        on_change: (v: any) => void = (v) => this.updateProperty(name, v),
    ) {
        const module = getModule(id, mod).variable(name);
        this.subscription(
            `listen:${name}`,
            module.bindThenSubscribe(on_change),
        );
    }

    /** Update properties of the system data */
    private updateProperty(name: string, value: any) {
        if (this._ignore_changes.includes(name)) return;
        this._system.update((item) => ({ ...item, [name]: value }));
    }

    /**
     * Create an Angular signal that mirrors a status variable binding on the
     * active system, rebinding whenever the active system changes.
     */
    private _systemBinding<T>(
        name: string,
        mod = 'System',
        initial: T = undefined as T,
    ): Signal<T> {
        const value = signal<T>(initial);
        effect((onCleanup) => {
            const id = this._id();
            if (!id) {
                value.set(initial);
                return;
            }
            const binding = getModule(id, mod).variable(name);
            const unbind = binding.bind();
            const listener = binding.listen();
            const update = () => value.set((listener() ?? initial) as T);
            update();
            const unsubscribe = listener.subscribe(() => update());
            onCleanup(() => {
                unsubscribe();
                unbind();
            });
        });
        return value.asReadonly();
    }
}
