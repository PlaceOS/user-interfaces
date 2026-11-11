import type { MatDialog } from '@angular/material/dialog';
import {
    CalendarEvent,
    i18n,
    setCurrentUser,
    SettingsService,
    Space,
    StaffUser,
} from '@placeos/common';
import { BehaviorSubject, NEVER, of } from 'rxjs';

import type { EventFormValue } from '../lib/event-form';
import {
    checkRecurringClashes,
    checkSpacesAvailable,
    eventSaveQuery,
    isPermissionError,
} from '../lib/event-save.fn';

vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

/** Form value with only the fields that the save query reads. */
const formValue = (value: Partial<EventFormValue>) => value as EventFormValue;

describe('isPermissionError', () => {
    it.each([
        { error: { status: 403 }, expected: true },
        { error: { error: { status: 403 } }, expected: true },
        { error: new Error('Forbidden'), expected: true },
        { error: 'You are not authorized to edit', expected: true },
        { error: { message: 'Action not permitted' }, expected: true },
        { error: { error: 'Missing permission' }, expected: true },
        { error: { status: 500, message: 'Server error' }, expected: false },
        { error: new Error('Room unavailable'), expected: false },
        { error: null, expected: false },
    ])('should return $expected for $error', ({ error, expected }) => {
        expect(isPermissionError(error)).toBe(expected);
    });
});

describe('eventSaveQuery', () => {
    const options = {
        notify_new_attendees_only: false,
        ignore_owner: false,
        force_calendar: false,
    };

    beforeEach(() =>
        setCurrentUser(new StaffUser({ email: 'Me@Test.com', name: 'Me' })),
    );

    it('should use the new host calendar when the current user owns a new event', () => {
        const query = eventSaveQuery(
            new CalendarEvent(),
            formValue({ host: 'me@test.com', creator: 'me@test.com' }),
            [new Space({ id: 'room-1' })],
            options,
        );
        expect(query).toEqual({ calendar: 'me@test.com' });
    });

    it('should not set a calendar for a new event owned by another user', () => {
        const value = formValue({
            host: 'other@test.com',
            creator: 'other@test.com',
        });
        const event = new CalendarEvent();
        expect(eventSaveQuery(event, value, [], options)).toEqual({});
        expect(
            eventSaveQuery(event, value, [], {
                ...options,
                force_calendar: true,
            }),
        ).toEqual({ calendar: 'other@test.com' });
    });

    it('should keep the source calendar and room of an existing event', () => {
        const event = new CalendarEvent({
            id: 'event-1',
            host: 'me@test.com',
            calendar: 'me@test.com',
            resources: [new Space({ id: 'room-1', email: 'room@test.com' })],
        });
        // The host moves the event to another calendar in the form
        const value = formValue({ host: 'other@test.com' });
        expect(
            eventSaveQuery(event, value, [new Space({ id: 'room-2' })], {
                ...options,
                notify_new_attendees_only: true,
            }),
        ).toEqual({
            system_id: 'room-1',
            calendar: 'me@test.com',
            notify_existing_attendees: false,
        });
    });

    it('should leave out the calendar of an owned event when told to ignore the owner', () => {
        const event = new CalendarEvent({ id: 'event-1', host: 'me@test.com' });
        expect(
            eventSaveQuery(
                event,
                formValue({}),
                [new Space({ id: 'room-2' })],
                {
                    ...options,
                    ignore_owner: true,
                },
            ),
        ).toEqual({ system_id: 'room-2' });
    });
});

describe('checkRecurringClashes', () => {
    const date = new Date(2028, 5, 15, 10).valueOf();
    const start = Math.floor(date / 1000);
    const day = 24 * 60 * 60;
    const recurringEvent = () =>
        new CalendarEvent({
            date,
            duration: 60,
            recurring: true,
            recurrence: {
                pattern: 'daily',
                interval: 1,
                days_of_week: [],
                start: date,
                end: date + 7 * day * 1000,
            },
        });
    const settings = (allow: boolean) =>
        ({
            get: (key: string) =>
                key === 'app.events.allow_recurring_instance_clashes'
                    ? allow
                    : undefined,
        }) as unknown as SettingsService;
    /** Dialog that resolves the clash modal with the given reason. */
    const dialog = (reason: 'done' | null) => {
        const open = vi.fn(() => ({
            componentInstance: {
                event: reason ? new BehaviorSubject({ reason }) : NEVER,
            },
            afterClosed: () => (reason ? NEVER : of(undefined)),
        }));
        return { open } as unknown as MatDialog & { open: typeof open };
    };
    const mockClashes = (clashes: { booking_start: number }[]) =>
        vi.mocked(ts_client.post).mockResolvedValue(clashes as never);

    beforeEach(() => vi.clearAllMocks());

    it('should not look for clashes on a one-off event', async () => {
        await expect(
            checkRecurringClashes(
                new CalendarEvent({ date }),
                settings(false),
                dialog(null),
            ),
        ).resolves.toBe(true);
        expect(ts_client.post).not.toHaveBeenCalled();
    });

    it('should reject a clash on the first instance even when clashes are allowed', async () => {
        // The API does not sort clashes
        mockClashes([{ booking_start: start + day }, { booking_start: start }]);
        const modal = dialog('done');

        await expect(
            checkRecurringClashes(recurringEvent(), settings(true), modal),
        ).rejects.toBe(i18n('CALENDAR_EVENT.FIRST_INSTANCE_CLASH'));
        expect(modal.open).not.toHaveBeenCalled();
    });

    it('should show later clashes in order and continue when the user confirms', async () => {
        mockClashes([
            { booking_start: start + 2 * day },
            { booking_start: start + day },
        ]);
        const modal = dialog('done');

        await expect(
            checkRecurringClashes(recurringEvent(), settings(true), modal),
        ).resolves.toBe(true);
        expect(modal.open).toHaveBeenCalledWith(expect.anything(), {
            data: {
                clashes: [
                    { booking_start: start + day },
                    { booking_start: start + 2 * day },
                ],
            },
        });
    });

    it('should stop the save when the user closes the clash modal', async () => {
        mockClashes([{ booking_start: start + day }]);

        await expect(
            checkRecurringClashes(
                recurringEvent(),
                settings(true),
                dialog(null),
            ),
        ).rejects.toBe('User cancelled');
    });
});

describe('checkSpacesAvailable', () => {
    beforeEach(() => vi.clearAllMocks());

    const rooms = [
        new Space({ id: 'room-1', name: 'Room 1' }),
        new Space({ id: 'room-2', name: 'Room 2' }),
        new Space({ id: 'room-3', name: 'Room 3' }),
    ];
    const check = () =>
        checkSpacesAvailable(rooms, Date.now(), 60, {
            event: new CalendarEvent(),
            book_internal: false,
        });
    /** Availability response that lists the given rooms as free. */
    const mockAvailable = (...ids: string[]) =>
        vi
            .mocked(ts_client.get)
            .mockResolvedValue(
                ids.map((id) => ({ id, resource: { id } })) as never,
            );

    it('should pass when the API lists every room as available', async () => {
        mockAvailable('room-1', 'room-2', 'room-3');
        await expect(check()).resolves.toBe(true);
    });

    it('should count only the rooms that the API leaves out', async () => {
        mockAvailable('room-1', 'room-3');
        await expect(check()).rejects.toBe(
            i18n('CALENDAR_EVENT.SPACE_UNAVAILABLE'),
        );

        mockAvailable('room-2');
        await expect(check()).rejects.toBe(
            i18n('CALENDAR_EVENT.SPACES_UNAVAILABLE'),
        );
    });
});
