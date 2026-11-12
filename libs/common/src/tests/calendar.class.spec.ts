import { Calendar } from '../lib/types/calendar.class';
import { CalendarEvent } from '../lib/types/event.class';

describe('Calendar', () => {
    it('should convert availability from start and end unix times', () => {
        const starts_at = 1_700_000_000;
        const calendar = new Calendar({
            availability: [
                { starts_at, ends_at: starts_at + 90 * 60, status: 'busy' },
            ],
        } as unknown as Partial<Calendar>);

        expect(calendar.availability).toEqual([
            { date: starts_at * 1000, duration: 90, status: 'busy' },
        ]);
    });

    it('should keep availability that has a date and duration', () => {
        const date = 1_700_000_000_000;
        const calendar = new Calendar({
            availability: [{ date, duration: 30, status: 'free' }],
        });

        expect(calendar.availability).toEqual([
            { date, duration: 30, status: 'free' },
        ]);
    });

    it('should read the resource from the system field', () => {
        const calendar = new Calendar({
            system: { id: 'sys-1', email: 'Room@Org.com' },
        } as unknown as Partial<Calendar>);

        expect(calendar.resource.id).toBe('sys-1');
        expect(calendar.resource.email).toBe('room@org.com');
    });
});

describe('CalendarEvent', () => {
    it('should identify system events from the body', () => {
        const event = new CalendarEvent({ body: 'main_event_id=event-1' });

        expect(event.is_system_event).toBe(true);
    });
});
