import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DayViewComponent } from '../../app/day-view/day-view.component';
import { DayviewTimelineComponent } from '../../app/day-view/dayview-timeline.component';
import { DayviewTopbarComponent } from '../../app/day-view/dayview-topbar.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('DayViewComponent', () => {
    let spectator: SpectatorRouting<DayViewComponent>;
    const createComponent = createRoutingFactory({
        component: DayViewComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: jest.fn(() => [{ route: '' }]) },
            },
        ],
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(DayviewTopbarComponent),
            MockComponent(DayviewTimelineComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
