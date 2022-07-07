import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Event, NavigationEnd, Router } from '@angular/router';
import {
    BaseClass,
    currentUser,
    getInvalidFields,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { getUnixTime } from 'date-fns';
import { querySpaceAvailability } from 'libs/calendar/src/lib/calendar.fn';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { CalendarEvent } from './event.class';
import { saveEvent } from './events.fn';
import { generateEventForm } from './utilities';

const BOOKING_URLS = [
    'book/spaces',
    'schedule/view',
    'confirm/success',
    'upcoming',
];

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
    /** Whether to only show favourite rooms */
    show_fav?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class EventFormService extends BaseClass {
    private _view = new BehaviorSubject<EventFlowView>('form');
    private _options = new BehaviorSubject<EventFlowOptions>({ zone_ids: [] });
    private _form = new BehaviorSubject(generateEventForm());
    private _event = new BehaviorSubject<CalendarEvent>(null);
    private _loading = new BehaviorSubject<string>('');

    public last_success: CalendarEvent = new CalendarEvent(
        JSON.parse(sessionStorage.getItem('PLACEOS.last_booked_event') || '{}')
    );
    public readonly loading = this._loading.asObservable();
    public readonly options = this._options.pipe(shareReplay(1));
    public readonly available_spaces: Observable<Space[]> = combineLatest([
        this._view,
        this._options,
        this._form,
        this._org.initialised.pipe(filter((_) => _)),
    ]).pipe(
        filter(([view, _, form]) => view === 'find' && !!form),
        debounceTime(300),
        switchMap(([_, options, form]) => {
            this._loading.next('Retrieving available spaces...');
            const start = form.value.date;
            const end = form.value.date + form.value.duration * 60 * 1000;
            return querySpaceAvailability(
                {
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zone_ids:
                        options.zone_ids?.join(',') || this._org.building.id,
                    features: options.features?.join(','),
                    capacity: options.capacity,
                },
                this._org
            ).pipe(catchError((_) => []));
        }),
        map((_) =>
            _.filter(
                (space) =>
                    (!space.availability?.length ||
                        space.availability.find((_) => _.status !== 'busy')) &&
                    (!this._options.getValue()?.show_fav ||
                        this.favorite_spaces.includes(space.id))
            )
        ),
        tap((_) => this._loading.next('')),
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

    public get favorite_spaces() {
        return this._settings.get<string[]>('favourite_spaces') || [];
    }

    constructor(
        private _org: OrganisationService,
        private _spaces: SpacesService,
        private _router: Router,
        private _settings: SettingsService
    ) {
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

    public readonly cancelPostForm = () => this.unsub('post-event-form');

    public postForm(force: boolean = false) {
        return new Promise<CalendarEvent>(async (resolve, reject) => {
            const form = this._form.getValue();
            form.markAllAsTouched();
            const event = this.event || new CalendarEvent();
            if (!form.valid && !force)
                return reject(`Some form fields are invalid. [${getInvalidFields(
                    form
                ).join(', ')}]`);
            const { id, host, date, duration, creator } = form.value;
            const spaces = form.get('resources')?.value || [];
            if (
                (!id ||
                    date !== event.date ||
                    duration !== event.duration) &&
                spaces.length
            ) {
                const start = getUnixTime(event.date);
                await this.checkSelectedSpacesAreAvailable(
                    spaces,
                    date,
                    duration,
                    id
                        ? { start, end: start + event.duration * 60 }
                        : undefined
                ).catch(_ => reject(_));
            }
            const is_owner =
                host === currentUser()?.email ||
                creator === currentUser()?.email;
            const space_id = this._spaces.find(spaces[0]?.email)?.id;
            const query = id
                ? is_owner
                    ? { calendar: host || creator }
                    : { system_id: space_id }
                : {};
            this.subscription(
                'post-event-form',
                saveEvent(
                    new CalendarEvent(this._form.getValue().value),
                    query
                ).subscribe(
                    (result) => {
                        this.clearForm();
                        this.last_success = result;
                        sessionStorage.setItem(
                            'PLACEOS.last_booked_event',
                            JSON.stringify(result)
                        );
                        this.setView('success');
                        resolve(result);
                    },
                    (e) => reject(e)
                )
            );
        });
    }

    private async checkSelectedSpacesAreAvailable(
        spaces: Space[],
        date: number,
        duration: number,
        exclude?: { start: number; end: number }
    ) {
        const space_ids = spaces.map((s) => this._spaces.find(s?.email)?.id || s.id);
        const query: any = {
            period_start: getUnixTime(date),
            period_end: getUnixTime(date + duration * 60 * 1000),
            system_ids: space_ids.join(','),
        };
        if (exclude) query.exclude_range = `${exclude.start}...${exclude.end}`;
        const space_list = spaces.length
            ? await querySpaceAvailability(query).toPromise()
            : [];
        if (space_list.length !== spaces.length)
            throw `${
                spaces.length - space_list.length
            } space(s) are not available at the selected time`;
    }
}
