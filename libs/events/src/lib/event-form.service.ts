import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BaseClass, getInvalidFields } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { getUnixTime } from 'date-fns';
import { querySpaceFreeBusy } from 'libs/calendar/src/lib/calendar.fn';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap, tap } from 'rxjs/operators';
import { CalendarEvent } from './event.class';
import { saveEvent } from './events.fn';
import { generateEventForm } from './utilities';

const BOOKING_URLS = ['book/spaces', 'schedule/view'];

export type EventFlowView =
    | 'form'
    | 'find'
    | 'catering'
    | 'confirm'
    | 'success';

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
export class EventFormService extends BaseClass {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({ zone_ids: [] });
    private _form = new BehaviorSubject<FormGroup>(null);
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');

    public last_success: CalendarEvent = new CalendarEvent(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_event') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly available_spaces = combineLatest([
        this._view,
        this._options,
        this._form,
        this._org.initialised.pipe(filter((_) => _)),
    ]).pipe(
        filter(([view, _, form]) => view === 'find' && !!form),
        switchMap(([_, options, form]) => {
            this._loading.next('Retrieving available spaces...');
            const start = form.get('date').value;
            const end =
                form.get('date').value + form.get('duration').value * 60 * 1000;
            return querySpaceFreeBusy(
                {
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zone_ids:
                        options.zone_ids?.join(',') || this._org.building.id,
                    features: options.features?.join(','),
                    capacity: options.capacity,
                },
                this._org
            );
        }),
        tap((_) => {
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

    constructor(private _org: OrganisationService, private _router: Router) {
        super();
        this.available_spaces.subscribe();
        this.subscription(
            'router.events',
            this._router.events.subscribe((event: Event) => {
                if (
                    event instanceof NavigationEnd &&
                    !BOOKING_URLS.some((_) => event.url.includes(_))
                ) {
                    this.clearForm();
                }
            })
        );
    }

    public setView(value: EventFlowView) {
        this._view.next(value);
    }

    public setOptions(value: Partial<EventFlowOptions>) {
        this._options.next({ ...this._options.getValue(), ...value });
    }

    public newForm(event: CalendarEvent = new CalendarEvent()) {
        this._form.next(generateEventForm(event));
        this.subscription(
            'form_change',
            this._form.getValue().valueChanges.subscribe(() => this.storeForm())
        );
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
        sessionStorage.removeItem('PLACEOS.event_form');
        this.newForm();
    }

    public storeForm() {
        sessionStorage.setItem(
            'PLACEOS.event_form',
            JSON.stringify(this._form.getValue()?.value || {})
        );
    }

    public loadForm() {
        if (!this._form.getValue()) this.newForm();
        this._form.getValue().patchValue({
            ...JSON.parse(sessionStorage.getItem('PLACEOS.event_form') || '{}'),
        });
    }

    public async postForm() {
        const form = this._form.getValue();
        if (!form) throw 'No form for event';
        if (!form.valid)
            throw `Some form fields are invalid. [${getInvalidFields(form).join(
                ', '
            )}]`;
        const spaces = form.get('resources')?.value || [];
        const space_list = spaces.length
            ? await querySpaceFreeBusy({
                  period_start: getUnixTime(form.get('date').value),
                  period_end: getUnixTime(
                      form.get('date').value +
                          form.get('duration').value * 60 * 1000
                  ),
                  system_ids: spaces.map((_) => _.id).join(','),
              }).toPromise()
            : [];
        if (space_list.length !== spaces.length)
            throw `${
                spaces.length - space_list.length
            } space(s) are not available at the selected time`;
        const result = await saveEvent(
            new CalendarEvent(this._form.getValue().value)
        ).toPromise();
        this.clearForm();
        this.last_success = result;
        sessionStorage.setItem(
            'PLACEOS.last_booked_event',
            JSON.stringify(result)
        );
        this.setView('success');
        return result;
    }
}
