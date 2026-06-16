import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {
    currentUser,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { queryEvents } from '@placeos/events';
import { querySystemsWithEmails } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

export interface GroupEventOptions {
    date: number;
    end?: number;
}

export interface GroupEventFilters {
    categories: string[];
    tags: string[];
}

@Injectable({
    providedIn: 'root',
})
export class GroupEventsStateService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _options = signal<GroupEventOptions>({
        date: Date.now(),
    });
    private _filters = signal<GroupEventFilters>({
        categories: [],
        tags: [],
    });
    private _tag_list = signal<string[]>([]);
    private _events = signal<any[]>([]);

    public get calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public readonly filters = this._filters.asReadonly();
    public readonly tags = this._tag_list.asReadonly();
    public readonly events = this._events.asReadonly();
    public readonly filtered_events = computed(() => {
        const tag_list = this._filters().tags.map((_) => _.toLowerCase());
        return this._events().filter((event) => {
            const event_tags = (event.extension_data.tags || []).map((_) =>
                _.toLowerCase(),
            );
            return (
                tag_list.every((tag) => event_tags.includes(tag)) &&
                event.date_end > Date.now()
            );
        });
    });
    public readonly options = this._options.asReadonly();

    constructor() {
        effect(async () => {
            const building = this._org.active_building();
            const options = this._options();
            if (!building) {
                this._events.set([]);
                return;
            }
            const sys = await querySystemsWithEmails({ in: this.calendar })
                .then((r) => r.data?.[0])
                .catch(() => null);
            if (!sys) {
                this._events.set([]);
                return;
            }
            const list = await queryEvents({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(
                    endOfDay(options.end || options.date || Date.now()),
                ),
                system_ids: sys.id,
            }).catch(() => []);
            const events = list
                .filter(
                    (_) =>
                        (_.permission !== 'private' ||
                            currentUser()?.email === _.creator ||
                            currentUser()?.email === _.host ||
                            currentUser()?.email === _.mailbox) &&
                        _.extension_data.shared_event,
                )
                .sort((a, b) => a.date - b.date);
            this._events.set(events);
            const tags = events
                .map((event) => event.extension_data.tags || [])
                .flat();
            this._tag_list.set(unique([...this._tag_list(), ...tags]));
        });
    }

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.update((old_options) => ({ ...old_options, ...options }));
    }

    public setFilters(filters: Partial<GroupEventFilters>) {
        this._filters.update((old_filters) => ({ ...old_filters, ...filters }));
    }
}
