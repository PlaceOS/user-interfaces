import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { ScheduleMobileCalendarComponent } from "../../app/new-schedule/schedule-mobile-calendar.component";

describe('ScheduleMobileCalendarComponent', () => {
    let spectator: Spectator<ScheduleMobileCalendarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleMobileCalendarComponent
    });

    beforeEach(() => spectator = createComponent());

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
    })
});