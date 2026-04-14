import { fromZonedTime } from 'date-fns-tz';
import {
    endOfDayInTimezone,
    startOfDayInTimezone,
} from '../lib/timezone-helpers';
import { Booking } from '../lib/types/booking.class';
import { CalendarEvent } from '../lib/types/event.class';

describe('timezone all-day helpers', () => {
    const timezone = 'America/New_York';
    const midday = fromZonedTime('2026-01-15T12:00:00', timezone).valueOf();
    const day_start = fromZonedTime('2026-01-15T00:00:00', timezone).valueOf();
    const day_end = fromZonedTime(
        '2026-01-15T23:59:59.999',
        timezone,
    ).valueOf();

    it('should calculate day bounds in the target timezone', () => {
        expect(startOfDayInTimezone(midday, timezone)).toBe(day_start);
        expect(endOfDayInTimezone(midday, timezone)).toBe(day_end);
    });

    it('should normalise all-day bookings to the timezone day bounds', () => {
        const booking = new Booking({
            all_day: true,
            date: midday,
            duration: 24 * 60,
            timezone,
        });

        expect(booking.date).toBe(day_start);
        expect(booking.date_end).toBe(day_end);
    });

    it('should serialise all-day events with timezone day bounds', () => {
        const event = new CalendarEvent({
            all_day: true,
            date: midday,
            duration: 24 * 60,
            timezone,
        });
        const json = event.toJSON();

        expect(event.date).toBe(day_start);
        expect(event.date_end).toBe(day_end);
        expect(json.event_start).toBe(Math.floor(day_start / 1000));
        expect(json.event_end).toBe(Math.floor((day_end + 1) / 1000));
    });
});
