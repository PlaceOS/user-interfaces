import { Title } from '@angular/platform-browser';
import { createServiceFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
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

// Search behaviour is covered in libs/users and the Concierge spec.
// These tests cover only the Workplace default and its metadata opt-out.
describe('Workplace staff directory search settings', () => {
    const createSettings = createServiceFactory({
        service: SettingsService,
        providers: [MockProvider(Title, { setTitle: vi.fn() })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
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

    it('excludes directory guests with the Workplace default', async () => {
        createSettings().service.setOverrides([DEFAULT_SETTINGS.app]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'member',
        ]);
    });

    it('includes guests when zone workplace_app metadata overrides the default', async () => {
        createSettings().service.setOverrides([
            { staff_search_exclude_guests: false },
            DEFAULT_SETTINGS.app,
        ]);
        expect((await searchStaff('Jack')).map((u) => u.id)).toEqual([
            'guest',
            'member',
        ]);
    });
});
