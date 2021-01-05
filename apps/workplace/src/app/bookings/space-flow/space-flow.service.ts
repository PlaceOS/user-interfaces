import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { first, shareReplay, switchMap } from 'rxjs/operators';
import { addMinutes, roundToNearestMinutes, isAfter, endOfDay } from 'date-fns';

import { BaseClass, currentUser, notifyError, unique } from '@user-interfaces/common';
import {
    CalendarEvent,
    generateEventForm,
    saveEvent,
} from '@user-interfaces/events';
import { CalendarService } from '@user-interfaces/calendar';
import { OrganisationService } from '@user-interfaces/organisation';
import { NewUserModalComponent } from '@user-interfaces/users';
import { MatDialog } from '@angular/material/dialog';

export interface EventFormFilters {
    capacity?: number;
    zones?: string[];
}

export function clearEventFormState(): void {
    sessionStorage.removeItem('PLACEOS.event');
    sessionStorage.removeItem('PLACEOS.event_form');
    localStorage.removeItem('PLACEOS.event_filters');
}

@Injectable()
export class SpaceFlowService extends BaseClass {
    /** Active event being worked on */
    private _event = new BehaviorSubject<CalendarEvent>(null);
    /** Form fields for the current flow */
    private _form = new BehaviorSubject<FormGroup>(null);
    /** Form fields for the current flow */
    private _filters = new BehaviorSubject<EventFormFilters>({});
    /** Whether space listing is being retrieved */
    private _loading_spaces = new BehaviorSubject<boolean>(false);
    /** Whether changes to event are being saved */
    private _loading_event = new BehaviorSubject<boolean>(false);

    public readonly event = this._event.asObservable();
    public readonly form = this._form.asObservable();
    public get event_form() {
        return this._form.getValue();
    }
    public readonly filters = this._filters.asObservable();
    public readonly loading_spaces = this._loading_spaces.asObservable();
    public readonly loading_event = this._loading_event.asObservable();
    public get event_filters() {
        return this._filters.getValue();
    }
    public readonly spaces = this._filters.pipe(
        switchMap((filters) => {
            this._loading_spaces.next(true);
            const form = this._form.getValue().value;
            if (!form.date) form.date = new Date().valueOf();
            const period_start = Math.floor(
                new Date(form.date).valueOf() / 1000
            );
            const period_end = Math.floor(
                addMinutes(new Date(form.date), form.duration || 60).valueOf() /
                    1000
            );
            const zones = filters?.zones?.length
                ? filters.zones
                : [this._org.building?.id];
            return this._calendar
                .freeBusy({
                    zone_ids: zones.join(','),
                    period_start,
                    period_end,
                }).toPromise()
                .then((list) => {
                    this._loading_spaces.next(false);
                    return list.filter(
                        (space) =>
                            !filters.capacity ||
                            filters.capacity >= space.capacity
                    );
                });
        }),
        shareReplay()
    );

    public get is_future_date() {
        const date = this._form.getValue()?.controls?.date.value || new Date().valueOf();
        return isAfter(new Date(date), endOfDay(new Date()));
    }

    public readonly clearState = () => clearEventFormState();

    constructor(
        private _calendar: CalendarService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
        this.setEvent(
            new CalendarEvent({
                date: roundToNearestMinutes(addMinutes(new Date(), 2), {
                    nearestTo: 5,
                }).valueOf(),
            })
        );
    }

    /** Set the event being worked on */
    public setEvent(event: CalendarEvent): void {
        this._event.next(event);
        const form = generateEventForm(event);
        this._form.next(form);
        this.subscription('form_change', () => this.storeState());
    }

    /** Set the value of the form control */
    public setValue<T = any>(name: string, value: T): void {
        const form = this._form.getValue();
        if (form && form.controls[name]) {
            form.controls[name].setValue(value);
        }
    }

    public newAttendee() {
        const ref = this._dialog.open<NewUserModalComponent>(
            NewUserModalComponent,
            {
                width: 'auto',
                height: 'auto',
                data: {},
            }
        );
        const form = this._form.getValue();
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .subscribe((event) => {
                const attendees = form.controls.attendees.value || [];
                attendees.push(event.metadata);
                form.controls.attendees.setValue(unique(attendees, 'email'));
                ref.close();
            });
    }

    /** Reset the form fields for the active event */
    public clearForm(): void {
        this.setEvent(this._event.getValue());
        this._filters.next({});
    }

    /** Update the current form filters */
    public updateFilters(filters: EventFormFilters) {
        this._filters.next(filters);
    }

    /** Store current event details and form values */
    public storeState(): void {
        const form = this._form.getValue();
        sessionStorage.setItem(
            'PLACEOS.event',
            JSON.stringify(this._event.getValue().toJSON())
        );
        sessionStorage.setItem('PLACEOS.event_form', JSON.stringify(form.value));
        localStorage.setItem(
            'PLACEOS.event_filters',
            JSON.stringify(this._filters.getValue())
        );
    }

    /** Load old event details and form values */
    public loadState(): void {
        const event_data = sessionStorage.getItem('PLACEOS.event') || '{}';
        if (event_data) {
            this._event.next(new CalendarEvent(JSON.parse(event_data)));
        }
        const form_data = sessionStorage.getItem('PLACEOS.event_form');
        if (form_data) {
            const form = generateEventForm(this._event.getValue());
            form.patchValue(JSON.parse(form_data));
            this._form.next(form);
        }
        const filter_data = localStorage.getItem('PLACEOS.event_filters');
        if (filter_data) {
            this._filters.next(JSON.parse(filter_data));
        }
    }

    /** Save changes to event to the server */
    public save(): Promise<void> {
        const form = this._form.getValue();
        form.markAllAsTouched();
        if (!form.controls.organiser.value || !form.controls.host.value)
            form.patchValue({
                organiser: currentUser(),
                host: currentUser().email,
            });
        if (!form.controls.title.value) {
            form.patchValue({
                title: currentUser().email
            });
        }
        if (!form.valid) {
            const list = [];
            for (const key in form.controls) {
                if (form.controls[key].invalid) {
                    list.push(key);
                }
            }
            return Promise.reject(
                notifyError(
                    `Some form fields are not valid: [${list.join(', ')}]`
                )
            );
        }
        this._loading_event.next(true);
        const values = new CalendarEvent({
            ...this._event.getValue(),
            ...this._form.getValue().value,
        });
        return saveEvent(values).toPromise().then(
            () => this._loading_event.next(false),
            () => this._loading_event.next(false)
        );
    }
}
