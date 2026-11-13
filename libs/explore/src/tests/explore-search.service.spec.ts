import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Booking,
    Building,
    Desk,
    MapsPeopleService,
    Organisation,
    OrganisationService,
} from '@placeos/common';

import {
    compareSearchResultsAscending,
    deskSearchResult,
    ExploreSearchService,
    sortGlobalSearchResults,
} from '../lib/explore-search.service';

vi.mock('@placeos/ts-client');

import { TestBed } from '@angular/core/testing';
import * as ts_client from '@placeos/ts-client';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MockProvider } from 'ng-mocks';
import { ExploreStateService } from '../lib/explore-state.service';

describe('ExploreSearchService', () => {
    let spectator: SpectatorService<ExploreSearchService>;
    const createService = createServiceFactory({
        service: ExploreSearchService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
                organisation: new Organisation(),
                binding: vi.fn(() => 'sys-1'),
                active_building: signal(new Building()),
                building: new Building(),
                buildings: [],
                levelWithID: vi.fn(
                    (ids: string[]) =>
                        ['lvl-1', 'lvl-2']
                            .filter((id) => ids?.includes(id))
                            .map((id) => ({ id }))[0],
                ),
                module: vi.fn(),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn(),
            }),
            MockProvider(ExploreStateService, {
                level: signal(null),
                options: signal({}),
            } as any),
            MockProvider(MapsPeopleService, {
                available: signal(false),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createService();
        // Provider mocks are shared, so clear state from earlier tests
        vi.mocked(spectator.inject(SettingsService).get).mockReset();
        (spectator.inject(ExploreStateService).level as any).set(null);
    });

    it('should locate desk assets by their map id', () => {
        const result = deskSearchResult(
            new Desk({
                id: 'asset-1',
                map_id: 'desk-6.06.1',
                name: '6.06.01',
                assigned_to: 'jane@place.tech',
                zone: { id: 'level-6' } as any,
            }),
        );
        expect(result).toEqual({
            id: 'desk-6.06.1',
            type: 'feature',
            email: 'jane@place.tech',
            description: 'desk-6.06.1',
            name: '6.06.01',
            zone: 'level-6',
        });
        expect(deskSearchResult(new Desk({ id: 'desk-1' })).name).toBe(
            'desk-1',
        );
    });

    it('should sort search results ascending by name', () => {
        const results = [
            { id: '2', type: 'user', name: 'Zoe', description: '' },
            { id: '1', type: 'user', name: 'Alex', description: '' },
        ];

        expect(
            results.sort(compareSearchResultsAscending).map((_) => _.name),
        ).toEqual(['Alex', 'Zoe']);
    });

    it('should pin local emergency contacts ahead of other ascending results', () => {
        const results = [
            {
                id: '3',
                type: 'space',
                name: 'Boardroom',
                description: '',
            },
            {
                id: '1',
                type: 'contact',
                is_role: true,
                name: 'Zoe Warden',
                description: '',
                zone: 'level-1',
            },
            {
                id: '2',
                type: 'user',
                name: 'Alex Staff',
                description: '',
            },
            {
                id: '4',
                type: 'contact',
                is_role: true,
                name: 'Beta Warden',
                description: '',
                zone: 'level-2',
            },
        ] as any;

        expect(
            sortGlobalSearchResults(results, ['level-1']).map((_) => _.name),
        ).toEqual(['Zoe Warden', 'Alex Staff', 'Beta Warden', 'Boardroom']);
    });

    describe('search_results', () => {
        /** Mock each search source, then search for the text */
        async function search(text: string, hidden: string[] = []) {
            vi.useFakeTimers();
            vi.mocked(spectator.inject(SettingsService).get).mockImplementation(
                (key: string) =>
                    key === 'app.hide_global_search_items' ? hidden : null,
            );
            vi.mocked(ts_client.get).mockResolvedValue([] as any);
            vi.mocked(ts_client.showMetadata).mockResolvedValue({
                details: {},
            } as any);
            vi.mocked(ts_client.querySystems).mockResolvedValue({
                data: [
                    {
                        id: 'sys-1',
                        name: 'Alpha Room',
                        map_id: 'm-1',
                        zones: ['lvl-2'],
                    },
                    {
                        id: 'sys-2',
                        name: 'Alpha Lab',
                        map_id: 'm-2',
                        zones: ['lvl-1'],
                    },
                    // Spaces without a map location are not results
                    { id: 'sys-3', name: 'Alpha Hidden', zones: ['lvl-1'] },
                ],
            } as any);
            vi.mocked(ts_client.listChildMetadata).mockImplementation(
                (_, { name }) =>
                    Promise.resolve(
                        name === 'desks'
                            ? [
                                  {
                                      zone: { id: 'lvl-1' },
                                      metadata: {
                                          desks: {
                                              details: [
                                                  {
                                                      id: 'desk-1',
                                                      name: 'Alpha Desk',
                                                  },
                                                  {
                                                      id: 'desk-2',
                                                      name: 'Beta Desk',
                                                  },
                                              ],
                                          },
                                      },
                                  },
                              ]
                            : [],
                    ) as any,
            );
            spectator.service.search_fn = vi.fn(() =>
                Promise.resolve([
                    { name: 'Aaron Alpha', email: 'aaron@place.tech' },
                ] as any),
            );
            (spectator.inject(ExploreStateService).level as any).set({
                id: 'lvl-1',
            });
            spectator.service.setFilter(text);
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(400);
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(0);
            vi.useRealTimers();
            return spectator.service.search_results().map((_) => _.name);
        }

        it('should match the text and list items on the current level first', async () => {
            expect(await search('alpha')).toEqual([
                'Alpha Lab',
                'Alpha Desk',
                'Alpha Room',
                'Aaron Alpha',
            ]);
        });

        it('should leave out hidden result types', async () => {
            expect(await search('alpha', ['desks', 'users'])).toEqual([
                'Alpha Lab',
                'Alpha Room',
            ]);
        });

        it('should list items near in-progress bookings first when no level is shown', async () => {
            await search('alpha');
            (spectator.inject(ExploreStateService).level as any).set(null);
            // Only level zones count, so the building zone is ignored
            spectator.service.setInProgressBookings([
                new Booking({ zones: ['bld-1', 'lvl-2'] }),
            ]);
            expect(
                spectator.service.search_results().map((_) => _.name),
            ).toEqual(['Alpha Room', 'Alpha Lab', 'Alpha Desk', 'Aaron Alpha']);
        });
    });

    it('should list emergency contacts from LocationServices by type', async () => {
        vi.useFakeTimers();
        (spectator.inject(OrganisationService).module as any).mockReturnValue({
            variable: () => ({
                bindThenSubscribe: (callback: (value: unknown) => void) =>
                    callback({
                        first_aid: [{ name: 'Jo', email: 'jo@place.tech' }],
                        fire_warden: [{ name: 'Sam', email: 'sam@place.tech' }],
                    }),
            }),
        });

        const done = spectator.service.init();
        await vi.advanceTimersByTimeAsync(500);
        await done;
        vi.useRealTimers();

        expect(spectator.service.emergency_contacts()).toEqual([
            { name: 'Jo', email: 'jo@place.tech', type: 'first_aid' },
            { name: 'Sam', email: 'sam@place.tech', type: 'fire_warden' },
        ]);
    });

    it('should not load the emergency contacts again for each search', async () => {
        vi.useFakeTimers();
        vi.mocked(ts_client.get).mockResolvedValue([] as any);
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        vi.mocked(ts_client.querySystems).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.queryUsers).mockResolvedValue({
            data: [],
        } as any);
        vi.mocked(ts_client.listChildMetadata).mockResolvedValue([]);
        const asset_category_requests = () =>
            vi
                .mocked(ts_client.get)
                .mock.calls.filter(([url]) =>
                    `${url}`.includes('/asset_categories'),
                ).length;
        // Resources load without a reader. Reading `search_results` would
        // also need the mocks of every other search source.
        const search = spectator.service;
        TestBed.tick();
        await vi.advanceTimersByTimeAsync(500);
        const loaded = asset_category_requests();
        expect(loaded).toBeGreaterThan(0);

        for (const text of ['ale', 'alex', 'alexa']) {
            search.setFilter(text);
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(500);
        }
        expect(asset_category_requests()).toBe(loaded);
        expect(ts_client.querySystems).toHaveBeenCalled();
        vi.useRealTimers();
    });

    describe('emergency contacts', () => {
        const ASSET_API = {
            '/asset_categories': [
                { id: 'cat-1', name: '_EMERGENCY_CONTACTS_' },
            ],
            '/asset_types': [
                {
                    id: 'type-1',
                    name: '_EMERGENCY_CONTACTS_',
                    category_id: 'cat-1',
                },
            ],
            '/assets': [
                {
                    id: 'asset-1',
                    asset_type_id: 'type-1',
                    identifier: 'Jo Warden',
                    zones: ['lvl-1'],
                    other_data: {
                        email: 'jo@place.tech',
                        roles: ['first_aid', 'fire_warden'],
                    },
                },
            ],
        };

        /** Mock the contact sources, then list the contact results */
        async function contacts(
            asset_api: Record<string, unknown[]>,
            legacy: Record<string, unknown>,
        ) {
            vi.mocked(ts_client.get).mockImplementation(
                async (url: string) =>
                    (Object.entries(asset_api).find(([path]) =>
                        url.includes(path),
                    )?.[1] ?? []) as any,
            );
            vi.mocked(ts_client.showMetadata).mockImplementation(
                async (_, name) =>
                    ({
                        details: name === 'emergency_contacts' ? legacy : {},
                    }) as any,
            );
            vi.mocked(ts_client.listChildMetadata).mockResolvedValue([]);
            let list = [];
            await vi.waitFor(() => {
                TestBed.tick();
                list = spectator.service
                    .search_results()
                    .filter((_) => _.is_role)
                    .map(({ name, type, zone }) => ({ name, type, zone }));
                expect(list.length).toBeGreaterThan(0);
            });
            return list;
        }

        const LEGACY = {
            contacts: [
                {
                    name: 'Sam Legacy',
                    email: 'sam@place.tech',
                    roles: ['first_aid'],
                },
            ],
        };

        it('should list asset contacts once for each role over the legacy contacts', async () => {
            expect(await contacts(ASSET_API, LEGACY)).toEqual([
                { name: 'Jo Warden', type: 'first_aid', zone: 'lvl-1' },
                { name: 'Jo Warden', type: 'fire_warden', zone: 'lvl-1' },
            ]);
        });

        it('should fall back to the legacy contacts without asset contacts', async () => {
            expect(await contacts({}, LEGACY)).toEqual([
                { name: 'Sam Legacy', type: 'first_aid', zone: undefined },
            ]);
        });
    });
});
