import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CalendarEvent } from './event.class';
import { generateEventForm } from './utilities';

export type EventFlowView = 'form' | 'find' | 'catering' | 'confirm';

export interface EventFlowOptions {
    /** Calendar to associate event with */
    calendar_id?: string;
    /** Start time of event */
    start?: number;
    /** End time of event */
    end?: number;
    /** Zone to check available */
    zone_id?: string;
}

@Injectable({
    providedIn: 'root',
})
export class EventStateService {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({});
    private _form = new BehaviorSubject<FormGroup>(null);
    private _event = new BehaviorSubject<CalendarEvent>(null);

    public get view() {
        return this._view.getValue();
    }

    public get form() {
        return this._form.getValue();
    }

    public get event() {
        return this._event.getValue();
    }

    public newForm(event: CalendarEvent = new CalendarEvent()) {
        this._form.next(generateEventForm(event));
        this._event.next(event);
        this._options.next({});
    }

    public resetForm() {
        if (!this._form.getValue()) this.newForm();
        const event = this._event.getValue() || ({} as any);
        this._form.getValue().patchValue({ ...event, ...event.extension_data });
    }

    public clearForm() {
        this.newForm();
    }

    public storeForm() {
        localStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify(this._form.getValue()?.value || {})
        );
    }

    public loadForm() {
        if (!this._form.getValue()) this.newForm();
        this._form.getValue().patchValue({
            ...JSON.parse(localStorage.getItem('PLACEOS.event_form') || '{}'),
        });
    }
}
