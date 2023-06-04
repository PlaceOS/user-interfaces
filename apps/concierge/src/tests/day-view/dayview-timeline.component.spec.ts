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

jest.mock('@placeos/ts-client');

import * as client from '@placeos/ts-client';
import { fakeAsync } from '@angular/core/testing';

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
                    levelWithID: jest.fn(),
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

    beforeEach(() => {
        (client.querySystems as any) = jest.fn(() => of({ data: [] }));
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should display spaces', fakeAsync(() => {
        (spectator.inject(SpacesService).list as any).next([]);
        spectator.detectChanges();
        expect('dayview-space').not.toExist();
        (client.querySystems as any).mockImplementation(() =>
            of({ data: [{}, {}] })
        );
        (spectator.inject(OrganisationService).active_building as any).next({
            id: 'bld-1',
        });
        spectator.tick(1001);
        spectator.detectChanges();
        expect('dayview-space').toExist();
    }));

    it('should handle scrolling', async () => {
        jest.spyOn(spectator.component, 'onScroll');
        spectator.triggerEventHandler('[content]', 'scroll', {
            srcElement: { scrollLeft: 2, scrollTop: 1 },
        });
        expect(spectator.component.onScroll).toHaveBeenCalled();
    });
});
