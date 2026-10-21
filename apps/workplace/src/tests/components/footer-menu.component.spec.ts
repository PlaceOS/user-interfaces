import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import {
    Building,
    OrganisationService,
    setCurrentUser,
    settingSignal,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { MockPipe, MockProvider } from 'ng-mocks';

import { FooterMenuComponent } from '../../app/components/footer-menu.component';

describe('FooterMenuComponent', () => {
    let spectator: SpectatorRouting<FooterMenuComponent>;
    const createComponent = createRoutingFactory({
        component: FooterMenuComponent,
        providers: [
            MockProvider(SettingsService, {
                get: vi.fn(),
                theme: 'light',
            }),
            MockProvider(OrganisationService, {
                active_building: signal(new Building()),
            }),
        ],
        declarations: [
            mockComponent(IconComponent),
            MockPipe(TranslatePipe, (v) => v),
        ],
        detectChanges: false,
    });

    const features = settingSignal<string[]>('features', []);
    const feature_groups = settingSignal<Record<string, string[]>>(
        'feature_groups',
        {},
    );

    const setSettings = (map: Record<string, unknown>) => {
        const settings = spectator.inject(SettingsService);
        settings.get.mockImplementation((key: string) => map[key]);
    };

    beforeEach(() => {
        features.set([]);
        feature_groups.set({});
        setCurrentUser(new StaffUser({ id: 'me', groups: ['staff'] }));
        spectator = createComponent();
        setSettings({});
    });

    it('counts enabled features and valid menu embeds together', () => {
        features.set(['desks', 'spaces']);
        setSettings({
            'app.menu_embeds': [{ id: 'a', name: 'A', url: 'u' }],
        });
        expect(spectator.component.features().length).toBe(2);
        expect(spectator.component.menu_embeds().length).toBe(1);
        expect(spectator.component.footer_item_count()).toBe(3);
    });

    it('drops menu embeds missing an id, name or url', () => {
        setSettings({
            'app.menu_embeds': [
                { id: 'a', name: 'A', url: 'u' },
                { id: 'b', name: 'B' },
                { name: 'C', url: 'u' },
            ],
        });
        const embeds = spectator.component.menu_embeds();
        expect(embeds.length).toBe(1);
        expect(embeds[0].id).toBe('a');
    });

    it('hides the footer bar when there is at most one navigation item', () => {
        features.set(['desks']);
        spectator.detectChanges();
        expect('[name="footer-nav-home"]').not.toExist();
    });

    it('shows the footer bar when there is more than one navigation item', () => {
        features.set(['desks', 'spaces']);
        spectator.detectChanges();
        expect('[name="footer-nav-home"]').toExist();
    });

    it('renders book shortcuts for enabled features when the panel is open', () => {
        features.set(['spaces', 'parking']);
        spectator.component.show_book_items.set(true);
        spectator.detectChanges();
        expect('[name="footer-nav-spaces"]').toExist();
        expect('[name="footer-nav-parking"]').toExist();
        expect('[name="footer-nav-visitor-invite"]').not.toExist();
    });

    it('hides features that are limited to other user groups', () => {
        features.set(['spaces', 'desks', 'parking']);
        feature_groups.set({ parking: ['parking-users'] });
        spectator.component.show_book_items.set(true);
        spectator.detectChanges();
        expect('[name="footer-nav-spaces"]').toExist();
        expect('[name="footer-nav-parking"]').not.toExist();
    });

    it('does not render the explore link when explore is disabled', () => {
        features.set(['desks', 'spaces']);
        spectator.detectChanges();
        expect('[name="footer-nav-explore"]').not.toExist();

        features.set(['desks', 'explore']);
        spectator.detectChanges();
        expect('[name="footer-nav-explore"]').toExist();
    });

    it('resolves dark mode from the allow_dark_mode setting and active theme', () => {
        setSettings({ 'app.allow_dark_mode': true });
        (spectator.inject(SettingsService) as any).theme = 'dark';
        expect(spectator.component.dark_mode()).toBe(true);
    });

    it('reports light mode when the theme is not dark', () => {
        setSettings({ 'app.allow_dark_mode': true });
        (spectator.inject(SettingsService) as any).theme = 'light';
        expect(spectator.component.dark_mode()).toBeFalsy();
    });

    it('falls back to the landing route when no default route is configured', () => {
        setSettings({});
        expect(spectator.component.default_page()).toBe('/landing');
    });

    it('uses the configured default route when present', () => {
        setSettings({ 'app.default_route': '/your-bookings' });
        expect(spectator.component.default_page()).toBe('/your-bookings');
    });
});
