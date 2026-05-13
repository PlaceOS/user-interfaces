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

    it('keeps explicit all-day bookings as all day', () => {
        const booking = {
            all_day: true,
            date: new Date('2026-05-13T20:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-14T11:00:00+10:00').valueOf(),
            duration: 15 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(true);
    });

    it('keeps long same-day bookings as all day', () => {
        const booking = {
            all_day: false,
            date: new Date('2026-05-13T06:00:00+10:00').valueOf(),
            date_end: new Date('2026-05-13T19:00:00+10:00').valueOf(),
            duration: 13 * 60,
        };

        expect(isParkingAllDayBooking(booking, 'Australia/Sydney')).toBe(true);
    });
});
