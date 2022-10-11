import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { of } from 'rxjs';
import { Space } from '../lib/space.class';

jest.mock('@placeos/ts-client');

import * as ts_client from '@placeos/ts-client';

import { SpacesService } from '../lib/spaces.service';
import { generateMockSpace } from '../lib/space.utilities';
import { first } from 'rxjs/operators';
import { randomInt, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

describe('SpacesService', () => {
    let spectator: SpectatorService<SpacesService>;
    let spaces: Space[];
    const createService = createServiceFactory({
        service: SpacesService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: of(true),
                organisation: { id: 'zone-1' },
                levelWithID: jest.fn(),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() })
        ],
    });

    beforeEach(() => {
        spaces = new Array(30).fill(0).map(
            (_, idx) =>
                new Space(
                    generateMockSpace({
                        zones: idx % 2 === 0 ? ['zone-1'] : ['zone-2'],
                    })
                )
        );
        (ts_client as any).querySystems = jest.fn(() => of({ data: spaces }));
        spectator = createService();
    });

    it('should create serice', () => {
        expect(spectator.service).toBeInstanceOf(SpacesService);
    });

    it('should load space data', async () => {
        const list = await spectator.service.list
            .pipe(first((_) => !!_?.length))
            .toPromise();
        expect(ts_client.querySystems).toHaveBeenCalled();
        expect(list).toHaveLength(30);
    });

    it('should allow finding spaces', async () => {
        await spectator.service.list
            .pipe(first((_) => !!_?.length))
            .toPromise();
        const space = spaces[randomInt(spaces.length)];
        const found = spectator.service.find(space.id);
        expect(found).toEqual(space);
    });

    it('should allow filtering the list of spaces', async () => {
        await spectator.service.list
            .pipe(first((_) => !!_?.length))
            .toPromise();
        const list = spectator.service.filter((_) =>
            _.zones?.includes('zone-2')
        );
        expect(list).toHaveLength(15);
    });
});
