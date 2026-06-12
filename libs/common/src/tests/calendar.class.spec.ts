import { Calendar } from '../lib/types/calendar.class';
import { CalendarEvent } from '../lib/types/event.class';

describe('Calendar', () => {
    let calendar: Calendar;

    beforeEach(() => (calendar = new Calendar()));

    it('should expose properties', () => {
        expect(calendar.id).toBe('');
        expect(calendar.name).toBe('');
        expect(calendar.summary).toBe('');
        expect(calendar.primary).toBeFalsy();
        expect(calendar.can_edit).toBeFalsy();
        expect(calendar.availability).toEqual([]);
        expect(calendar.hidden).toBeFalsy();
        calendar = new Calendar({
            id: 'cal-1',
            name: 'My Cal',
            resource: { id: 'hey' } as any,
            primary: true,
            summary: 'Some people book this',
            can_edit: true,
            hidden: true,
        });
        expect(calendar.id).toBe('cal-1');
        expect(calendar.name).toBe('My Cal');
        expect(calendar.summary).toBe('Some people book this');
        expect(calendar.resource.id).toBe('hey');
        expect(calendar.primary).toBeTruthy();
        expect(calendar.can_edit).toBeTruthy();
        expect(calendar.availability).toEqual([]);
        expect(calendar.hidden).toBeTruthy();
    });
});

describe('CalendarEvent', () => {
    it('should identify system events from the body', () => {
        const event = new CalendarEvent({ body: 'main_event_id=event-1' });

        expect(event.is_system_event).toBe(true);
    });
});
