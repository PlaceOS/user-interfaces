import {
    Injectable,
    Signal,
    computed,
    inject,
    resource,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService, SettingsService } from '@placeos/common';
import { PlaceSystem, querySystems, showMetadata } from '@placeos/ts-client';
import { queryAllPages } from '../query-all-pages';
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

    private _options = signal<RoomListOptions>({});
    private _change = signal(0);

    public readonly options = this._options.asReadonly();

    private readonly _room_alerts = resource({
        params: () => ({
            change: this._change(),
            building: this._org.active_building()?.id,
        }),
        loader: async () => {
            const metadata = await showMetadata(
                this._org.organisation.id,
                'room_alerts',
            ).catch(() => ({ details: {} }) as any);
            return (metadata.details as Record<string, [string, string]>) || {};
        },
    });
    public readonly room_alerts = computed<Record<string, [string, string]>>(
        () => this._room_alerts.value() ?? {},
    );

    private readonly _room_list = resource({
        params: () => {
            const alerts = this._room_alerts.value();
            return alerts
                ? {
                      building: this._org.active_building()?.id,
                      region: this._org.active_region()?.id,
                      change: this._change(),
                      alerts,
                  }
                : undefined;
        },
        defaultValue: [] as PlaceSystem[],
        loader: async ({ params }) => {
            if (!params?.building) return [];
            const zone_id =
                (this._settings.get('app.use_region') ? params.region : '') ||
                params.building;
            const list: any[] = await queryAllPages(
                querySystems({ zone_id, limit: 200 }),
            ).catch(() => []);
            const alerts = params.alerts;
            for (const id in alerts) {
                const [status, message] = alerts[id];
                const item = list.find((_) => _.id === id);
                if (!item) continue;
                item.alert = { status, message };
            }
            return list
                .filter((_) => this._org.levelWithID(_.zones as any))
                .sort((a, b) => a.name.localeCompare(b.name));
        },
    });
    public readonly room_list: Signal<PlaceSystem[]> = this._room_list.value;

    public readonly filtered_rooms = computed(() => {
        let list = this._room_list.value();
        const options = this._options();
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
    });

    public setFilters(options: Partial<RoomListOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public setSearchString(search: string) {
        this._options.update((current) => ({ ...current, search }));
    }

    public editRoom(room: PlaceSystem = new PlaceSystem()) {
        const ref = this._dialog.open(RoomModalComponent, { data: { room } });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.update((c) => c + 1), 300);
        });
    }

    public setRoomAlert(room: PlaceSystem) {
        if (!room) return;
        const ref = this._dialog.open(RoomAlertModalComponent, {
            data: { room },
        });
        ref.afterClosed().subscribe((data) => {
            if (data) setTimeout(() => this._change.update((c) => c + 1), 300);
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
