import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { ScheduleFiltersComponent } from '../../app/new-schedule/schedule-filters.component';
import { ScheduleStateService } from '../../app/new-schedule/schedule-state.service';

describe('ScheduleFiltersComponent', () => {
    let spectator: Spectator<ScheduleFiltersComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleFiltersComponent,
        providers: [
            {
                provide: ScheduleStateService,
                useValue: {
                    filters: new BehaviorSubject({}),
                    toggleType: jest.fn(),
                    setDate: jest.fn(),
                },
            },
            { provide: MatBottomSheet, useValue: { open: jest.fn() } },
        ],
        declarations: [
            MockComponent(IconComponent)
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
