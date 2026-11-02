import { convertToParamMap } from '@angular/router';
import {
    eventDescriptionText,
    isSystemEvent,
    preservedQueryParams,
    querySystemId,
} from '../app/public-event.helpers';

describe('public event helpers', () => {
    it('should identify system events from the event flag', () => {
        expect(isSystemEvent({ id: 'setup', is_system_event: true })).toBe(
            true,
        );
    });

    it('should identify setup and breakdown events from the body', () => {
        expect(
            isSystemEvent({ id: 'setup', body: 'main_event_id=booking' }),
        ).toBe(true);
    });

    it('should not identify regular events as system events', () => {
        expect(isSystemEvent({ id: 'booking', body: 'Public event' })).toBe(
            false,
        );
    });

    it('should read the source id from the first query param that is set', () => {
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
