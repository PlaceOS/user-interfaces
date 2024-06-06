import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listChildMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    first,
    map,
    scan,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';

import {
    approveBooking,
    Booking,
    checkinBooking,
    queryPagedBookings,
    rejectBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    notifyError,
    notifyInfo,
    notifySuccess,
    openConfirmModal,
    randomInt,
    SettingsService,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';

import { generateQRCode } from 'libs/common/src/lib/qr-code';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { DeskModalComponent } from './desk-modal.component';

function addQRCodeToBooking(booking: Booking): Booking {
    return new Booking({
        ...booking,
        extension_data: {
            ...booking.extension_data,
            checkin_qr_code: generateQRCode(
                `/workplace/#/book/code?asset_id=${encodeURIComponent(
                    booking.asset_id
                )}`
            ),
        },
    });
}

export interface DeskFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends AsyncHandler {
    private _filters = new BehaviorSubject<DeskFilters>({});
    private _desk_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject(0);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly desks: Observable<Desk[]> = combineLatest([
        this._filters,
        this._change,
    ]).pipe(
        debounceTime(500),
        switchMap(([filters]) => {
            const zones = filters.zones || [];
            return zones && !zones.includes('All')
                ? showMetadata(zones[0], 'desks').pipe(
                      map((m) => (m.details instanceof Array ? m.details : [])),
                      catchError((_) => of([]))
                  )
                : listChildMetadata(this._org.building?.id, {
                      name: 'desks',
                  }).pipe(
                      map((m) =>
                          m
                              .map((i) => i.metadata?.desks?.details || [])
                              .reduce((c: any[], i: any[]) => [...c, ...i], [])
                      ),
                      catchError((_) => of([]))
                  );
        }),
        map((list) => {
            if (!(list instanceof Array)) list = [];
            list.sort((a, b) => a.name?.localeCompare(b.name));
            return list.map((i) => new Desk({ ...i, qr_code: '' }));
        }),
        shareReplay(1)
    );

    private _next_page = new Subject<() => QueryResponse<Booking>>();
    private _call_next_page = new Subject<string>();
    private _all_zones_keys = ['All', -1, '-1'];
    public readonly setup_paging = combineLatest([
        this._filters,
        this._org.initialised,
    ]).pipe(
        debounceTime(500),
        tap(([filters, loaded]) => {
            if (!loaded) return;
            const date = filters.date || Date.now();
            const zones =
                !filters.zones ||
                filters.zones.some((z) => this._all_zones_keys.includes(z))
                    ? this._settings.get('app.use_region')
                        ? this._org.buildingsForRegion().map((_) => _.id)
                        : [this._org.building.id]
                    : filters.zones;
            this._next_page.next(() =>
                queryPagedBookings({
                    period_start: getUnixTime(startOfDay(date)),
                    period_end: getUnixTime(endOfDay(date)),
                    type: 'desk',
                    zones: zones.join(','),
                    include_checked_out: true,
                }).pipe(
                    catchError((_) => of({ data: [], total: 0, next: null }))
                )
            );
            this._call_next_page.next(`RESET_${Date.now()}`);
        })
    );

    public readonly paged_bookings = combineLatest([
        this._next_page,
        this._call_next_page,
    ]).pipe(
        distinctUntilChanged((a, b) => a[1] === b[1]),
        switchMap(([next_page, action]) => {
            this._loading.next(true);
            if (!next_page) {
                return of({
                    data: [],
                    total: 0,
                    next: null,
                    reset: action.includes('RESET'),
                });
            }
            // If reset is true, start over
            if (action.includes('RESET')) {
                return next_page().pipe(
                    map((data: any) => ({ ...data, reset: true })),
                    catchError((_) => of({ data: [], total: 0, next: null }))
                );
            }
            return next_page().pipe(
                map((data: any) => ({ ...data, reset: false })),
                catchError((_) => of({ data: [], total: 0, next: null }))
            );
        }),
        scan(
            (acc, { data, total, next, reset }) => {
                const list = data;
                this._next_page.next(next); // Set the next page function
                if (reset) return { list, total }; // Reset the items array
                return {
                    list: [...acc.list, ...list],
                    total,
                };
            },
            { list: [], total: 0 }
        ),
        tap((_) => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly has_more_pages = this.paged_bookings.pipe(
        map((_) => _.list.length < _.total)
    );
    public readonly bookings = this.paged_bookings.pipe(map((i) => i.list));

    public nextPage() {
        this._call_next_page.next(`NEXT_${Date.now()}`);
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {
        super();
        this.setup_paging.subscribe();
    }

    public setFilters(filters: DeskFilters) {
        if (filters.zones?.includes('All')) {
            filters.zones = [
                'All',
                ...this._org
                    .levelsForBuilding(this._org.building)
                    .map((lvl) => lvl.id),
            ];
        } else if (
            filters.zones &&
            this._filters.getValue()?.zones?.includes('All')
        ) {
            filters.zones = [];
        }
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public refresh() {
        this._loading.next(true);
        this.timeout('poll', () => this.setFilters(this._filters.getValue()));
    }

    public async addDesks(list: Desk[]) {
        const zone = this._filters.getValue().zones[0];
        const desk_list = await this.desks.pipe(take(1)).toPromise();
        for (const desk of list) {
            const idx = desk_list.findIndex((_) => _.id === desk.id);
            if (idx >= 0) desk_list[idx] = desk;
            else desk_list.push(desk);
        }
        await updateMetadata(zone, {
            name: 'desks',
            details: desk_list,
            description: 'List of available desks',
        }).toPromise();
        this._change.next(Date.now());
    }

    public async editDesk(desk?: Desk) {
        const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._filters.getValue().zones[0];
        const new_space = {
            ...state.metadata,
            id: state.metadata.id || `parking-${zone}.${randomInt(999_999)}`,
        };
        const desk_list = await this.desks.pipe(take(1)).toPromise();
        const idx = desk_list.findIndex((_) => _.id === new_space.id);
        if (idx >= 0) desk_list[idx] = new_space;
        else desk_list.push(new_space);
        await updateMetadata(zone, {
            name: 'desks',
            details: desk_list,
            description: 'List of available desks',
        }).toPromise();
        this._change.next(Date.now());
        ref.close();
    }

    public async checkinDesk(desk: Booking, state: boolean = true) {
        const status: any = await checkinBooking(desk.id, state ?? true)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            notifyError(
                status.error
                    ? `Error: ${status.error}`
                    : `Error checking ${state ? 'in' : 'out'} desk booking`
            );
            throw status.error;
        }
        notifySuccess(`Checked ${state ? 'in' : 'out'} ${desk.user_name}.`);
    }

    public async approveDesk(desk: Booking) {
        const success = await approveBooking(desk.id)
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError('Error approving in desk booking');
        }
        notifySuccess(
            `Approved desk booking for ${desk.user_name} on ${format(
                desk.date,
                'MMM do'
            )}.`
        );
        (desk as any).approved = true;
        (desk as any).rejected = false;
    }

    public async rejectDesk(desk: Booking) {
        const success = await rejectBooking(desk.id)
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError('Error rejecting in desk booking');
        }
        notifySuccess(
            `Rejected desk booking for ${desk.user_name} on ${format(
                desk.date,
                'MMM do'
            )}.`
        );
        (desk as any).approved = false;
        (desk as any).rejected = true;
    }

    public async giveAccess(desk: Booking) {
        const success = await saveBooking(
            new Booking({ ...desk, access: true })
        )
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed')
            return notifyError('Error giving building access booking host');
        notifySuccess(
            `Successfully gave building access to ${desk.user_name} for desk booking.`
        );
        this._desk_bookings = [...this._desk_bookings, success] as any;
    }

    public async rejectAllDesks() {
        const list = this._desk_bookings || [];
        if (list.length <= 0)
            return notifyInfo('No desks to reject for the selected date');
        const resp = await openConfirmModal(
            {
                title: 'Cancel all desk bookings',
                content:
                    'Are you sure you want to cancel all bookings for the selected date?',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'delete',
                },
            },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Rejecting all desks for selected date...');
        await Promise.all(
            list.map((desk) => rejectBooking(desk.id).toPromise())
        );
        notifySuccess(
            'Successfully rejected all desk bookings for selected date.'
        );
        resp.close();
    }
}
