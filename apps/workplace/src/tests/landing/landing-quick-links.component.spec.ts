import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { settingSignal } from '@placeos/common';
import { LandingQuickLinksComponent } from '../../app/landing/landing-quick-links.component';

describe('LandingQuickLinksComponent', () => {
    let spectator: SpectatorRouting<LandingQuickLinksComponent>;
    const createComponent = createRoutingFactory({
        component: LandingQuickLinksComponent,
        detectChanges: false,
        stubsEnabled: false,
    });

    it('renders a routed link for each enabled booking feature', () => {
        settingSignal<string[]>('features', []).set([
            'spaces',
            'desks',
            'parking',
            'lockers',
        ]);
        spectator = createComponent();
        spectator.detectChanges();
        const links = spectator.queryAll('a');
        expect(links).toHaveLength(4);
        const routes = links.map((el) => el.getAttribute('href'));
        expect(routes).toEqual([
            '/book/meeting',
            '/book/desk',
            '/book/parking',
            '/book/locker',
        ]);
    });

    it('only renders links for the subset of enabled features', () => {
        settingSignal<string[]>('features', []).set(['desks']);
        spectator = createComponent();
        spectator.detectChanges();
        const links = spectator.queryAll('a');
        expect(links).toHaveLength(1);
        expect(links[0].getAttribute('href')).toBe('/book/desk');
    });

    it('renders no booking links when no features are enabled', () => {
        settingSignal<string[]>('features', []).set([]);
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.queryAll('a')).toHaveLength(0);
    });
});
