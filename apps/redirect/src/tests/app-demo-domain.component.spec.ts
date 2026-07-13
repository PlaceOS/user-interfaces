/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://demo.place.tech/" }
 */
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService } from '@placeos/common';
import { authority, setup } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app/app.component';

// Only `@placeos/ts-client` can be intercepted under the zoneless unit-test
// builder; `setupPlace()` runs for real and calls `setup(config)`, so we assert
// the resolved `mock` flag on that config. The demo-origin branch relies on the
// jsdom `url` set by the `@vitest-environment-options` docblock above.
vi.mock('@placeos/ts-client', { spy: true });

const settings_get = vi.fn();
const settings_mock = {
    initialised: new BehaviorSubject<boolean>(true),
    get: settings_get,
};

describe('AppComponent (demo domain)', () => {
    let spectator: Spectator<AppComponent>;
    const route_stub: any = {
        snapshot: {
            queryParamMap: {
                has: () => false,
                get: () => null,
                getAll: () => [],
                keys: [],
            },
        },
    };

    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [{ provide: ActivatedRoute, useValue: route_stub }],
        componentProviders: [
            { provide: SettingsService, useValue: settings_mock },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        vi.spyOn(console, 'log').mockImplementation(() => void 0);
        // mock setting explicitly disabled so only the demo origin can enable it
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        vi.mocked(setup).mockResolvedValue(undefined as any);
        vi.mocked(authority).mockReturnValue(undefined as any);
        setCurrentUser({ email: 'user@example.com' } as any);
        spectator = create_component();
    });

    it('should run under the demo origin', () => {
        expect(location.origin).toBe('https://demo.place.tech');
    });

    it('should enable mock mode on the demo domain even when the setting is off', async () => {
        await spectator.component.ngOnInit();
        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({ mock: true }),
        );
    });
});
