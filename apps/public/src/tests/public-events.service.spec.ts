import { TestBed } from '@angular/core/testing';
import {
    PlaceAuthority,
    listPublicEvents,
    publicEventGuestToken,
    registerPublicEvent,
    setStorage,
    setToken,
    token,
} from '@placeos/ts-client';
import { PublicEventsService } from '../app/public-events.service';

vi.mock('@placeos/ts-client', () => ({
    listPublicEvents: vi.fn(),
    publicEventGuestToken: vi.fn(),
    registerPublicEvent: vi.fn(),
    setStorage: vi.fn(),
    setToken: vi.fn(),
    token: vi.fn(),
}));

const GUEST_KEY = 'PLACEOS.public.guest';

describe('PublicEventsService', () => {
    const guest = { name: 'Guest User', email: 'guest@example.com' };

    function authority(config: Record<string, unknown>) {
        return { config } as unknown as PlaceAuthority;
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
        vi.mocked(token).mockReturnValue('guest-token');
        vi.mocked(publicEventGuestToken).mockResolvedValue('new-token');
        vi.mocked(listPublicEvents).mockResolvedValue([]);
        vi.mocked(registerPublicEvent).mockResolvedValue({});
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
            expect(setStorage).toHaveBeenCalledWith('session');
        });

        it('should use local token storage when the guest was remembered', () => {
            localStorage.setItem(GUEST_KEY, JSON.stringify(guest));

            const service = TestBed.inject(PublicEventsService);

            expect(service.guest()).toEqual(guest);
            expect(setStorage).toHaveBeenCalledWith('local');
        });
    });

    describe('requestGuestAccess', () => {
        it.each([
            [true, localStorage, sessionStorage, 'local'],
            [false, sessionStorage, localStorage, 'session'],
        ])(
            'should store the guest in one storage only (remember: %s)',
            async (remember, kept, cleared, storage) => {
                cleared.setItem(GUEST_KEY, JSON.stringify(guest));
                const service = TestBed.inject(PublicEventsService);

                await service.requestGuestAccess('system-1', guest, remember);

                expect(JSON.parse(kept.getItem(GUEST_KEY) || 'null')).toEqual(
                    guest,
                );
                expect(cleared.getItem(GUEST_KEY)).toBeNull();
                expect(setStorage).toHaveBeenLastCalledWith(storage);
                expect(service.guest()).toEqual(guest);
            },
        );

        it('should set the guest token to expire after two hours', async () => {
            vi.useFakeTimers({ now: new Date(2026, 4, 12, 9, 0) });
            const service = TestBed.inject(PublicEventsService);

            await service.requestGuestAccess('system-1', guest);

            expect(setToken).toHaveBeenCalledWith(
                'new-token',
                Date.now() + 2 * 60 * 60 * 1000,
            );
        });

        it('should show the error and keep the visitor signed out when no token is returned', async () => {
            vi.mocked(publicEventGuestToken).mockResolvedValue('');
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.requestGuestAccess('system-1', guest, true),
            ).rejects.toThrow('Guest access response was invalid.');

            expect(service.error()).toBe('Guest access response was invalid.');
            expect(service.loading()).toBe('');
            expect(service.guest()).toBeNull();
            expect(setToken).not.toHaveBeenCalled();
            expect(localStorage.getItem(GUEST_KEY)).toBeNull();
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
            expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
                ...guest,
                captcha: 'captcha-token',
            });
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
            expect(publicEventGuestToken).not.toHaveBeenCalled();
        });

        it('should wait for the recaptcha script to load', async () => {
            vi.useFakeTimers();
            const service = TestBed.inject(PublicEventsService);
            service.authority.set(authority({ recaptcha_key: 'site-key' }));

            const request = service.requestGuestAccess('system-1', guest);
            await vi.advanceTimersByTimeAsync(2 * 250);
            expect(publicEventGuestToken).not.toHaveBeenCalled();
            vi.stubGlobal('grecaptcha', {
                ready: (callback: () => void) => callback(),
                execute: vi.fn().mockResolvedValue('captcha-token'),
            });
            await vi.advanceTimersByTimeAsync(250);

            await request;
            expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
                ...guest,
                captcha: 'captcha-token',
            });
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
            expect(publicEventGuestToken).not.toHaveBeenCalled();
        });
    });

    describe('loadEvents', () => {
        it('should refresh guest access and hide system events when the token is missing', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(token).mockReturnValue('');
            vi.mocked(listPublicEvents).mockResolvedValue([
                { id: 'setup', is_system_event: true },
                { id: 'event-1', title: 'Public Event' },
            ]);
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
                ...guest,
                captcha: '',
            });
            expect(setStorage).toHaveBeenLastCalledWith('session');
            expect(service.events()).toEqual([
                { id: 'event-1', title: 'Public Event' },
            ]);
            expect(service.loading()).toBe('');
        });

        it('should use an existing guest token', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(publicEventGuestToken).not.toHaveBeenCalled();
            expect(listPublicEvents).toHaveBeenCalledWith('system-1', {
                limit: 100,
            });
        });

        it('should show an error when there is no token and no guest', async () => {
            vi.mocked(token).mockReturnValue('');
            const service = TestBed.inject(PublicEventsService);

            await service.loadEvents('system-1');

            expect(service.error()).toBe('Guest details are required.');
            expect(listPublicEvents).not.toHaveBeenCalled();
        });

        it('should show a list failure as the error and clear loading', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(listPublicEvents).mockRejectedValue(
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
            vi.mocked(token).mockReturnValue('');
            const service = TestBed.inject(PublicEventsService);

            await service.register('system-1', 'event-1');

            expect(publicEventGuestToken).toHaveBeenCalledWith('system-1', {
                ...guest,
                captcha: '',
            });
            expect(setStorage).toHaveBeenLastCalledWith('local');
            expect(registerPublicEvent).toHaveBeenCalledWith('system-1', {
                event_id: 'event-1',
                ...guest,
            });
            expect(service.loading()).toBe('');
        });

        it('should reject without a request when there are no guest details', async () => {
            const service = TestBed.inject(PublicEventsService);

            await expect(
                service.register('system-1', 'event-1'),
            ).rejects.toThrow('Guest details are required.');
            expect(registerPublicEvent).not.toHaveBeenCalled();
        });

        it('should show a registration failure as the error and rethrow it', async () => {
            sessionStorage.setItem(GUEST_KEY, JSON.stringify(guest));
            vi.mocked(registerPublicEvent).mockRejectedValue(
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
