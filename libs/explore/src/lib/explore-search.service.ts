import { Injectable, inject } from '@angular/core';
import {
    Asset,
    AssetCategory,
    AssetGroup,
    Booking,
    CalendarEvent,
    Desk,
    MapsPeopleService,
    OrganisationService,
    SettingsService,
    Space,
    StaffUser,
    User,
    flatten,
    nextValueFrom,
} from '@placeos/common';
import {
    PlaceZoneMetadata,
    authority,
    get,
    listChildMetadata,
    querySystems,
    queryUsers,
    showMetadata,
} from '@placeos/ts-client';
import {
    BehaviorSubject,
    Observable,
    ReplaySubject,
    combineLatest,
    from,
    of,
    timer,
} from 'rxjs';
import {
    catchError,
    debounceTime,
    filter,
    first,
    map,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { toQueryString } from '@placeos/common';
import { searchStaff } from '@placeos/users';
import { ExploreStateService } from './explore-state.service';

const EMERGENCY_CONTACTS_CATEGORY_NAME = '_EMERGENCY_CONTACTS_';
const BASE_ENDPOINT = '/api/engine/v2';
const ASCENDING_NAME_SORTER = new Intl.Collator(undefined, {
    numeric: true,
    sensitivity: 'base',
});

interface EmergencyContactFromAsset {
    id: string;
    email: string;
    name: string;
    phone: string;
    roles: string[];
    zone: string;
}

/** Query asset categories directly to avoid circular dependency */
function queryAssetCategoriesLocal(query: Record<string, unknown> = {}) {
    const q = toQueryString(query);
    return from(
        get(`${BASE_ENDPOINT}/asset_categories${q ? '?' + q : ''}`),
    ).pipe(map((_) => _ as AssetCategory[]));
}

/** Query asset types/groups directly to avoid circular dependency */
function queryAssetTypesLocal(query: Record<string, unknown> = {}) {
    const q = toQueryString(query);
    return from(get(`${BASE_ENDPOINT}/asset_types${q ? '?' + q : ''}`)).pipe(
        map((_) => _ as AssetGroup[]),
    );
}

/** Query assets directly to avoid circular dependency */
function queryAssetsLocal(query: Record<string, unknown> = {}) {
    const q = toQueryString(query);
    return from(get(`${BASE_ENDPOINT}/assets${q ? '?' + q : ''}`)).pipe(
        map((_) => _ as Asset[]),
    );
}

export interface PointOfInterest {
    id: string;
    name: string;
    level_id: string;
    location: string | [number, number];
    short_link_id: string;
    qr_code?: string;
    qr_link?: string;
    can_search?: boolean;
}

export interface SearchResult {
    /** Unique ID of the result item */
    id: string;
    /** Type of the item being displayed */
    type: 'space' | 'user' | 'contact' | 'feature';
    /** Main display string for the item */
    name: string;
    /** Secondary display string for the item. e.g. email, location, coordinates */
    description: string;
    /** Whether custom user */
    is_role?: boolean;
    /** ID of the zone that the item is located */
    zone?: string;
}

const TYPES = ['space', 'feature', 'contact', 'user'];

function typeIndex(item: SearchResult): number {
    return TYPES.indexOf(item.is_role ? 'contact' : item.type);
}

export function compareSearchResultsAscending(
    item_a: SearchResult,
    item_b: SearchResult,
): number {
    return (
        ASCENDING_NAME_SORTER.compare(item_a.name || '', item_b.name || '') ||
        ASCENDING_NAME_SORTER.compare(
            item_a.description || '',
            item_b.description || '',
        ) ||
        typeIndex(item_a) - typeIndex(item_b)
    );
}

export function sortGlobalSearchResults(
    results: SearchResult[],
    local_zones: string[],
): SearchResult[] {
    const local_zone_set = new Set(local_zones.filter((_) => !!_));
    const local_contacts = results
        .filter(
            (_) => _.is_role && !!_.zone && local_zone_set.has(_.zone || ''),
        )
        .sort(compareSearchResultsAscending);
    const remaining_results = results
        .filter(
            (_) => !(_.is_role && !!_.zone && local_zone_set.has(_.zone || '')),
        )
        .sort(compareSearchResultsAscending);
    return [...local_contacts, ...remaining_results];
}

declare let mapsindoors: any;

@Injectable({
    providedIn: 'root',
})
export class ExploreSearchService {
    private _org = inject(OrganisationService);
    private _settings = inject(SettingsService);
    private _maps_people = inject(MapsPeopleService);
    private _state = inject(ExploreStateService);

    /** In-progress bookings/events for sorting priority */
    private _in_progress_bookings = new ReplaySubject<
        (Booking | CalendarEvent)[]
    >(1);

    /** Current search results for staff users */
    private _emergency_contacts = new BehaviorSubject<User[]>([]);
    /** Filter string for results */
    private _filter = new BehaviorSubject<string>('');
    /** Whether results are being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly emergency_contacts =
        this._emergency_contacts.asObservable();

    /** Emergency contacts from Assets API (primary) */
    private _asset_based_contacts = combineLatest([
        this._org.active_building,
        this._filter.pipe(debounceTime(400)),
    ]).pipe(
        filter(([bld]) => !!bld),
        switchMap(([bld, search]) =>
            // First get the category
            queryAssetCategoriesLocal({ zone_id: bld.id }).pipe(
                catchError(() => of([] as AssetCategory[])),
                map(
                    (categories) =>
                        categories.find(
                            (c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME,
                        ) || null,
                ),
                // Then get the asset type for that category
                switchMap((category) => {
                    if (!category) return of(null as AssetGroup | null);
                    return queryAssetTypesLocal({
                        zone_id: bld.id,
                        q: `"${category.name}"`,
                    }).pipe(
                        catchError(() => of([] as AssetGroup[])),
                        map(
                            (groups) =>
                                groups.find(
                                    (g) =>
                                        g.name ===
                                            EMERGENCY_CONTACTS_CATEGORY_NAME &&
                                        g.category_id === category.id,
                                ) || null,
                        ),
                    );
                }),
                // Finally get the assets for that type
                switchMap((assetType) => {
                    if (!assetType)
                        return of([] as EmergencyContactFromAsset[]);
                    const query: Record<string, unknown> = {
                        zone_id: bld.id,
                        type_id: assetType.id,
                        limit: 200,
                    };
                    // if (search?.length > 2) {
                    //     query.q = search;
                    // }
                    return queryAssetsLocal(query).pipe(
                        catchError(() => of([] as Asset[])),
                        map((assets) =>
                            assets
                                .filter((a) => a.asset_type_id === assetType.id)
                                .map((a) => {
                                    const zone =
                                        this._org.levelWithID(a.zones) ||
                                        this._org.buildings.find((_) =>
                                            a.zones.includes(_.id),
                                        );
                                    return {
                                        id: a.id,
                                        name: a.identifier || '',
                                        email: a.other_data?.email || '',
                                        phone: a.other_data?.phone || '',
                                        roles: a.other_data?.roles || [],
                                        zone: zone.id,
                                        zone_name:
                                            zone?.display_name || zone?.name,
                                    };
                                }),
                        ),
                    );
                }),
            ),
        ),
        shareReplay(1),
    );

    /** Legacy metadata contacts (fallback for non-migrated data) */
    private _legacy_metadata_contacts = this._org.active_building.pipe(
        filter((bld) => !!bld),
        switchMap((bld) =>
            showMetadata(bld.id, 'emergency_contacts').catch(() => ({
                details: { contacts: [], migrated: false },
            })),
        ),
        map(({ details }) => {
            const data = details as any;
            // If migrated flag is set, return empty (use asset-based contacts)
            if (data?.migrated) return [];
            return data?.contacts || [];
        }),
        shareReplay(1),
    );

    /** Combined contacts from both sources (Assets API preferred) */
    private _role_assigned_contacts = combineLatest([
        this._asset_based_contacts,
        this._legacy_metadata_contacts,
    ]).pipe(
        map(([asset_contacts, legacy_contacts]) => {
            // If we have asset-based contacts, use those exclusively
            if (asset_contacts.length > 0) return asset_contacts;
            // Fallback to legacy metadata contacts
            return legacy_contacts;
        }),
        shareReplay(1),
    );

    private _user_search: Observable<StaffUser[]> = this._filter.pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap((q) =>
            q?.length > 2
                ? (this.search_fn(q) as any as Observable<StaffUser[]>).pipe(
                      catchError(() => of([] as StaffUser[])),
                  )
                : of([] as StaffUser[]),
        ),
        shareReplay(1),
    );

    private _space_search: Observable<Space[]> = this._filter.pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap((q) =>
            q?.length > 2
                ? querySystems({ q, zone_id: this._org.organisation.id }).then(
                      ({ data }) =>
                          data
                              .filter((_) => _.map_id)
                              .map(
                                  (_) =>
                                      new Space({
                                          ..._,
                                          level: this._org.levelWithID(
                                              _.zones as any,
                                          ),
                                      } as any),
                              ),
                  )
                : of([]),
        ),
        catchError(() => []),
    );

    private _desk_search: Observable<Desk[]> = combineLatest([
        this._org.active_building,
    ]).pipe(
        debounceTime(400),
        tap(() => this._loading.next(true)),
        switchMap(([bld]) =>
            bld
                ? listChildMetadata(bld.id, { name: 'desks' })
                      .catch(() => [] as PlaceZoneMetadata[])
                      .then((i) =>
                          flatten(
                              i.map((j) =>
                                  (j.metadata.desks?.details || []).map(
                                      (k) => new Desk({ ...k, zone: j.zone }),
                                  ),
                              ),
                          ),
                      )
                : of([]),
        ),
        catchError(() => []),
    );

    private _maps_people_search: Observable<SearchResult[]> = combineLatest([
        this._maps_people.available$,
        this._filter,
        this._org.active_building,
    ]).pipe(
        debounceTime(1000),
        switchMap(([available, q]) =>
            available && q.length > 2
                ? mapsindoors?.services.LocationsService.getLocations({ q })
                : of([]),
        ),
        map((list: any[]) => {
            return list.map(
                (_) =>
                    ({
                        id:
                            _.properties?.externalId ||
                            _.properties?.roomId ||
                            _.roomId ||
                            _.id,
                        map_id:
                            _.properties?.externalId ||
                            _.properties?.roomId ||
                            _.roomId ||
                            '',
                        type: 'feature',
                        name: _.properties?.name || '',
                        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`,
                    }) as SearchResult,
            );
        }),
        shareReplay(1),
    );

    private _map_features: Observable<SearchResult[]> =
        this._org.active_building.pipe(
            filter((bld) => !!bld),
            switchMap(() =>
                listChildMetadata(this._org.building.id, {
                    name: 'map_features',
                }).catch(() => [] as PlaceZoneMetadata[]),
            ),
            map((data: PlaceZoneMetadata[]) => {
                const list = [];
                for (const item of data) {
                    const metadata = item.metadata.map_features;
                    if (!metadata) continue;
                    const feature_list =
                        metadata.details instanceof Array
                            ? metadata.details
                            : [];
                    for (const feature of feature_list) {
                        list.push({
                            id: feature.id,
                            type: 'feature',
                            name: feature.name,
                            description: '',
                            zone: item.zone,
                        });
                    }
                }
                return list;
            }),
        );

    private _poi_metadata = this._org.initialised.pipe(
        filter((_) => _),
        switchMap(() =>
            showMetadata(this._org.organisation.id, 'points-of-interest').catch(
                (_) => ({ details: {} }),
            ),
        ),
        shareReplay(1),
    );

    private _poi_list = combineLatest([
        this._org.active_building,
        this._poi_metadata,
    ]).pipe(
        filter(([bld]) => !!bld?.id),
        map(([bld, metadata]) => {
            const mapping = metadata.details || {};
            const levels = this._org.levelsForBuilding(bld);
            const list: PointOfInterest[] = flatten(
                levels.map((lvl) => mapping[lvl.id] || []),
            );
            return list.filter((_) => _.can_search);
        }),
    );

    private _points_of_interest: Observable<SearchResult[]> =
        this._poi_list.pipe(
            map((poi_list) => {
                return poi_list.map(
                    (item) =>
                        ({
                            id: item.location || item.id,
                            type: 'feature',
                            name: item.name,
                            description: '',
                            zone: item.level_id,
                        }) as SearchResult,
                );
            }),
        );

    public readonly search_results: Observable<SearchResult[]> = combineLatest([
        this._filter,
        this._space_search,
        this._desk_search,
        this._user_search,
        this._emergency_contacts,
        this._role_assigned_contacts,
        this._map_features,
        this._maps_people_search,
        this._points_of_interest,
        this._state.level,
        this._in_progress_bookings,
    ]).pipe(
        map(
            ([
                filter,
                spaces,
                desks,
                users,
                contacts,
                roled_contacts,
                features,
                mapspeople_items,
                points_of_interest,
                current_level,
                in_progress_bookings,
            ]) => {
                const search = filter.toLowerCase();

                let results = [];
                if (!this.hideItem('mapspeople'))
                    results = results.concat(mapspeople_items);
                if (!this.hideItem('spaces')) {
                    results = results.concat(
                        spaces.map((s) => ({
                            id: s.id,
                            type: 'space',
                            email: s.email,
                            name: s.display_name || s.name,
                            description: `Capacity: ${s.capacity} `,
                            zone: s.level?.id || '',
                        })),
                    );
                }
                if (!this.hideItem('desks')) {
                    results = results.concat(
                        desks.map((s) => ({
                            id: s.id,
                            type: 'feature',
                            email: s.assigned_to,
                            description: s.id,
                            name: s.name || s.id,
                            zone: s.zone?.id || '',
                        })),
                    );
                }
                if (!this.hideItem('emergency_contacts')) {
                    results = results.concat(
                        flatten(
                            roled_contacts.map((u) =>
                                (u as any).roles.map(
                                    (role) =>
                                        ({
                                            id: u.email,
                                            type: role || 'contact',
                                            is_role: true,
                                            name: u.name,
                                            email: u.email,
                                            description: u.email,
                                            zone: (u as any).zone,
                                            zone_name: (u as any).zone_name,
                                        }) as any,
                                ),
                            ),
                        ),
                    );
                }

                if (!this.hideItem('features')) {
                    results = results.concat(
                        features
                            .filter((_) =>
                                _.name.toLowerCase().includes(search),
                            )
                            .map((s) => ({
                                id: s.id,
                                type: 'feature',
                                name: s.name,
                                description: '',
                                zone: (s as any).zone?.id,
                                level_name:
                                    (s as any).zone?.display_name ||
                                    (s as any).zone?.name,
                            })),
                    );
                }
                if (!this.hideItem('points_of_interest'))
                    results = results.concat(points_of_interest);
                if (!this.hideItem('contacts')) {
                    results = results.concat(
                        contacts.map(
                            (u) =>
                                ({
                                    id: u.email,
                                    type: (u as any).type || 'contact',
                                    is_role: true,
                                    name: u.name,
                                    email: u.email,
                                    description: u.email,
                                }) as any,
                        ),
                    );
                }
                if (!this.hideItem('users')) {
                    results = results.concat(
                        users.map((u) => ({
                            id: u.email,
                            type: 'user',
                            name: u.name,
                            email: u.email,
                            description: u.email,
                        })),
                    );
                }
                results = results.filter(
                    (_) =>
                        _.name.toLowerCase().includes(search) ||
                        _.description.toLowerCase().includes(search) ||
                        (_.email || '').toLowerCase().includes(search) ||
                        _.type.toLowerCase().includes(search) ||
                        _.zone_name?.toLowerCase().includes(search),
                );

                // Get zones from in-progress bookings for proximity sorting
                const in_progress_zones =
                    this._getInProgressZones(in_progress_bookings);

                results.sort((a, b) => {
                    // 1. If viewing a map, prioritize items on current level zone
                    if (current_level?.id) {
                        const a_on_level = a.zone === current_level.id;
                        const b_on_level = b.zone === current_level.id;
                        if (a_on_level && !b_on_level) return -1;
                        if (!a_on_level && b_on_level) return 1;
                    }

                    // 2. If user has in-progress bookings, prioritize items closest to those
                    if (in_progress_zones.length > 0) {
                        const a_near_booking = in_progress_zones.includes(
                            a.zone,
                        );
                        const b_near_booking = in_progress_zones.includes(
                            b.zone,
                        );
                        if (a_near_booking && !b_near_booking) return -1;
                        if (!a_near_booking && b_near_booking) return 1;
                    }

                    // 3. Default: sort by type then name
                    return (
                        typeIndex(a) - typeIndex(b) ||
                        a.name.localeCompare(b.name)
                    );
                });
                return results;
            },
        ),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );

    public readonly global_search_results: Observable<SearchResult[]> =
        combineLatest([
            this.search_results,
            this._state.level,
            this._in_progress_bookings,
        ]).pipe(
            map(([results, current_level, in_progress_bookings]) =>
                sortGlobalSearchResults(
                    results,
                    this._getPriorityZones(
                        in_progress_bookings,
                        current_level?.id,
                    ),
                ),
            ),
            shareReplay(1),
        );

    /** Extract zones from in-progress bookings */
    private _getInProgressZones(
        bookings: (Booking | CalendarEvent)[],
    ): string[] {
        if (!bookings?.length) return [];
        const zones: string[] = [];
        for (const booking of bookings) {
            if (booking instanceof CalendarEvent) {
                // For events, get zones from the system/resources
                if (booking.system?.zones?.length) {
                    zones.push(...(booking.system.zones as string[]));
                }
                booking.resources?.forEach((r) => {
                    if (r.zones?.length) {
                        zones.push(...(r.zones as string[]));
                    }
                });
            } else if (booking instanceof Booking) {
                // For bookings, use the zones array directly
                if (booking.zones?.length) {
                    zones.push(...booking.zones);
                }
            }
        }
        // Filter to only level zones (not building/org zones)
        return zones.filter((z) => this._org.levelWithID([z]));
    }

    private _getPriorityZones(
        bookings: (Booking | CalendarEvent)[],
        current_level_id?: string,
    ): string[] {
        return Array.from(
            new Set([
                ...(current_level_id ? [current_level_id] : []),
                ...this._getInProgressZones(bookings),
            ]),
        );
    }
    /** Obverable for whether results are being loaded */
    public readonly loading = this._loading.asObservable();
    /** Function used to query for users */
    public search_fn = (q: string) =>
        this._settings.get('app.basic_user_search')
            ? from(queryUsers({ q, authority_id: authority()?.id })).pipe(
                  map((_) => _.data),
              )
            : searchStaff(q);

    public hideItem(name: string) {
        const hide_items =
            this._settings.get('app.hide_global_search_items') || [];
        return hide_items.includes(name);
    }

    constructor() {
        // Initialize with empty array so combineLatest can emit
        this._in_progress_bookings.next([]);
        this.search_results.subscribe();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        await timer(500).toPromise();
        const { is_public } = await nextValueFrom(this._state.options);
        if (is_public) return;
        const mod = this._org.module('location_services', 'LocationServices');
        if (mod) {
            const binding = mod.variable('emergency_contacts');
            binding.listen().subscribe((contacts_map) => {
                const list = [];
                for (const type in contacts_map) {
                    for (const user of contacts_map[type]) {
                        list.push({ ...user, type });
                    }
                }
                this._emergency_contacts.next(list);
            });
            binding.bind();
        }
    }

    public setFilter(str: string) {
        this._filter.next(str);
    }

    /**
     * Set in-progress bookings for proximity-based sorting
     * @param bookings List of bookings/events that are currently in progress
     */
    public setInProgressBookings(bookings: (Booking | CalendarEvent)[]) {
        this._in_progress_bookings.next(bookings || []);
    }
}
