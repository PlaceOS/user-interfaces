import { TestBed } from '@angular/core/testing';
import {
    configure,
    type DomainAuthority,
    public_events,
} from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { PublicEventsService } from '../app/public-events.service';

vi.mock('@placeos/ts-client', { spy: true });

const GUEST_KEY = 'PLACEOS.public.guest';
/** Call options of the guest token request: a client with no auth */
const ANONYMOUS = {
    client: expect.objectContaining({ auth: { kind: 'none' } }),
};
const TOKEN_KEY = 'PLACEOS.public.token';

/** Stores a guest token that has not expired */
function storeToken(storage: Storage = sessionStorage) {
    storage.setItem(
        TOKEN_KEY,
        JSON.stringify({
            token: 'guest-token',
            expires_at_ms: Date.now() + 60_000,
        }),
    );
}

/** The guest token in `storage`, or `null` */
function tokenIn(storage: Storage): { token: string; expires_at_ms: number } {
    return JSON.parse(storage.getItem(TOKEN_KEY) || 'null');
}

/** Bearer token callback of the service that was made last */
function lastBearer() {
    const auth = vi.mocked(configure).mock.calls.at(-1)?.[0].auth;
    if (auth?.kind !== 'bearer') throw new Error('Expected a bearer token');
    return auth.token;
}

describe('PublicEventsService', () => {
    const guest = { name: 'Guest User', email: 'guest@example.com' };

    function authority(config: Record<string, unknown>) {
        return { config } as unknown as DomainAuthority;
    }

    function stubAuthorityFetch(config: Record<string, unknown> = {}) {
        const fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(authority(config)),
        } as Response);
        vi.stubGlobal('fetch', fetch);
        return fetch;
    }

    beforeEach(() => {
        TestBed.resetTestingModule();
        localStorage.clear();
        sessionStorage.clear();
        vi.clearAllMocks();
        vi.mocked(public_events.guestToken).mockResolvedValue(
            mockReply('new-token'),
        );
        vi.mocked(public_events.query).mockResolvedValue(mockReply([]));
        vi.mocked(public_events.register).mockResolvedValue(mockReply(''));
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.useRealTimers();
        document.getElementById('placeos-recaptcha')?.remove();
    });

    describe('authority', () => {
        it('should load the authority once and add the recaptcha script once', async () => {
            const fetch = stubAuthorityFetch({ recaptcha_key: 'site-key' });
            const service = TestBed.inject(PublicEventsService);

            await service.init();
            await service.init();

            expect(fetch).toHaveBeenCalledTimes(1);
            const scripts = document.querySelectorAll('#placeos-recaptcha');
            expect(scripts.length).toBe(1);
            expect((scripts[0] as HTMLScriptElement).src).toContain(
                'render=site-key',
            );
        });

        it('should show an authority load failure as the error', async () => {
            vi.stubGlobal(
                'fetch',
                vi.fn().mockResolvedValue({ ok: false } as Response),
            );
            const service = TestBed.inject(PublicEventsService);

            await service.init();

            expect(service.authority()).toBeNull();
            expect(service.error()).toBe('Unable to load PlaceOS authority.');
        });

        it('should add the recaptcha script only when a guest token is needed', async () => {
            storeToken();
            stubAuthorityFetch({ recaptcha_key: 'site-key' });
            const service = TestBed.inject(PublicEventsService);

            await service.init();
            expect(document.getElementById('placeos-recaptcha')).toBeNull();

            vi.useFakeTimers();
            const request = service
                .requestGuestAccess('system-1', guest)
                .catch(() => undefined);
            expect(document.getElementById('placeos-recaptcha')).not.toBeNull();
            await vi.runAllTimersAsync();
            await request;
        });

        it('should not add the recaptcha script when no recaptcha key is set', async () => {
            stubAuthorityFetch();
            const service = TestBed.inject(PublicEventsService);

            await service.init();

            expect(service.authority()).not.toBeNull();
            expect(document.getElementById('placeos-recaptcha')).toBeNull();
        });

        it('should prefer the public events config for the logo and default system', () => {
            const service = TestBed.inject(PublicEventsService);
            expect(service.logo_url()).toBe('assets/logo-light.svg');
            expect(service.default_system_id()).toBe('');

            service.authority.set(
                authority({
                    logo: 'root-logo',
                    system_id: 'root-sys',
                    app: { logo_light: 'app-logo' },
                    public: { logo: 'public-logo', system_id: 'public-sys' },
                    public_events: {
                        logo: 'events-logo',
                        system_id: 'events-sys',
                    },
                }),
            );
            expect(service.logo_url()).toBe('events-logo');
            expect(service.default_system_id()).toBe('events-sys');

            // Config sections that are not objects are ignored
            service.authority.set(
                authority({
                    logo: 'root-logo',
                    system_id: 'root-sys',
                    public: 'invalid',
                    public_events: null,
                }),
            );
            expect(service.logo_url()).toBe('root-logo');
            expect(service.default_system_id()).toBe('root-sys');
        });
    });

    describe('stored guest details', () => {
        it.each([
            ['an invalid email', { name: 'Guest User', email: 42 }],
            ['a blank name', { name: '  ', email: 'guest@example.com' }],
            ['invalid JSON', '{not json'],
        ])('should ignore a stored value with %s', (_, value) => {
            localStorage.setItem(
                GUEST_KEY,
                typeof value === 'string' ? value : JSON.stringify(value),
            );

            const service = TestBed.inject(PublicEventsService);

            expect(service.guest()).toBeNull();
            expect(service.authenticated()).toBe(false);
        });

        it('should remove an expired guest token when it reads it', async () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            localStorage.setItem(
                TOKEN_KEY,
                JSON.stringify({
                    token: 'old-token',
                    expires_at_ms: Date.now() - 1,
                }),
            );

            TestBed.inject(PublicEventsService);

            expect(await lastBearer()()).toBeNull();
            expect(tokenIn(localStorage)).toBeNull();
        });

        it('should load the guest that was remembered', () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));

            const service = TestBed.inject(PublicEventsService);

            expect(service.guest()).toEqual(guest);
        });
    });

    describe('forgetGuest', () => {
        it('should remove the guest details and token from both storages', async () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            storeToken(localStorage);
            storeToken(sessionStorage);
            const service = TestBed.inject(PublicEventsService);
            expect(await lastBearer()()).toBe('guest-token');

            service.forgetGuest();

            expect(await lastBearer()()).toBeNull();
            expect(tokenIn(localStorage)).toBeNull();
            expect(tokenIn(sessionStorage)).toBeNull();
            expect(localStorage.getItem(GUEST_KEY)).toBeNull();
            expect(sessionStorage.getItem(GUEST_KEY)).toBeNull();
            expect(service.guest()).toBeNull();
            expect(service.authenticated()).toBe(false);
        });

        it('should remove the guest token of 6.x from both storages', () => {
            // 6.x had no client ID in this app, so the keys have no prefix
            for (const storage of [localStorage, sessionStorage]) {
                storage.setItem('_access_token', 'old-token');
                storage.setItem('_expires_at', `${Date.now() + 60_000}`);
            }
            const service = TestBed.inject(PublicEventsService);

            service.forgetGuest();

            for (const storage of [localStorage, sessionStorage]) {
                expect(storage.getItem('_access_token')).toBeNull();
                expect(storage.getItem('_expires_at')).toBeNull();
            }
        });

        it('should not store the guest again when a pending request resolves', async () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            let resolve_token: (value: string) => void = () => undefined;
            vi.mocked(public_events.guestToken).mockImplementation(
                () =>
                    new Promise(
                        (resolve) =>
                            (resolve_token = (value) =>
                                resolve(mockReply(value))),
                    ),
            );
            const service = TestBed.inject(PublicEventsService);
            const loading = service.loadEvents('sys-1');
            await Promise.resolve();

            service.forgetGuest();
            resolve_token('old-token');
            await loading;

            expect(tokenIn(localStorage)).toBeNull();
            expect(localStorage.getItem(GUEST_KEY)).toBeNull();
            expect(service.guest()).toBeNull();
            expect(service.error()).toBe('');
            expect(public_events.query).not.toHaveBeenCalled();
        });
    });

    describe('requestGuestAccess', () => {
        it.each([
            [true, localStorage, sessionStorage],
            [false, sessionStorage, localStorage],
        ])(
            'should store the guest and token in one storage only (remember: %s)',
            async (remember, kept, cleared) => {
                cleared.setItem(GUEST_KEY, JSON.stringify(guest));
                storeToken(cleared);
                const service = TestBed.inject(PublicEventsService);

                await service.requestGuestAccess('system-1', guest, remember);

                expect(JSON.parse(kept.getItem(GUEST_KEY) || 'null')).toEqual(
                    guest,
                );
                expect(cleared.getItem(GUEST_KEY)).toBeNull();
                expect(tokenIn(kept)?.token).toBe('new-token');
                expect(tokenIn(cleared)).toBeNull();
                expect(service.guest()).toEqual(guest);
                expect(await lastBearer()()).toBe('new-token');
            },
        );

        it('should request a guest token without auth when no token is stored', async () => {
            const actual =
                await vi.importActual<typeof import('@placeos/ts-client')>(
                    '@placeos/ts-client',
                );
            vi.mocked(public_events.guestToken).mockImplementation(
                actual.public_events.guestToken,
            );
            const fetch = vi.fn().mockResolvedValue(
                new Response(JSON.stringify('server-token'), {
                    headers: { 'content-type': 'application/json' },
                }),
            );
            vi.stubGlobal('fetch', fetch);
            const service = TestBed.inject(PublicEventsService);

            await service.requestGuestAccess('system-1', guest);

            expect(fetch).toHaveBeenCalledTimes(1);
            const [url, init] = fetch.mock.calls[0] as [string, RequestInit];
            expect(url).toBe(
                '/api/engine/v2/public_events/guest_token/system-1',
            );
            expect(new Headers(init.headers).has('authorization')).toBe(false);
            expect(tokenIn(sessionStorage)?.token).toBe('server-token');
        });

        it('should set the guest token to expire after two hours', async () => {
            vi.useFakeTimers({ now: new Date(2026, 4, 12, 9, 0) });
            const service = TestBed.inject(PublicEventsService);

            await service.requestGuestAccess('system-1', guest);

            expect(tokenIn(sessionStorage)).toEqual({
                token: 'new-token',
                expires_at_ms: Date.now() + 2 * 60 * 60 * 1000,
            });
        });

        it('should show the error and keep the visitor signed out when no token is returned', async () => {
            vi.mocked(public_events.guestToken).mockResolvedValue(
                mockReply(''),
            );
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.requestGuestAccess('system-1', guest, true),
            ).rejects.toThrow('Guest access response was invalid.');

            expect(service.error()).toBe('Guest access response was invalid.');
            expect(service.loading()).toBe('');
            expect(service.guest()).toBeNull();
            expect(tokenIn(localStorage)).toBeNull();
            expect(localStorage.getItem(GUEST_KEY)).toBeNull();
        });

        it('should clear the previous error when a retry succeeds', async () => {
            vi.mocked(public_events.guestToken).mockRejectedValueOnce(
                new Error('Denied'),
            );
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.requestGuestAccess('system-1', guest),
            ).rejects.toThrow('Denied');
            expect(service.error()).toBe('Denied');

            await service.requestGuestAccess('system-1', guest);
            expect(service.error()).toBe('');
            expect(service.guest()).toEqual(guest);
        });

        it('should send the recaptcha token when a recaptcha key is set', async () => {
            const execute = vi.fn().mockResolvedValue('captcha-token');
            vi.stubGlobal('grecaptcha', {
                ready: (callback: () => void) => callback(),
                execute,
            });
            const service = TestBed.inject(PublicEventsService);
            service.authority.set(authority({ recaptcha_key: 'site-key' }));

            await service.requestGuestAccess('system-1', guest);

            expect(execute).toHaveBeenCalledWith('site-key', {
                action: 'public_events',
            });
            expect(public_events.guestToken).toHaveBeenCalledWith(
                {
                    system_id: 'system-1',
                    body: {
                        ...guest,
                        captcha: 'captcha-token',
                    },
                },
                ANONYMOUS,
            );
        });

        it('should fail when recaptcha returns no token', async () => {
            vi.stubGlobal('grecaptcha', {
                ready: (callback: () => void) => callback(),
                execute: vi.fn().mockResolvedValue(''),
            });
            const service = TestBed.inject(PublicEventsService);
            service.authority.set(authority({ recaptcha_key: 'site-key' }));

            await expect(
                service.requestGuestAccess('system-1', guest),
            ).rejects.toThrow('Guest access check returned no response.');
            expect(public_events.guestToken).not.toHaveBeenCalled();
        });

        it('should wait for the recaptcha script to load', async () => {
            vi.useFakeTimers();
            const service = TestBed.inject(PublicEventsService);
            service.authority.set(authority({ recaptcha_key: 'site-key' }));

            const request = service.requestGuestAccess('system-1', guest);
            await vi.advanceTimersByTimeAsync(2 * 250);
            expect(public_events.guestToken).not.toHaveBeenCalled();
            vi.stubGlobal('grecaptcha', {
                ready: (callback: () => void) => callback(),
                execute: vi.fn().mockResolvedValue('captcha-token'),
            });
            await vi.advanceTimersByTimeAsync(250);

            await request;
            expect(public_events.guestToken).toHaveBeenCalledWith(
                {
                    system_id: 'system-1',
                    body: {
                        ...guest,
                        captcha: 'captcha-token',
                    },
                },
                ANONYMOUS,
            );
        });

        it('should stop waiting for recaptcha after a bounded number of tries', async () => {
            vi.useFakeTimers();
            const service = TestBed.inject(PublicEventsService);
            service.authority.set(authority({ recaptcha_key: 'site-key' }));

            const request = service.requestGuestAccess('system-1', guest);
            const failed = expect(request).rejects.toThrow(
                'Guest access check failed to load.',
            );
            // 21 retries at 250ms each
            await vi.advanceTimersByTimeAsync(21 * 250);

            await failed;
            expect(vi.getTimerCount()).toBe(0);
            expect(service.error()).toBe('Guest access check failed to load.');
            expect(public_events.guestToken).not.toHaveBeenCalled();
        });
    });

    describe('loadEvents', () => {
        it('should refresh guest access and hide system events when the token is missing', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(public_events.query).mockResolvedValue(
                mockReply([
                    { id: 'setup', is_system_event: true },
                    { id: 'event-1', title: 'Public Event' },
                ]),
            );
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(public_events.guestToken).toHaveBeenCalledWith(
                {
                    system_id: 'system-1',
                    body: {
                        ...guest,
                        captcha: '',
                    },
                },
                ANONYMOUS,
            );
            expect(tokenIn(sessionStorage)?.token).toBe('new-token');
            expect(service.events()).toEqual([
                { id: 'event-1', title: 'Public Event' },
            ]);
            expect(service.loading()).toBe('');
        });

        it('should use an existing guest token', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            storeToken();
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(public_events.guestToken).not.toHaveBeenCalled();
            expect(public_events.query).toHaveBeenCalledWith({
                system_id: 'system-1',
                limit: 100,
            });
        });

        it('should not use the token of a guest that another tab remembered', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            const service = TestBed.inject(PublicEventsService);
            // Another tab remembers a different guest
            storeToken(localStorage);

            await service.loadEvents('system-1');

            expect(public_events.guestToken).toHaveBeenCalledWith(
                { system_id: 'system-1', body: { ...guest, captcha: '' } },
                ANONYMOUS,
            );
            expect(tokenIn(sessionStorage)?.token).toBe('new-token');
        });

        it('should keep the token of its own guest when another tab remembers a guest', async () => {
            // Tab 1 starts with remembered guest A
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            storeToken(localStorage);
            new PublicEventsService();
            const tab_1_token = lastBearer();

            // Tab 2 shares the storage and remembers guest B
            const tab_2 = new PublicEventsService();
            await tab_2.requestGuestAccess(
                'system-1',
                { name: 'Guest B', email: 'b@example.com' },
                true,
            );

            expect(tokenIn(localStorage)?.token).toBe('new-token');
            expect(await tab_1_token()).toBe('guest-token');
        });

        it('should load the events again for the next guest', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            const service = TestBed.inject(PublicEventsService);
            await service.loadEvents('system-1');

            service.forgetGuest();
            service.guest.set(guest);
            await service.loadEvents('system-1');

            expect(public_events.query).toHaveBeenCalledTimes(2);
        });

        it('should keep the loaded events until a refresh or another source', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            storeToken();
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');
            service.error.set('Registration failed');
            await service.loadEvents('system-1');
            expect(public_events.query).toHaveBeenCalledTimes(1);
            expect(service.error()).toBe('');

            await service.loadEvents('system-1', true);
            await service.loadEvents('system-2');
            expect(public_events.query).toHaveBeenCalledTimes(3);
        });

        it('should show an error when there is no token and no guest', async () => {
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(service.error()).toBe('Guest details are required.');
            expect(public_events.query).not.toHaveBeenCalled();
        });

        it('should show a list failure as the error and clear loading', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(public_events.query).mockRejectedValue(
                new Error('Server unavailable'),
            );
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(service.error()).toBe('Server unavailable');
            expect(service.loading()).toBe('');
        });
    });

    describe('register', () => {
        it('should refresh remembered guest access before registering when the token is missing', async () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            const service = TestBed.inject(PublicEventsService);

            await service.register('system-1', 'event-1');

            expect(public_events.guestToken).toHaveBeenCalledWith(
                {
                    system_id: 'system-1',
                    body: {
                        ...guest,
                        captcha: '',
                    },
                },
                ANONYMOUS,
            );
            expect(tokenIn(localStorage)?.token).toBe('new-token');
            expect(public_events.register).toHaveBeenCalledWith({
                system_id: 'system-1',
                body: {
                    event_id: 'event-1',
                    ...guest,
                },
            });
            expect(service.loading()).toBe('');
        });

        it('should not register when the guest access refresh fails', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(public_events.guestToken).mockRejectedValue(
                new Error('Denied'),
            );
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.register('system-1', 'event-1'),
            ).rejects.toThrow('Denied');
            expect(public_events.register).not.toHaveBeenCalled();
            expect(service.error()).toBe('Denied');
            expect(service.loading()).toBe('');
        });

        it('should reject without a request when there are no guest details', async () => {
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.register('system-1', 'event-1'),
            ).rejects.toThrow('Guest details are required.');
            expect(public_events.register).not.toHaveBeenCalled();
        });

        it('should show a registration failure as the error and rethrow it', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(public_events.register).mockRejectedValue(
                new Error('Event is full'),
            );
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.register('system-1', 'event-1'),
            ).rejects.toThrow('Event is full');
            expect(service.error()).toBe('Event is full');
            expect(service.loading()).toBe('');
        });
    });
});
