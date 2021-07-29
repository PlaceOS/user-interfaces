import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActionIconComponent, IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { VisitorDetailsComponent } from '../../app/visitors/visitor-details.component';
import { VisitorEventComponent } from '../../app/visitors/visitor-event.component';
import { VisitorsStateService } from '../../app/visitors/visitors-state.service';

describe('VisitorEventComponent', () => {
    let spectator: Spectator<VisitorEventComponent>;
    const createComponent = createComponentFactory({
        component: VisitorEventComponent,
        providers: [
            {
                provide: VisitorsStateService,
                useValue: {
                    filters: new BehaviorSubject({}),
                    filtered_events: new BehaviorSubject([]),
                },
            },
        ],
        declarations: [
            MockComponent(VisitorDetailsComponent),
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatTooltipModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        spectator.setInput({ event: new CalendarEvent({ date: 1 }) });
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });

    it.todo("should list event's visitors");
    it.todo('should allow user to checkin allow visitors');
    it.todo('should allow user to checkout allow visitors');
    it.todo('should tweak display based off search changes');
});
