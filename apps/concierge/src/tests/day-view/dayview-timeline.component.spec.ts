import { signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { SpacesService } from '@placeos/events';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';

import { DayviewSpaceComponent } from '../../app/day-view/dayview-space.component';
import { DayviewTimelineComponent } from '../../app/day-view/dayview-timeline.component';
import { EventsStateService } from '../../app/day-view/events-state.service';
import { ViewEventDetailsComponent } from '../../app/ui/view-event-details.component';

jest.mock('@placeos/ts-client', () => {
    class CLASS {}
    return { querySystems: jest.fn(), PlaceZone: CLASS, PlaceSystem: CLASS };
});

import * as client from '@placeos/ts-client';

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
                    active_building: signal({ id: ' bld-1' }),
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
                    zones: signal([]),
                    loading: signal(false),
                    event: signal(null),
                    startPolling: jest.fn(),
                    stopPolling: jest.fn(),
                },
            },
        ],
        imports: [MatProgressBarModule],
    });

    beforeEach(() => {
        (client.querySystems as any).mockImplementation(() =>
            Promise.resolve({ data: [] }),
        );
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should display spaces', async () => {
        spectator.detectChanges();
        await spectator.fixture.whenStable();
        spectator.detectChanges();
        expect('dayview-space').not.toExist();
        (client.querySystems as any).mockImplementation(() =>
            Promise.resolve({ data: [{}, {}] }),
        );
        (spectator.inject(OrganisationService).active_building as any).set({
            id: 'bld-1',
        });
        spectator.detectChanges();
        await spectator.fixture.whenStable();
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
