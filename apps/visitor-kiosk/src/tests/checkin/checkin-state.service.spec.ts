import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import { Booking, OrganisationService, setNotifyOutlet } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import {
    type StubApi,
    type StubRequest,
    startStubApi,
} from '@placeos/common/tests';
import { CheckinStateService } from '../../app/checkin/checkin-state.service';

// The workspace API functions (`@placeos/bookings`, `@placeos/users`) run for
// real. A stub API answers their requests, so the requests are the contract
// that these tests check.
vi.mock('@placeos/ts-client', { spy: true });

const BOOKINGS_PATH = '/api/staff/v1/bookings';

/** Spy on the snackbar outlet that `notify*` functions route to */
function createSnackbarSpy() {
    return {
        open: vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        })),
    };
}

/** The last path segment of a request before `suffix`, such as the booking ID */
function idOf(request: StubRequest, suffix = '') {
    const path = request.url.pathname.slice(
        0,
        request.url.pathname.length - suffix.length,
    );
    return Number(path.split('/').pop());
}

describe('CheckinStateService', () => {
    let spectator: SpectatorService<CheckinStateService>;
    let api: StubApi;
    /** Handlers of the stub API, one for each request that the service makes */
    const guest_show = vi.fn<(request: StubRequest) => unknown>();
    const booking_show = vi.fn<(request: StubRequest) => unknown>();
    const bookings_query = vi.fn<(request: StubRequest) => unknown>();
    const booking_update = vi.fn<(request: StubRequest) => unknown>();
    const booking_induction = vi.fn<(request: StubRequest) => unknown>();
    const booking_checkin = vi.fn<(request: StubRequest) => unknown>();

    const createService = createServiceFactory({
        service: CheckinStateService,
        providers: [
            MockProvider(OrganisationService, {
                building: { id: 'bld-01' } as any,
            }),
        ],
    });

    /** Requests with `method` to a path that ends with `suffix` */
    const requests = (method: string, suffix = '') =>
        api.requests.filter(
            (request) =>
                request.method === method &&
                request.url.pathname.endsWith(suffix),
        );

    beforeEach(() => {
        vi.clearAllMocks();
        guest_show.mockReset().mockReturnValue({});
        booking_show.mockReset().mockImplementation((request) => ({
            id: idOf(request),
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
        }));
        bookings_query.mockReset().mockReturnValue([]);
        booking_update
            .mockReset()
            .mockImplementation((request) => ({ id: idOf(request) }));
        booking_induction.mockReset().mockImplementation((request) => ({
            id: idOf(request, '/update_induction'),
        }));
        booking_checkin.mockReset().mockImplementation((request) => ({
            id: idOf(request, '/check_in'),
        }));
        api = startStubApi();
        api.on('GET', '/api/staff/v1/guests/:id', guest_show);
        api.on('GET', `${BOOKINGS_PATH}/:id`, booking_show);
        api.on('GET', BOOKINGS_PATH, bookings_query);
        api.on('PATCH', `${BOOKINGS_PATH}/:id`, booking_update);
        api.on(
            'POST',
            `${BOOKINGS_PATH}/:id/update_induction`,
            booking_induction,
        );
        api.on('POST', `${BOOKINGS_PATH}/:id/check_in`, booking_checkin);
        spectator = createService();
    });

    afterEach(() => vi.unstubAllGlobals());

    it("uses the guest's own booking without other lookups", async () => {
        guest_show.mockReturnValueOnce({
            email: 'a@b.com',
            booking: { id: 'own-event', user_email: 'own-host@b.com' },
        });

        await spectator.service.loadGuestAndEvent('a@b.com', '1234');

        expect(spectator.service.event().id).toBe('own-event');
        expect(spectator.service.form().host).toBe('own-host@b.com');
        expect(api.requests).toHaveLength(1);
    });

    it('loads the event from the QR code when the guest has no booking', async () => {
        guest_show.mockReturnValueOnce({ email: 'a@b.com', name: 'Visitor' });

        await spectator.service.loadGuestAndEvent('a@b.com', '1234');

        expect(`${spectator.service.event().id}`).toBe('1234');
        expect(requests('GET', `${BOOKINGS_PATH}/1234`)).toHaveLength(1);
        expect(spectator.service.form()).toEqual(
            expect.objectContaining({
                host: 'host@b.com',
                name: 'Visitor',
                email: 'a@b.com',
            }),
        );
    });

    describe('without an event id', () => {
        /** Unix seconds of a time on 1 January 2026 */
        const at = (hours: number, minutes = 0) =>
            new Date(2026, 0, 1, hours, minutes).valueOf() / 1000;

        beforeEach(() => {
            vi.useFakeTimers({ toFake: ['Date'] });
            vi.setSystemTime(at(10) * 1000);
        });

        afterEach(() => vi.useRealTimers());

        it("picks the visitor's earliest booking today", async () => {
            bookings_query.mockReturnValue([
                { id: 1, booking_start: at(10, 5), asset_id: 'x@b.com' },
                { id: 2, booking_start: at(11), asset_id: 'a@b.com' },
                { id: 3, booking_start: at(10, 50), user_email: 'a@b.com' },
                { id: 4, booking_start: at(10, 30), asset_id: 'a@b.com' },
            ]);

            await spectator.service.loadGuestAndEvent('a@b.com');

            expect(`${spectator.service.event().id}`).toBe('4');
        });

        it('rejects when the visitor has no booking today', async () => {
            bookings_query.mockReturnValue([
                { id: 1, booking_start: at(34), asset_id: 'a@b.com' },
                { id: 2, booking_start: at(10, 30), asset_id: 'x@b.com' },
            ]);

            await expect(
                spectator.service.loadGuestAndEvent('a@b.com'),
            ).rejects.toThrow('APP.VISITOR_KIOSK.NOT_FOUND');
            expect(spectator.service.event()).toBeNull();
        });
    });

    it('keeps only the result of the newest lookup', async () => {
        let resolveFirst: (value: unknown) => void;
        guest_show.mockImplementationOnce(
            () => new Promise((resolve) => (resolveFirst = resolve)),
        );
        const first = spectator.service.loadGuestAndEvent('a@b.com', '1');
        await vi.waitFor(() => expect(guest_show).toHaveBeenCalled());
        await spectator.service.loadGuestAndEvent('a@b.com', '2');

        resolveFirst({});

        await expect(first).rejects.toThrow('Lookup was replaced.');
        expect(`${spectator.service.event().id}`).toBe('2');
    });

    it('only looks up visitors in the kiosk building', async () => {
        bookings_query.mockReturnValue([
            {
                id: 1,
                booking_start: Math.floor(Date.now() / 1000),
                asset_id: 'a@b.com',
            },
        ]);
        await spectator.service.loadGuestAndEvent('a@b.com');
        const [query] = requests('GET', BOOKINGS_PATH);
        expect(query.url.searchParams.get('zones')).toBe('bld-01');
    });

    it('ignores a guest lookup that times out', async () => {
        vi.useFakeTimers();
        let resolveGuest: (value: unknown) => void;
        guest_show.mockImplementationOnce(
            () => new Promise((resolve) => (resolveGuest = resolve)),
        );
        const lookup = expect(
            spectator.service.loadGuestAndEvent('a@b.com', '1234'),
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
            id: '1234',
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
        });
        spectator.service.setBooking(booking);
        let resolveSave: (value: unknown) => void;
        booking_update.mockImplementationOnce(
            () => new Promise((resolve) => (resolveSave = resolve)),
        );
        const save = expect(spectator.service.updateGuest()).rejects.toThrow(
            'Request timed out',
        );

        await vi.advanceTimersByTimeAsync(10_000);
        await save;
        resolveSave({ id: 5678 });
        await vi.runAllTimersAsync();

        expect(spectator.service.event()).toBe(booking);
        vi.useRealTimers();
    });

    it('saves the edited details and extra data to the booking', async () => {
        spectator.service.setBooking(
            new Booking({
                id: '1234',
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

        const [save] = requests('PATCH', `${BOOKINGS_PATH}/1234`);
        expect(save.body).toEqual(
            expect.objectContaining({
                asset_id: 'new@b.com',
                // The staff API schema has no `asset_name`, so the request
                // leaves it out
                description: 'New Name',
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
            new Booking({ id: '1234', asset_id: 'a@b.com' }),
            'registered',
        );

        await spectator.service.updateGuest();

        expect(booking_update).not.toHaveBeenCalled();
    });

    it('ignores booking actions when no guest is loaded', async () => {
        await expect(spectator.service.completeInduction()).resolves.toBe(
            undefined,
        );
        await expect(spectator.service.declineInduction()).resolves.toBe(
            undefined,
        );
        await expect(spectator.service.checkinGuest()).resolves.toBe(undefined);
        expect(requests('POST')).toEqual([]);
    });

    it('keeps an accepted induction when updating guest details', async () => {
        spectator.service.setBooking(
            new Booking({
                id: '1234',
                asset_id: 'a@b.com',
                user_email: 'host@b.com',
                induction: 'declined',
            }),
        );
        booking_induction.mockReturnValueOnce({
            id: 1234,
            asset_id: 'a@b.com',
            user_email: 'host@b.com',
            induction: 'accepted',
        });

        await spectator.service.completeInduction();
        await spectator.service.updateGuest();

        const [save] = requests('PATCH', `${BOOKINGS_PATH}/1234`);
        expect(save.body).toEqual(
            expect.objectContaining({ induction: 'accepted' }),
        );
    });

    it('declines the induction without changing the booking', async () => {
        const booking = new Booking({ id: '1234', asset_id: 'a@b.com' });
        spectator.service.setBooking(booking);

        await spectator.service.declineInduction();

        const [decline] = requests('POST', '/1234/update_induction');
        expect(decline.url.searchParams.get('induction')).toBe('declined');
        expect(spectator.service.event()).toBe(booking);
    });

    it('checks out the guest without a success message', async () => {
        const snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as never, true);
        spectator.service.setBooking(
            new Booking({ id: '1234', asset_id: 'a@b.com' }),
        );

        await spectator.service.checkinGuest(false);

        const [checkout] = requests('POST', '/1234/check_in');
        expect(checkout.url.searchParams.get('state')).toBe('false');
        expect(snackbar.open).not.toHaveBeenCalled();
        setNotifyOutlet(null, true);
    });

    it('checks in the guest, shows success and clears the registration mark', async () => {
        const snackbar = createSnackbarSpy();
        setNotifyOutlet(snackbar as any, true);
        spectator.service.setBooking(
            new Booking({ id: '1234', asset_id: 'a@b.com' }),
            'registered',
        );

        await spectator.service.checkinGuest();

        const [checkin] = requests('POST', '/1234/check_in');
        expect(checkin.url.searchParams.get('state')).toBe('true');
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
            await spectator.service.loadGuestAndEvent('a@b.com', '1234');
            booking_checkin.mockImplementationOnce(() => {
                throw { status: 500 };
            });

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
        await spectator.service.loadGuestAndEvent('a@b.com', '1234');
        spectator.service.setPhoto('data:jpg');

        spectator.service.clear();

        expect(spectator.service.event()).toBeNull();
        expect(spectator.service.guest()).toBeNull();
        expect(spectator.service.photo()).toBeFalsy();
    });
});
