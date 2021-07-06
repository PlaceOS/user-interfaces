import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';
import { NavMenuComponent } from '../../app/components/nav-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ControlComponent } from '../../app/control/control.component';
import { ControlSpaceListComponent } from '../../app/control/space-list.component';

describe('ControlComponent', () => {
    let spectator: Spectator<ControlComponent>;
    const createComponent = createComponentFactory({
        component: ControlComponent,
        providers: [{ provide: SettingsService, useValue: { title: '' } }],
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(NavMenuComponent),
            MockComponent(ControlSpaceListComponent),
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
