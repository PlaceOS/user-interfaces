import {
    activeReportBookings,
    activeReportEvents,
    generateReportForBookings,
    noShowReportBookings,
    reportBookableMinutes,
    reportBookedTimeUtilisationPercent,
    reportBookingDuration,
    reportBookingStatusStats,
    reportEventStatusStats,
} from 'apps/concierge/src/app/reports/reports.utilities';

describe('report utilities', () => {
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
                    } as any,
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
