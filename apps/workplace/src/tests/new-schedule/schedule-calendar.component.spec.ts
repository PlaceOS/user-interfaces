import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { IconComponent } from "@placeos/components";
import { MockComponent } from "ng-mocks";
import { ScheduleCalendarComponent } from "../../app/new-schedule/schedule-calendar.component";

describe('ScheduleCalendarComponent', () => {
    let spectator: Spectator<ScheduleCalendarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleCalendarComponent,
        declarations: [MockComponent(IconComponent)]
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});