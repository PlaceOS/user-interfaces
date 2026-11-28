import { Title } from '@angular/platform-browser';
import { createServiceFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { searchStaff } from 'libs/users/src/lib/staff.fn';
import { MockProvider } from 'ng-mocks';
import { DEFAULT_SETTINGS } from '../environments/settings';

// The people endpoint has no 7.x operation, so `searchStaff` reads the JSON
// with `fetch`, which is stubbed below.
const fetch_mock = vi.fn<typeof fetch>();

// Search behaviour is covered in libs/users and the Concierge spec.
// These tests cover only the Workplace default and its metadata opt-out.
describe('Workplace staff directory search settings', () => {
    const createSettings = createServiceFactory({
        service: SettingsService,
        providers: [MockProvider(Title, { setTitle: vi.fn() })],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.stubGlobal('fetch', fetch_mock);
        fetch_mock.mockImplementation(
            async () =>
                new Response(
                    JSON.stringify([
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
                    ]),
                ),
        );
    });

    afterEach(() => vi.unstubAllGlobals());

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
