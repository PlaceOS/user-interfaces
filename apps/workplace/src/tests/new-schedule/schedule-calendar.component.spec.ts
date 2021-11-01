import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { ScheduleCalendarComponent } from "../../app/new-schedule/schedule-calendar.component";

describe('ScheduleCalendarComponent', () => {
    let spectator: Spectator<ScheduleCalendarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleCalendarComponent
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    })
});