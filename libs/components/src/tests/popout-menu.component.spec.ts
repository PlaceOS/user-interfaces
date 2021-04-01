
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { PopoutMenuComponent } from '../lib/popout-menu.component';
import { IconComponent } from '../lib/icon.component';

describe('PopoutMenuComponent', () => {
    let spectator: Spectator<PopoutMenuComponent>;
    const createComponent = createComponentFactory({
        component: PopoutMenuComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
