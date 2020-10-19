import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { listen, getModule } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, interval, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { CalendarEvent,  } from '@user-interfaces/events';
import { SpacesService } from '@user-interfaces/spaces';
import { BaseClass, notifyError, timePeriodsIntersect } from '@user-interfaces/common';
import {
    ConfirmModalComponent,
    ConfirmModalData,
    CONFIRM_METADATA,
} from '@user-interfaces/components';

import { SpaceStatus } from './booking-actions/booking-actions.component';
import { openBookingModal } from '../overlays/booking-modal/booking-modal.component';

export interface PanelSettings {
    /** Whether booking has a pending state */
    pending?: boolean;
    /** Unix epoch in ms of last activated booking */
    last_active?: number;
    /** Default title for Ad-hoc bookings */
    default_title?: string;
    /** Minimum duration for a booking */
    min_duration?: number;
    /** Maximum duration for a booking */
    max_duration?: number;
    /** Duration in seconds after the start with which to cancel pending bookings */
    cancel_timeout?: number;
}

export function currentBooking(list: CalendarEvent[], date: number = new Date().valueOf()) {
    return list.find((bkn) =>
        timePeriodsIntersect(date, date, bkn.date, bkn.date + bkn.duration * 1000)
    );
}

@Injectable()
export class PanelStateService extends BaseClass {
    /** Polling observable */
    private _poll = interval(1000);
    /** List of current bookings for active system */
    private _bookings = new BehaviorSubject<CalendarEvent[]>([]);
    /** List of current bookings for active system */
    private _settings = new BehaviorSubject<PanelSettings>({});
    /** Active system */
    private _system = new BehaviorSubject<string>('');
    /** List of current bookings for active system */
    public readonly bookings = this._bookings.asObservable();
    /** List of current bookings for active system */
    public readonly space = this._system.pipe(map((id) => this._spaces.find(id)));
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
    ).pipe(map((details) => currentBooking(details[1])));
    /** Upcoming booking */
    public readonly next: Observable<CalendarEvent> = combineLatest(
        this._poll,
        this._bookings
    ).pipe(
        map((details) => {
            const date = new Date().valueOf();
            return details[1].find((bkn) => bkn.date > date);
        })
    );

    public readonly status: Observable<SpaceStatus> = combineLatest(
        this.current,
        this.next,
        this._settings
    ).pipe(
        map((pair) => {
            const [current, next, settings] = pair;
            const booking: CalendarEvent = current || next;
            const is_active = settings.last_active > booking?.date;
            switch (booking.state) {
                case 'future':
                    return 'available';
                case 'upcoming':
                    return settings.pending && !is_active ? 'pending' : 'available';
                case 'started':
                    return settings.pending && !is_active ? 'pending' : 'unavailable';
                case 'in_progress':
                    return settings.pending && !is_active ? 'pending' : 'unavailable';
            }
            return 'available';
        })
    );

    constructor(private _spaces: SpacesService, private _dialog: MatDialog) {
        super();
        this._system.subscribe((id) =>
            this.subscription(
                'bookings',
                listen({ sys: id, mod: 'Bookings', index: 1, name: 'today' }).subscribe((list) => {
                    list = (list || []).map((i) => new CalendarEvent(i));
                    list.sort((a, b) => (a.date = b.date));
                    this._bookings.next(list);
                })
            )
        );
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
    public confirmStart() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Do you wish to start your meeting?',
                    content: `If you don't start your meeting it will be cancelled ${
                        this._settings.getValue().cancel_timeout / 60
                    } minutes after the start time.`,
                    icon: { class: 'material-icons', content: 'play_arrow' },
                },
            }
        );
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(() => this.startMeeting());
    }

    /**
     * Execute the logic on the engine driver to start the current or upcoming meeting
     */
    public async startMeeting() {
        if (this.space && (await this.status.toPromise()) === 'pending') {
            const meeting = (await this.current.toPromise()) || (await this.next.toPromise());
            const module = getModule(this.system, 'Bookings');
            if (meeting && module) {
                const date = new Date(meeting.date);
                module.execute('start_meeting', [meeting.date]).then(
                    (_) => {
                        // this.service.Analytics.event('Checkin', 'checked-in', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')}`);
                    },
                    (e) => {
                        notifyError(`Error starting meeting. ${e}`);
                        // this.service.Analytics.event('Checkin', 'checked-in-failed', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')}`);
                    }
                );
            }
        }
    }

    /**
     * Open confirmation modal for ending the meeting
     */
    public confirmEnd() {
        const ref = this._dialog.open<ConfirmModalComponent, ConfirmModalData>(
            ConfirmModalComponent,
            {
                ...CONFIRM_METADATA,
                data: {
                    title: 'Are you sure want to end your meeting?',
                    content: 'Ending your meeting early will free up this room for others to use',
                    icon: { class: 'material-icons', content: 'stop' },
                },
            }
        );
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe(() => this.endCurrent());
    }

    /**
     * End the current meeting
     * @param reason Reason for ending the meeting early
     */
    public endCurrent(reason: string = 'user_input') {
        const now = new Date().valueOf();
        const current = this.booking_list.find((bkn) =>
            timePeriodsIntersect(now, now, bkn.date, bkn.date + bkn.duration * 1000)
        );
        const module = getModule(this.system, 'Bookings');
        if (current && module) {
            const date = new Date(current.date);
            module.execute('cancel_meeting', [current.date, reason]).then(
                (_) => {},
                (e) => notifyError(`Error starting meeting. ${e}`)
            );
        }
    }
}
