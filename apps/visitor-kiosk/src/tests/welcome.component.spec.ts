import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { settingSignal, SettingsService } from '@placeos/common';
import {
    MockComponent,
    MockDirective,
    MockModule,
    MockProvider,
} from 'ng-mocks';

import { MatMenuModule } from '@angular/material/menu';
import {
    AuthenticatedImageDirective,
    IconComponent,
    VirtualKeyboardComponent,
} from '@placeos/components';
import { WelcomeComponent } from '../app/welcome.component';

describe('WelcomeComponent', () => {
    let spectator: SpectatorRouting<WelcomeComponent>;
    const createComponent = createRoutingFactory({
        component: WelcomeComponent,
        // Use the real router, so links show their target URL
        stubsEnabled: false,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                listen: (() => signal('')) as SettingsService['listen'],
            }),
        ],
        imports: [MockModule(MatMenuModule)],
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
    });

    const actions = () =>
        spectator.queryAll('a[btn]').map((el) => el.getAttribute('href'));

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        localStorage.clear();
        VirtualKeyboardComponent.enabled = false;
        settingSignal('allow_self_registration').set(undefined);
    });

    it('shows separate check-in and checkout actions', () => {
        spectator = createComponent();
        expect(actions()).toEqual(['/checkin', '/checkout']);
    });

    it('shows the register action only when self-registration is allowed', () => {
        settingSignal('allow_self_registration').set(true);
        spectator = createComponent();
        expect(actions()).toEqual(['/checkin', '/checkout', '/register']);
    });

    it('saves the on-screen keyboard choice from the URL', () => {
        spectator = createComponent({ queryParams: { osk: 'true' } });
        expect(localStorage.getItem('OSK.enabled')).toBe('true');
        expect(VirtualKeyboardComponent.enabled).toBe(true);
    });

    it('should show public mode blocker when enabled', () => {
        spectator = createComponent();
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent?.trim()).toBe(
            'Public mode is enabled',
        );
    });
});
