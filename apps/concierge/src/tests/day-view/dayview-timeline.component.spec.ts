import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject, of } from 'rxjs';

import { DayviewSpaceComponent } from '../../app/day-view/dayview-space.component';
import { DayviewTimelineComponent } from '../../app/day-view/dayview-timeline.component';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { ViewEventDetailsComponent } from '../../app/ui/view-event-details.component';

describe('DayviewTimelineComponent', () => {
    let spectator: Spectator<DayviewTimelineComponent>;
    const createComponent = createComponentFactory({
        component: DayviewTimelineComponent,
        declarations: [
            MockComponent(DayviewSpaceComponent),
            MockComponent(ViewEventDetailsComponent),
        ],
        providers: [
            {
                provide: OrganisationService,
                useValue: {
                    active_building: new BehaviorSubject({ id: ' bld-1' }),
                },
            },
            {
                provide: SpacesService,
                useValue: {
                    list: new BehaviorSubject([]),
                },
            },
            {
                provide: EventsStateService,
                useValue: {
                    zones: new BehaviorSubject([]),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should match snapshot', () => {
        expect(spectator.element).toMatchSnapshot();
        const bld = (spectator.inject(OrganisationService)
            .active_building as any).getValue();
        (spectator.inject(SpacesService).list as any).next([
            { zones: [bld.id] },
        ]);
        spectator.detectChanges();
        expect(spectator.element).toMatchSnapshot();
    });

    it('should display spaces', () => {
        (spectator.inject(SpacesService).list as any).next([]);
        spectator.detectChanges();
        expect('dayview-space').not.toExist();
        const bld = (spectator.inject(OrganisationService)
            .active_building as any).getValue();
        (spectator.inject(SpacesService).list as any).next([
            {
                name: 'space-1',
                zones: [bld.id],
            },
        ]);
        spectator.detectChanges();
        expect('dayview-space').toExist();
    });

    it('should handle scrolling', async () => {
        jest.spyOn(spectator.component, 'onScroll');
        spectator.triggerEventHandler('[content]', 'scroll', {
            srcElement: { scrollLeft: 2, scrollTop: 1 },
        });
        expect(spectator.component.onScroll).toHaveBeenCalled();
    });
});
