import { Title } from '@angular/platform-browser';
import { createServiceFactory } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService, StaffUser } from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { MockProvider } from 'ng-mocks';
import { DEFAULT_SETTINGS } from '../environments/settings';

vi.mock('@placeos/ts-client', { spy: true });

const mockGet = vi.mocked(
    ts_client.get as unknown as (
        url: string,
    ) => Promise<Record<string, unknown>[]>,
);

describe('Concierge staff directory search settings', () => {
    const createSettings = createServiceFactory({
        service: SettingsService,
        providers: [MockProvider(Title, { setTitle: vi.fn() })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        setCurrentUser(new StaffUser({ id: 'test-user' }));
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as any);
        vi.mocked(ts_client.responseHeaders).mockReturnValue({});
        mockGet.mockResolvedValue([
            {
                id: 'guest',
                name: 'Jack Guest',
                unmapped: { userType: 'Guest' },
            },
            {
                id: 'member',
                name: 'Jack Employee',
                unmapped: { userType: 'Member' },
            },
        ]);
    });

    it('excludes directory guests with the Concierge default', async () => {
        const settings = createSettings().service;
        settings.setOverrides([DEFAULT_SETTINGS.app]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'member',
        ]);
    });

    it('includes guests when zone concierge_app metadata overrides the default', async () => {
        const settings = createSettings().service;
        settings.setOverrides([
            { staff_search_exclude_guests: false },
            DEFAULT_SETTINGS.app,
        ]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'guest',
            'member',
        ]);
        expect(mockGet.mock.calls[0][0]).not.toContain('additional_fields');
    });
});
