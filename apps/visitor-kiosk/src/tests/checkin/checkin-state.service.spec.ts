import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import { Booking, OrganisationService, setNotifyOutlet } from '@placeos/common';
import { get, patch, post, put, query } from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// The native (bundler) unit-test builder cannot intercept workspace module
// imports (`@placeos/bookings`, `@placeos/users`, ...), so the real workspace
// functions run and we mock one layer down at the external `@placeos/ts-client`
// boundary instead.
vi.mock('@placeos/ts-client', { spy: true });

/** `get` typed for plain JSON responses */
const getJson = () => vi.mocked(get as (url: string) => Promise<unknown>);

/** Spy on the snackbar outlet that `notify*` functions route to */
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

describe('CheckinStateService', () => {
    let spectator: SpectatorService<CheckinStateService>;
    const createService = createServiceFactory({
        service: CheckinStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: { id: 'bld-01' } as any,
            }),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(get).mockImplementation(async (url: string) => {
            if (url.includes('/bookings/')) {
                return {
                    id: url.split('/').pop(),
                    asset_id: 'a@b.com',
                    user_email: 'host@b.com',
                };
            }
            // guest lookup
            return {} as any;
        });
        vi.mocked(query).mockResolvedValue({ data: [], next: null } as any);
        vi.mocked(post).mockResolvedValue({} as any);
        vi.mocked(put).mockResolvedValue({} as any);
        vi.mocked(patch).mockResolvedValue({} as any);
        spectator = createService();
    });

    it("uses the guest's own booking without other lookups", async () => {
        getJson().mockResolvedValueOnce({
            email: 'a@b.com',
            booking: { id: 'own-event', user_email: 'own-host@b.com' },
        });

        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');

        expect(spectator.service.event().id).toBe('own-event');
        expect(spectator.service.form().host).toBe('own-host@b.com');
        expect(get).toHaveBeenCalledTimes(1);
        expect(query).not.toHaveBeenCalled();
    });

    it('loads the event from the QR code when the guest has no booking', async () => {
        getJson().mockResolvedValueOnce({
            email: 'a@b.com',
            name: 'Visitor',
        });

        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');

        expect(spectator.service.event().id).toBe('event-1234');
        expect(spectator.service.form()).toEqual(
            expect.objectContaining({
                host: 'host@b.com',
                name: 'Visitor',
                email: 'a@b.com',
            }),
        );
    });

    describe('without an event id', () => {
        const at = (hours: number, minutes = 0) =>
            new Date(2026, 0, 1, hours, minutes).valueOf();

        beforeEach(() => {
            vi.useFakeTimers({ toFake: ['Date'] });
            vi.setSystemTime(at(10));
        });

        afterEach(() => vi.useRealTimers());

        it("picks the visitor's earliest booking today", async () => {
            vi.mocked(query).mockResolvedValue({
                data: [
                    { id: 'other', date: at(10, 5), asset_id: 'x@b.com' },
                    { id: 'later', date: at(11), asset_id: 'a@b.com' },
                    { id: 'hosted', date: at(10, 50), user_email: 'a@b.com' },
                    { id: 'earliest', date: at(10, 30), asset_id: 'a@b.com' },
                ],
                next: null,
            } as any);

            await spectator.service.loadGuestAndEvent('a@b.com');

            expect(spectator.service.event().id).toBe('earliest');
        });

        it('rejects when the visitor has no booking today', async () => {
            vi.mocked(query).mockResolvedValue({
                data: [
                    { id: 'tomorrow', date: at(34), asset_id: 'a@b.com' },
                    { id: 'other', date: at(10, 30), asset_id: 'x@b.com' },
                ],
                next: null,
            } as any);

            await expect(
                spectator.service.loadGuestAndEvent('a@b.com'),
            ).rejects.toThrow('APP.VISITOR_KIOSK.NOT_FOUND');
            expect(spectator.service.event()).toBeNull();
        });
    });

    it('keeps only the result of the newest lookup', async () => {
        let resolveFirst: (value: unknown) => void;
        vi.mocked(get).mockImplementationOnce(
            () => new Promise((resolve) => (resolveFirst = resolve)) as any,
        );
        const first = spectator.service.loadGuestAndEvent('a@b.com', 'old');
        await spectator.service.loadGuestAndEvent('a@b.com', 'new');

        resolveFirst({});

        await expect(first).rejects.toThrow('Lookup was replaced.');
        expect(spectator.service.event().id).toBe('new');
    });

    it('only looks up visitors in the kiosk building', async () => {
        vi.mocked(query).mockResolvedValue({
            data: [{ date: Date.now(), asset_id: 'a@b.com' }],
            next: null,
        } as any);
        await spectator.service.loadGuestAndEvent('a@b.com');
        expect(query).toHaveBeenCalledWith(
            expect.objectContaining({
                query_params: expect.objectContaining({ zones: 'bld-01' }),
            }),
        );
    });

    it('ignores a guest lookup that times out', async () => {
        vi.useFakeTimers();
        let resolveGuest: (value: unknown) => void;
        vi.mocked(get).mockImplementationOnce(
            () => new Promise((resolve) => (resolveGuest = resolve)) as any,
        );
        const lookup = expect(
            spectator.service.loadGuestAndEvent('a@b.com', 'event-1234'),
        ).rejects.toThrow('Request timed out');

        await vi.advanceTimersByTimeAsync(10_000);
        await lookup;
        resolveGuest({});
        await vi.runAllTimersAsync();

        expect(spectator.service.event()).toBeNull();
        expect(spectator.service.guest()).toBeNull();
        vi.useRealTimers();
    });

    it('ignores a guest details save that times out', async () => {
        vi.useFakeTimers();
        const booking = new Booking({
            id: 'event-1234',
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
        });
        spectator.service.setBooking(booking);
        let resolveSave: (value: unknown) => void;
        vi.mocked(patch).mockImplementationOnce(
            () => new Promise((resolve) => (resolveSave = resolve)) as any,
        );
        const save = expect(spectator.service.updateGuest()).rejects.toThrow(
            'Request timed out',
        );

        await vi.advanceTimersByTimeAsync(10_000);
        await save;
        resolveSave({ id: 'other-event' });
        await vi.runAllTimersAsync();

        expect(spectator.service.event()).toBe(booking);
        vi.useRealTimers();
    });

    it('saves the edited details and extra data to the booking', async () => {
        spectator.service.setBooking(
            new Booking({
                id: 'event-1234',
                asset_id: 'a@b.com',
                user_email: 'host@b.com',
                extension_data: { existing: true, phone: '111' },
            }),
        );
        spectator.service.form.update((form) => ({
            ...form,
            name: 'New Name',
            email: 'new@b.com',
            organisation: 'Org',
        }));

        await spectator.service.updateGuest({
            covid: false,
            symptoms: true,
        });

        expect(patch).toHaveBeenLastCalledWith(
            expect.stringContaining('event-1234'),
            expect.objectContaining({
                asset_id: 'new@b.com',
                asset_name: 'New Name',
                extension_data: expect.objectContaining({
                    existing: true,
                    phone: '111',
                    organisation: 'Org',
                    covid: false,
                    symptoms: true,
                }),
            }),
        );
    });

    it('does not save details for a self-registered visitor', async () => {
        spectator.service.setBooking(
            new Booking({ id: 'event-1234', asset_id: 'a@b.com' }),
            'registered',
        );

        await spectator.service.updateGuest();

        expect(patch).not.toHaveBeenCalled();
    });

    it('ignores booking actions when no guest is loaded', async () => {
        await expect(spectator.service.completeInduction()).resolves.toBe(
            undefined,
        );
        await expect(spectator.service.declineInduction()).resolves.toBe(
            undefined,
        );
        await expect(spectator.service.checkinGuest()).resolves.toBe(undefined);
        expect(post).not.toHaveBeenCalled();
    });

    it('keeps an accepted induction when updating guest details', async () => {
        const post_json = vi.mocked(
            post as (
                url: string,
                body: unknown,
            ) => Promise<Record<string, unknown>>,
        );
        spectator.service.setBooking(
            new Booking({
                id: 'event-1234',
                asset_id: 'a@b.com',
                user_email: 'host@b.com',
                induction: 'declined',
            }),
        );
        post_json.mockResolvedValueOnce({
            id: 'event-1234',
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
            induction: 'accepted',
        });

        await spectator.service.completeInduction();
        await spectator.service.updateGuest();

        expect(patch).toHaveBeenLastCalledWith(
            expect.stringContaining('event-1234'),
            expect.objectContaining({ induction: 'accepted' }),
        );
    });

    it('declines the induction without changing the booking', async () => {
        const booking = new Booking({ id: 'event-1234', asset_id: 'a@b.com' });
        spectator.service.setBooking(booking);

        await spectator.service.declineInduction();

        expect(post).toHaveBeenCalledWith(
            expect.stringMatching(
                /event-1234\/update_induction\?induction=declined/,
            ),
            {},
        );
        expect(spectator.service.event()).toBe(booking);
    });

    it('checks out the guest without a success message', async () => {
        const snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as never, true);
        spectator.service.setBooking(
            new Booking({ id: 'event-1234', asset_id: 'a@b.com' }),
        );
        vi.mocked(post).mockResolvedValueOnce({ id: 'event-1234' } as never);

        await spectator.service.checkinGuest(false);

        expect(post).toHaveBeenCalledWith(
            expect.stringMatching(/event-1234\/check_in\?state=false/),
            '',
        );
        expect(snackbar.open).not.toHaveBeenCalled();
        setNotifyOutlet(null, true);
    });

    it('checks in the guest, shows success and clears the registration mark', async () => {
        const snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        spectator.service.setBooking(
            new Booking({ id: 'event-1234', asset_id: 'a@b.com' }),
            'registered',
        );
        vi.mocked(post).mockResolvedValueOnce({ id: 'event-1234' } as any);

        await spectator.service.checkinGuest();

        expect(post).toHaveBeenCalledWith(
            expect.stringMatching(/event-1234\/check_in\?state=true/),
            '',
        );
        expect(snackbar.open).toHaveBeenCalledWith(
            'APP.VISITOR_KIOSK.SUCCESS_CHECKIN',
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
        expect(spectator.service.metadata).toBe('');
        setNotifyOutlet(null, true);
    });

    it.each([
        [true, 'APP.VISITOR_KIOSK.ERROR_CHECKIN'],
        [false, 'APP.VISITOR_KIOSK.ERROR_CHECKOUT'],
    ])(
        'shows a plain message when setting check-in to %s fails',
        async (checked_in, message) => {
            const snackbar = createSnackbarSpy();
            setNotifyOutlet(snackbar as never, true);
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
            await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
            vi.mocked(post).mockRejectedValueOnce(new Error('e.json'));

            await expect(
                spectator.service.checkinGuest(checked_in),
            ).rejects.toThrow();

            expect(snackbar.open).toHaveBeenCalledTimes(1);
            expect(snackbar.open).toHaveBeenCalledWith(
                message,
                expect.anything(),
                expect.objectContaining({ panelClass: ['error'] }),
            );
            setNotifyOutlet(null, true);
        },
    );

    it('removes the visitor from the state when cleared', async () => {
        await spectator.service.loadGuestAndEvent('a@b.com', 'event-1234');
        spectator.service.setPhoto('data:jpg');

        spectator.service.clear();

        expect(spectator.service.event()).toBeNull();
        expect(spectator.service.guest()).toBeNull();
        expect(spectator.service.photo()).toBeFalsy();
    });
});
