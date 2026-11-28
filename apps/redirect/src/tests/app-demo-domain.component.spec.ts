/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://demo.place.tech/" }
 */
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    isMock,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { startFakePlaceClient } from '@placeos/common/tests';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app/app.component';

// The real `setupPlace` runs with a fake login session. The demo-origin
// branch relies on the jsdom `url` set by the `@vitest-environment-options`
// docblock above.
vi.mock('@placeos/ts-client', { spy: true });

const settings_get = vi.fn();
const settings_mock = {
    initialised: new BehaviorSubject<boolean>(true),
    get: settings_get,
};

describe('AppComponent (demo domain)', () => {
    let spectator: Spectator<AppComponent>;
    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        componentProviders: [
            { provide: SettingsService, useValue: settings_mock },
        ],
    });

    // Mock mode lazy loads `@placeos/mocks`. A cold load is slow on a busy
    // machine, so load it once here, outside the test timeout.
    beforeAll(() => import('@placeos/mocks'), 30_000);

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        vi.spyOn(console, 'log').mockImplementation(() => void 0);
        // mock setting explicitly disabled so only the demo origin can enable it
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        startFakePlaceClient();
        setCurrentUser(new StaffUser({ email: 'user@example.com' }));
        spectator = create_component();
    });

    it('should enable mock mode on the demo domain even when the setting is off', async () => {
        await spectator.component.ngOnInit();
        expect(isMock()).toBe(true);
    });
});
