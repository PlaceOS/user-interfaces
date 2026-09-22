import { signal } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ActionIconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';

import { Booking, SettingsService } from '@placeos/common';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { DeskBookingsComponent } from '../../app/desks/desk-bookings.component';
import { DesksStateService } from '../../app/desks/desks-state.service';

describe('DeskBookingsComponent', () => {
    let spectator: Spectator<DeskBookingsComponent>;
    const bookings = signal<Booking[]>([]);
    const createComponent = createComponentFactory({
        component: DeskBookingsComponent,
        providers: [
            MockProvider(DesksStateService, {
                setFilters: vi.fn(),
                bookings,
                filters: signal({}),
                has_more_pages: signal(false),
                last_updated: signal(0),
                loading: signal(false),
                nextPage: vi.fn(),
                refresh: vi.fn(),
                viewBookingHistory: vi.fn(),
            } as any),
            MockProvider(SettingsService, { time_format: 'h:mm a' }),
        ],
        declarations: [
            MockComponent(ActionIconComponent),
            MockComponent(IconComponent),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => {
        bookings.set([]);
        spectator = createComponent();
    });

    it.each([
        { rejected: true },
        { status: 'declined' as const },
        { checked_out_at: Math.floor(Date.now() / 1000) },
        { deleted: true },
        { booking_start: Math.floor(Date.now() / 1000) - 7200, duration: 60 },
    ])(
        'should disable status and check-in menus for a completed booking: %j',
        async (state) => {
            bookings.set([
                new Booking({
                    id: 'booking-1',
                    booking_start: Math.floor(Date.now() / 1000),
                    duration: 60,
                    ...state,
                }),
            ]);
            await spectator.fixture.whenStable();
            const triggers = spectator.queryAll<HTMLButtonElement>(
                'button[matRipple][class*="rounded-3xl"]',
            );
            expect(triggers).toHaveLength(2);
            expect(triggers.every((button) => button.disabled)).toBe(true);
        },
    );

    it('should allow status and check-in menus for an active booking', async () => {
        bookings.set([
            new Booking({
                id: 'booking-1',
                booking_start: Math.floor(Date.now() / 1000),
                duration: 60,
            }),
        ]);
        await spectator.fixture.whenStable();
        const triggers = spectator.queryAll<HTMLButtonElement>(
            'button[matRipple][class*="rounded-3xl"]',
        );
        expect(triggers).toHaveLength(2);
        expect(triggers.every((button) => !button.disabled)).toBe(true);
    });

    it('should hide cancellation for rejected bookings when deletion is enabled', async () => {
        spectator.component.can_delete.set(true);
        bookings.set([new Booking({ id: 'booking-1', rejected: true })]);
        await spectator.fixture.whenStable();
        expect(
            spectator.query('button[icon][matRipple][matMenuTriggerFor]'),
        ).not.toExist();
        expect(
            spectator.query('[data-testid="desk-booking-history"]'),
        ).toExist();
    });

    it('should keep the history action available when deleting is disabled', () => {
        bookings.set([new Booking({ id: 'booking-1' })]);
        spectator.detectChanges();

        const table = spectator.query(SimpleTableComponent);
        expect(table?.active_columns().map((column) => column.key)).toContain(
            'actions',
        );
        expect(
            spectator.query('[data-testid="desk-booking-history"]'),
        ).toExist();
    });

    it('should open booking history from the list action', () => {
        const booking = new Booking({ id: 'booking-1' });
        bookings.set([booking]);
        spectator.detectChanges();

        spectator.click('[data-testid="desk-booking-history"]');

        expect(
            spectator.inject(DesksStateService).viewBookingHistory,
        ).toHaveBeenCalledWith(expect.objectContaining({ id: booking.id }));
    });
});
