import { MatMenuModule } from '@angular/material/menu';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    UserAvatarComponent,
} from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { GlobalSearchComponent } from '../../app/components/global-search.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { TopMenuComponent } from '../../app/components/top-menu.component';

describe('TopbarComponent', () => {
    let spectator: SpectatorRouting<TopbarComponent>;
    const createComponent = createRoutingFactory({
        component: TopbarComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), value: jest.fn() },
            },
        ],
        imports: [MatMenuModule],
        declarations: [
            MockComponent(UserAvatarComponent),
            MockComponent(IconComponent),
            MockComponent(GlobalSearchComponent),
            MockComponent(TopMenuComponent),
            MockComponent(CustomTooltipComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render logo', () => {
        const settings = spectator.inject(SettingsService);
        expect('[name="nav-logo"] img').not.toExist();
        (settings as any).get.mockImplementation((x) =>
            x.includes('logo') ? { src: 'test' } : null
        );
        spectator.detectChanges();
        expect('[name="nav-logo"] img').toExist();
        expect('[name="nav-logo"] img').toHaveAttribute('src', 'test');
    });

    it('should render global search', () => {
        expect('global-search').toExist();
        const settings = spectator.inject(SettingsService);
        (settings as any).get.mockImplementation((x) =>
            x.includes('search') ? false : null
        );
        spectator.detectChanges();
        expect('global-search').not.toExist();
        (settings as any).value.mockReset();
    });

    it('should render page title', () => {
        expect('[name="nav-logo"] span').not.toExist();
        const settings = spectator.inject(SettingsService);
        (settings as any).value.mockImplementation(
            () => 'An interesting title'
        );
        spectator.detectChanges();
        expect('[name="nav-logo"] span').toExist();
        expect('[name="nav-logo"] span').toContainText('An interesting title');
    });

    it('should render user avatar and details', () =>
        expect('[avatar]').toExist());
});
