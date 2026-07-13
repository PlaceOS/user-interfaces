import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('ApplicationTopbarComponent', () => {
    let spectator: SpectatorRouting<ApplicationTopbarComponent>;
    const theme = signal<'light' | 'dark'>('light');
    const logo_dark = signal<any>('dark-logo.png');
    const logo_light = signal<any>('light-logo.png');

    const createComponent = createRoutingFactory({
        component: ApplicationTopbarComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            MockProvider(SettingsService, {
                theme_signal: theme,
                signal: ((name: string) =>
                    name === 'app.logo_dark' ? logo_dark : logo_light) as any,
            } as any),
        ],
    });

    beforeEach(() => {
        theme.set('light');
        logo_dark.set('dark-logo.png');
        logo_light.set('light-logo.png');
        spectator = createComponent();
    });

    it('should show the light logo for the light theme', () => {
        expect(spectator.component.logo_src()).toBe('light-logo.png');
    });

    it('should switch to the dark logo when the theme changes', () => {
        theme.set('dark');
        expect(spectator.component.logo_src()).toBe('dark-logo.png');
    });

    it('should resolve the src from an object-shaped logo value', () => {
        logo_light.set({ src: 'nested-logo.png' });
        expect(spectator.component.logo_src()).toBe('nested-logo.png');
    });

    it('should fall back to an empty string when no logo is set', () => {
        logo_light.set(null);
        expect(spectator.component.logo_src()).toBe('');
    });
});
