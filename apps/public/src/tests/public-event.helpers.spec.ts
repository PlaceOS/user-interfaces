import {
    eventDescriptionText,
    isSystemEvent,
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
