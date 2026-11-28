import { TestBed } from '@angular/core/testing';
import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import { getUnixTime } from 'date-fns';

import { type StubApi, startStubApi } from '@placeos/common/tests';
import { EnrolmentStateService } from '../app/enrolment-state.service';

// The workspace API functions run for real. A stub API answers their requests,
// so the requests are the contract that these tests check.
vi.mock('@placeos/ts-client', { spy: true });

const GUEST_PATH = '/api/staff/v1/guests/guest%40example.com';
const EVENT_PATH = '/api/staff/v1/events/event-1';

const GUEST = {
    id: 'guest@example.com',
    email: 'guest@example.com',
    name: 'Guest User',
    // Not a form field, so saving must keep it from the record
    status: 'approved',
};

/** Build a JWT-shaped token with the payload the service expects */
function userToken(payload: Record<string, unknown>) {
    const body = btoa(JSON.stringify(payload))
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    return `header.${body}.signature`;
}

function validToken(overrides: Record<string, unknown> = {}) {
    return userToken({
        exp: getUnixTime(Date.now()) + 3600,
        u: { e: 'guest@example.com', r: ['event-1'] },
        ...overrides,
    });
}

describe('EnrolmentStateService', () => {
    let spectator: SpectatorService<EnrolmentStateService>;
    let event_stub: Record<string, unknown>;
    let api: StubApi;
    /** Handlers of the stub API, one for each request that the service makes */
    const guest_show = vi.fn<() => unknown>();
    const event_show = vi.fn<() => unknown>();
    const guest_checkin = vi.fn<() => unknown>();
    const guest_update = vi.fn<(body: unknown) => unknown>();

    const createService = createServiceFactory({
        service: EnrolmentStateService,
    });

    beforeEach(() => {
        vi.useFakeTimers();
        event_stub = {
            id: 'event-1',
            host: 'host@example.com',
            event_start: getUnixTime(Date.now()) + 3600,
        };
        guest_show.mockReset().mockReturnValue(GUEST);
        // Read when the call happens, so a test can change the stub first
        event_show.mockReset().mockImplementation(() => event_stub);
        guest_checkin.mockReset().mockReturnValue({});
        guest_update.mockReset().mockImplementation((body) => body);
        api = startStubApi();
        api.on('GET', '/api/staff/v1/guests/:id', guest_show);
        api.on('PATCH', '/api/staff/v1/guests/:id', (r) =>
            guest_update(r.body),
        );
        api.on('GET', '/api/staff/v1/events/:id', event_show);
        api.on(
            'POST',
            '/api/staff/v1/events/:id/guests/:guest_id/check_in',
            guest_checkin,
        );
        spectator = createService();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
        vi.unstubAllGlobals();
    });

    /** Paths of the requests with `method` */
    const paths = (method: string) =>
        api.requests
            .filter((request) => request.method === method)
            .map((request) => request.url.pathname);

    /** Edit the loaded details so the form is valid */
    function acceptValidDetails() {
        spectator.service.model.update((m) => ({
            ...m,
            name: 'New Name',
            organisation: 'ACME',
            accepted_terms_conditions: true,
        }));
    }

    /** Let the guest + event resources run their loaders */
    async function settle(rounds = 4) {
        for (let i = 0; i < rounds; i++) {
            await vi.advanceTimersByTimeAsync(100);
            TestBed.flushEffects();
        }
    }

    it('should start on the error view while details are loading', () => {
        expect(spectator.service.view()).toBe('error');
        expect(spectator.service.error()).toBe('');
        expect(spectator.service.loading()).toBe('Loading your details...');
    });

    it('should not load anything until a token is handled', async () => {
        await settle();
        expect(api.requests).toEqual([]);
    });

    describe('handleUserToken', () => {
        it('should authenticate and load the guest named in the token', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(api.fake.session.useToken).toHaveBeenCalledTimes(1);
            expect(paths('GET')[0]).toBe(GUEST_PATH);
            expect(spectator.service.guest()?.email).toBe('guest@example.com');
        });

        it('should load the event referenced by the token once the guest resolves', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(paths('GET')).toContain(EVENT_PATH);
            expect(spectator.service.event()?.id).toBe('event-1');
            expect(spectator.service.error()).toBe('');
            expect(spectator.service.loading()).toBe('');
        });

        it('should show the meeting loading message until the event arrives', async () => {
            let resolveEvent: (value: unknown) => void = () => undefined;
            event_show.mockImplementation(
                () => new Promise((resolve) => (resolveEvent = resolve)),
            );
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.loading()).toBe(
                'Loading your meeting details...',
            );

            resolveEvent(event_stub);
            await settle();
            expect(spectator.service.loading()).toBe('');
            expect(spectator.service.event()?.id).toBe('event-1');
        });

        it('should not load the event once an error is shown', async () => {
            // e.g. the page timed out before the token arrived
            spectator.service.setError('guest');
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(guest_show).toHaveBeenCalledTimes(1);
            expect(event_show).not.toHaveBeenCalled();
            expect(spectator.service.error()).toBe('guest');
        });

        it('should populate the form model from the loaded guest', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.model().name).toBe('Guest User');
            expect(spectator.service.model().email).toBe('guest@example.com');
        });

        it('should reject an expired token without loading anything', async () => {
            spectator.service.handleUserToken(
                validToken({ exp: getUnixTime(Date.now()) - 60 }),
            );
            await settle();

            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.error()).toBe('link');
            expect(api.requests).toEqual([]);
        });

        it('should reject a malformed token without authenticating', async () => {
            expect(() =>
                spectator.service.handleUserToken('not-a-token'),
            ).not.toThrow();
            await settle();

            expect(spectator.service.error()).toBe('link');
            expect(api.fake.session.useToken).not.toHaveBeenCalled();
            expect(api.requests).toEqual([]);
        });

        it.each([
            ['guest or event details', { u: {} }],
            ['an event', { u: { e: 'guest@example.com', r: [] } }],
            ['an expiry', { exp: undefined }],
        ])('should reject a token without %s', async (_, overrides) => {
            spectator.service.handleUserToken(validToken(overrides));
            await settle();

            expect(spectator.service.error()).toBe('link');
            expect(api.fake.session.useToken).not.toHaveBeenCalled();
            expect(api.requests).toEqual([]);
        });
    });

    describe('loading failures', () => {
        it('should show the guest error if guest details fail to load', async () => {
            guest_show.mockRejectedValue(new Error('offline'));

            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.error()).toBe('guest');
            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.loading()).toBe('');
            expect(event_show).not.toHaveBeenCalled();
        });

        it('should show the meeting error if event details fail to load', async () => {
            event_show.mockRejectedValue(new Error('offline'));

            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.error()).toBe('meeting');
            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.loading()).toBe('');
        });
    });

    describe('event validation', () => {
        it('should accept a meeting that has started but not finished', async () => {
            event_stub.event_start = getUnixTime(Date.now()) - 5 * 60;
            event_stub.event_end = getUnixTime(Date.now()) + 25 * 60;
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.event()?.id).toBe('event-1');
            expect(spectator.service.error()).toBe('');
        });

        it('should error with "link" for an event that has already finished', async () => {
            event_stub.event_start = getUnixTime(Date.now()) - 3600;
            event_stub.event_end = getUnixTime(Date.now()) - 60;
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.error()).toBe('link');
            expect(spectator.service.view()).toBe('error');
        });

        it('should error with "cancelled" for a cancelled event', async () => {
            event_stub.status = 'cancelled';
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.error()).toBe('cancelled');
            expect(spectator.service.view()).toBe('error');
        });
    });

    describe('setError', () => {
        it('should switch to the error view and stop loading on error', () => {
            spectator.service.setView('guest');
            spectator.service.setError('meeting');

            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.error()).toBe('meeting');
            expect(spectator.service.loading()).toBe('');
        });
    });

    describe('updateGuest', () => {
        beforeEach(async () => {
            spectator.service.handleUserToken(validToken());
            await settle();
        });

        it('should not save while the form is invalid', async () => {
            // Terms have not been accepted, so the form is invalid
            await spectator.service.updateGuest();
            expect(guest_update).not.toHaveBeenCalled();
        });

        it('should mark the form as touched so errors are shown', async () => {
            await spectator.service.updateGuest();
            expect(spectator.service.form().touched()).toBe(true);
        });

        it('should patch the guest record with the edited details when valid', async () => {
            acceptValidDetails();
            await spectator.service.updateGuest();

            expect(guest_update).toHaveBeenCalledTimes(1);
            expect(paths('PATCH')).toEqual([GUEST_PATH]);
            const [body] = guest_update.mock.calls[0];
            expect(body).toEqual(
                expect.objectContaining({
                    id: 'guest@example.com',
                    status: 'approved',
                    name: 'New Name',
                    organisation: 'ACME',
                }),
            );
            expect(spectator.service.loading()).toBe('');
        });

        it('should show the update error and stop loading when the save fails', async () => {
            guest_update.mockRejectedValue(new Error('offline'));
            acceptValidDetails();

            await spectator.service.updateGuest();

            expect(spectator.service.error()).toBe('update');
            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.loading()).toBe('');
        });
    });

    describe('checkin', () => {
        beforeEach(async () => {
            spectator.service.handleUserToken(validToken());
            await settle();
        });

        it('should check the guest in without saving unedited details', async () => {
            await spectator.service.checkin();

            expect(guest_update).not.toHaveBeenCalled();
            expect(guest_checkin).toHaveBeenCalledTimes(1);
            const [checkin] = api.requests.filter((r) => r.method === 'POST');
            expect(checkin.url.pathname).toBe(
                `${EVENT_PATH}/guests/guest%40example.com/check_in`,
            );
            expect(checkin.url.searchParams.get('state')).toBe('true');
            expect(spectator.service.view()).toBe('complete');
            expect(spectator.service.loading()).toBe('');
        });

        it('should save edited details before checking in', async () => {
            acceptValidDetails();
            spectator.service.form().markAsDirty();

            await spectator.service.checkin();

            const [update_order] = guest_update.mock.invocationCallOrder;
            const [checkin_order] = guest_checkin.mock.invocationCallOrder;
            expect(update_order).toBeLessThan(checkin_order);
            expect(spectator.service.view()).toBe('complete');
        });

        it('should not check in when saving the edited details fails', async () => {
            guest_update.mockRejectedValue(new Error('offline'));
            acceptValidDetails();
            spectator.service.form().markAsDirty();

            await spectator.service.checkin();

            expect(guest_checkin).not.toHaveBeenCalled();
            expect(spectator.service.error()).toBe('update');
            expect(spectator.service.view()).toBe('error');
        });

        it('should show the error view and stop loading when check-in fails', async () => {
            guest_checkin.mockRejectedValue(new Error('offline'));

            await spectator.service.checkin();

            expect(spectator.service.error()).toBe('checkin');
            expect(spectator.service.view()).toBe('error');
            expect(spectator.service.loading()).toBe('');
        });
    });
});
