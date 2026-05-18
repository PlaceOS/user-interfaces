import {
    activeReportBookings,
    activeReportEvents,
    generateReportForBookings,
    reportBookedTimeUtilisationPercent,
    reportBookableMinutes,
    reportBookingDuration,
    reportBookingStatusStats,
    reportEventStatusStats,
} from 'apps/concierge/src/app/reports/reports.utilities';

describe('report utilities', () => {
    describe('reportBookableMinutes', () => {
        it('should default to 8 hours when bookable hours are not configured', () => {
            expect(reportBookableMinutes()).toBe(480);
        });

        it('should return configured daily bookable minutes', () => {
            expect(reportBookableMinutes({ start: 7, end: 19 })).toBe(720);
        });
    });

    describe('reportBookingDuration', () => {
        it('should count all day bookings as one full bookable day', () => {
            expect(
                reportBookingDuration(
                    { all_day: true, duration: 24 * 60 } as any,
                    720,
                ),
            ).toBe(720);
        });

        it('should treat 24 hour bookings as all day when the flag is absent', () => {
            expect(
                reportBookingDuration({ duration: 24 * 60 } as any, 600),
            ).toBe(600);
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

        it('should cap all day bookings at one full bookable day', () => {
            const report = generateReportForBookings(
                [
                    {
                        all_day: true,
                        attendees: [],
                        duration: 24 * 60,
                        system: { capacity: 10 },
                    } as any,
                ],
                12,
                720,
            );

            expect(report.utilisation).toBe(1);
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

        it('should cap all day bookings at one full bookable day', () => {
            expect(
                reportBookedTimeUtilisationPercent(
                    [{ all_day: true, duration: 24 * 60 } as any],
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
