import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, interval, Observable } from 'rxjs';
import { filter, map, shareReplay, take, tap } from 'rxjs/operators';

import { CalendarEvent } from '@placeos/events';
import { SpacesService } from '@placeos/spaces';
import {
    BaseClass,
    notifyError,
    openConfirmModal,
    timePeriodsIntersect,
} from '@placeos/common';

import { openBookingModal } from '../overlays/booking-modal.component';
import { EmbeddedControlModalComponent } from '../overlays/embedded-control-modal.component';
import { addSeconds } from 'date-fns';

export interface PanelSettings {
    /**  */
    status?: string;
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

@Injectable()
export class PanelStateService extends BaseClass {
    /** Polling observable */
    private _poll = interval(1000);
    /** List of current bookings for active system */
    private _bookings = new BehaviorSubject<CalendarEvent[]>([]);
    /** Mapping of current settings for the active system */
    private _settings = new BehaviorSubject<PanelSettings>({});
    /** Active system */
    private _system = new BehaviorSubject<string>('');
    /** Mapping of current settings for the active system */
    public readonly settings = this._settings.asObservable();
    /** List of current bookings for active system */
    public readonly bookings = this._bookings.asObservable();
    /** List of current bookings for active system */
    public readonly space = combineLatest([
        this._system,
        this._spaces.list,
    ]).pipe(
        map(([id, list]) => list.find((_) => _.id === id)),
        shareReplay(1)
    );
    /** List of current bookings */
    public get booking_list() {
        return this._bookings.getValue();
    }
    /** Active system */
    public get system() {
        return this._system.getValue();
    }
    public set system(value: string) {
        this._system.next(value);
    }
    /** Currently active booking */
    public readonly current: Observable<CalendarEvent> = combineLatest(
        this._poll,
        this._bookings
    ).pipe(map(([_, bookings]) => currentBooking(bookings)));
    /** Upcoming booking */
    public readonly next: Observable<CalendarEvent> = combineLatest([
        this._poll,
        this._bookings,
    ]).pipe(
        map(([_, bookings]) => {
            const date = new Date().valueOf();
            return bookings.find((bkn) => bkn.date > date);
        })
    );

    public readonly status: Observable<string> = combineLatest([
        this.current,
        this.next,
        this._settings,
    ]).pipe(
        map(([current, next, settings]) => {
            const booking: CalendarEvent = current || next;
            const is_active =
                addSeconds(
                    new Date(),
                    settings.pending_period || 1440
                ).valueOf() > booking?.date;
            switch (booking.state) {
                case 'future':
                    return 'available';
                case 'upcoming':
                    return settings.pending && !is_active
                        ? 'pending'
                        : 'available';
                case 'started':
                    return settings.pending && !is_active ? 'pending' : 'busy';
                case 'in_progress':
                    return settings.pending && !is_active ? 'pending' : 'busy';
            }
            return 'available';
        }),
        shareReplay(1)
    );

    constructor(private _spaces: SpacesService, private _dialog: MatDialog) {
        super();
        this._system.pipe(filter((_) => !!_)).subscribe((id) => {
            this.bindTo(id, 'bookings' as any, 'Bookings', (l) =>
                this._bookings.next(
                    l
                        ?.map((i) => new CalendarEvent(i))
                        .sort((a, b) => a.date - b.date) || []
                )
            );
            const settings: any[] = [
                'disable_book_now',
                'pending',
                'status',
                'control_ui',
                'catering_ui',
                'pending_period',
                'pending_before',
            ];
            settings.forEach((k) => this.bindTo(id, k));
        });
    }

    /**
     * Open modal to create new booking
     * @param date Start time of the new booking
     */
    public newBooking(date: number = new Date().valueOf()) {
        openBookingModal(
            {
                ...this._settings.getValue(),
                space: this._spaces.find(this.system),
                date,
            },
            this._dialog
        );
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
        if (this.space && (await this.status.toPromise()) === 'pending') {
            const meeting =
                (await this.current.toPromise()) ||
                (await this.next.toPromise());
            const module = getModule(this.system, 'Bookings');
            if (meeting && module) {
                await module
                    .execute('start_meeting', [meeting.date])
                    .catch((e) => notifyError(`Error starting meeting. ${e}`));
            }
        }
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
                icon: { class: 'material-icons', content: 'stop' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return;
        this.endCurrent();
    }

    /**
     * End the current meeting
     * @param reason Reason for ending the meeting early
     */
    public async endCurrent(reason: string = 'user_input') {
        const now = new Date().valueOf();
        const current = this.booking_list.find((bkn) =>
            timePeriodsIntersect(
                now,
                now,
                bkn.date,
                bkn.date + bkn.duration * 1000
            )
        );
        const module = getModule(this.system, 'Bookings');
        if (current && module) {
            await module
                .execute('cancel_meeting', [current.date, reason])
                .catch((e) => notifyError(`Error starting meeting. ${e}`));
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
}
