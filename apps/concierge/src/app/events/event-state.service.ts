import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    Booking,
    GroupEventDetailsModalComponent,
    queryBookings,
    removeBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    SettingsService,
    notifyError,
    notifySuccess,
    openConfirmModal,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';

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
    private _options = new BehaviorSubject<GroupEventOptions>({
        period: 'week',
    });
    private _poll = new BehaviorSubject(0);
    private _changed = new BehaviorSubject(0);

    public readonly event_list = combineLatest([
        this._org.active_building,
        this._options,
        this._changed,
        this._poll,
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, options]) =>
            queryBookings({
                period_start: getUnixTime(startOfDay(options.date)),
                period_end: getUnixTime(
                    endOfDay(options.end || options.date || Date.now())
                ),
                type: 'group-event',
                zones: options.zone_ids?.join(',') || bld.id,
            })
        ),
        map((list) => list.sort((a, b) => a.date - b.date)),
        shareReplay(1)
    );

    public readonly options = this._options.asObservable();

    public changed() {
        this._changed.next(Date.now());
    }

    public get period() {
        return this._options.getValue()?.period;
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _router: Router
    ) {
        super();
    }

    public startPolling(delay = 60 * 1000) {
        this.interval(
            'poll',
            () => (document.hasFocus() ? this._poll.next(Date.now()) : ''),
            delay
        );
        return () => this.stopPolling();
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(options: Partial<GroupEventOptions>) {
        this._options.next({ ...this._options.value, ...options });
    }

    public viewEvent(event: Booking) {
        const ref = this._dialog.open(GroupEventDetailsModalComponent, {
            data: { booking: event, concierge: true },
        });
        this.subscription(
            `edit:${event.id}`,
            ref.componentInstance.edit.subscribe(() => {
                this._router.navigate([
                    '/entertainment',
                    'events',
                    'manage',
                    event.id,
                ]);
            })
        );
        this.subscription(
            `remove:${event.id}`,
            ref.componentInstance.remove.subscribe(async () => {
                await this.removeEvent(event);
                ref.close();
            })
        );
    }

    public async removeEvent(event: Booking) {
        const result = await openConfirmModal(
            {
                title: 'Delete Event',
                content: `Are you sure you want to delete the event "${event.title}"?`,
                icon: { content: 'delete' },
                confirm_text: 'Delete',
            },
            this._dialog
        );
        if (result.reason !== 'done') return;
        result.loading('Deleting event...');
        await removeBooking(event.id)
            .toPromise()
            .catch((e) => {
                notifyError(e);
                result.close();
                throw e;
            });
        result.close();
        notifySuccess('Successfully deleted event.');
        this._changed.next(Date.now());
    }
}
