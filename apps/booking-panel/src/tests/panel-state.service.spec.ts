import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    CalendarEvent,
    DialogEvent,
    OrganisationService,
    setCurrentUser,
    SettingsService,
    Space,
    StaffUser,
    User,
} from '@placeos/common';
import { EventFormService, SpacePipe, SpacesService } from '@placeos/events';
import * as ts_client from '@placeos/ts-client';
import { addMinutes, getUnixTime } from 'date-fns';
import { Subject } from 'rxjs';

import { setNotifyOutlet } from 'libs/common/src/lib/notifications';

import { PanelSettings, PanelStateService } from '../app/panel-state.service';

vi.mock('@placeos/ts-client', { spy: true });

/** Whole seconds, because `CalendarEvent` stores times as unix seconds */
const NOW = new Date('2026-07-04T09:00:00.000Z').valueOf();
const minutes = (count: number) => addMinutes(NOW, count).valueOf();

describe('PanelStateService', () => {
    let service: PanelStateService;
    let dialog_events: Subject<DialogEvent>;
    const app_settings: Record<string, unknown> = {};
    const room = new Space({ id: 'test-room', email: 'room@example.com' });
    const host = new User({ email: 'host@example.com' });
    const module = new ts_client.PlaceModuleBinding(
        new ts_client.PlaceSystemBinding(room.id),
        'Bookings_1',
    );
    const execute = vi.spyOn(module, 'execute');
    const close = vi.fn();
    const open = vi.fn();
    const notify_open = vi.fn((_msg: string) => ({
        onAction: () => new Subject<void>(),
    }));
    const messages = () => notify_open.mock.calls.map(([msg]) => msg);
    const org_initialised = signal(false);
    const navigate = vi.fn();
    let ws_status: Subject<boolean>;
    let after_closed: Subject<void>;
    const event_form = {
        newForm: vi.fn(),
        model: signal<Partial<CalendarEvent>>({}),
        postForm: vi.fn(),
        clearForm: vi.fn(),
    };

    const event = (data: Partial<CalendarEvent>) =>
        new CalendarEvent({ id: 'event-1', duration: 30, ...data });
    const setSettings = (settings: PanelSettings) =>
        service['_settings'].set(settings);

    beforeEach(() => {
        // Fake the clock and intervals. `vi.waitFor` keeps real timers.
        vi.useFakeTimers({ toFake: ['Date', 'setInterval', 'clearInterval'] });
        vi.setSystemTime(NOW);
        vi.clearAllMocks();
        for (const key of Object.keys(app_settings)) delete app_settings[key];
        setNotifyOutlet(
            { open: notify_open } as unknown as Parameters<
                typeof setNotifyOutlet
            >[0],
            true,
        );
        event_form.model.set({});
        event_form.postForm.mockResolvedValue(undefined);
        execute.mockResolvedValue(undefined);
        dialog_events = new Subject<DialogEvent>();
        after_closed = new Subject<void>();
        open.mockReturnValue({
            componentInstance: { event: dialog_events },
            afterClosed: () => after_closed,
            close,
        });
        org_initialised.set(false);
        // A Subject emits repeated values. A ts-client signal drops them.
        ws_status = new Subject<boolean>();
        vi.mocked(ts_client.status).mockReturnValue(
            ws_status as unknown as ts_client.Signal<boolean>,
        );
        vi.mocked(ts_client.getModule).mockReturnValue(module);
        vi.spyOn(SpacePipe.prototype, 'transform').mockResolvedValue(room);
        TestBed.configureTestingModule({
            providers: [
                PanelStateService,
                { provide: MatDialog, useValue: { closeAll: vi.fn(), open } },
                { provide: SpacesService, useValue: { loadSpace: vi.fn() } },
                { provide: EventFormService, useValue: event_form },
                {
                    provide: SettingsService,
                    useValue: { get: (key: string) => app_settings[key] },
                },
                {
                    provide: OrganisationService,
                    useValue: {
                        // Not initialised until a test sets it, so the
                        // service binds no system
                        initialised: org_initialised,
                        waitUntilInitialised: () => Promise.resolve(),
                        levelWithID: () => null,
                    },
                },
                {
                    provide: Router,
                    useValue: { events: new Subject(), navigate },
                },
            ],
        });
        service = TestBed.inject(PanelStateService);
        service.system = room.id;
    });

    afterEach(() => {
        service.ngOnDestroy();
        setNotifyOutlet(null, true);
        vi.useRealTimers();
    });

    /** Dialog options of the last opened booking modal */
    const modalData = () => open.mock.lastCall?.[1]?.data;

    describe('booking submission', () => {
        async function submitBooking(
            date = Date.now(),
            future = false,
            force_api = false,
        ) {
            const pending = service.newBooking(date, false, future, force_api);
            await vi.waitFor(() => expect(open).toHaveBeenCalledOnce());
            dialog_events.next({
                reason: 'done',
                metadata: {
                    date,
                    duration: 30,
                    title: 'Panel meeting',
                    organiser: host,
                },
            });
            return pending;
        }

        it('books from the modal through the driver without starting staff API queries', async () => {
            await submitBooking();

            expect(execute).toHaveBeenCalledWith('book_now', [
                1800,
                'Panel meeting',
                host.email,
            ]);
            expect(event_form.newForm).not.toHaveBeenCalled();
            expect(event_form.postForm).not.toHaveBeenCalled();
            expect(close).toHaveBeenCalledOnce();
        });

        it.each([
            { future: true, force_api: false, offset: 60 },
            { future: false, force_api: true, offset: 0 },
        ])(
            'uses the event form for future=$future and force_api=$force_api',
            async ({ future, force_api, offset }) => {
                const date = minutes(offset);
                // newForm() leaves a default end time in the model
                event_form.model.set({ date_end: minutes(-60) });
                await submitBooking(date, future, force_api);

                expect(event_form.newForm).toHaveBeenCalledOnce();
                expect(event_form.model()).toMatchObject({
                    date,
                    duration: 30,
                    date_end: date + 30 * 60 * 1000,
                    title: 'Panel meeting',
                    host: host.email,
                    resources: [room],
                    system: room,
                });
                expect(event_form.postForm).toHaveBeenCalledWith(true);
                expect(event_form.clearForm).toHaveBeenCalledOnce();
                expect(execute).not.toHaveBeenCalled();
                expect(close).toHaveBeenCalledOnce();
            },
        );

        it('confirms an API booking only when the room accepts it', async () => {
            event_form.postForm.mockResolvedValue({ resources: [] });
            await service.makeBooking({ date: NOW, duration: 30 }, true);
            expect(messages()).not.toContain('Successfully created meeting.');

            event_form.postForm.mockResolvedValue({ resources: [room] });
            await service.makeBooking({ date: NOW, duration: 30 }, true);
            expect(messages()).toContain('Successfully created meeting.');
        });
    });

    describe('newBooking limits', () => {
        it('refuses a booking inside the current meeting', async () => {
            service._current.set(event({ date: minutes(-10), duration: 60 }));
            await service.newBooking(NOW);
            expect(messages()).toContain(
                'Booking already exists for this time',
            );
            expect(open).not.toHaveBeenCalled();
        });

        it('limits the duration to the time before the next booking', async () => {
            service._next.set(event({ date: minutes(45) }));
            void service.newBooking(NOW);
            await vi.waitFor(() => expect(open).toHaveBeenCalledOnce());
            expect(modalData().max_duration).toBe(45);
        });

        it('limits a future booking to the free time after its start', async () => {
            service.bookings.set([event({ date: minutes(100) })]);
            void service.newBooking(minutes(60), false, true);
            await vi.waitFor(() => expect(open).toHaveBeenCalledOnce());
            expect(modalData()).toMatchObject({
                date: minutes(60),
                max_duration: 40,
            });
        });

        it.each([
            [undefined, 30],
            [45, 45],
        ])(
            'needs at least 30 minutes for an API booking (min_duration %s)',
            async (min_duration, expected) => {
                setSettings({ min_duration });
                void service.newBooking(NOW, false, false, true);
                await vi.waitFor(() => expect(open).toHaveBeenCalledOnce());
                expect(modalData().min_duration).toBe(expected);
            },
        );

        it('refuses a booking with less than 15 free minutes', async () => {
            service._next.set(event({ date: minutes(10) }));
            await service.newBooking(NOW);
            expect(messages()).toContain(
                'Unable to make bookings as the time available before the next meeting is less than 15 minutes',
            );
            expect(open).not.toHaveBeenCalled();
        });
    });

    describe('quickBook', () => {
        it('books the room from now with the default title', async () => {
            setSettings({ default_title: 'Huddle' });
            await service.quickBook(30);
            expect(execute).toHaveBeenCalledOnce();
            const [method, [seconds, title]] = execute.mock.lastCall;
            expect([method, seconds, title]).toEqual([
                'book_now',
                30 * 60,
                'Huddle',
            ]);
        });

        it.each([
            [
                'the room is in use',
                () => service._current.set(event({ date: minutes(-5) })),
            ],
            [
                'the time clashes with the next booking',
                () => service.bookings.set([event({ date: minutes(20) })]),
            ],
        ])('refuses when %s', async (_, arrange) => {
            arrange();
            await service.quickBook(30);
            expect(messages()).toContain(
                'Booking already exists for this time',
            );
            expect(execute).not.toHaveBeenCalled();
        });
    });

    describe('extendMeeting', () => {
        const current = event({ date: minutes(-10), duration: 30 });

        beforeEach(() => {
            vi.mocked(ts_client.patch).mockResolvedValue(undefined);
            service._current.set(current);
        });

        it('moves the end of the current booking by 15 minutes', async () => {
            await service.extendMeeting();
            expect(ts_client.patch).toHaveBeenCalledWith(
                expect.stringContaining('/event-1?system_id=test-room'),
                expect.objectContaining({
                    event_end: current.event_end + 15 * 60,
                }),
            );
            expect(messages()).toContain('Extended meeting by 15 minutes.');
        });

        it('refuses when the room is booked after the meeting', async () => {
            service.bookings.set([
                current,
                event({ id: 'b', date: minutes(25) }),
            ]);
            await service.extendMeeting();
            expect(messages()).toContain(
                'Unable to extend. The room is booked after.',
            );
            expect(ts_client.patch).not.toHaveBeenCalled();
        });

        it('shows an error when the update fails', async () => {
            vi.mocked(ts_client.patch).mockRejectedValue('Forbidden');
            await service.extendMeeting();
            expect(messages()).toContain('Error extending meeting. Forbidden');
            expect(messages()).not.toContain('Extended meeting by 15 minutes.');
        });
    });

    describe('startMeeting', () => {
        it('checks in a pending meeting and shows the room as busy', async () => {
            const current = event({ date: minutes(-2) });
            service._current.set(current);
            setSettings({ status: 'pending' });
            await service.startMeeting();
            expect(execute).toHaveBeenCalledWith('start_meeting', [
                getUnixTime(current.date),
            ]);
            expect(service.status()).toBe('busy');
        });

        it('keeps the meeting pending when the driver call fails', async () => {
            service._current.set(event({ date: minutes(-2) }));
            setSettings({ status: 'pending' });
            execute.mockRejectedValue('Timeout');
            await service.startMeeting();
            expect(service.status()).toBe('pending');
            expect(messages()).toContain('Error starting meeting. Timeout');
        });

        it('does nothing when the meeting is not pending', async () => {
            service._current.set(event({ date: minutes(-2) }));
            setSettings({ status: 'busy' });
            await service.startMeeting();
            expect(execute).not.toHaveBeenCalled();
        });
    });

    describe('automatic release of pending meetings', () => {
        /** Runs the 15 second pending check once */
        const check = () => vi.advanceTimersByTime(15 * 1000);
        const endCalls = () =>
            execute.mock.calls.filter(([method]) => method === 'end_meeting');

        it('ends the meeting after the pending period', () => {
            const current = event({ date: minutes(-11) });
            service._current.set(current);
            setSettings({ status: 'pending', pending_period: 10 });
            check();
            expect(endCalls()).toEqual([
                [
                    'end_meeting',
                    [
                        getUnixTime(current.date),
                        true,
                        'Pending period expired.',
                    ],
                ],
            ]);
        });

        it.each<[string, Partial<CalendarEvent>, PanelSettings]>([
            ['within the pending period', { date: minutes(-5) }, {}],
            ['for a linked system event', { body: 'main_event_id' }, {}],
            ['when ending is disabled', {}, { disable_end_meeting: true }],
            ['when the meeting is checked in', {}, { status: 'busy' }],
        ])('keeps the meeting %s', (_, data, settings) => {
            service._current.set(event({ date: minutes(-11), ...data }));
            setSettings({ status: 'pending', pending_period: 10, ...settings });
            check();
            expect(endCalls()).toEqual([]);
        });

        it('ends an empty meeting with the presence_release feature', () => {
            app_settings['app.features'] = ['presence_release'];
            service._current.set(event({ date: minutes(-5) }));
            setSettings({ status: 'pending', presence: false });
            check();
            expect(endCalls()[0]?.[1][2]).toBe('No presence detected.');
        });

        it('keeps a meeting with detected presence', () => {
            app_settings['app.features'] = ['presence_release'];
            service._current.set(event({ date: minutes(-5) }));
            setSettings({ status: 'pending', presence: true });
            check();
            expect(endCalls()).toEqual([]);
        });
    });

    describe('confirmEnd', () => {
        const current = event({ date: minutes(-5) });
        beforeEach(() => service._current.set(current));

        it('ends the meeting when the user confirms', async () => {
            const pending = service.confirmEnd();
            dialog_events.next({ reason: 'done' });
            await pending;
            expect(execute).toHaveBeenCalledWith('end_meeting', [
                getUnixTime(current.date),
                true,
                'user_input',
            ]);
            expect(close).toHaveBeenCalledOnce();
        });

        it('shows an error and closes the modal when ending fails', async () => {
            execute.mockRejectedValue(new Error('Driver offline'));
            const pending = service.confirmEnd();
            dialog_events.next({ reason: 'done' });
            await pending;
            expect(messages()).toContain(
                'Error ending meeting. Driver offline',
            );
            expect(close).toHaveBeenCalledOnce();
        });

        it('does not end the meeting when the user cancels', async () => {
            const pending = service.confirmEnd();
            after_closed.complete();
            await pending;
            expect(execute).not.toHaveBeenCalled();
        });
    });

    describe('driver requests', () => {
        afterEach(() => setCurrentUser(null));

        it('uses the signed-in user as host with user_as_default_host', async () => {
            app_settings['app.user_as_default_host'] = true;
            setCurrentUser(new StaffUser({ email: 'me@example.com' }));
            await service.makeBooking({
                date: NOW,
                duration: 30,
                title: 'Sync',
            });
            expect(execute).toHaveBeenCalledWith('book_now', [
                1800,
                'Sync',
                'me@example.com',
            ]);
        });

        it('shows an error and no success when the driver refuses a booking', async () => {
            execute.mockRejectedValue('Room offline');
            await service.makeBooking({
                date: NOW,
                duration: 30,
                title: 'Sync',
            });
            expect(messages()).toContain(
                'Error creating meeting. Room offline',
            );
            expect(messages()).not.toContain('Successfully created meeting.');
        });

        it('rejects a failed check-in after showing the error', async () => {
            execute.mockRejectedValue('Timeout');
            await expect(service.checkin()).rejects.toBe('Timeout');
            expect(messages()).toContain('Error checking in booking. Timeout');
        });
    });

    describe('current and next bookings', () => {
        it('drops the current booking when the clock passes its end', () => {
            service._current.set(event({ date: minutes(-10), duration: 30 }));
            expect(service.current()?.id).toBe('event-1');
            vi.advanceTimersByTime(20 * 60 * 1000);
            expect(service.current()).toBeNull();
        });

        it('drops the next booking when the clock passes its start', () => {
            service._next.set(event({ date: minutes(5) }));
            expect(service.next()?.id).toBe('event-1');
            vi.advanceTimersByTime(6 * 60 * 1000);
            expect(service.next()).toBeNull();
        });
    });

    it('keeps the first offline time until the websocket reconnects', () => {
        ws_status.next(false);
        expect(service.offline_since()).toBe(NOW);
        vi.advanceTimersByTime(60 * 1000);
        ws_status.next(false);
        expect(service.offline_since()).toBe(NOW);
        ws_status.next(true);
        expect(service.offline_since()).toBe(0);
    });

    describe('system binding', () => {
        /** Values the fake driver bindings return */
        const values: Record<string, unknown> = {
            room_name: 'Board Room',
            bookings: [{ id: 'b1', date: minutes(30), duration: 30 }],
            current_booking: { id: 'c1', date: minutes(-5), duration: 30 },
        };

        beforeEach(() => {
            // The system loads after a 1 second timeout
            vi.useFakeTimers({
                toFake: [
                    'Date',
                    'setInterval',
                    'clearInterval',
                    'setTimeout',
                    'clearTimeout',
                ],
            });
            vi.setSystemTime(NOW);
            vi.spyOn(module, 'variable').mockImplementation(
                (name: string) =>
                    ({
                        bindThenSubscribe: (next: (value: unknown) => void) => {
                            next(values[name]);
                            return () => undefined;
                        },
                        bind: () => () => undefined,
                        listen: () => ts_client.createSignal(values[name]),
                    }) as unknown as ts_client.PlaceVariableBinding,
            );
            org_initialised.set(true);
            TestBed.tick();
        });

        it('binds the settings and bookings, then loads the room', async () => {
            vi.mocked(ts_client.showSystem).mockResolvedValue(
                new ts_client.PlaceSystem({ id: room.id }),
            );
            expect(service.setting('room_name')).toBe('Board Room');
            expect(service.bookings().map(({ id }) => id)).toEqual(['b1']);
            expect(service.current()?.id).toBe('c1');
            expect(service.space()).toBeNull();

            await vi.advanceTimersByTimeAsync(1000);
            expect(ts_client.showSystem).toHaveBeenCalledWith(room.id);
            expect(service.space()?.id).toBe(room.id);
        });

        it('returns to the setup screen when the system does not exist', async () => {
            vi.mocked(ts_client.showSystem).mockRejectedValue({
                status: 404,
                message: 'Not found',
            });
            await vi.advanceTimersByTimeAsync(10 * 1000);
            expect(navigate).toHaveBeenCalledWith(['/bootstrap']);
            expect(ts_client.showSystem).toHaveBeenCalledOnce();
        });

        it('retries the load after other errors', async () => {
            vi.mocked(ts_client.showSystem)
                .mockRejectedValueOnce({ status: 500, message: 'Down' })
                .mockResolvedValue(new ts_client.PlaceSystem({ id: room.id }));
            await vi.advanceTimersByTimeAsync(1000);
            expect(ts_client.showSystem).toHaveBeenCalledOnce();
            // Retries after 2 to 5 seconds, then waits 1 second to load
            await vi.advanceTimersByTimeAsync(6000);
            expect(ts_client.showSystem).toHaveBeenCalledTimes(2);
            expect(service.space()?.id).toBe(room.id);
            expect(navigate).not.toHaveBeenCalled();
        });

        it('clears the room and cancels the load when the system is unset', async () => {
            service.system = '';
            TestBed.tick();
            await vi.advanceTimersByTimeAsync(1000);
            expect(ts_client.showSystem).not.toHaveBeenCalled();
            expect(service.settings()).toEqual({});
            expect(service.bookings()).toEqual([]);
            expect(service.current()).toBeNull();
        });
    });
});
