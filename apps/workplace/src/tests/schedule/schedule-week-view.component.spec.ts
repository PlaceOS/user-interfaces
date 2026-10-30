import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BookingDetailsModalComponent } from '@placeos/bookings';
import {
    Booking,
    BuildingLevel,
    OrganisationService,
    settingSignal,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleWeekViewComponent } from '../../app/schedule/schedule-week-view.component';

describe('ScheduleWeekViewComponent', () => {
    let spectator: Spectator<ScheduleWeekViewComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleWeekViewComponent,
        providers: [
            MockProvider(MatDialog, { open: vi.fn(), closeAll: vi.fn() }),
            MockProvider(OrganisationService, { levelWithID: vi.fn() }),
            {
                provide: ScheduleStateService,
                useValue: {
                    get offset_weekday() {
                        return 1;
                    },
                    edit: vi.fn(),
                    remove: vi.fn(),
                    editBooking: vi.fn(),
                    end: vi.fn(),
                    triggerPoll: vi.fn(),
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

    it('should show only the level of a hidden parking space', () => {
        vi.mocked(
            spectator.inject(OrganisationService).levelWithID,
        ).mockReturnValue(new BuildingLevel({ name: 'Level 1' }));
        const parking = new Booking({
            booking_type: 'parking',
            asset_id: 'space-1',
            asset_name: 'Bay 1',
            zones: ['level-1'],
        });
        const hide_space = settingSignal('parking.hide_selected_space');
        hide_space.set(true);
        try {
            expect(spectator.component.location(parking)).toBe('Level 1');
        } finally {
            hide_space.set(false);
        }
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

    it('should list a multi-day booking on each day that it covers', () => {
        // Monday to Wednesday of a week that starts on Monday
        const monday = new Date(2026, 4, 11).valueOf();
        spectator.setInput('date', monday);
        spectator.setInput('bookings', [
            new Booking({
                id: 'multi',
                booking_type: 'parking',
                date: monday,
                duration: 3 * 24 * 60,
                all_day: true,
            }),
        ]);

        const by_date = spectator.component.bookings_by_date();
        expect(
            spectator.component.weekdays().map((_) => by_date[_.id].length),
        ).toEqual([1, 1, 1, 0, 0, 0, 0]);
    });

    it('should refresh bookings after a modal checkout', () => {
        const dialog = spectator.inject(MatDialog);
        const state = spectator.inject(ScheduleStateService);
        spectator.component.viewBooking(
            new Booking({ id: 'booking-1', booking_type: 'desk' }),
        );

        expect(dialog.open).toHaveBeenCalledWith(
            BookingDetailsModalComponent,
            expect.anything(),
        );
        (dialog.open as any).mock.calls[0][1].data.refresh_fn();
        expect(state.triggerPoll).toHaveBeenCalled();
    });
});
