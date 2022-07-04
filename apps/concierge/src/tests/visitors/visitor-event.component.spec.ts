import { MatTooltipModule } from '@angular/material/tooltip';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ActionIconComponent, IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';
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
                    checkAllGuestsIn: jest.fn(() => of({})),
                    checkAllGuestsOut: jest.fn(() => of({})),
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
        expect('[event]').not.toExist();
        spectator.setInput({ event: new CalendarEvent({ date: 1 }) });
        spectator.detectChanges();
        expect('[event]').toExist();
    });

    it("should list event's visitors", () => {
        spectator.setInput({ event: new CalendarEvent({ date: 1 }) });
        spectator.detectChanges();
        expect('visitor-details').not.toExist();
        spectator.setInput({
            event: new CalendarEvent({
                date: 1,
                attendees: [{ id: '1' }, { id: '2' }] as any,
            }),
        });
        spectator.component.show_attendees = true;
        spectator.detectChanges();
        expect('visitor-details').toHaveLength(2);
    });

    it('should allow user to checkin allow visitors', () => {
        const event = new CalendarEvent({ date: 1 });
        spectator.setInput({ event });
        spectator.detectChanges();
        spectator.click('action-icon[checkin]');
        const service = spectator.inject(VisitorsStateService);
        expect(service.checkAllGuestsIn).toBeCalledWith(event);
    });

    it('should allow user to checkout allow visitors', () => {
        const event = new CalendarEvent({ date: 1 });
        spectator.setInput({ event });
        spectator.detectChanges();
        spectator.click('action-icon[checkout]');
        const service = spectator.inject(VisitorsStateService);
        expect(service.checkAllGuestsOut).toBeCalledWith(event);
    });
});
