import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { SidebarComponent } from '../../app/ui/sidebar.component';
import { WeekViewTimelineComponent } from '../../app/week-view/week-view-timeline.component';
import { WeekViewTopbarComponent } from '../../app/week-view/week-view-topbar.component';
import { WeekViewComponent } from '../../app/week-view/week-view.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';

describe('WeekViewComponent', () => {
    let spectator: Spectator<WeekViewComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewComponent,
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(WeekViewTopbarComponent),
            MockComponent(WeekViewTimelineComponent),
            MockComponent(SidebarComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
