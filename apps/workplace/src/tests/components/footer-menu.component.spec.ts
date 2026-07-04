import { signal } from '@angular/core';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/jest';
import { Building, OrganisationService, SettingsService } from '@placeos/common';
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
                get: jest.fn(),
                theme: 'light' as any,
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

    const setSettings = (map: Record<string, any>) => {
        const settings = spectator.inject(SettingsService);
        (settings.get as jest.Mock).mockImplementation((key: string) => map[key]);
    };

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('counts enabled features and valid menu embeds together', () => {
        setSettings({
            'app.features': ['desks', 'spaces'],
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
        setSettings({ 'app.features': ['desks'] });
        spectator.detectChanges();
        expect('[name="footer-nav-home"]').not.toExist();
    });

    it('shows the footer bar when there is more than one navigation item', () => {
        setSettings({ 'app.features': ['desks', 'spaces'] });
        spectator.detectChanges();
        expect('[name="footer-nav-home"]').toExist();
    });

    it('renders book shortcuts for enabled features when the panel is open', () => {
        setSettings({ 'app.features': ['spaces', 'parking'] });
        spectator.component.show_book_items.set(true);
        spectator.detectChanges();
        expect('[name="footer-nav-meeting"]').toExist();
        expect('[name="footer-nav-parking"]').toExist();
        expect('[name="footer-nav-visitors"]').not.toExist();
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
