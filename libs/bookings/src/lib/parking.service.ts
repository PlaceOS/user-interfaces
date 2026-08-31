import {
    computed,
    effect,
    inject,
    Injectable,
    signal,
    untracked,
} from '@angular/core';
import {
    queryDeskAssetsForZones,
    queryParkingSpacesForZones,
    queryParkingUsers,
} from '@placeos/assets';
import {
    AsyncHandler,
    currentUser,
    Desk,
    flatten,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { listChildMetadata, PlaceAsset } from '@placeos/ts-client';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { queryBookings } from './bookings.fn';

export type ParkingSpace = PlaceAsset;
export type { ParkingUser } from '@placeos/assets';

@Injectable({
    providedIn: 'root',
})
export class ParkingService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);

    private _loading = signal<string[]>([]);
    private _spaces = signal<ParkingSpace[]>([]);
    private _users = signal<any[]>([]);
    private _has_booking = signal(false);
    private _booked_space = signal<ParkingSpace>(null);
    private _home_building_id = signal<string>(null);
    private _load_bookings = signal(false);
    private _bookings_request: Promise<any[]> = null;

    public readonly loading = computed(() => this._loading().length > 0);
    /** List of available parking levels for the current building */
    public levels = computed(() => {
        const levels = this._org.level_list();
        if (!this._settings.get('app.use_region')) {
            const blds = this._org.buildingsForRegion();
            const bld_ids = blds.map((bld) => bld.id);
            const list = levels.filter(
                (lvl) =>
                    bld_ids.includes(lvl.parent_id) &&
                    lvl.tags.includes('parking'),
            );
            list.map((lvl) => ({
                ...lvl,
                display_name: `${
                    blds.find((_) => _.id === lvl.parent_id)?.display_name
                } - ${lvl.display_name}`,
            }));
            return list;
        }
        return levels.filter(
            (lvl) =>
                lvl.parent_id === this._org.building.id &&
                lvl.tags.includes('parking'),
        );
    });
    /** List of parking spaces for the current building/level */
    public spaces = this._spaces.asReadonly();

    /** List of parking users for the current building */
    public users = this._users.asReadonly();

    public readonly has_booking = this._has_booking.asReadonly();

    public readonly assigned_space = computed(() =>
        this._spaces().find(
            (_) =>
                _.assigned_to?.toLowerCase() ===
                currentUser().email?.toLowerCase(),
        ),
    );

    public readonly user_details = computed(() =>
        this._users().find(
            (_) =>
                _.email?.toLowerCase() === currentUser().email?.toLowerCase(),
        ),
    );

    public readonly deny_parking_access = computed(
        () => !!this.user_details()?.deny,
    );

    public readonly booked_space = this._booked_space.asReadonly();

    /** Building ID where the user has an assigned desk (home location) */
    public readonly home_building_id = this._home_building_id.asReadonly();

    /** Whether parking is restricted at the user's home location */
    public readonly is_home_location = computed(() => {
        if (!this._settings.get('app.parking.restrict_home_location'))
            return false;
        const home_id = this._home_building_id();
        const bld = this._org.active_building();
        return !!home_id && bld?.id === home_id;
    });

    constructor() {
        super();
        effect(() => {
            const levels = this.levels();
            if (levels[0]?.id)
                untracked(() => this._loadSpaces(levels.map((l) => l.id)));
        });
        effect(() => {
            const bld = this._org.active_building();
            if (!bld?.id) return;
            untracked(() => {
                this._loadUsers(bld.id);
                this._loadHomeBuilding();
            });
        });
        effect(() => {
            const spaces = this._spaces();
            if (this._load_bookings() && spaces.length) {
                untracked(() => this._loadBookings(spaces));
            }
        });
    }

    public loadBookings() {
        this._load_bookings.set(true);
    }

    private async _loadSpaces(level_ids: string[]) {
        this._loading.set([...this._loading(), 'spaces']);
        this._spaces.set(await queryParkingSpacesForZones(level_ids));
        this._loading.set(this._loading().filter((_) => _ !== 'spaces'));
    }

    private async _loadUsers(building_id: string) {
        this._loading.set([...this._loading(), 'users']);
        this._users.set(await queryParkingUsers(building_id));
        this._loading.set(this._loading().filter((_) => _ !== 'users'));
    }

    private async _loadBookings(spaces: ParkingSpace[]) {
        this._bookings_request =
            this._bookings_request ||
            queryBookings({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'parking',
            })
                .catch(() => [])
                .finally(() => (this._bookings_request = null));
        const bookings = await this._bookings_request;
        this._has_booking.set(bookings.length > 0);
        const booked_spaces = bookings
            .map((booking) =>
                spaces.find((space) => space.id === booking.asset_id),
            )
            .filter((space) => !!space);
        this._booked_space.set(booked_spaces[0] || null);
    }

    private async _loadHomeBuilding() {
        const buildings = this._org.building_list();
        if (!buildings?.length) return;
        const use_desk_assets = this._settings.get('app.desks.use_assets');
        const results = await Promise.all(
            buildings.map(async (bld) => {
                if (use_desk_assets) {
                    const level_ids = this._org
                        .levelsForBuilding(bld)
                        .map((level) => level.id);
                    const desks = await queryDeskAssetsForZones(
                        level_ids,
                    ).catch(() => []);
                    return { building_id: bld.id, desks };
                }
                return listChildMetadata(bld.id, { name: 'desks' })
                    .then((data) => ({
                        building_id: bld.id,
                        desks: flatten<Desk>(
                            data.map((meta) =>
                                (meta?.metadata?.desks?.details instanceof Array
                                    ? meta.metadata.desks.details
                                    : []
                                ).map(
                                    (d) =>
                                        new Desk({
                                            ...d,
                                            zone: meta.zone,
                                        }),
                                ),
                            ),
                        ),
                    }))
                    .catch(() => ({
                        building_id: bld.id,
                        desks: [] as Desk[],
                    }));
            }),
        );
        const email = currentUser()?.email?.toLowerCase();
        if (!email) return this._home_building_id.set(null);
        const match = results.find((r) =>
            r.desks.some((d) => d.assigned_to?.toLowerCase() === email),
        );
        this._home_building_id.set(match?.building_id || null);
    }
}
