import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {
    currentUser,
    OrganisationService,
    SettingsService,
    unique,
} from '@placeos/common';
import { queryEventsOrThrow } from '@placeos/events';
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
    private _loading = signal(false);
    private _failed = signal(false);

    public get calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public readonly filters = this._filters.asReadonly();
    public readonly tags = this._tag_list.asReadonly();
    public readonly events = this._events.asReadonly();
    public readonly loading = this._loading.asReadonly();
    /** Whether the last load failed */
    public readonly failed = this._failed.asReadonly();
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
        effect(async (onCleanup) => {
            const building = this._org.active_building();
            const options = this._options();
            if (!building) {
                this._events.set([]);
                this._loading.set(false);
                return;
            }
            // A slow response for an old period must not replace the new one
            let active = true;
            onCleanup(() => (active = false));
            this._loading.set(true);
            this._failed.set(false);
            let failed = false;
            const onError = () => {
                failed = true;
                return null;
            };
            const sys = await querySystemsWithEmails({ in: this.calendar })
                .then((r) => r.data?.[0])
                .catch(onError);
            const list = sys
                ? await queryEventsOrThrow({
                      period_start: getUnixTime(startOfDay(options.date)),
                      period_end: getUnixTime(
                          endOfDay(options.end || options.date || Date.now()),
                      ),
                      system_ids: sys.id,
                  }).catch(onError)
                : null;
            if (!active) return;
            this._loading.set(false);
            this._failed.set(failed);
            const events = (list || [])
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
            this._tag_list.set(unique(tags));
        });
    }

    /** Load the events of the selected period again */
    public reload() {
        this._options.update((options) => ({ ...options }));
    }

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.update((old_options) => ({ ...old_options, ...options }));
    }

    public setFilters(filters: Partial<GroupEventFilters>) {
        this._filters.update((old_filters) => ({ ...old_filters, ...filters }));
    }
}
