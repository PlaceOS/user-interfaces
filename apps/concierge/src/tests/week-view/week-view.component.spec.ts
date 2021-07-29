import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';

import { SidebarComponent } from '../../app/ui/sidebar.component';
import { WeekViewTimelineComponent } from '../../app/week-view/week-view-timeline.component';
import { WeekViewTopbarComponent } from '../../app/week-view/week-view-topbar.component';
import { WeekViewComponent } from '../../app/week-view/week-view.component';

describe('WeekViewComponent', () => {
    let spectator: Spectator<WeekViewComponent>;
    const createComponent = createComponentFactory({
        component: WeekViewComponent,
        declarations: [
            MockComponent(SidebarComponent),
            MockComponent(WeekViewTopbarComponent),
            MockComponent(WeekViewTimelineComponent),
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
