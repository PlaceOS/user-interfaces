import { Injectable } from '@angular/core';
import { listChildMetadata, showMetadata } from '@placeos/ts-client';
import {
    Booking,
    checkinBooking,
    DesksService,
    queryBookings,
} from '@placeos/bookings';
import { BaseClass, currentUser, SettingsService } from '@placeos/common';
import { DEFAULT_COLOURS, ExploreStateService } from '@placeos/explore';
import { Desk, OrganisationService } from '@placeos/organisation';
import { StaffUser, User } from '@placeos/users';
import { endOfDay, startOfDay } from 'date-fns';
import { ExploreDeskInfoComponent } from '../../../../../../libs/explore/src/lib/explore-desk-info.component';
import { BehaviorSubject, combineLatest, Observable, timer } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

export interface DeskFlowState {
    date?: number;
    zones?: string[];
    attendees: User[];
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
        attendees: [],
        filter_sit_to_stand: false,
        filter_dual_monitors: false,
    });

    private _loading = new BehaviorSubject<boolean>(false);

    private _host = new BehaviorSubject<User>(null);

    public readonly host = this._host.asObservable();
    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

    public readonly todays_bookings = timer(1000).pipe(
        switchMap((_) =>
            queryBookings({
                period_start: Math.floor(
                    startOfDay(new Date()).valueOf() / 1000
                ),
                period_end: Math.floor(endOfDay(new Date()).valueOf() / 1000),
                type: 'desk',
            })
        ),
        map((list) => list.filter((i) => i.user_email === currentUser().email))
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
                                    m.metadata.desks?.details instanceof Array
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
        shareReplay(1)
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
                })
                    .toPromise()
                    .catch((_) => []),
            ];
        }),
        map((details) => {
            const [desks, bookings] = details;
            const active_bookings = bookings.filter(
                (bkn) => bkn.status !== 'declined'
            );
            const user_groups = currentUser()?.groups || [];
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
        shareReplay(1)
    );

    constructor(
        private _state: ExploreStateService,
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _desks: DesksService
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
        this._desks.can_set_date = false;
        this._desks.error_on_host = false;
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this._desks.can_set_date = true;
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

    public setOptions(state: Partial<DeskFlowState>) {
        this._options.next({ ...this._options.getValue(), ...state });
    }

    public setHost(host: User) {
        this._host.next(host);
    }

    public async checkin(id: string) {
        const bookings = await queryBookings({
            period_start: Math.floor(startOfDay(new Date()).valueOf() / 1000),
            period_end: Math.floor(endOfDay(new Date()).valueOf() / 1000),
            type: 'desk',
        }).toPromise();
        const bkn = bookings.find((b) => b.asset_id === id);
        if (!bkn) return false;
        await checkinBooking(bkn.id, true).toPromise();
        return true;
    }

    public async bookDesk(desks: Desk | Desk[], reason: string = '') {
        return this._desks.bookDesk({
            desks: desks instanceof Desk ? [desks] : desks,
            host: this._host.getValue() as StaffUser,
            attendees: this._options.getValue().attendees || [],
            reason,
            date: new Date(this._options.getValue().date),
        });
    }

    private handleDeskAvailability([available, desks]: [Desk[], Desk[]]) {
        const style_map = {};
        const actions = [];
        const user_groups = currentUser()?.groups || [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk of desks) {
            const status =
                !desk.bookable ||
                (desk.groups &&
                    !desk.groups.find((_) => user_groups.includes(_)))
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
