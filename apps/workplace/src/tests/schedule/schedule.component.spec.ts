import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';

import { TopbarComponent } from '../../app/components/topbar.component';
import { ScheduleComponent } from '../../app/schedule/schedule.component';

describe('ScheduleComponent', () => {
    let spectator: SpectatorRouting<ScheduleComponent>;
    const createComponent = createRoutingFactory({
        component: ScheduleComponent,
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
