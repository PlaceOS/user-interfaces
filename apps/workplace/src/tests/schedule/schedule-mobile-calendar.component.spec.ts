import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockComponent } from 'ng-mocks';
import { ScheduleMobileCalendarComponent } from '../../app/schedule/schedule-mobile-calendar.component';

describe('ScheduleMobileCalendarComponent', () => {
    let spectator: Spectator<ScheduleMobileCalendarComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleMobileCalendarComponent,
        declarations: [MockComponent(IconComponent)],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
