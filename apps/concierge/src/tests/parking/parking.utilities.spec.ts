import { isParkingAllDayBooking } from '../../app/parking/parking.utilities';

describe('isParkingAllDayBooking', () => {
    it('does not treat long cross-day timed bookings as all day', () => {
        const booking = {
            all_day: false,
            date: new Date('2026-05-13T20:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T11:00:00+10:00').valueOf(),
            duration: 15 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(false);
    });

    it('does not treat explicit all-day bookings across dates as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T20:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T11:00:00+10:00').valueOf(),
            duration: 15 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(false);
    });

    it('treats a 24-hour booking starting at midnight as all day', () => {
        const booking = {
            all_day: false,
            date: new Date('2026-05-13T00:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T00:00:00+10:00').valueOf(),
            duration: 24 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(true);
    });

    it('does not treat a 24-hour booking starting after midnight as all day', () => {
        const booking = {
            all_day: false,
            date: new Date('2026-05-13T01:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T01:00:00+10:00').valueOf(),
            duration: 24 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(false);
    });

    it('treats same-day all-day bookings longer than 23 hours as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T00:15:00+10:00').valueOf(),
            date_end: new Date('2026-05-13T23:45:00+10:00').valueOf(),
            duration: 23.5 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(true);
    });

    it('treats a same-day all-day booking matching the bookable period as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T08:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-13T17:00:00+10:00').valueOf(),
            duration: 9 * 60,
        };

        expect(
            isParkingAllDayBooking(
                booking,
                'Australia/Sydney',
                9 * 60,
            ),
        ).toBe(true);
    });

    it('does not treat a cross-date booking matching the bookable period as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T20:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T05:00:00+10:00').valueOf(),
            duration: 9 * 60,
        };

        expect(
            isParkingAllDayBooking(
                booking,
                'Australia/Sydney',
                9 * 60,
            ),
        ).toBe(false);
    });

    it('does not treat a 23-hour all-day booking as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T00:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-13T23:00:00+10:00').valueOf(),
            duration: 23 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(false);
    });
});
