import { convertToParamMap } from '@angular/router';
import { Booking, CalendarEvent, User } from '@placeos/common';
import { PlaceSystem } from '@placeos/ts-client';
import {
    activeReportBookings,
    activeReportEvents,
    cappedReportAttendeeCount,
    formatReportPercentage,
    generateReportForBookings,
    generateReportForDeskBookings,
    noShowReportBookings,
    reportBookableMinutes,
    reportBookedTimeUtilisationPercent,
    reportBookingDuration,
    reportBookingStatusStats,
    reportEventStatusStats,
    reportQueryOptions,
} from 'apps/concierge/src/app/reports/reports.utilities';

describe('report utilities', () => {
    describe('reportQueryOptions', () => {
        it('should read dates and the zone_ids list from the query', () => {
            const params = convertToParamMap({
                start: '100',
                end: '200',
                zone_ids: 'lvl-1,lvl-2',
            });
            expect(reportQueryOptions(params)).toEqual({
                start: 100,
                end: 200,
                zones: ['lvl-1', 'lvl-2'],
            });
        });

        it('should clear zones when the query has no zone list', () => {
            expect(reportQueryOptions(convertToParamMap({}))).toEqual({
                zones: [],
            });
        });

        it('should keep the current zones for an empty list when dropping empty ids', () => {
            const params = convertToParamMap({ zones: ',' });
            expect(reportQueryOptions(params, true)).toEqual({});
            expect(reportQueryOptions(params)).toEqual({ zones: ['', ''] });
        });
    });

    describe('noShowReportBookings', () => {
        it('should exclude unallocated parking bookings', () => {
            const booking_end = Math.floor(Date.now() / 1000) - 60;
            const bookings = [
                { asset_id: 'bay-1', booking_end },
                { asset_id: 'unallocated-request-1', booking_end },
            ] as any[];

            expect(noShowReportBookings(bookings)).toEqual([bookings[0]]);
        });
    });

    describe('reportBookableMinutes', () => {
        it('should default to 8 hours when bookable hours are not configured', () => {
            expect(reportBookableMinutes()).toBe(480);
        });

        it('should return configured daily bookable minutes', () => {
            expect(reportBookableMinutes({ start: 7, end: 19 })).toBe(720);
        });
    });

    describe('reportBookingDuration', () => {
        it('should use timestamps for all day bookings with actual start and end times', () => {
            const date = new Date('2026-04-06T08:00:00').valueOf();
            expect(
                reportBookingDuration(
                    {
                        all_day: true,
                        date,
                        date_end: new Date('2026-04-06T18:00:00').valueOf(),
                        duration: 24 * 60,
                    },
                ),
            ).toBe(600);
        });

        it('should preserve stored duration when timestamps are unavailable', () => {
            expect(
                reportBookingDuration({ duration: 24 * 60 } as any),
            ).toBe(24 * 60);
        });

        it('should preserve normal booking duration', () => {
            expect(reportBookingDuration({ duration: 90 } as any, 720)).toBe(
                90,
            );
        });
    });

    describe('formatReportPercentage', () => {
        it('should round the percent down to one decimal place', () => {
            expect(formatReportPercentage(1, 3)).toBe('1 (33.3%)');
            expect(formatReportPercentage(2, 3)).toBe('2 (66.6%)');
        });

        it('should show zero percent when the total is zero', () => {
            expect(formatReportPercentage(4, 0)).toBe('4 (0%)');
            expect(formatReportPercentage()).toBe('0 (0%)');
        });
    });

    describe('cappedReportAttendeeCount', () => {
        const event = (capacity: number) =>
            new CalendarEvent({
                attendees: ['a@x', 'b@x', 'c@x'].map(
                    (email) => new User({ email }),
                ),
                system: new PlaceSystem({ id: 'sys-1', capacity }),
            });

        it('should cap attendees at the room capacity', () => {
            expect(cappedReportAttendeeCount(event(2))).toBe(2);
            expect(cappedReportAttendeeCount(event(10), 1)).toBe(1);
        });

        it('should count every attendee when the room has no capacity', () => {
            expect(cappedReportAttendeeCount(event(0))).toBe(3);
        });
    });

    describe('generateReportForDeskBookings', () => {
        const bookings = () => [
            new Booking({ id: 'b1' }),
            new Booking({ id: 'b2' }),
            new Booking({ id: 'b3' }),
        ];

        it('should divide bookings by the desk count and period', () => {
            const report = generateReportForDeskBookings(bookings(), 2, {
                lvl_1: 4,
                lvl_2: 2,
            });

            expect(report.total).toBe(6);
            expect(report.count).toBe(3);
            expect(report.utilisation).toBe(0.25);
        });

        it('should use at least one desk and one day to avoid dividing by zero', () => {
            const report = generateReportForDeskBookings(bookings(), 0, {});

            expect(report.total).toBe(1);
            expect(report.utilisation).toBe(3);
        });
    });

    describe('generateReportForBookings', () => {
        it('should calculate utilisation from configured bookable hours', () => {
            const report = generateReportForBookings(
                [
                    {
                        attendees: [],
                        duration: 120,
                        system: { capacity: 10 },
                    } as any,
                ],
                12,
                720,
            );

            expect(report.utilisation).toBe(0.16);
        });

        it('should calculate utilisation from actual all day booking times', () => {
            const date = new Date('2026-04-06T08:00:00').valueOf();
            const report = generateReportForBookings(
                [
                    {
                        all_day: true,
                        attendees: [],
                        date,
                        date_end: new Date('2026-04-06T18:00:00').valueOf(),
                        duration: 24 * 60,
                        system: { capacity: 10 },
                    } as any,
                ],
                12,
                720,
            );

            expect(report.avg_length).toBe(600);
            expect(report.utilisation).toBe(0.83);
        });
    });

    describe('reportBookedTimeUtilisationPercent', () => {
        it('should calculate booked time against room availability', () => {
            expect(
                reportBookedTimeUtilisationPercent(
                    [
                        { duration: 60 } as any,
                        { duration: 120 } as any,
                    ],
                    3,
                    480,
                ),
            ).toBe(12.5);
        });

        it('should calculate all day bookings from actual start and end times', () => {
            const date = new Date('2026-04-06T08:00:00').valueOf();
            expect(
                reportBookedTimeUtilisationPercent(
                    [
                        {
                            all_day: true,
                            date,
                            date_end: new Date(
                                '2026-04-06T18:00:00',
                            ).valueOf(),
                            duration: 24 * 60,
                        } as any,
                    ],
                    2,
                    600,
                ),
            ).toBe(50);
        });
    });

    describe('reportBookingStatusStats', () => {
        it('should count cancelled state and rejected desk bookings as declined', () => {
            const bookings = [
                { status: 'approved' },
                { state: 'cancelled' },
                { rejected: true },
                { status: 'approved', deleted: true },
            ] as any[];

            expect(reportBookingStatusStats(bookings)).toEqual({
                active_count: 1,
                cancelled_count: 2,
                deleted_count: 1,
                inactive_count: 3,
                total_count: 4,
            });
            expect(activeReportBookings(bookings)).toEqual([bookings[0]]);
        });
    });

    describe('reportEventStatusStats', () => {
        it('should count cancelled state and rejected room events as declined', () => {
            const events = [
                { status: 'approved', type: 'event' },
                { state: 'cancelled', type: 'event' },
                { rejected: true, type: 'event' },
                { status: 'approved', type: 'event', deleted: true },
            ] as any[];

            expect(reportEventStatusStats(events)).toEqual({
                active_count: 1,
                cancelled_count: 2,
                deleted_count: 1,
                inactive_count: 3,
                total_count: 4,
            });
            expect(activeReportEvents(events)).toEqual([events[0]]);
        });
    });
});
