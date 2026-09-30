import {
    bookingMatchesWindow,
    deskWindow,
    OutlookEvent,
    roomStateFromResponse,
    roomWindow,
} from '../app/calendar/outlook-event';

const HOUR = 60 * 60 * 1000;
const START = new Date(2026, 9, 1, 9, 0).valueOf();
const MIDNIGHT = new Date(2026, 9, 1).valueOf();

function event(details: Partial<OutlookEvent> = {}): OutlookEvent {
    return {
        subject: 'Working from London office',
        start: START,
        end: START + 3 * HOUR,
        all_day: false,
        is_recurring: false,
        room_emails: [],
        item_id: '',
        ...details,
    };
}

describe('deskWindow', () => {
    it('uses the exact Outlook interval for a timed event', () => {
        expect(deskWindow(event()).window).toEqual({
            date: START,
            duration: 180,
            all_day: false,
        });
    });

    it('books the whole day when Outlook reports All day', () => {
        const all_day = event({
            start: MIDNIGHT,
            end: MIDNIGHT + 24 * HOUR,
            all_day: true,
        });
        expect(deskWindow(all_day).window).toEqual({
            date: MIDNIGHT,
            duration: 24 * 60,
            all_day: true,
        });
    });

    it('does not infer All day from a full-day interval', () => {
        const unknown = event({
            start: MIDNIGHT,
            end: MIDNIGHT + 24 * HOUR,
            all_day: null,
        });
        expect(deskWindow(unknown).window?.all_day).toBe(false);
    });

    it('blocks multi-day all-day and recurring events with a reason', () => {
        const multi_day = event({
            start: MIDNIGHT,
            end: MIDNIGHT + 48 * HOUR,
            all_day: true,
        });
        expect(deskWindow(multi_day).window).toBeNull();
        expect(deskWindow(multi_day).reason).toContain('multi-day');
        expect(deskWindow(event({ is_recurring: true })).window).toBeNull();
    });
});

describe('roomWindow', () => {
    it('uses the full span of an all-day event', () => {
        const all_day = event({
            start: MIDNIGHT,
            end: MIDNIGHT + 24 * HOUR,
            all_day: true,
        });
        expect(roomWindow(all_day).window).toEqual({
            date: MIDNIGHT,
            duration: 24 * 60,
            all_day: false,
        });
    });

    it('rejects an end time before the start time', () => {
        expect(roomWindow(event({ end: START - HOUR })).window).toBeNull();
    });
});

describe('bookingMatchesWindow', () => {
    const timed = { date: START, duration: 180, all_day: false };

    it('detects a changed event time', () => {
        expect(bookingMatchesWindow(timed, timed)).toBe(true);
        expect(
            bookingMatchesWindow(timed, { ...timed, date: START + HOUR }),
        ).toBe(false);
        expect(bookingMatchesWindow(timed, { ...timed, duration: 60 })).toBe(
            false,
        );
    });

    it('matches an all-day booking on the same day, whatever the site hours', () => {
        const booking = { date: START - HOUR, duration: 600, all_day: true };
        const window = { date: MIDNIGHT, duration: 24 * 60, all_day: true };
        expect(bookingMatchesWindow(booking, window)).toBe(true);
        expect(bookingMatchesWindow(timed, window)).toBe(false);
    });
});

describe('roomStateFromResponse', () => {
    it('maps Exchange responses to room states', () => {
        expect(roomStateFromResponse(undefined)).toBe('selected');
        expect(roomStateFromResponse('needsAction')).toBe('pending');
        expect(roomStateFromResponse('tentative')).toBe('pending');
        expect(roomStateFromResponse('accepted')).toBe('confirmed');
        expect(roomStateFromResponse('declined')).toBe('declined');
    });
});
