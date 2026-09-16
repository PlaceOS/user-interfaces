import {
    Injectable,
    Injector,
    computed,
    debounced,
    inject,
    resource,
    signal,
} from '@angular/core';
import { deskFromAsset, queryDeskAssetsForZones } from '@placeos/assets';
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
    firstValueWhere,
    flatten,
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
    return get(`${BASE_ENDPOINT}/asset_categories${q ? '?' + q : ''}`).then(
        (_) => _ as any as AssetCategory[],
    );
}

/** Query asset types/groups directly to avoid circular dependency */
function queryAssetTypesLocal(query: Record<string, unknown> = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/asset_types${q ? '?' + q : ''}`).then(
        (_) => _ as any as AssetGroup[],
    );
}

/** Query assets directly to avoid circular dependency */
function queryAssetsLocal(query: Record<string, unknown> = {}) {
    const q = toQueryString(query);
    return get(`${BASE_ENDPOINT}/assets${q ? '?' + q : ''}`).then(
        (_) => _ as any as Asset[],
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
    private _injector = inject(Injector);

    private _initialised = this._org.initialised;
    private _building = this._org.active_building;
    private _maps_people_available = this._maps_people.available;

    /** In-progress bookings/events for sorting priority */
    private _in_progress_bookings = signal<(Booking | CalendarEvent)[]>([]);

    /** Current search results for staff users */
    private _emergency_contacts = signal<User[]>([]);
    /** Filter string for results */
    private _filter = signal<string>('');
    private _debounced_filter = debounced(this._filter, 400);
    private _slow_debounced_filter = debounced(this._filter, 1000);

    public readonly emergency_contacts = this._emergency_contacts.asReadonly();

    /** Emergency contacts from Assets API (primary) */
    private _asset_based_contacts = resource({
        params: () => {
            const bld = this._building();
            return bld
                ? { bld, search: this._debounced_filter.value() }
                : undefined;
        },
        loader: async ({ params: { bld } }) => {
            // First get the category
            const categories = await queryAssetCategoriesLocal({
                zone_id: bld.id,
            }).catch(() => [] as AssetCategory[]);
            const category =
                categories.find(
                    (c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME,
                ) || null;
            if (!category) return [] as EmergencyContactFromAsset[];
            // Then get the asset type for that category
            const groups = await queryAssetTypesLocal({
                zone_id: bld.id,
                q: `"${category.name}"`,
            }).catch(() => [] as AssetGroup[]);
            const asset_type =
                groups.find(
                    (g) =>
                        g.name === EMERGENCY_CONTACTS_CATEGORY_NAME &&
                        g.category_id === category.id,
                ) || null;
            if (!asset_type) return [] as EmergencyContactFromAsset[];
            // Finally get the assets for that type
            const assets = await queryAssetsLocal({
                zone_id: bld.id,
                type_id: asset_type.id,
                limit: 200,
            }).catch(() => [] as Asset[]);
            return assets
                .filter((a) => a.asset_type_id === asset_type.id)
                .map((a) => {
                    const zone =
                        this._org.levelWithID(a.zones) ||
                        this._org.buildings.find((_) => a.zones.includes(_.id));
                    return {
                        id: a.id,
                        name: a.identifier || '',
                        email: a.other_data?.email || '',
                        phone: a.other_data?.phone || '',
                        roles: a.other_data?.roles || [],
                        zone: zone?.id,
                        zone_name: zone?.display_name || zone?.name,
                    };
                });
        },
    });

    /** Legacy metadata contacts (fallback for non-migrated data) */
    private _legacy_metadata_contacts = resource({
        params: () => this._building() || undefined,
        loader: async ({ params: bld }) => {
            const { details } = await showMetadata(
                bld.id,
                'emergency_contacts',
            ).catch(() => ({
                details: { contacts: [], migrated: false },
            }));
            const data = details as any;
            // If migrated flag is set, return empty (use asset-based contacts)
            if (data?.migrated) return [];
            return data?.contacts || [];
        },
    });

    /** Combined contacts from both sources (Assets API preferred) */
    private _role_assigned_contacts = computed(() => {
        const asset_contacts = this._asset_based_contacts.value() ?? [];
        // If we have asset-based contacts, use those exclusively
        if (asset_contacts.length > 0) return asset_contacts;
        // Fallback to legacy metadata contacts
        return this._legacy_metadata_contacts.value() ?? [];
    });

    private _user_search = resource({
        params: () => ({ q: this._debounced_filter.value() }),
        loader: ({ params: { q } }) =>
            q?.length > 2
                ? this.search_fn(q).catch(() => [] as StaffUser[])
                : Promise.resolve([] as StaffUser[]),
    });

    private _space_search = resource({
        params: () => ({ q: this._debounced_filter.value() }),
        loader: ({ params: { q } }) =>
            q?.length > 2
                ? querySystems({ q, zone_id: this._org.organisation.id })
                      .then(({ data }) =>
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
                      .catch(() => [] as Space[])
                : Promise.resolve([] as Space[]),
    });

    private _desk_search = resource({
        params: () => this._building() || undefined,
        loader: ({ params: bld }) => {
            if (this._settings.get('app.desks.use_assets')) {
                const levels = this._org.levelsForBuilding(bld);
                return queryDeskAssetsForZones(levels.map((level) => level.id))
                    .then((assets) =>
                        assets.map((asset) =>
                            deskFromAsset(
                                asset,
                                levels.find(
                                    (level) => level.id === asset.zone_id,
                                ),
                            ),
                        ),
                    )
                    .catch(() => [] as Desk[]);
            }
            return listChildMetadata(bld.id, { name: 'desks' })
                .then((i) =>
                    flatten(
                        i.map((j) =>
                            (j.metadata.desks?.details || []).map(
                                (k) => new Desk({ ...k, zone: j.zone }),
                            ),
                        ),
                    ),
                )
                .catch(() => [] as Desk[]);
        },
    });

    private _maps_people_search = resource({
        params: () => ({
            available: this._maps_people_available(),
            q: this._slow_debounced_filter.value(),
            bld: this._building(),
        }),
        loader: async ({ params: { available, q } }) => {
            const list: any[] =
                available && q.length > 2
                    ? await mapsindoors?.services.LocationsService.getLocations(
                          { q },
                      )
                    : [];
            return (list || []).map(
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
        },
    });

    private _map_features = resource({
        params: () => this._building() || undefined,
        loader: async () => {
            const data = await listChildMetadata(this._org.building.id, {
                name: 'map_features',
            }).catch(() => [] as PlaceZoneMetadata[]);
            const list = [];
            for (const item of data) {
                const metadata = item.metadata.map_features;
                if (!metadata) continue;
                const feature_list =
                    metadata.details instanceof Array ? metadata.details : [];
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
            return list as SearchResult[];
        },
    });

    private _poi_metadata = resource({
        params: () => this._initialised() || undefined,
        loader: () =>
            showMetadata(this._org.organisation.id, 'points-of-interest').catch(
                (_) => ({ details: {} }),
            ),
    });

    private _poi_list = computed(() => {
        const bld = this._building();
        const metadata = this._poi_metadata.value();
        if (!bld?.id || !metadata) return [] as PointOfInterest[];
        const mapping = metadata.details || {};
        const levels = this._org.levelsForBuilding(bld);
        const list: PointOfInterest[] = flatten(
            levels.map((lvl) => mapping[lvl.id] || []),
        );
        return list.filter((_) => _.can_search);
    });

    private _points_of_interest = computed<SearchResult[]>(() =>
        this._poi_list().map(
            (item) =>
                ({
                    id: item.location || item.id,
                    type: 'feature',
                    name: item.name,
                    description: '',
                    zone: item.level_id,
                }) as SearchResult,
        ),
    );

    public readonly search_results = computed<SearchResult[]>(() => {
        const search = this._filter().toLowerCase();
        const spaces = this._space_search.value() ?? [];
        const desks = this._desk_search.value() ?? [];
        const users = this._user_search.value() ?? [];
        const contacts = this._emergency_contacts();
        const roled_contacts = this._role_assigned_contacts();
        const features = this._map_features.value() ?? [];
        const mapspeople_items = this._maps_people_search.value() ?? [];
        const points_of_interest = this._points_of_interest();
        const current_level = this._state.level();
        const in_progress_bookings = this._in_progress_bookings();

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
                    .filter((_) => _.name.toLowerCase().includes(search))
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
                const a_near_booking = in_progress_zones.includes(a.zone);
                const b_near_booking = in_progress_zones.includes(b.zone);
                if (a_near_booking && !b_near_booking) return -1;
                if (!a_near_booking && b_near_booking) return 1;
            }

            // 3. Default: sort by type then name
            return typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name);
        });
        return results;
    });

    public readonly global_search_results = computed<SearchResult[]>(() =>
        sortGlobalSearchResults(
            this.search_results(),
            this._getPriorityZones(
                this._in_progress_bookings(),
                this._state.level()?.id,
            ),
        ),
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
    /** Whether results are being loaded */
    public readonly loading = computed(
        () =>
            this._filter() !== this._debounced_filter.value() ||
            this._user_search.isLoading() ||
            this._space_search.isLoading(),
    );
    /** Function used to query for users */
    public search_fn = (q: string): Promise<StaffUser[]> =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).then(
                  (_) => _.data as any as StaffUser[],
              )
            : searchStaff(q);

    public hideItem(name: string) {
        const hide_items =
            this._settings.get('app.hide_global_search_items') || [];
        return hide_items.includes(name);
    }

    constructor() {
        this.init();
    }

    public async init() {
        await firstValueWhere(this._initialised, (_) => !!_, this._injector);
        await new Promise((resolve) => setTimeout(resolve, 500));
        const { is_public } = this._state.options();
        if (is_public) return;
        const mod = this._org.module('location_services', 'LocationServices');
        if (mod) {
            const binding = mod.variable('emergency_contacts');
            binding.bindThenSubscribe((contacts_map) => {
                const list = [];
                for (const type in contacts_map) {
                    for (const user of contacts_map[type]) {
                        list.push({ ...user, type });
                    }
                }
                this._emergency_contacts.set(list);
            });
        }
    }

    public setFilter(str: string) {
        this._filter.set(str);
    }

    /**
     * Set in-progress bookings for proximity-based sorting
     * @param bookings List of bookings/events that are currently in progress
     */
    public setInProgressBookings(bookings: (Booking | CalendarEvent)[]) {
        this._in_progress_bookings.set(bookings || []);
    }
}
