import {
    Injectable,
    computed,
    debounced,
    effect,
    inject,
    signal,
} from '@angular/core';
import { addDays, addMinutes, format, getUnixTime, startOfDay } from 'date-fns';

import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    checkinBooking,
    queryBookings,
    rejectBooking,
    updateBooking,
    updateBookingInductionStatus,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    Building,
    MINUTES,
    OrganisationService,
    SettingsService,
    downloadFile,
    getTimezoneDifferenceInHours,
    i18n,
    jsonToCsv,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { VisitorInductionModalComponent } from './visitor-induction-modal.component';
import { VisitorNotesModalComponent } from './visitor-notes-modal.component';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
    all_bookings?: boolean;
    period?: number;
}

@Injectable({
    providedIn: 'root',
})
export class VisitorsStateService extends AsyncHandler {
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private readonly _poll = signal(0);

    private readonly _search = signal<string>('');

    public readonly loading = signal<boolean>(false);

    public readonly filters = signal<VisitorFilters>({});

    /** List of visitor bookings for the active building and filters */
    public readonly bookings = signal<Booking[]>([]);
    private readonly _load_params = computed(
        () => ({
            building: this._org.active_building(),
            filters: this.filters(),
            poll: this._poll(),
        }),
        {
            equal: (a, b) =>
                a.building?.id === b.building?.id &&
                a.poll === b.poll &&
                a.filters.date === b.filters.date &&
                a.filters.period === b.filters.period &&
                a.filters.all_bookings === b.filters.all_bookings &&
                (a.filters.zones || []).join(',') ===
                    (b.filters.zones || []).join(','),
        },
    );
    private readonly _load_params_debounced = debounced(this._load_params, 500);

    /** Visitor bookings filtered by the current search string */
    public readonly filtered_bookings = computed(() => {
        const search = this._search().toLowerCase();
        return this.bookings()
            .filter(
                (_) =>
                    _.asset_name?.toLowerCase().includes(search) ||
                    _.user_name?.toLowerCase().includes(search) ||
                    _.user_email?.toLowerCase().includes(search) ||
                    _.asset_id?.toLowerCase().includes(search),
            )
            .sort((a, b) => a.date - b.date);
    });

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    constructor() {
        super();
        effect(() => {
            const { building, filters } = this._load_params_debounced.value();
            if (!building) return;
            this._load(building, filters);
        });
    }

    private async _load(building: Building, filters: VisitorFilters) {
        this.loading.set(true);
        const date = filters.date ? new Date(filters.date) : new Date();
        const start = addMinutes(startOfDay(date), this.tz_offset * 60);
        const end = addDays(start, filters.period || 1);
        const list = await queryBookings({
            type: 'visitor',
            period_start: getUnixTime(start),
            period_end: getUnixTime(end),
            zones: (filters.zones || []).join(',') || building.id,
            include_checked_out: true,
            include_deleted: true,
            limit: 1000,
        }).catch((_) => [] as Booking[]);
        this.bookings.set(list);
        this.loading.set(false);
    }

    public get search() {
        return this._search();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    public get is_induction_enabled() {
        return (
            this._settings.get('app.induction_enabled') &&
            this._settings.get('app.induction_details')
        );
    }

    public setFilters(filters: VisitorFilters) {
        this.filters.update((current) => ({ ...current, ...filters }));
    }

    public setSearchString(search: string) {
        this._search.set(search);
    }

    public poll() {
        this._poll.update((value) => value + 1);
    }

    public startPolling(delay: number = 3 * MINUTES) {
        const poll_delay = Math.max(delay, 3 * MINUTES);
        this.interval('poll', () => this.poll(), poll_delay);
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async setExt<T = any>(guest: Booking, field: string, value: T) {
        const extension_data = { ...guest.extension_data };
        extension_data[field] = value;
        await updateBooking(guest.id, {
            ...guest.toJSON(),
            extension_data,
        });
        this.poll();
    }

    public async approveVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: 'Approve Visitor',
                content: `Approve attendance of ${
                    item.asset_name || item.asset_id
                } to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await approveBooking(item.id).catch((e) => {
            notifyError(
                `Error approving visitor: ${e.message || e.error || e}`,
            );
            details.close();
            throw e;
        });
        notifySuccess(`Successfully approved visitor`);
        this.poll();
        details.close();
    }

    public async declineVisitor(item: Booking) {
        const details = await openConfirmModal(
            {
                title: 'Decline Visitor',
                content: `Decline attendance of ${
                    item.asset_name || item.asset_id
                } to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog,
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await rejectBooking(item.id).catch((e) => {
            notifyError(
                `Error declining visitor: ${e.message || e.error || e}`,
            );
            details.close();
            throw e;
        });
        notifySuccess(`Successfully declining visitor`);
        this.poll();
        details.close();
    }

    public async requestInduction(item: Booking) {
        if (!this.is_induction_enabled) return true;
        const ref = this._dialog.open(VisitorInductionModalComponent, {
            data: { item },
        });
        const result = await ref.afterClosed().toPromise();
        if (result === false) {
            await updateBookingInductionStatus(item.id, 'declined');
        }
        if (!result) throw 'User declined';
        await updateBookingInductionStatus(item.id, 'accepted');
        return true;
    }

    public async setCheckinState(item: Booking, state = true) {
        if (item.rejected) throw 'You cannot check-in a rejected meeting';
        if (state === true) await this.requestInduction(item);
        if (!item.approved && state === true) {
            await approveBooking(item.id);
        }
        const new_user = await checkinBooking(item.id, state).catch((e) => {
            notifyError(
                `Error checking ${state ? 'in' : 'out'} ${
                    item.asset_name || item.asset_id
                } for ${item.user_name}'s meeting`,
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked ${state ? 'in' : 'out'} ${
                item.asset_name || item.asset_id
            } from ${item.user_name}'s meeting`,
        );
    }

    public async setCheckinStateForEvent(event_id: string, state = true) {
        if (!event_id) return;
        const bookings = this.bookings() || [];
        const event_bookings = bookings.filter(
            (_) =>
                _.parent_id === event_id ||
                _.extension_data.parent_id === event_id ||
                _.linked_event?.id === event_id ||
                _.linked_event?.event_id === event_id,
        );
        if (!event_bookings.length) return;
        await Promise.all(
            event_bookings.map((_) =>
                checkinBooking(_.id, state).catch((e) => {
                    notifyError(
                        `Error checking ${state ? 'in' : 'out'} ${
                            _.asset_name || _.asset_id
                        } for ${_.user_name}'s meeting`,
                    );
                    throw e;
                }),
            ),
        );
        notifySuccess(
            `Successfully checked ${state ? 'in' : 'out'} all visitors from ${
                event_bookings[0].user_name
            }'s meeting`,
        );
        this.poll();
    }

    public async downloadVisitorsList() {
        const bookings = this.filtered_bookings();
        if (!bookings.length) return;
        const { date } = this.filters();
        const list = bookings.map((_) => ({
            Name: _.asset_name,
            Email: _.asset_id,
            'Checked In': _.checked_in,
            Host: _.user_email || '',
            Status: _.status,
            Date: format(_.date, 'dd MMM ' + this.time_format),
        }));
        const data = jsonToCsv(list);
        downloadFile(
            `visitor-list-${format(date || Date.now(), 'MMM-dd')}.csv`,
            data,
        );
    }

    public editVisitorNotes(item: Booking) {
        const ref = this._dialog.open(VisitorNotesModalComponent, {
            data: { item },
        });
        ref.afterClosed().subscribe(() => this.poll());
    }

    public async emailVisitor(item: Booking) {
        const mod = this._org.module('visitor_access', 'VisitorAccess');
        if (!mod) return;
        await mod.execute('grant_and_notify_access', [
            item.asset_id,
            item.asset_name,
            item.booked_by_email,
            item.title,
            item.booking_start,
        ]);
        notifySuccess(i18n('APP.CONCIERGE.VISITOR_EMAIL_SUCCESS'));
    }
}
