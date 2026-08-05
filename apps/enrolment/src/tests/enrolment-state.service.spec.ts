import { TestBed } from '@angular/core/testing';
import {
    SpectatorService,
    createServiceFactory,
} from '@ngneat/spectator/vitest';
import { getUnixTime } from 'date-fns';

import * as ts_client from '@placeos/ts-client';
import {
    EnrolmentStateService,
    parseJWT,
} from '../app/enrolment-state.service';

// Assert at the `@placeos/ts-client` boundary. `showGuest`/`showEvent`/
// `checkinEventGuest`/`updateGuest` are workspace functions that run for real
// and end in `get`/`post`/`patch`, so the requests they make are the contract
// worth pinning here.
vi.mock('@placeos/ts-client', { spy: true });

const GUEST_ENDPOINT = '/api/staff/v1/guests';
const EVENTS_ENDPOINT = '/api/staff/v1/events';

/** Build a JWT-shaped token with the payload the service expects */
function userToken(payload: Record<string, any>) {
    const body = btoa(JSON.stringify(payload))
        .replace(/\+/g, '-')
        .replace(/\//g, '_');
    return `header.${body}.signature`;
}

function validToken(overrides: Record<string, any> = {}) {
    return userToken({
        exp: getUnixTime(Date.now()) + 3600,
        u: { e: 'guest@example.com', r: ['event-1'] },
        ...overrides,
    });
}

describe('EnrolmentStateService', () => {
    let spectator: SpectatorService<EnrolmentStateService>;
    let event_stub: Record<string, any>;

    const createService = createServiceFactory({
        service: EnrolmentStateService,
    });

    /** Requests made through `get` for a given endpoint prefix */
    const getCalls = (prefix: string) =>
        (ts_client.get as any).mock.calls.filter((c: any[]) =>
            `${c[0]}`.startsWith(prefix),
        );

    beforeEach(() => {
        vi.useFakeTimers();
        event_stub = {
            id: 'event-1',
            host: 'host@example.com',
            event_start: getUnixTime(Date.now()) + 3600,
        };
        (ts_client.setToken as any).mockReset();
        (ts_client.get as any).mockReset();
        (ts_client.get as any).mockImplementation(async (url: string) => {
            if (url.startsWith(GUEST_ENDPOINT)) {
                return {
                    id: 'guest@example.com',
                    email: 'guest@example.com',
                    name: 'Guest User',
                };
            }
            return event_stub;
        });
        (ts_client.post as any).mockReset();
        (ts_client.post as any).mockResolvedValue({});
        (ts_client.patch as any).mockReset();
        (ts_client.patch as any).mockResolvedValue({});
        spectator = createService();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

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
        expect(ts_client.get).not.toHaveBeenCalled();
    });

    describe('parseJWT', () => {
        it('should decode the payload segment of a token', () => {
            expect(parseJWT(userToken({ exp: 42, u: { e: 'a@b.com' } }))).toEqual(
                { exp: 42, u: { e: 'a@b.com' } },
            );
        });

        it('should decode base64url-specific characters', () => {
            // '>>>' and '???' encode to base64 containing '+' and '/', which the
            // base64url variant replaces with '-' and '_'
            const payload = { note: '>>>???' };
            expect(userToken(payload)).toMatch(/[-_]/);
            expect(parseJWT(userToken(payload))).toEqual(payload);
        });
    });

    describe('handleUserToken', () => {
        it('should authenticate and load the guest named in the token', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(ts_client.setToken).toHaveBeenCalledTimes(1);
            expect(getCalls(GUEST_ENDPOINT)[0][0]).toBe(
                `${GUEST_ENDPOINT}/guest%40example.com`,
            );
            expect(spectator.service.guest()?.email).toBe('guest@example.com');
        });

        it('should load the event referenced by the token once the guest resolves', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(getCalls(EVENTS_ENDPOINT)[0][0]).toBe(
                `${EVENTS_ENDPOINT}/event-1`,
            );
            expect(spectator.service.event()?.id).toBe('event-1');
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
            expect(ts_client.get).not.toHaveBeenCalled();
        });
    });

    describe('event validation', () => {
        it('should clear the loading state for a valid event', async () => {
            spectator.service.handleUserToken(validToken());
            await settle();

            expect(spectator.service.loading()).toBe('');
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

    describe('setView / setError', () => {
        it('should change the active view', () => {
            spectator.service.setView('guest');
            expect(spectator.service.view()).toBe('guest');
        });

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
            expect(ts_client.patch).not.toHaveBeenCalled();
        });

        it('should mark the form as touched so errors are shown', async () => {
            await spectator.service.updateGuest();
            expect(spectator.service.form().touched()).toBe(true);
        });

        it('should patch the guest with the edited details when valid', async () => {
            spectator.service.model.update((m) => ({
                ...m,
                name: 'New Name',
                organisation: 'ACME',
                accepted_terms_conditions: true,
            }));
            await spectator.service.updateGuest();

            expect(ts_client.patch).toHaveBeenCalledTimes(1);
            const [url, body] = (ts_client.patch as any).mock.calls[0];
            expect(url).toBe(`${GUEST_ENDPOINT}/guest%40example.com`);
            expect(body).toEqual(
                expect.objectContaining({
                    name: 'New Name',
                    organisation: 'ACME',
                }),
            );
            expect(spectator.service.loading()).toBe('');
        });
    });

    describe('checkin', () => {
        beforeEach(async () => {
            spectator.service.handleUserToken(validToken());
            await settle();
        });

        it('should check the guest in to the event', async () => {
            await spectator.service.checkin();

            expect(ts_client.post).toHaveBeenCalledTimes(1);
            expect((ts_client.post as any).mock.calls[0][0]).toBe(
                `${EVENTS_ENDPOINT}/event-1/guests/guest@example.com/checkin?state=true`,
            );
        });

        it('should complete the flow and stop loading', async () => {
            await spectator.service.checkin();

            expect(spectator.service.view()).toBe('complete');
            expect(spectator.service.loading()).toBe('');
        });

        it('should not save guest details that were never edited', async () => {
            await spectator.service.checkin();
            expect(ts_client.patch).not.toHaveBeenCalled();
        });
    });
});
