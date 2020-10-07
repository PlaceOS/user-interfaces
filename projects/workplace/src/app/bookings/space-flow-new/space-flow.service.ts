
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { CalendarEvent } from 'src/app/events/event.class';
import { EventsService } from 'src/app/events/events.service';
import { generateEventForm } from 'src/app/events/event.utilities';
import { notifyError, notifySuccess } from 'src/app/common/notifications';

export interface EventFormFilters {
    capacity?: number;
    zones?: string[];
}

@Injectable()
export class SpaceFlowService {
    /** Active event being worked on */
    private _event = new BehaviorSubject<CalendarEvent>(null);
    /** Form fields for the current flow */
    private _form = new BehaviorSubject<FormGroup>(null);
    /** Form fields for the current flow */
    private _filters = new BehaviorSubject<EventFormFilters>({});

    public readonly event = this._event.asObservable();
    public readonly form = this._form.asObservable();
    public readonly filters = this._filters.asObservable();

    constructor(private _events: EventsService) {
        this._event.next(new CalendarEvent());
        this._form.next(generateEventForm(this._event.getValue()));
    }

    /** Set the event being worked on */
    public setEvent(event: CalendarEvent): void {
        this._event.next(event);
        this._form.next(generateEventForm(event));
    }

    /** Reset the form fields for the active event */
    public clearForm(): void {
        this._form.next(generateEventForm(this._event.getValue()));
        this._filters.next({});
    }

    /** Update the current form filters */
    public updateFilters(filters: EventFormFilters) {
        this._filters.next(filters);
    }

    /** Store current event details and form values */
    public storeState(): void {
        const form = this._form.getValue();
        localStorage.setItem('PLACEOS.event', JSON.stringify(this._event.getValue().toJSON()))
        localStorage.setItem('PLACEOS.event_form', JSON.stringify(form.value));
    }

    /** Load old event details and form values */
    public loadState(): void {
        const event_data = localStorage.getItem('PLACEOS.event');
        if (event_data) {
            this._event.next(new CalendarEvent(JSON.parse(event_data)));
        }
        const form_data = localStorage.getItem('PLACEOS.event');
        if (form_data) {
            const form = generateEventForm(this._event.getValue());
            form.setValue(JSON.parse(form_data));
            this._form.next(form);
        }
    }

    /** Confirm changes to event */
    public confirmChanges() {

    }

    /** Save changes to event to the server */
    public save() {
        const form = this._form.getValue();
        form.markAllAsTouched();
        if (!form.valid) return notifyError('');
        const values = { ...this._event.getValue().toJSON(), ...this._form.getValue().value };
        return values.id ? this._events.update(values.id, values) : this._events.add(values);
    }
}
