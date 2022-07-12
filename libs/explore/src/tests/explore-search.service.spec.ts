import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { Organisation, OrganisationService } from '@placeos/organisation';
import { Space, SpacesService } from '@placeos/spaces';
import { BehaviorSubject, of, timer } from 'rxjs';
import { take } from 'rxjs/operators';

import { ExploreSearchService } from '../lib/explore-search.service';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/users');

import * as ts_client from '@placeos/ts-client';
import * as user_mod from '@placeos/users';
import { fakeAsync, tick } from '@angular/core/testing';

describe('ExploreSearchService', () => {
    let spectator: SpectatorService<ExploreSearchService>;
    const createService = createServiceFactory({
        service: ExploreSearchService,
        providers: [
            {
                provide: SpacesService,
                useValue: { list: new BehaviorSubject([]) },
            },
            {
                provide: OrganisationService,
                useValue: {
                    initialised: of(true),
                    organisation: new Organisation(),
                    binding: jest.fn(() => 'sys-1'),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createService()));

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should allow searching for users', async () => {
        (user_mod as any).searchStaff = jest.fn((q) =>
            of(
                [{ name: 'Jim', email: 'jim@jim.com' }].filter((_) =>
                    _.name.includes(q)
                )
            )
        );
        spectator.service.setFilter('Jim');
        let result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(1);
        expect(result[0].type).toBe('user');
        expect(user_mod.searchStaff).toHaveBeenCalledWith('Jim');
        spectator.service.setFilter('James');
        await timer(401).toPromise();
        result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(0);
        expect(user_mod.searchStaff).toHaveBeenCalledWith('James');
    });

    it('should allow searching for spaces', async () => {
        (user_mod as any).searchStaff = jest.fn(() => of([]));
        const spaces = spectator.inject(SpacesService);
        (spaces.list as any).next(
            [
                { id: 'space-1', name: 'Space 1', email: 'space-1@p.t' },
                { id: 'space-2', name: 'Space 2', email: 'space-2@p.t' },
            ].map((_) => new Space(_))
        );
        spectator.service.setFilter('Space');
        let result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(2);
        expect(result[0].type).toBe('space');
        spectator.service.setFilter('Space 1');
        await timer(401).toPromise();
        result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(1);
    });

    it('should allow searching for emergency contacts', async () => {
        (user_mod as any).searchStaff = jest.fn(() => of([]));
        (ts_client as any).getModule = jest.fn(() => ({
            binding: () => ({
                listen: () =>
                    of({
                        first_aid: [{ name: 'John', email: 'john@p.t' }],
                    }),
                bind: () => null,
            }),
        }));
        spectator.service.search_fn = (q) => of([]);
        await spectator.service.init();
        spectator.service.setFilter('John');
        let result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(1);
        expect(result[0].type).toBe('first_aid');
        spectator.service.setFilter('fjggfdytrtuuf');
        result = await spectator.service.search_results
            .pipe(take(1))
            .toPromise();
        expect(result).toHaveLength(0);
    });
});
