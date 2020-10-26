import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { addMinutes, roundToNearestMinutes } from 'date-fns';

import { BaseClass, notifyError } from '@user-interfaces/common';
import { CalendarEvent, EventsService, generateEventForm } from '@user-interfaces/events';
import { CalendarService } from '@user-interfaces/calendar';
import { OrganisationService } from '@user-interfaces/organisation';

export interface EventFormFilters {
    capacity?: number;
    zones?: string[];
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
    public get event_form() { return this._form.getValue() };
    public readonly filters = this._filters.asObservable();
    public readonly loading_spaces = this._loading_spaces.asObservable();
    public readonly loading_event = this._loading_event.asObservable();
    public get event_filters() { return this._filters.getValue() };
    public readonly spaces = this._filters.pipe(
        switchMap((filters) => {
            this._loading_spaces.next(true);
            const form = this._form.getValue().value;
            const period_start = Math.floor(new Date(form.date).valueOf() / 1000);
            const period_end = Math.floor(addMinutes(new Date(form.date), form.duration || 60).valueOf() / 1000);
            const zones = filters?.zones?.length ? filters.zones : [this._org.building?.id];
            return this._calendar
                .availability({
                    zone_ids: zones.join(','),
                    period_start,
                    period_end,
                })
                .then((list) =>{
                    this._loading_spaces.next(false);
                    return list.filter((space) => !filters.capacity || filters.capacity >= space.capacity)
                });
        })
    );

    constructor(
        private _events: EventsService,
        private _calendar: CalendarService,
        private _org: OrganisationService
    ) {
        super();
        this.setEvent(new CalendarEvent({ date: roundToNearestMinutes(addMinutes(new Date(), 2), { nearestTo: 5 }).valueOf() }));
    }

    /** Set the event being worked on */
    public setEvent(event: CalendarEvent): void {
        this._event.next(event);
        const form = generateEventForm(event);
        this._form.next(form);
        this.subscription('form_change', () => this.storeState());

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
        localStorage.setItem('PLACEOS.event', JSON.stringify(this._event.getValue().toJSON()));
        localStorage.setItem('PLACEOS.event_form', JSON.stringify(form.value));
        localStorage.setItem('PLACEOS.event_filters', JSON.stringify(this._filters.getValue()));
    }

    /** Load old event details and form values */
    public loadState(): void {
        const event_data = localStorage.getItem('PLACEOS.event');
        if (event_data) {
            this._event.next(new CalendarEvent(JSON.parse(event_data)));
        }
        const form_data = localStorage.getItem('PLACEOS.event_form');
        if (form_data) {
            const form = generateEventForm(this._event.getValue());
            form.setValue(JSON.parse(form_data));
            this._form.next(form);
        }
        const filter_data = localStorage.getItem('PLACEOS.event_filters');
        if (filter_data) {
            this._filters.next(JSON.parse(filter_data));
        }
    }

    public clearState(): void {
        localStorage.removeItem('PLACEOS.event');
        localStorage.removeItem('PLACEOS.event_form');
        localStorage.removeItem('PLACEOS.event_filters');
    }

    /** Save changes to event to the server */
    public save(): Promise<void> {
        const form = this._form.getValue();
        form.markAllAsTouched();
        if (!form.valid) {
            const list = [];
            for (const key in form.controls) {
                if (form.controls[key].invalid) {
                    list.push(key);
                }
            }
            return Promise.reject(notifyError(`Some form fields are not valid: [${list.join(', ')}]`));
        }
        this._loading_event.next(true)
        const values = { ...this._event.getValue().toJSON(), ...this._form.getValue().value };
        return (values.id ? this._events.update(values.id, values) : this._events.add(values))
            .then(() => this._loading_event.next(false), () => this._loading_event.next(false))  ;
    }
}
