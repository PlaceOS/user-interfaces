import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    AsyncHandler,
    CalendarEvent,
    OrganisationService,
    SettingsService,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import {
    GroupEventDetailsModalComponent,
    queryEvents,
    removeEvent,
} from '@placeos/events';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';

export interface GroupEventOptions {
    period: 'week' | 'month';
    date?: number;
    end?: number;
    zone_ids?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class EventStateService extends AsyncHandler {
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _router = inject(Router);

    private readonly _poll = signal(0);
    private readonly _changed = signal(0);

    public readonly options = signal<GroupEventOptions>({ period: 'week' });
    public readonly loading = signal<string>('');
    public readonly event_list = signal<CalendarEvent[]>([]);

    /** Events grouped by `yyyy-MM-dd`, each with calendar `offset`/`length` */
    public readonly event_day_map = computed(() => {
        const map: Record<string, any[]> = {};
        for (const event of this.event_list()) {
            const date = format(event.date, 'yyyy-MM-dd');
            if (!map[date]) map[date] = [];
            const start = new Date(event.date);
            map[date].push({
                ...event,
                offset:
                    (start.getHours() * 60 + start.getMinutes()) / (24 * 60),
                length: event.duration / (24 * 60),
            });
        }
        return map;
    });

    constructor() {
        super();
        effect(() => {
            const bld = this._org.active_building();
            const options = this.options();
            this._changed();
            this._poll();
            if (!bld) return;
            this.timeout('load', () => this._load(options), 310);
        });
    }

    private async _load(options: GroupEventOptions) {
        this.loading.set(i18n('APP.CONCIERGE.EVENTS_LOADING'));
        let list = await queryEvents({
            period_start: getUnixTime(startOfDay(options.date)),
            period_end: getUnixTime(
                endOfDay(options.end || options.date || Date.now()),
            ),
            calendars: this.calendar,
        });
        const zone_ids = options.zone_ids || [];
        if (zone_ids.length) {
            list = list.filter((event) =>
                event.resources?.some((space) =>
                    (space.zones || []).some((zone) =>
                        zone_ids.includes(zone),
                    ),
                ),
            );
        }
        list = list
            .filter((_) => _.extension_data?.shared_event)
            .sort((a, b) => a.date - b.date);
        this.event_list.set(list);
        this.loading.set('');
    }

    public changed() {
        this.timeout('changed', () => this._changed.set(Date.now()), 100);
    }

    public get period() {
        return this.options()?.period;
    }

    public get calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public startPolling(delay = 60 * 1000) {
        this.interval(
            'poll',
            () => (document.hasFocus() ? this._poll.set(Date.now()) : ''),
            delay,
        );
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<GroupEventOptions>) {
        const current_options = this.options();
        const next_options = { ...current_options, ...options };
        if (this._sameOptions(current_options, next_options)) return;
        this.options.set(next_options);
    }

    private _sameOptions(
        current_options: GroupEventOptions,
        next_options: GroupEventOptions,
    ) {
        return (
            current_options?.period === next_options?.period &&
            current_options?.date === next_options?.date &&
            current_options?.end === next_options?.end &&
            this._sameZoneIds(current_options?.zone_ids, next_options?.zone_ids)
        );
    }

    private _sameZoneIds(zone_ids_a: string[] = [], zone_ids_b: string[] = []) {
        if (zone_ids_a === zone_ids_b) return true;
        if (zone_ids_a.length !== zone_ids_b.length) return false;
        return zone_ids_a.every(
            (zone_id, index) => zone_id === zone_ids_b[index],
        );
    }

    public viewEvent(event: CalendarEvent) {
        const ref = this._dialog.open(GroupEventDetailsModalComponent, {
            data: {
                event,
                concierge: true,
                edit_fn: (i) =>
                    this._router.navigate([
                        '/entertainment',
                        'events',
                        'manage',
                        event.id,
                    ]),
                remove_fn: async () => {
                    await this.removeEvent(event);
                    ref.close();
                },
            },
        });
    }

    public async removeEvent(event: CalendarEvent) {
        const result = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.EVENTS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.EVENTS_REMOVE_MSG', {
                    title: event.title,
                }),
                icon: { content: 'delete' },
                confirm_text: i18n('COMMON.REMOVE'),
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(i18n('APP.CONCIERGE.EVENTS_REMOVE_LOADING'));
        await removeEvent(event.id, {
            calendar: this.calendar,
        }).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.EVENTS_REMOVE_ERROR', { error: e }),
            );
            result.close();
            throw e;
        });
        result.close();
        notifySuccess(i18n('APP.CONCIERGE.EVENTS_REMOVE_SUCCESS'));
        this._changed.set(Date.now());
    }
}
