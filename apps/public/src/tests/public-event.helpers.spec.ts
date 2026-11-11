import { convertToParamMap } from '@angular/router';
import {
    eventDescriptionText,
    eventId,
    eventTime,
    eventTitle,
    isSystemEvent,
    preservedQueryParams,
    querySystemId,
} from '../app/public-event.helpers';

describe('public event helpers', () => {
    it.each([
        [{ id: 'setup', is_system_event: true }, true],
        [{ id: 'setup', body: 'main_event_id=booking' }, true],
        [{ id: 'setup', description: 'main_event_id=booking' }, true],
        [{ id: 'booking', body: 'Public event' }, false],
    ])('should identify system events (%o)', (event, expected) => {
        expect(isSystemEvent(event)).toBe(expected);
    });

    it('should read the source id from the first query param that is set', () => {
        expect(
            querySystemId(
                convertToParamMap({ id: 'c', system: 'b', system_id: 'a' }),
            ),
        ).toBe('a');
        expect(querySystemId(convertToParamMap({ id: 'c', system: 'b' }))).toBe(
            'b',
        );
        expect(querySystemId(convertToParamMap({}))).toBe('');
    });

    it('should keep only the query params that do not pick a source or event', () => {
        expect(
            preservedQueryParams({
                system_id: 'a',
                system: 'b',
                id: 'c',
                event_id: 'e',
                direct_event: 'true',
                lang: 'en',
            }),
        ).toEqual({ lang: 'en' });
    });

    it('should use the first id field that is set as the event id', () => {
        expect(eventId({ id: 'a', event_id: 'b' })).toBe('a');
        expect(eventId({ event_id: 'b', uid: 'd' })).toBe('b');
        expect(eventId({ uid: 'd', name: 'e' })).toBe('d');
        expect(eventId({})).toBe('');
    });

    it('should fall back to a placeholder title', () => {
        expect(eventTitle({ name: 'Name', summary: 'Summary' })).toBe('Name');
        expect(eventTitle({})).toBe('Untitled event');
    });

    describe('eventTime', () => {
        const start_ms = new Date(2026, 4, 12, 9, 30).valueOf();
        const end_ms = new Date(2026, 4, 12, 11, 0).valueOf();

        it('should read epoch seconds and epoch milliseconds as the same time', () => {
            const text = eventTime({
                event_start: start_ms,
                event_end: end_ms,
            });
            expect(text).not.toBe('Time to be confirmed');
            expect(
                eventTime({
                    event_start: start_ms / 1000,
                    event_end: end_ms / 1000,
                }),
            ).toBe(text);
        });

        it('should show the start and end times', () => {
            const time = (ms: number) =>
                new Intl.DateTimeFormat(undefined, {
                    hour: 'numeric',
                    minute: '2-digit',
                }).format(ms);
            const text = eventTime({ start: start_ms, end: end_ms });
            expect(text).toContain('2026');
            expect(text).toContain(`, ${time(start_ms)} - ${time(end_ms)}`);
        });

        it('should leave out the end time when it is missing or invalid', () => {
            expect(eventTime({ start: start_ms })).not.toContain(' - ');
            expect(
                eventTime({ start: start_ms, end: 'not a date' }),
            ).not.toContain(' - ');
        });

        it('should show a placeholder when the start time is missing or invalid', () => {
            expect(eventTime({})).toBe('Time to be confirmed');
            expect(eventTime({ start: 'not a date' })).toBe(
                'Time to be confirmed',
            );
        });
    });

    it('should read description text without creating elements in the page', () => {
        const create = vi.spyOn(document, 'createElement');
        expect(
            eventDescriptionText({
                id: 'talk',
                description:
                    '<p>Hello <b>there</b></p><img src="x" onerror="alert(1)">',
            }),
        ).toBe('Hello there');
        expect(create).not.toHaveBeenCalled();
        create.mockRestore();
    });
});
