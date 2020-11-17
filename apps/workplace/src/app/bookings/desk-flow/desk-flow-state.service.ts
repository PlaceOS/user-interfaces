import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { showMetadata, listChildMetadata } from '@placeos/ts-client';
import { BookingsService } from '@user-interfaces/bookings';
import {
    BaseClass,
    DialogEvent,
    notifySuccess,
    SettingsService,
} from '@user-interfaces/common';
import { DEFAULT_COLOURS, ExploreStateService } from '@user-interfaces/explore';
import { Desk, OrganisationService } from '@user-interfaces/organisation';
import { StaffService } from '@user-interfaces/users';
import { endOfDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
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
}

@Injectable({
    providedIn: 'root',
})
export class DeskFlowStateService extends BaseClass {
    private _options = new BehaviorSubject<DeskFlowState>({
        date: new Date().valueOf(),
        zones: [],
    });

    private _loading = new BehaviorSubject<boolean>(false);

    public readonly options = this._options.asObservable();
    public readonly loading = this._loading.asObservable();

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
                            m.details.map(
                                (i) => new Desk({ ...i, zone: level })
                            )
                        )
                    );
                }
                return listChildMetadata(zones[0], { name: 'desks' }).pipe(
                    map((d) =>
                        d.reduce(
                            (l, m) =>
                                l.concat(
                                    m.metadata.desks.details instanceof Array
                                        ? m.metadata.desks.details.map(
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

    public readonly desk_availability = combineLatest([
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
            console.log('Desks:', desks);
            return [
                desks,
                await this._bookings
                    .query({
                        period_start: Math.floor(date.valueOf() / 1000),
                        period_end: Math.floor(endOfDay(date).valueOf() / 1000),
                        type: 'desk',
                        zone: (options.zones || [])[0],
                    })
                    .catch((_) => []),
            ];
        }),
        map((details) => {
            const [desks, bookings] = details;
            console.log('Details:', details);
            const active_bookings = bookings.filter(
                (bkn) => bkn.status !== 'declined'
            );
            const user_groups = this._staff.current.groups;
            const bookable_desks = desks.filter(
                (i) => i.bookable
                && user_groups.includes((i.group || '').toLowerCase())
            );
            console.log(
                'Done',
                bookable_desks.filter(
                    (desk) =>
                        !active_bookings.find((bkn) => bkn.asset_id === desk.id)
                )
            );
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
        private _bookings: BookingsService,
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

    public setOptions(state: DeskFlowState) {
        console.warn('Set options:', state);
        this._options.next({ ...this._options.getValue(), ...state });
    }

    public async bookDesk(desk: Desk, reason: string = '') {
        const level = this._org.levelWithID(
            desk.zone instanceof Array ? desk.zone : [desk.zone?.id]
        );
        console.log('Book Desk:', desk, level);
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
        await this.makeDeskBooking(
            desk,
            options.date || new Date().valueOf(),
            reason
        );
        notifySuccess('Successfully booked desk');
        ref.close();
    }

    private async makeDeskBooking(desk: Desk, date: number, reason: string) {
        console.log('Make Desk Booking:', desk, date, reason);
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
        return this._bookings.add(booking_data);
    }

    private handleDeskAvailability(details: [Desk[], Desk[]]) {
        const [in_use, desks] = details;
        const style_map = {};
        const actions = [];
        const colours = this._settings.get('app.explore.colors') || {};
        for (const desk of desks) {
            const status = !desk.bookable
                ? 'not-bookable'
                : !in_use.find((d) => d.id === desk.id)
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
                    callback: () => this.bookDesk(desk),
                });
                actions.push({
                    id: desk.id,
                    action: 'touchend',
                    callback: () => this.bookDesk(desk),
                });
            }
        }
        this._state.setStyles('desks', style_map);
        this._state.setActions('desks', actions);
    }
}
