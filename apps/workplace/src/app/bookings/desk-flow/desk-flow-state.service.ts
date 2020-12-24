import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { getModule, listChildMetadata, showMetadata } from '@placeos/ts-client';
import { Booking, checkinBooking, queryBookings, saveBooking } from '@user-interfaces/bookings';
import {
    BaseClass,
    DialogEvent,
    notifyError,
    notifySuccess,
    SettingsService,
} from '@user-interfaces/common';
import { DEFAULT_COLOURS, ExploreStateService } from '@user-interfaces/explore';
import { Desk, OrganisationService } from '@user-interfaces/organisation';
import { StaffService, User } from '@user-interfaces/users';
import { endOfDay, startOfDay } from 'date-fns';
import { ExploreDeskInfoComponent } from 'libs/explore/src/lib/explore-desk-info.component';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    first,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { DeskFlowConfirmModalComponent } from './desk-flow-confirm-modal.component';
import { DeskFlowQuestionsModalComponent } from './desk-flow-questions-modal.component';

export interface DeskFlowState {
    date?: number;
    zones?: string[];
    filter_sit_to_stand?: boolean;
    filter_dual_monitors?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class DeskFlowStateService extends BaseClass {
    private _options = new BehaviorSubject<DeskFlowState>({
        date: new Date().valueOf(),
        zones: [],
        filter_sit_to_stand: false,
        filter_dual_monitors: false,
    });

    private _loading = new BehaviorSubject<boolean>(false);

    private _host: User;

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    public readonly todays_bookings = timer(1000).pipe(
        switchMap((_) =>
            queryBookings({
                period_start: Math.floor(startOfDay(new Date()).valueOf() / 1000),
                period_end: Math.floor(endOfDay(new Date()).valueOf() / 1000),
                type: 'desk',
            })
        ),
        map((list) =>
            list.filter((i) => i.user_email === this._staff.current.email)
        )
    );

    public readonly desk_list = this._options.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((opts) => {
            const { zones } = opts;
            if (zones.length) {
                const level = this._org.levelWithID(zones);
                if (level) {
                    return showMetadata(level.id, { name: 'desks' }).pipe(
                        map((m) =>
                            m.details
                                .filter((i) => {
                                    if (opts.filter_sit_to_stand)
                                        return i.sit_to_stand;
                                    return true;
                                })
                                .filter((i) => {
                                    if (opts.filter_dual_monitors)
                                        return i.dual_monitors;
                                    return true;
                                })
                                .map((i) => new Desk({ ...i, zone: level }))
                        )
                    );
                }
                return listChildMetadata(zones[0], { name: 'desks' }).pipe(
                    map((d) =>
                        d.reduce(
                            (l, m) =>
                                l.concat(
                                    m.metadata.desks.details instanceof Array
                                        ? m.metadata.desks.details
                                              .filter((i) => {
                                                  if (opts.filter_sit_to_stand)
                                                      return i.sit_to_stand;
                                                  return true;
                                              })
                                              .filter((i) => {
                                                  if (opts.filter_dual_monitors)
                                                      return i.dual_monitors;
                                                  return true;
                                              })
                                              .map(
                                                  (i) =>
                                                      new Desk({
                                                          ...i,
                                                          zone: m.zone,
                                                      })
                                              )
                                        : []
                                ),
                            []
                        )
                    )
                );
            }
            return Promise.resolve([]);
        }),
        shareReplay()
    );

    public readonly desk_availability: Observable<Desk[]> = combineLatest([
        this._options,
        this.desk_list,
    ]).pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(async (details) => {
            this._loading.next(true);
            const [options, desks] = details;
            const date = startOfDay(
                options.date ? new Date(options.date) : new Date()
            );
            return [
                desks,
                await queryBookings({
                        period_start: Math.floor(date.valueOf() / 1000),
                        period_end: Math.floor(endOfDay(date).valueOf() / 1000),
                        type: 'desk',
                        zones: (options.zones || [])[0],
                    }).toPromise()
                    .catch((_) => []),
            ];
        }),
        map((details) => {
            const [desks, bookings] = details;
            const active_bookings = bookings.filter(
                (bkn) => bkn.status !== 'declined'
            );
            const user_groups = this._staff.current.groups;
            const bookable_desks = desks.filter(
                (i) =>
                    i.bookable &&
                    (!i.group ||
                        user_groups.includes((i.group || '').toLowerCase()))
            );
            this.processDeskBookings(details);
            this._loading.next(false);
            return bookable_desks.filter(
                (desk) =>
                    !active_bookings.find((bkn) => bkn.asset_id === desk.id)
            );
        }),
        shareReplay()
    );

    constructor(
        private _state: ExploreStateService,
        private _staff: StaffService,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {
        super();
        this.subscription(
            'level',
            this._state.level.subscribe((lvl) =>
                lvl ? this.setOptions({ zones: [lvl.id] }) : ''
            )
        );
        this.subscription(
            'availability',
            combineLatest([this.desk_availability, this.desk_list])
                .pipe(debounceTime(500))
                .subscribe((details) => this.handleDeskAvailability(details))
        );
    }

    public startPolling(delay: number = 5000) {
        this.interval(
            'poll',
            () => this._options.next({ ...this._options.getValue() }),
            delay
        );

    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public setOptions(state: DeskFlowState) {
        this._options.next({ ...this._options.getValue(), ...state });
    }

    public setHost(host: User) {
        this._host = host;
    }

    public async checkin(id: string) {
        const bookings = await queryBookings({
            period_start: Math.floor(startOfDay(new Date()).valueOf() / 1000),
            period_end: Math.floor(endOfDay(new Date()).valueOf() / 1000),
            type: 'desk',
        }).toPromise();
        const bkn = bookings.find((b) => b.asset_id === id);
        if (!bkn) return false;
        const done = await checkinBooking(bkn.id, true).toPromise();
        return true;
    }

    public async bookDesk(desk: Desk, reason: string = '') {
        if (!this._host) {
            return notifyError('A host needs to be set before booking a desk.');
        }
        const level = this._org.levelWithID(
            desk.zone instanceof Array ? desk.zone : [desk.zone?.id]
        );
        let ref: MatDialogRef<any> = this._dialog.open(
            DeskFlowQuestionsModalComponent
        );
        let success = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_: DialogEvent) => _.reason === 'done'))
                .toPromise(),
            ref
                .afterClosed()
                .pipe(map((_) => null))
                .toPromise(),
        ]);
        if (!success) return;
        ref.close();
        const options = this._options.getValue();
        ref = this._dialog.open(DeskFlowConfirmModalComponent, {
            data: {
                desk,
                date: options.date || new Date().valueOf(),
                reason,
                level,
            },
        });
        success = await Promise.race([
            ref.componentInstance.event
                .pipe(first((_: DialogEvent) => _.reason === 'done'))
                .toPromise(),
            ref
                .afterClosed()
                .pipe(map((_) => null))
                .toPromise(),
        ]);
        if (!success) return;
        ref.componentInstance.loading =
            'Checking for existing desk bookings...';
        const bookings = await queryBookings({
            type: 'desk',
            period_start: Math.floor(
                startOfDay(options.date || new Date()).valueOf() / 1000
            ),
            period_end: Math.floor(
                endOfDay(options.date || new Date()).valueOf() / 1000
            ),
        }).toPromise();
        const desks = bookings.filter(
            (d) =>
                d.user_email.toLowerCase() ===
                this._host.email.toLowerCase()
        );
        if (desks?.length) {
            ref.close();
            return notifyError(
                'You currently already have a desk booked for the selected date.'
            );
        }
        ref.componentInstance.loading = 'Booking desk...';
        await this.makeDeskBooking(
            desk,
            options.date || new Date().valueOf(),
            reason
        );
        notifySuccess('Successfully booked desk');
        setTimeout(() => this.setOptions({}), 100); // Force refresh of availble desks
        ref.close();
        return true;
    }

    private async makeDeskBooking(desk: Desk, date: number, reason: string) {
        const location = `${desk.zone?.name}-${desk.id}`;
        const options = this._options.getValue();
        const level = this._org.levelWithID(
            desk.zone instanceof Array ? desk.zone : [desk.zone?.id]
        );
        const zones = desk.zone?.id
            ? [desk.zone?.id, level?.parent_id || options.zones[0]]
            : [level?.parent_id || options.zones[0]];
        const booking_data = {
            booking_start: Math.floor(
                startOfDay(options.date).valueOf() / 1000
            ),
            user_id: this._host.id,
            user_name: this._host.name,
            user_email: this._host.email,
            booking_end: Math.floor(endOfDay(options.date).valueOf() / 1000),
            asset_id: desk.id,
            title: reason,
            description: location,
            zones,
            booking_type: 'desk',
            extension_data: {
                group: desk.group,
            },
        };
        return saveBooking(booking_data as any);
    }

    private handleDeskAvailability([available, desks]: [Desk[], Desk[]]) {
        const style_map = {};
        const actions = [];
        const user_groups = this._staff.current.groups as any[];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk of desks) {
            const status =
                !desk.bookable ||
                (desk.group &&
                    !user_groups.includes((desk.group || '').toLowerCase()))
                    ? 'not-bookable'
                    : available.find((d) => d.id === desk.id)
                    ? 'free'
                    : 'busy';
            style_map[`#${desk.id}`] = {
                fill:
                    colours[`desk-${status}`] ||
                    colours[`${status}`] ||
                    DEFAULT_COLOURS[`${status}`],
                opacity: 0.6,
            };
            if (status === 'free') {
                actions.push({
                    id: desk.id,
                    action: 'click',
                    zone: false,
                    callback: () => this.bookDesk(desk),
                });
                actions.push({
                    id: desk.id,
                    action: 'touchend',
                    zone: false,
                    callback: () => this.bookDesk(desk),
                });
            }
        }
        this._state.setStyles('desks', style_map);
        this._state.setActions('desks', actions);
    }

    private processDeskBookings(details) {
        const [desks, bookings] = details;
        const list = [];
        for (const desk of desks) {
            const booking: Booking = bookings.find(
                (bkn) => bkn.asset_id === desk.id
            );
            list.push({
                location: desk.id,
                content: ExploreDeskInfoComponent,
                hover: true,
                data: {
                    map_id: desk.name,
                    user: booking?.user_name,
                    start: booking?.date,
                    end: booking?.date + booking?.duration * 60 * 1000,
                    status: booking ? 'busy' : 'free',
                },
            });
        }
        this._state.setFeatures('desks', list);
    }
}
