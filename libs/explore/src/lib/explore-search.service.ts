import { Injectable } from '@angular/core';
import {
    PlaceZoneMetadata,
    authority,
    listChildMetadata,
    querySystems,
    queryUsers,
    showMetadata,
} from '@placeos/ts-client';
import { MapsPeopleService, SettingsService, flatten } from '@placeos/common';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
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

import { Space } from 'libs/spaces/src/lib/space.class';
import { StaffUser, User } from 'libs/users/src/lib/user.class';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { moduleFromMetadata } from '@placeos/organisation';

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

const TYPES = ['space', 'contact', 'feature', 'user'];

function typeIndex(item: SearchResult): number {
    return TYPES.indexOf(item.is_role ? 'contact' : item.type);
}

declare let mapsindoors: any;

@Injectable({
    providedIn: 'root',
})
export class ExploreSearchService {
    /** Current search results for staff users */
    private _emergency_contacts = new BehaviorSubject<User[]>([]);
    /** Filter string for results */
    private _filter = new BehaviorSubject<string>('');
    /** Whether results are being loaded */
    private _loading = new BehaviorSubject<boolean>(false);

    public readonly emergency_contacts =
        this._emergency_contacts.asObservable();

    private _role_assigned_contacts = this._org.active_building.pipe(
        filter((bld) => !!bld),
        switchMap((bld) => showMetadata(bld.id, 'emergency_contacts')),
        map(({ details }) => (details as any)?.contacts || []),
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
                ? querySystems({ q, zone_id: this._org.organisation.id }).pipe(
                      map(({ data }) =>
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
                }).pipe(catchError(() => of({ details: [] }))),
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
            showMetadata(this._org.organisation.id, 'points-of-interest').pipe(
                catchError((_) => of({ details: {} })),
            ),
        ),
        shareReplay(1),
    );

    private _poi_list = combineLatest([
        this._org.active_building,
        this._poi_metadata,
    ]).pipe(
        filter(([bld]) => !!bld.id),
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
                            id: item.id || item.location,
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
        this._user_search,
        this._emergency_contacts,
        this._role_assigned_contacts,
        this._map_features,
        this._maps_people_search,
        this._points_of_interest,
    ]).pipe(
        map(
            ([
                filter,
                spaces,
                users,
                contacts,
                roled_contacts,
                features,
                mapspeople_items,
                points_of_interest,
            ]) => {
                const search = filter.toLowerCase();
                const results = [
                    ...mapspeople_items,
                    ...spaces
                        .filter(
                            (_) =>
                                _.email.toLowerCase().includes(search) ||
                                _.name.toLowerCase().includes(search) ||
                                _.display_name.toLowerCase().includes(search),
                        )
                        .map((s) => ({
                            id: s.id,
                            type: 'space',
                            name: s.display_name || s.name,
                            description: `Capacity: ${s.capacity} `,
                        })),
                    ...flatten(
                        roled_contacts.map((u) =>
                            (u as any).roles.map(
                                (role) =>
                                    ({
                                        id: u.email,
                                        type: role || 'contact',
                                        is_role: true,
                                        name: u.name,
                                        description: u.email,
                                    }) as any,
                            ),
                        ),
                    ).filter(
                        (_) =>
                            _.name.toLowerCase().includes(search) ||
                            _.description.toLowerCase().includes(search) ||
                            _.type.toLowerCase().includes(search),
                    ),
                    ...features
                        .filter((_) => _.name.toLowerCase().includes(search))
                        .map((s) => ({
                            id: s.id,
                            type: 'feature',
                            name: s.name,
                            description: '',
                            zone: (s as any).zone?.id,
                        })),
                    ...points_of_interest.filter((_) =>
                        _.name.toLowerCase().includes(search),
                    ),
                    ...contacts
                        .map(
                            (u) =>
                                ({
                                    id: u.email,
                                    type: (u as any).type || 'contact',
                                    is_role: true,
                                    name: u.name,
                                    description: u.email,
                                }) as any,
                        )
                        .filter(
                            (_) =>
                                _.name.toLowerCase().includes(search) ||
                                _.description.toLowerCase().includes(search) ||
                                _.type.toLowerCase().includes(search),
                        ),
                    ...users.map((u) => ({
                        id: u.email,
                        type: 'user',
                        name: u.name,
                        description: u.email,
                    })),
                ];
                results.sort(
                    (a, b) =>
                        typeIndex(a) - typeIndex(b) ||
                        a.name.localeCompare(b.name),
                );
                return results;
            },
        ),
        tap(() => this._loading.next(false)),
        shareReplay(1),
    );
    /** Obverable for whether results are being loaded */
    public readonly loading = this._loading.asObservable();
    /** Function used to query for users */
    public search_fn = (q: string) =>
        this._settings.get('app.basic_user_search')
            ? queryUsers({ q, authority_id: authority()?.id }).pipe(
                  map((_) => _.data),
              )
            : searchStaff(q);

    constructor(
        private _org: OrganisationService,
        private _settings: SettingsService,
        private _maps_people: MapsPeopleService,
    ) {
        this.search_results.subscribe();
        this.init();
    }

    public async init() {
        await this._org.initialised.pipe(first((_) => _)).toPromise();
        const mod = moduleFromMetadata(
            this._org.binding('location_services'),
            'LocationServices',
        );
        if (mod) {
            const binding = mod.binding('emergency_contacts');
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
}
