import { SpectatorRouting, createRoutingFactory } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { MockComponent } from 'ng-mocks';

import { DayViewComponent } from '../../app/day-view/day-view.component';
import { DayviewTimelineComponent } from '../../app/day-view/dayview-timeline.component';
import { DayviewTopbarComponent } from '../../app/day-view/dayview-topbar.component';
import { RoomBookingsComponent } from '../../app/day-view/room-bookings.component';
import { ApplicationSidebarComponent } from '../../app/ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../../app/ui/app-topbar.component';

describe('DayViewComponent', () => {
    let spectator: SpectatorRouting<DayViewComponent>;
    const createComponent = createRoutingFactory({
        component: DayViewComponent,
        providers: [
            {
                provide: SettingsService,
                useValue: { get: vi.fn(() => [{ route: '' }]) },
            },
        ],
        declarations: [
            MockComponent(ApplicationTopbarComponent),
            MockComponent(ApplicationSidebarComponent),
            MockComponent(DayviewTopbarComponent),
            MockComponent(DayviewTimelineComponent),
            MockComponent(RoomBookingsComponent),
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
