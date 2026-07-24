import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    BookingDetailsModalComponent,
    BookingFormService,
} from '@placeos/bookings';
import {
    Booking,
    i18n,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import {
    addDays,
    addWeeks,
    format,
    getDay,
    startOfWeek,
} from 'date-fns';
import * as ts_client from '@placeos/ts-client';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';
import { LandingDeskWeekComponent } from '../../app/landing-new/landing-desk-week.component';

vi.mock('@placeos/ts-client', { spy: true });

const query_bookings = vi.mocked(ts_client.get) as any;

describe('LandingDeskWeekComponent', () => {
    let spectator: Spectator<LandingDeskWeekComponent>;
    const dialog = { open: vi.fn() };
    const router = { navigate: vi.fn() };
    const booking_form = { newForm: vi.fn() };
    const schedule = {
        editBooking: vi.fn(),
        remove: vi.fn(() => Promise.resolve()),
        end: vi.fn(),
    };
    const org = {
        levelWithID: vi.fn(),
        buildings: [] as any[],
    };
    const settings = { signal: vi.fn(() => ({})) };
    const createComponent = createComponentFactory({
        component: LandingDeskWeekComponent,
        detectChanges: false,
        providers: [
            { provide: MatDialog, useValue: dialog },
            { provide: Router, useValue: router },
            { provide: BookingFormService, useValue: booking_form },
            { provide: ScheduleStateService, useValue: schedule },
            { provide: OrganisationService, useValue: org },
            { provide: SettingsService, useValue: settings },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        query_bookings.mockResolvedValue([]);
        org.levelWithID.mockReturnValue(null);
        org.buildings = [];
        spectator = createComponent();
        spectator.component.offset_weekday.set(0);
        spectator.component.available_days.set(90);
    });

    afterEach(() => spectator?.fixture.destroy());

    it('should build a seven day week starting on the configured weekday', () => {
        const days = spectator.component.weekdays();
        expect(days.length).toBe(7);
        // First day matches the configured week start
        const expected_start = startOfWeek(
            spectator.component.selected_date(),
            { weekStartsOn: 0 },
        );
        expect(days[0].id).toBe(format(expected_start, 'yyyy-MM-dd'));
        // Exactly one day is flagged as today
        expect(days.filter((d) => d.is_today).length).toBe(1);
        // Weekend detection matches the real weekday
        for (const day of days) {
            const dow = getDay(day.date);
            expect(day.is_weekend).toBe(dow === 0 || dow === 6);
        }
    });

    it('should expose only weekend days via weekend_days', () => {
        const weekend = spectator.component.weekend_days();
        expect(weekend.length).toBe(2);
        expect(weekend.every((d) => d.is_weekend)).toBe(true);
    });

    it('should report the current week and reset to today', () => {
        spectator.component.selected_date.set(
            addWeeks(Date.now(), 2).valueOf(),
        );
        expect(spectator.component.is_current_week()).toBe(false);
        spectator.component.goToToday();
        expect(spectator.component.is_current_week()).toBe(true);
    });

    it('should block navigating to a previous week with no bookable days', () => {
        // Current week: the previous week is entirely in the past.
        expect(spectator.component.can_go_previous_week()).toBe(false);
        const before = spectator.component.selected_date();
        spectator.component.previousWeek();
        expect(spectator.component.selected_date()).toBe(before);
    });

    it('should allow moving to the next week within the booking window', () => {
        expect(spectator.component.can_go_next_week()).toBe(true);
        const before = spectator.component.selected_date();
        spectator.component.nextWeek();
        expect(spectator.component.selected_date()).toBeGreaterThan(before);
    });

    it('should not move beyond the available booking window', () => {
        spectator.component.available_days.set(3);
        // Jump far enough forward that the next week is out of range.
        spectator.component.selected_date.set(
            addDays(Date.now(), 2).valueOf(),
        );
        expect(spectator.component.can_go_next_week()).toBe(false);
        const before = spectator.component.selected_date();
        spectator.component.nextWeek();
        expect(spectator.component.selected_date()).toBe(before);
    });

    it('should jump to next monday when reachable', () => {
        expect(spectator.component.can_go_next_monday()).toBe(true);
        spectator.component.goToNextMonday();
        expect(getDay(spectator.component.selected_date())).toBe(1);
    });

    it('should resolve the building name from the organisation data', () => {
        org.levelWithID.mockReturnValue({ parent_id: 'bld-1' } as any);
        org.buildings = [
            { id: 'bld-1', display_name: 'Head Office', name: 'HQ' },
        ];
        const booking = new Booking({ zones: ['zone-1'] } as any);
        expect(spectator.component.buildingName(booking)).toBe('Head Office');
    });

    it('should fall back to a generic office name without a building', () => {
        org.levelWithID.mockReturnValue(null);
        const booking = new Booking({ zones: [] } as any);
        expect(spectator.component.buildingName(booking)).toBe(
            i18n('COMMON.WORK_OFFICE'),
        );
    });

    it('should derive the desk name with sensible fallbacks', () => {
        expect(
            spectator.component.deskName(
                new Booking({ asset_name: 'Desk 12' } as any),
            ),
        ).toBe('Desk 12');
        expect(
            spectator.component.deskName(
                new Booking({ description: 'Window desk' } as any),
            ),
        ).toBe('Window desk');
        expect(spectator.component.deskName(new Booking({} as any))).toBe(
            i18n('COMMON.DESK'),
        );
    });

    it('should build an all-day booking tooltip', () => {
        const booking = new Booking({
            asset_name: 'Desk 1',
            all_day: true,
            zones: [],
        } as any);
        const tooltip = spectator.component.bookingTooltip(booking);
        expect(tooltip).toContain('Desk 1');
        expect(tooltip).toContain(i18n('COMMON.ALL_DAY'));
    });

    it('should build a timed booking tooltip', () => {
        const date = new Date('2026-07-06T09:00:00').valueOf();
        const booking = new Booking({
            asset_name: 'Desk 1',
            date,
            duration: 60,
            zones: [],
        } as any);
        const tooltip = spectator.component.bookingTooltip(booking);
        expect(tooltip).not.toContain(i18n('COMMON.ALL_DAY'));
        expect(tooltip).toMatch(/\d{1,2}:\d{2}/);
    });

    it('should open the booking details modal with lifecycle callbacks', async () => {
        const booking = new Booking({ id: 'b1', zones: [] } as any);
        spectator.component.viewBooking(booking);
        expect(dialog.open).toHaveBeenCalledWith(
            BookingDetailsModalComponent,
            expect.objectContaining({
                data: expect.objectContaining({
                    booking,
                    edit_fn: expect.any(Function),
                    remove_fn: expect.any(Function),
                    end_fn: expect.any(Function),
                }),
            }),
        );
        // The remove callback delegates to the schedule service.
        const { remove_fn } = dialog.open.mock.calls[0][1].data;
        await remove_fn(booking, 'reason');
        expect(schedule.remove).toHaveBeenCalledWith(booking, 'reason');
    });

    it('should navigate and prepare a new desk form when booking', () => {
        vi.useFakeTimers();
        const date = Date.now();
        spectator.component.bookDesk(date);
        expect(router.navigate).toHaveBeenCalledWith(['/book', 'desk', 'form']);
        vi.runAllTimers();
        expect(booking_form.newForm).toHaveBeenCalledWith(
            'desk',
            expect.objectContaining({ booking_type: 'desk', date }),
        );
        vi.useRealTimers();
    });

    it('should ignore desk bookings beyond the available window', () => {
        const far_future = addDays(Date.now(), 200).valueOf();
        spectator.component.bookDesk(far_future);
        expect(router.navigate).not.toHaveBeenCalled();
    });

    it('should group loaded bookings by day', async () => {
        const date = Date.now();
        query_bookings.mockResolvedValue([
            new Booking({ id: 'b1', date, zones: [] } as any),
            new Booking({ id: 'b2', date, zones: [] } as any),
        ]);
        spectator.detectChanges();
        await new Promise((resolve) => setTimeout(resolve, 0));
        spectator.detectChanges();
        const key = format(date, 'yyyy-MM-dd');
        expect(spectator.component.bookings_by_date()[key]?.length).toBe(2);
    });
});
