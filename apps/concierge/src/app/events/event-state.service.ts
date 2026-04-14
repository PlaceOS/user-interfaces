import { Injectable, inject } from '@angular/core';
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
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import {
    debounceTime,
    filter,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

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

    private _options = new BehaviorSubject<GroupEventOptions>({
        period: 'week',
    });
    private _loading = new BehaviorSubject<string>('');
    private _poll = new BehaviorSubject(0);
    private _changed = new BehaviorSubject(0);

    public readonly event_list = combineLatest([
        this._org.active_building,
        this._options,
        this._changed,
        this._poll,
    ]).pipe(
        filter(([bld]) => !!bld),
        debounceTime(310),
        switchMap(([_, options]) => {
            this._loading.next(i18n('APP.CONCIERGE.EVENTS_LOADING'));
            return queryEvents({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(
                    endOfDay(options.end || options.date || Date.now()),
                ),
                calendars: this.calendar,
            }).pipe(
                map((list) => {
                    const zone_ids = this._options.getValue().zone_ids || [];
                    if (!zone_ids.length) return list;
                    return list.filter((event) =>
                        event.resources?.some((space) =>
                            (space.zones || []).some((zone) =>
                                zone_ids.includes(zone),
                            ),
                        ),
                    );
                }),
            );
        }),
        map((list) =>
            list
                .filter((_) => _.extension_data?.shared_event)
                .sort((a, b) => a.date - b.date),
        ),
        tap(() => this._loading.next('')),
        shareReplay(1),
    );

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    public changed() {
        this.timeout('changed', () => this._changed.next(Date.now()), 100);
    }

    public get period() {
        return this._options.getValue()?.period;
    }

    public get calendar() {
        return this._settings.get('app.group_events_calendar');
    }

    public startPolling(delay = 60 * 1000) {
        this.interval(
            'poll',
            () => (document.hasFocus() ? this._poll.next(Date.now()) : ''),
            delay,
        );
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<GroupEventOptions>) {
        const current_options = this._options.value;
        const next_options = { ...current_options, ...options };
        if (this._sameOptions(current_options, next_options)) return;
        this._options.next(next_options);
    }

    private _sameOptions(
        current_options: GroupEventOptions,
        next_options: GroupEventOptions,
    ) {
        return (
            current_options?.period === next_options?.period &&
            current_options?.date === next_options?.date &&
            current_options?.end === next_options?.end &&
            this._sameZoneIds(
                current_options?.zone_ids,
                next_options?.zone_ids,
            )
        );
    }

    private _sameZoneIds(
        zone_ids_a: string[] = [],
        zone_ids_b: string[] = [],
    ) {
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
        })
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.EVENTS_REMOVE_ERROR', { error: e }),
                );
                result.close();
                throw e;
            });
        result.close();
        notifySuccess(i18n('APP.CONCIERGE.EVENTS_REMOVE_SUCCESS'));
        this._changed.next(Date.now());
    }
}
