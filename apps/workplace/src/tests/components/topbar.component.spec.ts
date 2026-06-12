import { MatMenuModule } from '@angular/material/menu';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    Building,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { signal } from '@angular/core';
import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
    UserAvatarComponent,
} from '@placeos/components';
import { GlobalSearchComponent } from '../../app/components/global-search.component';
import { TopMenuComponent } from '../../app/components/top-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';

describe('TopbarComponent', () => {
    let spectator: SpectatorRouting<TopbarComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarComponent,
        providers: [
            MockProvider(SettingsService, {
                get: jest.fn(),
                value: jest.fn(),
                theme_signal: signal(''),
            }),
            MockProvider(OrganisationService, {
                active_building: new BehaviorSubject(new Building()),
                active_region: new BehaviorSubject(null),
                region_list: new BehaviorSubject([]),
                building: new Building(),
            }),
        ],
        imports: [MatMenuModule],
        declarations: [
            mockComponent(UserAvatarComponent),
            mockComponent(IconComponent),
            mockComponent(GlobalSearchComponent),
            mockComponent(TopMenuComponent),
            mockComponent(CustomTooltipComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render global search', () => {
        expect('global-search').toExist();
        const settings = spectator.inject(SettingsService);
        (settings as any).get.mockImplementation((x) =>
            x.includes('search') ? false : null,
        );
        spectator.detectChanges();
        expect('global-search').not.toExist();
        (settings as any).value.mockReset();
    });

    it('should render page title', () => {
        expect('[name="nav-logo"] span').not.toExist();
        const settings = spectator.inject(SettingsService);
        (settings as any).value.mockImplementation(
            () => 'An interesting title',
        );
        spectator.detectChanges();
        expect('[name="nav-logo"] span').toExist();
        expect('[name="nav-logo"] span').toContainText('An interesting title');
    });

    it('should render user avatar and details', () =>
        expect('[avatar]').toExist());

    it('should render user controls sidebar', () => {
        expect('user-controls-sidebar').toExist();
        expect('[name="user-controls"]').toExist();
    });
});
