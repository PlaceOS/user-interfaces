import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client from '@placeos/ts-client';
import { SupportService } from '../app/support.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Flush the chained awaits inside `_loadSpaces` */
const flush = async () => {
    for (let i = 0; i < 8; i++) await Promise.resolve();
};

describe('SupportService', () => {
    let spectator: SpectatorService<SupportService>;

    const createService = createServiceFactory({
        service: SupportService,
        providers: [
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                waitUntilInitialised: () => Promise.resolve(),
            } as any),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should query systems scoped to the active organisation zone', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({ data: [] }),
        );
        spectator = createService();
        await flush();
        expect(ts_client.querySystems).toHaveBeenCalledWith({
            zone_id: 'org-1',
            limit: 5000,
        });
    });

    it('should keep only systems that expose a support surface', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({
                data: [
                    { id: 'support', support_url: 'http://x' },
                    { id: 'camera', camera_url: 'http://cam' },
                    { id: 'timetable', timetable_url: 'http://tt' },
                    { id: 'snapshot', camera_snapshot_urls: ['http://snap'] },
                    { id: 'plain', name: 'Nothing supportable' },
                ],
            }),
        );
        spectator = createService();
        await flush();
        const ids = spectator.service.space_list().map((s) => s.id);
        expect(ids).toEqual(['support', 'camera', 'timetable', 'snapshot']);
        expect(ids).not.toContain('plain');
    });

    it('should normalise camera snapshot urls, dropping empty entries', async () => {
        (ts_client.querySystems as any).mockReturnValue(Promise.resolve({
                data: [
                    {
                        id: 'snapshot',
                        camera_snapshot_urls: ['http://one', '', 'http://two'],
                    },
                ],
            }),
        );
        spectator = createService();
        await flush();
        expect(spectator.service.space_list()[0].camera_snapshot_urls).toEqual([
            'http://one',
            'http://two',
        ]);
    });

    it('should leave the space list empty when the query fails', async () => {
        (ts_client.querySystems as any).mockReturnValue(
            Promise.reject(new Error('boom')),
        );
        spectator = createService();
        await flush();
        expect(spectator.service.space_list()).toEqual([]);
    });
});
