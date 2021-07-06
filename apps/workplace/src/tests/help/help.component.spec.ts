import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';
import { NavMenuComponent } from '../../app/components/nav-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { HelpComponent } from '../../app/help/help.component';
import { HelpOptionListComponent } from '../../app/help/option-list.component';

describe('HelpComponent', () => {
    let spectator: Spectator<HelpComponent>;
    const createComponent = createComponentFactory({
        component: HelpComponent,
        providers: [{ provide: SettingsService, useValue: {} }],
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(NavMenuComponent),
            MockComponent(HelpOptionListComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    });
});
