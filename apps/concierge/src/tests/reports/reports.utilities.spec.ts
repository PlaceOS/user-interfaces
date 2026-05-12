import {
    generateReportForBookings,
    reportBookableMinutes,
    reportBookingDuration,
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
});
