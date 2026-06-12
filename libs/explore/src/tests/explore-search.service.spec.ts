import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import {
    Building,
    MapsPeopleService,
    Organisation,
    OrganisationService,
} from '@placeos/common';
import { BehaviorSubject, of } from 'rxjs';

import {
    compareSearchResultsAscending,
    ExploreSearchService,
    sortGlobalSearchResults,
} from '../lib/explore-search.service';

jest.mock('@placeos/ts-client');
jest.mock('libs/users/src/lib/staff.fn');

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MockProvider } from 'ng-mocks';
import { ExploreStateService } from '../lib/explore-state.service';

describe('ExploreSearchService', () => {
    let spectator: SpectatorService<ExploreSearchService>;
    const createService = createServiceFactory({
        service: ExploreSearchService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                organisation: new Organisation(),
                binding: jest.fn(() => 'sys-1'),
                active_building: new BehaviorSubject(new Building()),
            }),
            MockProvider(SettingsService, {
                get: jest.fn(),
            }),
            MockProvider(ExploreStateService, {
                level: signal(null),
                options: signal({}),
            } as any),
            MockProvider(MapsPeopleService, {
                available$: of(false),
            } as any),
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
        ] as any;

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
        // (ts_client.querySystems as any) = jest.fn(() => of([]));
        // (user_mod as any).searchStaff = jest.fn((q) =>
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
        // (ts_client.querySystems as any) = jest.fn(() =>
        //     of([
        //         { id: 'space-1', name: 'Space 1', email: 'space-1@p.t' },
        //         { id: 'space-2', name: 'Space 2', email: 'space-2@p.t' },
        //     ])
        // );
        // (user_mod.searchStaff as any) = jest.fn(() => of([]));
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
        // (user_mod as any).searchStaff = jest.fn(() => of([]));
        // (ts_client as any).getModule = jest.fn(() => ({
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
});
