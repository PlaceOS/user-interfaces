import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleWeekViewComponent } from '../../app/schedule/schedule-week-view.component';

describe('ScheduleWeekViewComponent', () => {
    let spectator: Spectator<ScheduleWeekViewComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleWeekViewComponent,
        providers: [
            MockProvider(MatDialog, { open: jest.fn(), closeAll: jest.fn() }),
            MockProvider(OrganisationService, { levelWithID: jest.fn() }),
            {
                provide: ScheduleStateService,
                useValue: {
                    get offset_weekday() {
                        return 1;
                    },
                    edit: jest.fn(),
                    remove: jest.fn(),
                    editBooking: jest.fn(),
                    end: jest.fn(),
                },
            },
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should align displayed weekdays to the configured week start', () => {
        spectator.setInput('date', new Date('2026-04-15T12:00:00').valueOf());

        expect(spectator.component.weekdays().map((day) => day.id)).toEqual([
            '2026-04-13',
            '2026-04-14',
            '2026-04-15',
            '2026-04-16',
            '2026-04-17',
            '2026-04-18',
            '2026-04-19',
        ]);
    });
});
