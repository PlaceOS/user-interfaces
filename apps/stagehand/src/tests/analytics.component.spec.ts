import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { settingSignal } from '@placeos/common';
import { IconComponent, SafePipe } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { AnalyticsComponent } from '../app/analytics.component';
import { SidebarComponent } from '../app/ui/sidebar.component';

describe('AnalyticsComponent', () => {
    let spectator: SpectatorRouting<AnalyticsComponent>;

    const create_component = createRoutingFactory({
        component: AnalyticsComponent,
        // mocked standalone declarations cause ALL imports to be mocked;
        // list SafePipe here to keep the real pipe for the iframe [src] binding
        imports: [NoopAnimationsModule, SafePipe],
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(IconComponent),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        // Reset the shared, cached analytics_pages setting signal
        settingSignal('analytics_pages', []).set([]);
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the sidebar and page heading', () => {
        spectator.detectChanges();
        expect(spectator.query('sidebar')).toBeTruthy();
        expect(spectator.query('h1')).toHaveText('AV Systems Analytics');
    });

    it('should show the empty state when no dashboard is selected', () => {
        spectator.detectChanges();
        expect(spectator.query('iframe')).toBeFalsy();
        expect(spectator.query('main icon')).toBeTruthy();
    });

    it('should render the selected dashboard in an iframe', () => {
        spectator.component.page.set({ name: 'Systems', url: '/analytics/x' });
        spectator.detectChanges();

        const iframe = spectator.query('iframe');
        expect(iframe).toBeTruthy();
        expect(iframe?.getAttribute('src')).toBe('/analytics/x');
        expect(iframe?.getAttribute('title')).toBe('Systems');
    });

    it('should expose the analytics pages from settings', () => {
        const pages = [{ name: 'Systems', url: '/a' }];
        settingSignal('analytics_pages', []).set(pages);
        expect(spectator.component.analytics_pages()).toEqual(pages);
    });
});
