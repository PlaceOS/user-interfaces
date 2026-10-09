import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrganisationService, randomInt } from '@placeos/common';
import {
    connectionState,
    getModule,
    PlaceModuleBinding,
    PlaceSystem,
    showSystem,
    status as websocketStatus,
} from '@placeos/ts-client';

import {
    AsyncHandler,
    CalendarEvent,
    currentUser,
    log,
    notifyError,
    notifySuccess,
    notifyWarn,
    SettingsService,
    Space,
    timePeriodsIntersect,
} from '@placeos/common';
import { EventFormService, SpacesService, updateEvent } from '@placeos/events';

import { openConfirmModal } from '@placeos/components';
import { SpacePipe } from '@placeos/events';
import {
    addMinutes,
    differenceInMinutes,
    getUnixTime,
    isAfter,
    isBefore,
    startOfMinute,
} from 'date-fns';
import { canExtend, EXTEND_MINUTES, freeMinutes } from './new-panel/helpers';
import { openBookingModal } from './overlays/booking-modal.component';
import { EmbeddedControlModalComponent } from './overlays/embedded-control-modal.component';

export type PanelTimelinePosition =
    | 'left'
    | 'right'
    | 'bottom'
    | 'floating-left'
    | 'floating-bottom';

/**
 * Opt-in panel features. Enable them with the `features` app setting.
 * All features are off by default.
 */
export type PanelFeature =
    | 'checkin_countdown'
    | 'connection_badge'
    | 'quick_book'
    | 'extend_meeting'
    | 'ending_warning'
    | 'presence_status'
    | 'presence_release'
    | 'timeline_booking'
    | 'room_services'
    | 'hide_version'
    | 'night_mode'
    | 'burn_in_protection';

export interface PanelSettings {
    /** Name of the room */
    room_name?: string;
    /** URL for the image to display when system is not bookable */
    offline_image?: string;
    /** Background color to display when system is not bookable */
    offline_color?: string;
    /** Custom URL for the QR code */
    custom_qr_url?: string;
    /** Custom color for the display QR code */
    custom_qr_color?: string;
    /**  */
    status?: 'free' | 'pending' | 'busy' | 'not-bookable';
    /** Whether booking has a pending state */
    pending?: boolean;
    /** Default title for Ad-hoc bookings */
    default_title?: string;
    /** Minimum duration for a booking */
    min_duration?: number;
    /** Maximum duration for a booking */
    max_duration?: number;
    /** Duration in minutes after the start with which to cancel pending bookings */
    pending_period?: number;
    /** Whether user is allowed to interact with the interface */
    disable_book_now?: boolean;
    /** Whether users are blocked from booking on the QR checkin view */
    disable_qr_booking?: boolean;
    /** URL to the control UI for this space */
    control_ui?: string;
    /** URI to the catering UI for this space */
    catering_ui?: string;
    /** Whether the QR code should be shown */
    show_qr_code?: boolean;
    /** Whether to hide the text under the QR code */
    hide_qr_text?: boolean;
    /** URL of the image to display for the space */
    room_image?: string;
    /** Whether sensors detect presence in the space */
    presence?: boolean;
    /** Capacity for the space */
    room_capacity?: number;
    /** Whether meeting details should not be displayed on the UI */
    hide_meeting_details?: boolean;
    /** Whether the meeting title should not be display on the UI */
    hide_meeting_title?: boolean;

    disable_book_now_host?: boolean;
    /** Whether meeting should be able to be ended early */
    disable_end_meeting?: boolean;
    /** Whether user is able to end their meeting early */
    enable_end_meeting_button?: boolean;
    /** Whether to show the floating schedule timeline */
    show_timeline?: boolean;
    /** Position of the schedule timeline */
    timeline_position?: PanelTimelinePosition;
}

export function currentBooking(
    list: CalendarEvent[],
    date: number = new Date().valueOf(),
) {
    return list.find((bkn) =>
        timePeriodsIntersect(
            date,
            date,
            bkn.date,
            bkn.date + bkn.duration * 1000,
        ),
    );
}

export type CalendarEventStatus =
    | 'available'
    | 'pending'
    | 'busy'
    | 'not-bookable';

declare global {
    interface Window {
        panel_module?: PlaceModuleBinding;
    }
}

@Injectable({
    providedIn: 'root',
})
export class PanelStateService extends AsyncHandler {
    private _spaces = inject(SpacesService);
    private _dialog = inject(MatDialog);
    private _events = inject(EventFormService);
    private _app_settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _router = inject(Router);

    private _space_pipe: SpacePipe = new SpacePipe(this._org);
    /** Mapping of current settings for the active system */
    private _settings = signal<PanelSettings>({});
    /** Active system */
    private _system = signal<string>('');
    private _clock = signal(Date.now());
    private _load_id = 0;
    /** Current time. Updates every 5 seconds */
    public readonly clock = this._clock.asReadonly();
    /** Whether the websocket to the PlaceOS backend is connected */
    public readonly connected = signal(true);
    /** Time the websocket disconnected. `0` while connected */
    public readonly offline_since = signal(0);
    private _bound_system = '';
    /** Mapping of current settings for the active system */
    public readonly settings = this._settings.asReadonly();
    /** List of current bookings for active system */
    public readonly space = signal<Space>(null);
    /** Active system */
    public get system() {
        return this._system();
    }
    public set system(value: string) {
        if (this._system() === value) return;
        this._system.set(value);
        this._spaces.loadSpace(value);
    }

    public setting<K extends keyof PanelSettings>(name: K): PanelSettings[K] {
        return this._settings()[name];
    }

    /** Value of the app setting `app.<key>` */
    public appSetting<T>(key: string): T | undefined {
        return this._app_settings.get(`app.${key}`);
    }

    /** Whether the given opt-in feature is enabled in the app settings */
    public hasFeature(feature: PanelFeature) {
        const features: PanelFeature[] =
            this._app_settings.get('app.features') || [];
        return features.includes(feature);
    }
    /** List of current bookings for active system */
    public readonly bookings = signal<CalendarEvent[]>([]);
    /** Currently active booking */
    public readonly _current = signal<CalendarEvent>(null);
    public readonly current = computed(() => {
        this._clock();
        const e = this._current();
        return !e || e.state === 'done' ? null : e;
    });
    /** Upcoming booking */
    public readonly _next = signal<CalendarEvent>(null);
    public readonly next = computed(() => {
        this._clock();
        const e = this._next();
        return !e || Date.now() > e.date ? null : e;
    });

    public readonly status = computed<string>(() => {
        const { status } = this._settings();
        const booking = this._current();
        return status || (booking ? 'busy' : 'free');
    });

    constructor() {
        super();
        this.interval('clock', () => this._clock.set(Date.now()), 5000);
        this.interval('pending_check', () => this._checkPending(), 15 * 1000);
        effect(() => {
            if (!this._org.initialised()) return;
            const id = this._system();
            untracked(() => this._bindSystem(id));
        });
        this._init();
    }

    private _bindSystem(id: string) {
        if (this._bound_system === id) return;
        this._bound_system = id;
        this.unsubWith('listen:');
        this.unsubWith('binding:');
        this.clearTimeout('load_system');
        this.clearTimeout('reload_system');
        this._load_id += 1;
        this._resetPanelState();
        if (!id) return;
        this._loadSystem(id);
        const settings: any[] = [
            'room_name',
            'custom_qr_url',
            'custom_qr_color',
            'disable_book_now',
            'disable_qr_booking',
            'hide_meeting_details',
            'hide_meeting_title',
            'disable_book_now_host',
            'disable_end_meeting',
            'enable_end_meeting_button',
            'show_timeline',
            'timeline_position',
            'min_duration',
            'max_duration',
            'pending',
            'status',
            'control_ui',
            'catering_ui',
            'pending_period',
            'pending_before',
            'room_image',
            'offline_image',
            'show_qr_code',
            'hide_qr_text',
            'presence',
            'room_capacity',
        ];
        settings.forEach((k) => this.bindTo(id, k));
        this._listenToModuleBinding(id, 'bookings', (value) =>
            this.bookings.set(
                value?.length
                    ? value.map((item) => new CalendarEvent(item))
                    : [],
            ),
        );
        this._listenToModuleBinding(id, 'current_booking', (value) =>
            this._current.set(value ? new CalendarEvent(value) : null),
        );
        this._listenToModuleBinding(id, 'next_booking', (value) =>
            this._next.set(value ? new CalendarEvent(value) : null),
        );
    }

    private _resetPanelState() {
        this._settings.set({});
        this.space.set(null);
        this.bookings.set([]);
        this._current.set(null);
        this._next.set(null);
    }

    private _checkPending() {
        const current = this._current();
        const status = this.status();
        if (
            !current ||
            status !== 'pending' ||
            current.body.includes('main_event_id') ||
            this.setting('disable_end_meeting') === true
        ) {
            return;
        }
        if (this._isUnattended(current)) {
            this.endCurrent('No presence detected.').catch((e) =>
                log('Panel', 'Error releasing empty meeting:', e, 'error'),
            );
            return;
        }
        const pending_period = this.setting('pending_period');
        if (!pending_period || pending_period < 1) return;
        const diff = differenceInMinutes(Date.now(), current.date);
        if (diff <= pending_period) return;
        this.endCurrent('Pending period expired.').catch((e) =>
            log('Panel', 'Error auto-ending pending meeting:', e, 'error'),
        );
    }

    /**
     * Whether a pending booking has had no presence detected for
     * `presence_release_after` minutes (default 5) since it started.
     * Needs the `presence_release` feature.
     */
    private _isUnattended(current: CalendarEvent) {
        if (!this.hasFeature('presence_release')) return false;
        if (this.setting('presence') !== false) return false;
        const after: number =
            this._app_settings.get('app.presence_release_after') ?? 5;
        return differenceInMinutes(Date.now(), current.date) >= after;
    }

    private async _init() {
        this.subscription(
            'websocket-status',
            websocketStatus().subscribe((online) => {
                this.connected.set(online);
                if (online) this.offline_since.set(0);
                else if (!this.offline_since())
                    this.offline_since.set(Date.now());
            }),
        );
        await this._org.waitUntilInitialised();
        if (this._app_settings.get('app.refresh_when_websocket_unstable')) {
            let count = 0;
            this.subscription(
                'stability-check',
                connectionState().subscribe(([_, time]) => {
                    if (time >= 30 * 1000) count = 0;
                    else count += 1;
                    if (count > 10) return location.reload();
                }),
            );
        }
    }

    private async _loadSystem(id: string) {
        const load_id = ++this._load_id;
        this.timeout(
            'load_system',
            async () => {
                log('Panel', `Loading system "${id}"...`);
                const system = await showSystem(id).catch(
                    ({ status, message }) => {
                        log(
                            'Panel',
                            'Error loading system details:',
                            [status, message],
                            'error',
                        );
                        if (status === 404)
                            this._router.navigate(['/bootstrap']);
                        else {
                            this.timeout(
                                'reload_system',
                                () => this._loadSystem(id),
                                2000 + randomInt(3000),
                            );
                        }
                        return new PlaceSystem();
                    },
                );
                if (load_id !== this._load_id) return;
                this.space.set(new Space(system as any));
            },
            1000,
        );
    }

    /**
     * Open modal to create new booking
     * @param date Start time of the new booking
     */
    public async newBooking(
        date: number = Date.now(),
        user = false,
        future = false,
        force_api = false,
    ) {
        // if (date <= Date.now() && !user) {
        //     return this.confirmBookNow();
        // }
        const current = this._current();
        if (
            current &&
            isAfter(date, current.date) &&
            isBefore(date, addMinutes(current.date, current.duration))
        )
            return notifyError('Booking already exists for this time');

        let max_duration = this._settings().max_duration;
        const next = this.next();
        if (next && date <= Date.now()) {
            const diff = Math.abs(differenceInMinutes(next.date, date));
            const max = this._settings().max_duration || 480;
            max_duration = diff < max ? diff : max;
        } else if (future) {
            const max = this._settings().max_duration || 480;
            const free = freeMinutes(this.bookings(), date, max);
            if (free < max) max_duration = free;
        }
        if (max_duration != null && max_duration < 15) {
            return notifyError(
                'Unable to make bookings as the time available before the next meeting is less than 15 minutes',
            );
        }

        const min_duration = this._settings().min_duration;
        const space = await this._space_pipe.transform(this.system);
        this.timeout(
            'reset_view',
            () => this._dialog.closeAll(),
            2 * 60 * 1000,
        );
        this._dialog.closeAll();
        const details = await openBookingModal(
            {
                ...this._settings(),
                user: user ? currentUser() : undefined,
                space,
                date: future
                    ? date
                    : startOfMinute(Date.now()).getTime() + 1000,
                future,
                max_duration,
                min_duration: force_api
                    ? Math.max(min_duration || 15, 30)
                    : min_duration,
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        const booking: Partial<CalendarEvent> = {
            ...details.metadata,
            host: details.metadata.organiser?.email,
            resources: [space],
            system: space,
        };
        try {
            await this.makeBooking(booking, force_api);
        } catch (e) {
            notifyError(`Error creating meeting. ${e}`);
            throw e;
        } finally {
            details.close();
            this.clearTimeout('reset_view');
        }
    }

    public async confirmBookNow() {
        this.timeout(
            'reset_view',
            () => this._dialog.closeAll(),
            2 * 60 * 1000,
        );
        const date = Date.now();
        const current = this._current();
        if (
            current &&
            isAfter(date, current.date) &&
            isBefore(date, addMinutes(current.date, current.duration))
        ) {
            return notifyError('Booking already exists for this time');
        }
        let max_duration = undefined;
        const next = this._next();
        if (next && date <= Date.now()) {
            const diff = Math.abs(differenceInMinutes(next.date, date));
            const max = this._settings().max_duration || 480;
            max_duration = diff < max ? diff : max;
        }
        if (max_duration != null && max_duration < 15) {
            return notifyError(
                'Unable to make bookings as the time available before the next meeting is less than 15 minutes',
            );
        }
        const ref = await openConfirmModal(
            {
                title: 'Book Meeting',
                content: `Do you wish to book a meeting in this room for ${Math.min(
                    max_duration || 180,
                    30,
                )} minutes?`,
                icon: { content: 'event' },
            },
            this._dialog,
        );
        if (ref.reason !== 'done') return;
        ref.loading('Creating Meeting...');
        try {
            const module = getModule(this.system, 'Bookings');
            if (!module) throw 'Unable to find module';
            await module.execute('book_now', [
                Math.min(max_duration || 180, 30) * 60,
                'Ad-hoc Panel Booking',
            ]);
            notifySuccess('Successfully created meeting.');
        } catch (e) {
            notifyError(`Error creating meeting. ${e}`);
        }
        ref.close();
        this.clearTimeout('reset_view');
    }

    /**
     * Book the room from now for `minutes` without the booking form.
     * The signed-in user is the host.
     */
    public async quickBook(minutes: number) {
        const max = this._settings().max_duration || 480;
        const free = freeMinutes(this.bookings(), Date.now(), max);
        if (this._current() || minutes > free) {
            return notifyError('Booking already exists for this time');
        }
        await this.makeBooking({
            date: Date.now(),
            duration: minutes,
            title: this._settings().default_title || 'Ad-Hoc Panel Booking',
            host: currentUser()?.email,
        });
    }

    /**
     * Extend the current booking with the staff API.
     * Fails when the extra time clashes with another booking.
     */
    public async extendMeeting(minutes = EXTEND_MINUTES) {
        const current = this._current();
        if (!current?.id) return;
        if (!canExtend(current, this.bookings(), minutes)) {
            return notifyError('Unable to extend. The room is booked after.');
        }
        try {
            await updateEvent(
                current.id,
                { ...current, event_end: current.event_end + minutes * 60 },
                { system_id: this.system },
            );
            notifySuccess(`Extended meeting by ${minutes} minutes.`);
        } catch (e) {
            notifyError(`Error extending meeting. ${e}`);
        }
    }

    /**
     * Create new booking with the given details
     * @param details
     */
    public async makeBooking(
        details: Partial<CalendarEvent>,
        force_api = false,
    ) {
        if (isAfter(details.date, addMinutes(Date.now(), 5)) || force_api) {
            // The shared form starts staff API queries. Driver bookings do
            // not need them, and their auth errors can redirect API key panels.
            this._events.newForm();
            // newForm() sets a default end time, which takes precedence over
            // duration when saving. Replace it so the event ends on time.
            this._events.model.update((m) => ({
                ...m,
                ...details,
                date_end: addMinutes(details.date, details.duration).valueOf(),
            }));
            try {
                await this._events.postForm(true);
            } finally {
                this._events.clearForm();
            }
        } else {
            const module = getModule(this.system, 'Bookings');
            if (!details || !module) return;
            const use_as_host = this._app_settings.get(
                'app.user_as_default_host',
            );
            await module
                .execute('book_now', [
                    details.duration * 60,
                    details.title,
                    details.host || (use_as_host ? currentUser().email : null),
                ])
                .catch((e) => notifyError(`Error creating meeting. ${e}`));
        }
    }

    /**
     * Open confirmation modal for starting the meeting
     */
    public async confirmStart() {
        this.timeout(
            'reset_view',
            () => this._dialog.closeAll(),
            2 * 60 * 1000,
        );
        const details = await openConfirmModal(
            {
                title: 'Do you wish to start your meeting?',
                content: `If you don't start your meeting it will be cancelled ${
                    this._settings().pending_period
                } minutes after the start time.`,
                icon: {
                    class: 'material-symbols-rounded',
                    content: 'play_arrow',
                },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        this.startMeeting();
        this.clearTimeout('reset_view');
    }

    /**
     * Execute the logic on the engine driver to start the current or upcoming meeting
     */
    public async startMeeting() {
        if (!this.system || this.setting('status') !== 'pending') {
            return notifyWarn(
                'Current or upcoming meeting is not in a pending state.',
            );
        }
        const meeting = this._current() || this._next();
        const mod = getModule(this.system, 'Bookings');
        if (!meeting || !mod) return;
        try {
            await mod.execute('start_meeting', [getUnixTime(meeting.date)]);
        } catch (e) {
            return notifyError(`Error starting meeting. ${e}`);
        }
        this.updateProperty('status', 'busy');
    }

    /**
     * Open confirmation modal for ending the meeting
     */
    public async confirmEnd() {
        this.timeout(
            'reset_view',
            () => this._dialog.closeAll(),
            2 * 60 * 1000,
        );
        const details = await openConfirmModal(
            {
                title: 'Are you sure want to end your meeting?',
                content:
                    'Ending your meeting early will free up this room for others to use',
                icon: {
                    class: 'material-symbols-rounded',
                    content: 'event_busy',
                },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        details.loading('Ending Meeting...');
        await this.endCurrent().catch((e) =>
            notifyError(`Error ending meeting. ${e?.message || e}`),
        );
        details.close();
        this.clearTimeout('reset_view');
    }

    /**
     * End the current meeting. Rejects when the driver call fails.
     * @param reason Reason for ending the meeting early
     */
    public async endCurrent(reason = 'user_input') {
        const current = this._current();
        const module = getModule(this.system, 'Bookings');
        if (!current || !module) return;
        await module.execute('end_meeting', [
            getUnixTime(current.date),
            true,
            reason,
        ]);
    }
    /** Open the room control UI in an embedded modal */
    public viewControl() {
        this._openEmbedded(this._settings().control_ui);
    }

    /** Open the catering UI in an embedded modal */
    public viewCatering() {
        this._openEmbedded(this._settings().catering_ui);
    }

    private _openEmbedded(control_url?: string) {
        if (!control_url) return;
        this._dialog.open(EmbeddedControlModalComponent, {
            data: { control_url },
        });
    }

    /**
     * Execute the logic on the engine driver to call waiting staff
     */
    public async checkin() {
        const module = getModule(this.system, 'Bookings');
        if (!module) return;
        const time = startOfMinute(Date.now()).valueOf();
        await module.execute('checkin', [time]).catch((e) => {
            notifyError(`Error checking in booking. ${e}`);
            throw e;
        });
        notifySuccess('Successfully checked in booking.');
    }

    /**
     * Open confirmation modal for calling waiter
     */
    public async confirmWaiter() {
        this.timeout(
            'reset_view',
            () => this._dialog.closeAll(),
            2 * 60 * 1000,
        );
        const details = await openConfirmModal(
            {
                title: 'Do you wish to call a waiter?',
                content: `Note that it can take up to 15 minutes for them to turn up.`,
                icon: {
                    class: 'material-symbols-rounded',
                    content: 'room_service',
                },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return;
        this.callWaiter();
        this.clearTimeout('reset_view');
    }

    /**
     * Execute the logic on the engine driver to call waiting staff
     */
    public async callWaiter() {
        const module = getModule(this.system, 'Bookings');
        if (module) {
            await module
                .execute('waiter_call', [Date.now()])
                .catch((e) => notifyError(`Error calling waiter. ${e}`));
        }
    }

    /** List to binding */
    private bindTo<K extends keyof PanelSettings>(
        id: string,
        name: K,
        mod = 'Bookings',
        on_change: (v: PanelSettings[K]) => void = (v) =>
            this.updateProperty(name, v),
    ) {
        const binding = getModule(id, mod).variable(name);
        this.subscription(
            `listen:${name}`,
            binding.bindThenSubscribe(on_change),
        );
    }

    /** Update properties of the system data */
    private updateProperty<K extends keyof PanelSettings>(
        name: K,
        value: PanelSettings[K],
    ) {
        const item = this._settings();
        if (item[name] === value) return;
        this._settings.set({ ...item, [name]: value });
    }

    private _listenToModuleBinding(
        id: string,
        name: string,
        update: (value: any) => void,
        mod_name = 'Bookings',
    ) {
        const mod = getModule(id, mod_name);
        if (window.debug) window.panel_module = mod;
        const binding = mod.variable(name);
        this.subscription(`binding:${mod_name}:${name}`, binding.bind());
        const listen = binding.listen();
        update(listen());
        this.subscription(
            `binding:${mod_name}:${name}:listen`,
            listen.subscribe(update),
        );
    }
}
