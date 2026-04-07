import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import { BookingCardComponent, BookingFormService } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
import { EventCardComponent, EventFormService } from '@placeos/events';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ScheduleFiltersComponent } from '../../app/schedule/schedule-filters.component';
import { ScheduleMobileCalendarComponent } from '../../app/schedule/schedule-mobile-calendar.component';
import { ScheduleSidebarComponent } from '../../app/schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleComponent } from '../../app/schedule/schedule.component';

describe('ScheduleComponent', () => {
    let spectator: SpectatorRouting<ScheduleComponent>;
    const createComponent = createRoutingFactory({
        component: ScheduleComponent,
        declarations: [
            MockComponent(ScheduleSidebarComponent),
            MockComponent(ScheduleMobileCalendarComponent),
            MockComponent(ScheduleFiltersComponent),
            MockComponent(EventCardComponent),
            MockComponent(BookingCardComponent),
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
        ],
        providers: [
            MockProvider(ScheduleStateService, {
                filtered_bookings: new BehaviorSubject([]),
                loading: new BehaviorSubject(false),
                date: new BehaviorSubject(0),
                toggleType: jest.fn(),
                setDate: jest.fn(),
                getOptions: jest.fn(() => ({ period: 'day' })),
            } as any),
            MockProvider(EventFormService, { newForm: jest.fn() }),
            MockProvider(BookingFormService, {
                newForm: jest.fn(),
                form: { patchValue: jest.fn() },
            } as any),
            MockProvider(Router, { navigate: jest.fn() }),
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(SettingsService, { get: jest.fn() }),
        ],
        imports: [MatProgressBarModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should not patch resources when editing visitor bookings', () => {
        jest.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.component.editBooking(booking);
        jest.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.form.patchValue).not.toHaveBeenCalled();
        jest.useRealTimers();
    });

    it('should patch resources when editing non-visitor bookings', () => {
        jest.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        } as any);

        spectator.component.editBooking(booking);
        jest.runAllTimers();

        expect(booking_form.form.patchValue).toHaveBeenCalledWith({
            resources: [{ id: 'desk-1', name: 'Desk 1' }],
            asset_id: 'desk-1',
        });
        jest.useRealTimers();
    });
});
