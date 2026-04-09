import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import { PlaceSystem, querySystems, showMetadata } from '@placeos/ts-client';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';
import { RoomAlertModalComponent } from './room-alert-modal.component';
import { RoomBookingHistoryModalComponent } from './room-booking-history-modal.component';
import { RoomModalComponent } from './room-modal.component';

export interface RoomListOptions {
    zones?: string[];
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class RoomManagementService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _options = new BehaviorSubject<RoomListOptions>({});
    private _change = new BehaviorSubject(0);

    public options = this._options.asObservable();

    public readonly room_alerts = combineLatest([
        this._change,
        this._org.active_building,
    ]).pipe(
        switchMap(() => showMetadata(this._org.organisation.id, 'room_alerts')),
        map((_) => (_.details as Record<string, [string, string]>) || {}),
        shareReplay(1),
    );

    public readonly room_list = combineLatest([
        this._org.active_building,
        this._org.active_region,
        this._change,
    ]).pipe(
        filter(([b, r]) => !!b?.id),
        switchMap(([bld, region]) =>
            combineLatest([
                querySystems({
                    zone_id:
                        (this._settings.get('app.use_region')
                            ? region.id
                            : '') || bld.id,
                    limit: 2500,
                }).pipe(
                    map(({ data }) => data),
                    catchError(() => of([])),
                ),
                this.room_alerts,
            ]),
        ),
        map(([list, alerts]) => {
            for (const id in alerts) {
                const [status, message] = alerts[id];
                const item = list.find((_) => _.id === id);
                if (!item) continue;
                item.alert = {
                    status,
                    message,
                };
            }
            return list
                .filter((_) => this._org.levelWithID(_.zones as any))
                .sort((a, b) => a.name.localeCompare(b.name));
        }),
        shareReplay(1),
    );

    public readonly filtered_rooms = combineLatest([
        this.room_list,
        this._options,
    ]).pipe(
        map(([list, options]) => {
            if (options.zones?.length) {
                list = list.filter((_) =>
                    options.zones.find((z) => _.zones.includes(z)),
                );
            }
            if (options.search) {
                list = list.filter((_) =>
                    _.name.toLowerCase().includes(options.search.toLowerCase()),
                );
            }
            return list;
        }),
    );

    public setFilters(options: Partial<RoomListOptions>) {
        this._options.next({ ...this._options.getValue(), ...options });
    }

    public setSearchString(search: string) {
        this._options.next({ ...this._options.getValue(), search });
    }

    public editRoom(room: PlaceSystem = new PlaceSystem()) {
        const ref = this._dialog.open(RoomModalComponent, { data: { room } });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.next(Date.now()), 300);
        });
    }

    public setRoomAlert(room: PlaceSystem) {
        if (!room) return;
        const ref = this._dialog.open(RoomAlertModalComponent, {
            data: { room },
        });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.next(Date.now()), 300);
        });
    }

    public viewBookingHistory(room: PlaceSystem) {
        if (!room) return;
        this._dialog.open(RoomBookingHistoryModalComponent, {
            data: { room },
            panelClass: 'fullscreen-dialog',
            maxWidth: '100vw',
            maxHeight: '100vh',
            width: '100vw',
            height: '100vh',
        });
    }
}
