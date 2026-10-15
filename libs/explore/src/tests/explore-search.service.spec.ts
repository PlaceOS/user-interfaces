import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    MapsPeopleService,
    Organisation,
    OrganisationService,
} from '@placeos/common';

import {
    compareSearchResultsAscending,
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
            }),
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

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
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

    it('should allow searching for users', async () => {
        // TODO: Fix
        // (ts_client.querySystems as any) = vi.fn(() => of([]));
        // (user_mod as any).searchStaff = vi.fn((q) =>
        //     of(
        //         [{ name: 'Jim', email: 'jim@jim.com' }].filter((_) =>
        //             _.name.includes(q)
        //         )
        //     )
        // );
        // spectator.service.setFilter('Jim');
        // let result = await nextValueFrom(spectator.service.search_results);
        // expect(result).toHaveLength(1);
        // expect(result[0].type).toBe('user');
        // expect(user_mod.searchStaff).toHaveBeenCalledWith('Jim');
        // spectator.service.setFilter('James');
        // await timer(401).toPromise();
        // result = await nextValueFrom(spectator.service.search_results);
        // expect(result).toHaveLength(0);
        // expect(user_mod.searchStaff).toHaveBeenCalledWith('James');
    });

    it('should allow searching for spaces', async () => {
        // TODO: Fix
        // (ts_client.querySystems as any) = vi.fn(() =>
        //     of([
        //         { id: 'space-1', name: 'Space 1', email: 'space-1@p.t' },
        //         { id: 'space-2', name: 'Space 2', email: 'space-2@p.t' },
        //     ])
        // );
        // (user_mod.searchStaff as any) = vi.fn(() => of([]));
        // const spaces = spectator.inject(SpacesService);
        // spectator.service.setFilter('Space');
        // let result = await nextValueFrom(spectator.service.search_results);
        // expect(result).toHaveLength(2);
        // expect(result[0].type).toBe('space');
        // spectator.service.setFilter('Space 1');
        // await timer(401).toPromise();
        // result = await nextValueFrom(spectator.service.search_results);
        // expect(result).toHaveLength(1);
    });

    it('should allow searching for emergency contacts', async () => {
        // TODO: Fix
        // (user_mod as any).searchStaff = vi.fn(() => of([]));
        // (ts_client as any).getModule = vi.fn(() => ({
        //     binding: () => ({
        //         listen: () =>
        //             of({
        //                 first_aid: [{ name: 'John', email: 'john@p.t' }],
        //             }),
        //         bind: () => null,
        //     }),
        // }));
        // spectator.service.search_fn = (q) => of([]);
        // await spectator.service.init();
        // spectator.service.setFilter('John');
        // let result = await nextValueFrom(spectator.service.search_results
        //     );
        // expect(result).toHaveLength(1);
        // expect(result[0].type).toBe('first_aid');
        // spectator.service.setFilter('fjggfdytrtuuf');
        // result = await nextValueFrom(spectator.service.search_results
        //     );
        // expect(result).toHaveLength(0);
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
});
