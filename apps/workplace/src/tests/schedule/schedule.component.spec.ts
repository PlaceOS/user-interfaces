import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/vitest';
import { BookingCardComponent, BookingFormService } from '@placeos/bookings';
import { Booking, SettingsService } from '@placeos/common';
import { EventCardComponent, EventFormService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';
import { TopbarComponent } from '../../app/components/topbar.component';
import { ScheduleFiltersComponent } from '../../app/schedule/schedule-filters.component';
import { ScheduleMobileCalendarComponent } from '../../app/schedule/schedule-mobile-calendar.component';
import { ScheduleSidebarComponent } from '../../app/schedule/schedule-sidebar.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { ScheduleComponent } from '../../app/schedule/schedule.component';

// Native vitest cannot module-mock workspace packages. `checkinBooking`
// (from @placeos/bookings) and `openConfirmModal` (from @placeos/components)
// are real functions here; `checkinBooking` calls @placeos/ts-client `post`
// (the only mockable layer) and `openConfirmModal` consumes the injected
// MatDialog, both of which are stubbed below.
vi.mock('@placeos/ts-client', { spy: true });

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
                filtered_bookings: signal([]),
                loading: signal(false),
                date: signal(0),
                toggleType: vi.fn(),
                setDate: vi.fn(),
                getOptions: vi.fn(() => ({ period: 'day' })),
                removeItem: vi.fn(),
                triggerPoll: vi.fn(),
            } as any),
            MockProvider(EventFormService, { newForm: vi.fn() }),
            MockProvider(BookingFormService, {
                newForm: vi.fn(),
                model: Object.assign(vi.fn(() => ({})), {
                    set: vi.fn(),
                    update: vi.fn(),
                }),
            } as any),
            MockProvider(Router, { navigate: vi.fn() }),
            MockProvider(MatDialog, { open: vi.fn(), closeAll: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        imports: [MatProgressBarModule, FormsModule],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.post).mockResolvedValue({} as any);
        vi.mocked(ts_client.del).mockResolvedValue(undefined as any);
        spectator = createComponent();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should refresh bookings on request', () => {
        const state = spectator.inject(ScheduleStateService);

        spectator.component.refresh_fn();

        expect(state.triggerPoll).toHaveBeenCalled();
    });

    it('should not patch resources when editing visitor bookings', () => {
        vi.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        spectator.component.editBooking(booking);
        vi.runAllTimers();

        expect(booking_form.newForm).toHaveBeenCalledWith('visitor', booking);
        expect(booking_form.model.update).not.toHaveBeenCalled();
        vi.useRealTimers();
    });

    it('should patch resources when editing non-visitor bookings', () => {
        vi.useFakeTimers();
        const booking_form = spectator.inject(BookingFormService);
        const booking = new Booking({
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        } as any);

        spectator.component.editBooking(booking);
        vi.runAllTimers();

        expect(booking_form.model.update).toHaveBeenCalled();
        const updater = (booking_form.model.update as any).mock
            .calls[0][0];
        expect(updater({})).toEqual({
            resources: [{ id: 'desk-1', name: 'Desk 1' }],
            asset_id: 'desk-1',
        });
        vi.useRealTimers();
    });

    it('should refresh ended bookings without hiding them as deleted', async () => {
        const state = spectator.inject(ScheduleStateService);
        // The component imports MatDialogModule, so its injector shadows the
        // TestBed-level MatDialog mock — spy on the instance it actually gets.
        const dialog = spectator.fixture.debugElement.injector.get(MatDialog);
        // Shape returned so the real `openConfirmModal` resolves with reason 'done'.
        vi.spyOn(dialog, 'open').mockReturnValue({
            afterClosed: () => of({ reason: 'done' }),
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        } as any);
        const booking = new Booking({
            id: 'booking-1',
            booking_type: 'desk',
            type: 'desk',
            asset_id: 'desk-1',
            asset_name: 'Desk 1',
        } as any);

        await spectator.component.end(booking);

        // `checkinBooking` (workspace fn) cannot be spied; assert the underlying
        // ts-client POST it issues to the booking check-in endpoint instead.
        expect(ts_client.post).toHaveBeenCalled();
        const [url] = vi.mocked(ts_client.post).mock.calls[0];
        expect(url).toContain('booking-1');
        expect(url).toContain('check_in');
        expect(state.triggerPoll).toHaveBeenCalled();
        expect(state.removeItem).not.toHaveBeenCalled();
    });

    it('should refresh cancelled bookings without hiding them as deleted', async () => {
        const state = spectator.inject(ScheduleStateService);
        const dialog = spectator.fixture.debugElement.injector.get(MatDialog);
        vi.spyOn(dialog, 'open').mockReturnValue({
            afterClosed: () => of({ reason: 'done' }),
            componentInstance: {
                event: of({ reason: 'done' }),
                loading: { set: vi.fn() },
            },
            close: vi.fn(),
        } as any);
        const booking = new Booking({
            id: 'booking-1',
            booking_type: 'visitor',
            type: 'visitor',
            asset_id: 'visitor@example.com',
            asset_name: 'Visitor',
        } as any);

        await spectator.component.remove(booking);

        expect(ts_client.del).toHaveBeenCalled();
        expect(state.triggerPoll).toHaveBeenCalled();
        expect(state.removeItem).not.toHaveBeenCalled();
    });
});
