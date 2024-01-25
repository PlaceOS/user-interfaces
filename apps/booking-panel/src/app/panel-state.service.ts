import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    connectionState,
    getModule,
    PlaceModuleBinding,
    PlaceSystem,
    showSystem,
} from '@placeos/ts-client';
import { Router } from '@angular/router';
import { OrganisationService } from '@placeos/organisation';
import { BehaviorSubject, combineLatest, interval, Observable, of } from 'rxjs';
import {
    catchError,
    filter,
    first,
    map,
    shareReplay,
    startWith,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import { CalendarEvent, EventFormService } from '@placeos/events';
import { Space, SpacesService } from '@placeos/spaces';
import {
    AsyncHandler,
    currentUser,
    notifyError,
    notifySuccess,
    notifyWarn,
    openConfirmModal,
    SettingsService,
    timePeriodsIntersect,
} from '@placeos/common';

import { openBookingModal } from './overlays/booking-modal.component';
import { EmbeddedControlModalComponent } from './overlays/embedded-control-modal.component';
import {
    addMinutes,
    differenceInMinutes,
    getUnixTime,
    isAfter,
    isBefore,
    startOfMinute,
} from 'date-fns';
import { SpacePipe } from 'libs/spaces/src/lib/space.pipe';

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
    /** Duration in seconds after the start with which to cancel pending bookings */
    pending_period?: number;
    /** Whether user is allowed to interact with the interface */
    disable_book_now?: boolean;
    /** URL to the control UI for this space */
    control_ui?: string;
    /** URI to the catering UI for this space */
    catering_ui?: string;
    /** Whether the QR code should be shown */
    show_qr_code?: boolean;
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
}

export function currentBooking(
    list: CalendarEvent[],
    date: number = new Date().valueOf()
) {
    return list.find((bkn) =>
        timePeriodsIntersect(
            date,
            date,
            bkn.date,
            bkn.date + bkn.duration * 1000
        )
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
    private _space_pipe: SpacePipe = new SpacePipe(this._org);
    /** Polling observable */
    private _poll = interval(1000);
    /** Mapping of current settings for the active system */
    private _settings = new BehaviorSubject<PanelSettings>({});
    /** Active system */
    private _system = new BehaviorSubject<string>('');
    /** Mapping of current settings for the active system */
    public readonly settings = this._settings.asObservable();
    /** List of current bookings for active system */
    public readonly space = this._system.pipe(
        switchMap((id) =>
            showSystem(id).pipe(
                catchError(({ status }) => {
                    status === 404 ? this._router.navigate(['/bootstrap']) : '';
                    return of(new PlaceSystem());
                })
            )
        ),
        map((_) => new Space(_ as any)),
        shareReplay(1)
    );
    /** Active system */
    public get system() {
        return this._system.getValue();
    }
    public set system(value: string) {
        this._system.next(value);
        this._spaces.loadSpace(value);
    }

    public setting<K extends keyof PanelSettings>(name: K): PanelSettings[K] {
        return this._settings.getValue()[name];
    }
    /** List of current bookings for active system */
    public readonly bookings: Observable<CalendarEvent[]> = this._system.pipe(
        filter((_) => !!_),
        switchMap((id) => this._listenToModuleBinding(id, 'bookings')),
        map((_) => (_?.length ? _.map((_) => new CalendarEvent(_)) : [])),
        shareReplay(1)
    );
    /** Currently active booking */
    public readonly _current: Observable<CalendarEvent> = this._system.pipe(
        filter((_) => !!_),
        switchMap((id) => this._listenToModuleBinding(id, 'current_booking')),
        map((_) => (_ ? new CalendarEvent(_) : null)),
        shareReplay(1)
    );
    public readonly current = combineLatest([
        this._current,
        interval(3 * 60 * 1000).pipe(startWith(0)),
    ]).pipe(map(([e]) => (!e || e.state === 'done' ? null : e)));
    /** Upcoming booking */
    public readonly _next: Observable<CalendarEvent> = this._system.pipe(
        filter((_) => !!_),
        switchMap((id) => this._listenToModuleBinding(id, 'next_booking')),
        map((_) => (_ ? new CalendarEvent(_) : null)),
        shareReplay(1)
    );
    public readonly next = combineLatest([
        this._next,
        interval(3 * 60 * 1000).pipe(startWith(0)),
    ]).pipe(map(([e]) => (!e || Date.now() > e.date ? null : e)));

    public readonly status: Observable<string> = combineLatest([
        this._settings,
        this._current,
    ]).pipe(
        map(([{ status }, booking]) => status || (booking ? 'busy' : 'free')),
        shareReplay(1)
    );
    public readonly pending_check = combineLatest([
        this._current,
        this.status,
        interval(15 * 1000),
    ]).pipe(
        tap(([current, status]) => {
            if (
                !current ||
                status !== 'pending' ||
                current.body.includes('main_event_id') ||
                this.setting('disable_end_meeting') === true
            ) {
                return;
            }
            const pending_period = this.setting('pending_period');
            if (!pending_period || pending_period < 1) return;
            const diff = differenceInMinutes(Date.now(), current.date);
            if (diff <= pending_period) return;
            this.endCurrent('Pending period expired.');
        })
    );

    constructor(
        private _spaces: SpacesService,
        private _dialog: MatDialog,
        private _events: EventFormService,
        private _app_settings: SettingsService,
        private _org: OrganisationService,
        private _router: Router
    ) {
        super();
        this._init();
    }

    private async _init() {
        await this._org.initialised.pipe(first((_) => !!_)).toPromise();
        this._system.pipe(filter((_) => !!_)).subscribe((id) => {
            const settings: any[] = [
                'room_name',
                'custom_qr_url',
                'custom_qr_color',
                'disable_book_now',
                'hide_meeting_details',
                'hide_meeting_title',
                'disable_book_now_host',
                'disable_end_meeting',
                'enable_end_meeting_button',
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
                'presence',
                'room_capacity',
            ];
            settings.forEach((k) => this.bindTo(id, k));
        });
        this.subscription('pending_check', this.pending_check.subscribe());
        if (this._app_settings.get('app.refresh_when_websocket_unstable')) {
            let count = 0;
            this.subscription(
                'stability-check',
                connectionState().subscribe(([_, time]) => {
                    if (time >= 30 * 1000) count = 0;
                    else count += 1;
                    if (count > 10) return location.reload();
                })
            );
        }
    }

    /**
     * Open modal to create new booking
     * @param date Start time of the new booking
     */
    public async newBooking(
        date: number = Date.now(),
        user: boolean = false,
        future: boolean = false,
        force_api: boolean = false
    ) {
        // if (date <= Date.now() && !user) {
        //     return this.confirmBookNow();
        // }
        const current = await this._current.pipe(take(1)).toPromise();
        if (
            current &&
            isAfter(date, current!.date) &&
            isBefore(date, addMinutes(current!.date, current!.duration))
        )
            return notifyError('Booking already exists for this time');

        var max_duration = undefined;
        const next = await this.next.pipe(take(1)).toPromise();
        if (next && date <= Date.now()) {
            const diff = Math.abs(differenceInMinutes(next.date, date));
            const max = this._settings.getValue().max_duration || 480;
            max_duration = diff < max ? diff : max;
        }
        if (max_duration != null && max_duration < 15) {
            return notifyError(
                'Unable to make bookings as the time available before the next meeting is less than 15 minutes'
            );
        }
        const space = await this._space_pipe.transform(this.system);
        const details = await openBookingModal(
            {
                ...this._settings.getValue(),
                space,
                date: future ? date : Date.now(),
                future,
                max_duration,
            },
            this._dialog
        );
        if (details.reason !== 'done') return details.close();
        this._events.newForm();
        this._events.form.patchValue({
            ...details.metadata,
            host: details.organiser?.email || currentUser().email,
            resources: [space],
            system: space,
        });
        await this.makeBooking(
            this._events.form.getRawValue(),
            force_api
        ).catch((e) => {
            notifyError(`Error creating meeting. ${e}`);
            this._events.clearForm();
            details.close();
            throw e;
        });
        this._events.clearForm();
        details.close();
    }

    public async confirmBookNow() {
        const date = Date.now();
        const current = await this._current.pipe(take(1)).toPromise();
        if (
            current &&
            isAfter(date, current!.date) &&
            isBefore(date, addMinutes(current!.date, current!.duration))
        ) {
            return notifyError('Booking already exists for this time');
        }
        var max_duration = undefined;
        const next = await this._next.pipe(take(1)).toPromise();
        if (next && date <= Date.now()) {
            const diff = Math.abs(differenceInMinutes(next.date, date));
            const max = this._settings.getValue().max_duration || 480;
            max_duration = diff < max ? diff : max;
        }
        if (max_duration != null && max_duration < 15) {
            return notifyError(
                'Unable to make bookings as the time available before the next meeting is less than 15 minutes'
            );
        }
        const ref = await openConfirmModal(
            {
                title: 'Book Meeting',
                content: `Do you wish to book a meeting in this room for ${Math.min(
                    max_duration || 180,
                    30
                )} minutes?`,
                icon: { content: 'event' },
            },
            this._dialog
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
    }

    /**
     * Create new booking with the given details
     * @param details
     */
    public async makeBooking(
        details: Partial<CalendarEvent>,
        force_api = false
    ) {
        if (isAfter(details.date, addMinutes(Date.now(), 5)) || force_api) {
            await this._events.postForm();
        } else {
            const module = getModule(this.system, 'Bookings');
            if (!details || !module) return;
            await module
                .execute('book_now', [
                    details.duration * 60,
                    details.title,
                    details.host,
                ])
                .catch((e) => notifyError(`Error creating meeting. ${e}`));
        }
    }

    /**
     * Open confirmation modal for starting the meeting
     */
    public async confirmStart() {
        const details = await openConfirmModal(
            {
                title: 'Do you wish to start your meeting?',
                content: `If you don't start your meeting it will be cancelled ${
                    this._settings.getValue().pending_period / 60
                } minutes after the start time.`,
                icon: { class: 'material-icons', content: 'play_arrow' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        this.startMeeting();
    }

    /**
     * Execute the logic on the engine driver to start the current or upcoming meeting
     */
    public async startMeeting() {
        if (!this.system || this.setting('status') !== 'pending') {
            return notifyWarn(
                'Current or upcoming meeting is not in a pending state.'
            );
        }
        const meeting =
            (await this._current.pipe(take(1)).toPromise()) ||
            (await this._next.pipe(take(1)).toPromise());
        const mod = getModule(this.system, 'Bookings');
        if (!meeting || !mod) return;
        await mod
            .execute('start_meeting', [getUnixTime(meeting.date)])
            .catch((e) => notifyError(`Error starting meeting. ${e}`));
        this.updateProperty('status', 'busy');
    }

    /**
     * Open confirmation modal for ending the meeting
     */
    public async confirmEnd() {
        const details = await openConfirmModal(
            {
                title: 'Are you sure want to end your meeting?',
                content:
                    'Ending your meeting early will free up this room for others to use',
                icon: { class: 'material-icons', content: 'event_busy' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        details.loading('Ending Meeting...');
        await this.endCurrent().catch();
        details.close();
    }

    /**
     * End the current meeting
     * @param reason Reason for ending the meeting early
     */
    public async endCurrent(reason: string = 'user_input') {
        const current = await this._current.pipe(take(1)).toPromise();
        const module = getModule(this.system, 'Bookings');
        if (current && module) {
            await module
                .execute('end_meeting', [
                    getUnixTime(current.date),
                    true,
                    reason,
                ])
                .catch((e) => {
                    // notifyError(
                    //     `Error ending meeting. ${e.message || e.error || e}`
                    // )
                });
        }
    }
    /**
     * Open confirmation modal for calling waiter
     */
    public async viewControl() {
        const control_url = this._settings.getValue().control_ui;
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
        const details = await openConfirmModal(
            {
                title: 'Do you wish to call a waiter?',
                content: `Note that it can take up to 15 minutes for them to turn up.`,
                icon: { class: 'material-icons', content: 'room_service' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        this.callWaiter();
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
        mod: string = 'Bookings',
        on_change: (v: PanelSettings[K]) => void = (v) =>
            this.updateProperty(name, v)
    ) {
        const binding = getModule(id, mod).binding(name);
        this.subscription(
            `listen:${name}`,
            binding.listen().subscribe(on_change)
        );
        this.subscription(`bind:${name}`, binding.bind());
    }

    /** Update properties of the system data */
    private updateProperty<K extends keyof PanelSettings>(
        name: K,
        value: PanelSettings[K]
    ) {
        const item = { ...this._settings.getValue() };
        item[name] = value;
        this._settings.next(item);
    }

    private _listenToModuleBinding(
        id: string,
        name: string,
        mod_name = 'Bookings'
    ) {
        const mod = getModule(id, mod_name);
        if (window.debug) window.panel_module = mod;
        const binding = mod.binding(name);
        this.subscription(`binding:${mod_name}:${name}`, binding.bind());
        return binding.listen();
    }
}
