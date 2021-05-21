import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrganisationService } from '@placeos/organisation';
import { getUnixTime } from 'date-fns';
import { querySpaceFreeBusy } from 'libs/calendar/src/lib/calendar.fn';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import { CalendarEvent } from './event.class';
import { saveEvent } from './events.fn';
import { generateEventForm } from './utilities';

export type EventFlowView = 'form' | 'find' | 'catering' | 'confirm';

export interface EventFlowOptions {
    /** Calendar to associate event with */
    calendar_id?: string;
    /** List of features to filter spaces on */
    features?: string[];
    /** List of zones to filter spaces on */
    zone_ids?: string[];
    /** Minimum number of attendees to filter space on */
    capacity?: number;
}

@Injectable({
    providedIn: 'root',
})
export class EventStateService {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({ zone_ids: [] });
    private _form = new BehaviorSubject<FormGroup>(null);
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');

    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly available_spaces = combineLatest([
        this._view,
        this._options,
        this._form,
        this._org.initialised.pipe(filter(_ => _))
    ]).pipe(
        filter(([v]) => v === 'find'),
        switchMap(([_, options, form]) => {
            this._loading.next('Retrieving available spaces...');
            const start = form.get('date').value;
            const end =
                form.get('date').value + form.get('duration').value * 60 * 1000;
            return querySpaceFreeBusy(
                {
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zone_ids: options.zone_ids?.join(',') || this._org.building.id,
                    features: options.features?.join(','),
                    capacity: options.capacity ? options.capacity : undefined,
                },
                this._org
            );
        }),
        tap((_) => {
            console.log('Spaces:', _);
            this._loading.next('');
        }),
        shareReplay(1)
    );

    public get view() {
        return this._view.getValue();
    }
    public get form() {
        return this._form.getValue();
    }
    public get event() {
        return this._event.getValue();
    }

    constructor(private _org: OrganisationService) {
        this.available_spaces.subscribe();
    }

    public setView(value: EventFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<EventFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public newForm(event: CalendarEvent = new CalendarEvent()) {
        this._form.next(generateEventForm(event));
        this._event.next(event);
        this._options.next({});
    }

    public resetForm() {
        if (!this._form.getValue()) this.newForm();
        const event = this._event.getValue();
        this._form
            .getValue()
            .patchValue({ ...(event || {}), ...(event?.extension_data || {}) });
        this._options.next({});
    }

    public clearForm() {
        localStorage.removeItem('PLACEOS.event_form');
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

    public async postForm() {
        if (!this._form.getValue()) throw 'No form for event';
        if (!this._form.getValue().valid) throw 'Some form fields are invalid.';
        const result = await saveEvent(this._form.getValue().value);
        this.clearForm();
        return result;
    }
}
