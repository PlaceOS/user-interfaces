import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import {
    MockComponent,
    MockDirective,
    MockModule,
    MockPipe,
    MockProvider,
} from 'ng-mocks';
import { signal } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SanitizePipe,
} from '@placeos/components';
import { TopbarHeaderComponent } from '../app/components/topbar-header.component';
import { WelcomeComponent } from '../app/welcome.component';

describe('WelcomeComponent', () => {
    let spectator: SpectatorRouting<WelcomeComponent>;
    const createComponent = createRoutingFactory({
        component: WelcomeComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                listen: vi.fn(() => signal('')) as any,
            }),
        ],
        imports: [MockModule(MatMenuModule)],
        declarations: [
            MockComponent(TopbarHeaderComponent),
            MockComponent(IconComponent),
            MockPipe(SanitizePipe),
            MockDirective(AuthenticatedImageDirective),
        ],
    });

    beforeEach(() => {
        window.PLACEOS_PUBLIC_MODE = false;
        spectator = createComponent();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('shows separate check-in and checkout actions', () => {
        expect(spectator.queryAll('a[btn]')).toHaveLength(2);
    });

    it('should show public mode blocker when enabled', () => {
        window.PLACEOS_PUBLIC_MODE = true;
        spectator.detectChanges();
        expect(spectator.query('h2')?.textContent?.trim()).toBe(
            'Public mode is enabled',
        );
    });
});
