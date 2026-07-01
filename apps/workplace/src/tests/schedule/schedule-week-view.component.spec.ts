import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MatDialog } from '@angular/material/dialog';
import { Booking, OrganisationService } from '@placeos/common';
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

    it('should hide the asset id of unallocated parking bookings', () => {
        // asset_name falls back to the raw asset_id
        const via_asset_name = new Booking({
            booking_type: 'parking',
            asset_id: 'unallocated-123',
        });
        // location getter falls back to the description holding the raw id
        const via_description = new Booking({
            booking_type: 'parking',
            asset_id: 'unallocated-456',
            description: 'unallocated-456',
        });
        const allocated = new Booking({
            booking_type: 'parking',
            asset_id: 'space-1',
            asset_name: 'Bay 1',
        });
        expect(spectator.component.location(via_asset_name)).toBe('');
        expect(spectator.component.location(via_description)).toBe('');
        expect(spectator.component.location(allocated)).toBe('Bay 1');
    });

    it('should not show a visitor name for non-visitor bookings', () => {
        const parking = new Booking({
            booking_type: 'parking',
            asset_id: 'unallocated-5gIZsCGa',
            title: 'Parking Request',
        });
        expect(spectator.component.visitorName(parking)).toBe('');
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
