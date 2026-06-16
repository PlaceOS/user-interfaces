import { signal } from '@angular/core';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, Space } from '@placeos/common';
import { of } from 'rxjs';

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    querySystems: jest.fn(),
}));

import * as ts_client from '@placeos/ts-client';

import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { generateMockSpace } from '../lib/space.utilities';
import { SpacesService } from '../lib/spaces.service';

describe('SpacesService', () => {
    let spectator: SpectatorService<SpacesService>;
    let spaces: Space[];
    const createService = createServiceFactory({
        service: SpacesService,
        providers: [
            MockProvider(OrganisationService, {
                initialised: signal(true),
                organisation: { id: 'zone-1' },
                levelWithID: jest.fn(),
            } as any),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        spaces = new Array(30).fill(0).map(
            (_, idx) =>
                new Space(
                    generateMockSpace({
                        zones: idx % 2 === 0 ? ['zone-1'] : ['zone-2'],
                    }),
                ),
        );
        jest.mocked(ts_client.querySystems).mockResolvedValue({
            data: spaces,
        } as any);
        spectator = createService();
    });

    it('should create serice', () => {
        expect(spectator.service).toBeInstanceOf(SpacesService);
    });

    // it('should load space data', async () => {
    //     const list = await spectator.service.list
    //         .pipe(first((_) => !!_?.length))
    //         .toPromise();
    //     expect(ts_client.querySystems).toHaveBeenCalled();
    //     expect(list).toHaveLength(30);
    // });

    // it('should allow finding spaces', async () => {
    //     await spectator.service.list
    //         .pipe(first((_) => !!_?.length))
    //         .toPromise();
    //     const space = spaces[randomInt(spaces.length)];
    //     const found = spectator.service.find(space.id);
    //     expect(found).toEqual(space);
    // });

    // it('should allow filtering the list of spaces', async () => {
    //     await spectator.service.list
    //         .pipe(first((_) => !!_?.length))
    //         .toPromise();
    //     const list = spectator.service.filter((_) =>
    //         _.zones?.includes('zone-2')
    //     );
    //     expect(list).toHaveLength(15);
    // });
});
