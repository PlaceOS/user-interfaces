import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';

import { FooterMenuComponent } from '../app/footer-menu.component';

describe('FooterMenuComponent', () => {
    let spectator: SpectatorRouting<FooterMenuComponent>;
    const createComponent = createRoutingFactory({
        component: FooterMenuComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));
    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
