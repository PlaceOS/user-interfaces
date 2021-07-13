import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { DayViewComponent } from '../../app/day-view/day-view.component';
import { DayviewTimelineComponent } from '../../app/day-view/dayview-timeline.component';
import { DayviewTopbarComponent } from '../../app/day-view/dayview-topbar.component';
import { SidebarComponent } from '../../app/ui/sidebar.component';

describe('DayViewComponent', () => {
    let spectator: Spectator<DayViewComponent>;
    const createComponent = createComponentFactory({
        component: DayViewComponent,
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
