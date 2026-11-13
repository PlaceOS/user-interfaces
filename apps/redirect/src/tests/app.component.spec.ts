import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    failInitialisation,
    initialisationComplete,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import {
    authority,
    clientId,
    registerMockEndpoint,
    setAPI_Key,
    setup,
} from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app/app.component';

// Workspace modules run for real under the zoneless unit-test builder — only
// the external `@placeos/ts-client` package can be intercepted. `setupPlace()`
// runs for real and ultimately calls `setup(config)`, so we stub `setup` (and
// assert the resolved `mock` flag on the config it receives) instead of spying
// the workspace `setupPlace`. The current user is seeded via `setCurrentUser`.
vi.mock('@placeos/ts-client', { spy: true });

type Authority = NonNullable<ReturnType<typeof authority>>;

const settings_get = vi.fn();
const settings_mock = {
    initialised: new BehaviorSubject<boolean>(true),
    get: settings_get,
};

// The component reads `location.search`, so set the query string on the URL.
function setQuery(params: Record<string, string>): void {
    const query = new URLSearchParams(params).toString();
    history.replaceState(null, '', query ? `/?${query}` : '/');
}

// Give the component an authority with the given redirect configuration.
function setAuthorityConfig(config: Authority['config']): void {
    vi.mocked(authority).mockReturnValue({ config } as Authority);
}

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let log_spy: ReturnType<typeof vi.spyOn>;

    // The component logs `console.log('Redirect:', url)` immediately before
    // assigning `location.href`, so this reflects the computed redirect target.
    function redirectUrl(): string | undefined {
        const call = log_spy.mock.calls.find((c) => c[0] === 'Redirect:');
        return call?.[1] as string | undefined;
    }

    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        componentProviders: [
            { provide: SettingsService, useValue: settings_mock },
        ],
    });

    // Mock mode lazy loads `@placeos/mocks`. A cold load is slow on a busy
    // machine, so load it once here, outside the test timeout.
    beforeAll(() => import('@placeos/mocks'), 30_000);

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        // Initialisation state is module global, so reset it between tests.
        failInitialisation('');
        log_spy = vi.spyOn(console, 'log').mockImplementation(() => void 0);
        vi.spyOn(console, 'error').mockImplementation(() => void 0);
        setQuery({});
        settings_mock.initialised = new BehaviorSubject<boolean>(true);
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        vi.mocked(setup).mockResolvedValue(undefined);
        vi.mocked(setAPI_Key).mockReturnValue(undefined);
        setAuthorityConfig({});
        setCurrentUser(new StaffUser({ email: 'user@example.com' }));
        spectator = create_component();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    it('should wait for settings before it sets up PlaceOS', async () => {
        settings_mock.initialised = new BehaviorSubject<boolean>(false);
        const init = spectator.component.ngOnInit();
        await Promise.resolve();
        expect(setup).not.toHaveBeenCalled();

        settings_mock.initialised.next(true);
        await init;
        expect(setup).toHaveBeenCalledTimes(1);
        expect(initialisationComplete()()).toBe(true);
    });

    describe('query parameter handling', () => {
        it('should append a "continue" path to the redirect URL', async () => {
            setQuery({ continue: '/bookings' });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://localhost:3000/bookings');
        });

        it.each([
            ['an absolute URL', 'https://evil.example.com'],
            ['a relative path', 'evil.example.com'],
        ])('should ignore a "continue" value that is %s', async (_, value) => {
            setQuery({ continue: value });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://localhost:3000');
        });

        it('should keep the current host for a protocol-relative "continue" value', async () => {
            setQuery({ continue: '//evil.example.com/path' });
            await spectator.component.ngOnInit();
            expect(new URL(redirectUrl() ?? '').host).toBe('localhost:3000');
        });

        it('should set the API key when x-api-key is provided', async () => {
            setQuery({ 'x-api-key': 'secret-key' });
            await spectator.component.ngOnInit();
            expect(setAPI_Key).toHaveBeenCalledWith('secret-key');
        });

        it('should remove the API key from the URL when setup fails', async () => {
            setQuery({ 'x-api-key': 'secret-key' });
            vi.mocked(clientId).mockReturnValue('client-id');
            vi.mocked(setup).mockRejectedValue(new Error('offline'));
            await spectator.component.ngOnInit();
            expect(location.search).not.toContain('x-api-key');
        });
    });

    it('should pass the composer settings to PlaceOS setup', async () => {
        settings_get.mockImplementation((key: string) =>
            key === 'composer'
                ? {
                      domain: 'api.example.com',
                      port: '8443',
                      protocol: 'https:',
                      use_domain: true,
                  }
                : undefined,
        );
        await spectator.component.ngOnInit();
        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({
                host: 'api.example.com:8443',
                auth_uri: 'https://api.example.com:8443/auth/oauth/authorize',
            }),
        );
    });

    it('should set up PlaceOS when there are no composer settings', async () => {
        settings_get.mockReturnValue(undefined);
        await spectator.component.ngOnInit();
        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({ mock: false }),
        );
        expect(initialisationComplete()()).toBe(true);
    });

    describe('mock mode resolution', () => {
        it('should enable mock mode when the mock setting is truthy', async () => {
            settings_get.mockImplementation((key: string) => {
                if (key === 'composer') return {};
                if (key === 'mock') return true;
                return undefined;
            });
            await spectator.component.ngOnInit();
            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: true }),
            );
        });

        // The mocks register their endpoints through ts-client, so the first
        // registration marks when the lazy loaded mocks start.
        it('should register the mocks before it sets up PlaceOS in mock mode', async () => {
            settings_get.mockImplementation((key: string) =>
                key === 'composer' ? {} : key === 'mock',
            );
            await spectator.component.ngOnInit();
            const [first_mock] =
                vi.mocked(registerMockEndpoint).mock.invocationCallOrder;
            const [first_setup] = vi.mocked(setup).mock.invocationCallOrder;
            expect(first_mock).toBeLessThan(first_setup);
        });

        it('should leave mock mode disabled when the setting is falsy and not on the demo domain', async () => {
            await spectator.component.ngOnInit();
            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: false }),
            );
            expect(registerMockEndpoint).not.toHaveBeenCalled();
        });
    });

    describe('domain redirects', () => {
        it('should redirect to the mapped domain for the user email domain', async () => {
            setCurrentUser(new StaffUser({ email: 'alice@acme.com' }));
            setAuthorityConfig({
                redirect_mappings: { 'acme.com': 'acme.place.tech' },
            });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://acme.place.tech');
        });

        it('should fall back to the current host when no domain mapping matches', async () => {
            setCurrentUser(new StaffUser({ email: 'alice@other.com' }));
            setAuthorityConfig({
                redirect_mappings: { 'acme.com': 'acme.place.tech' },
            });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://localhost:3000');
        });

        it('should apply path mappings for the resolved domain', async () => {
            setQuery({ continue: '/old/path' });
            setCurrentUser(new StaffUser({ email: 'alice@acme.com' }));
            setAuthorityConfig({
                redirect_mappings: { 'acme.com': 'acme.place.tech' },
                path_mappings: {
                    'acme.place.tech': { '/old': '/new' },
                    'localhost:3000': { '/path': '/wrong' },
                },
            });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://acme.place.tech/new/path');
        });

        it('should apply every path mapping for the current host when no domain mapping matches', async () => {
            setQuery({ continue: '/a/b' });
            setAuthorityConfig({
                path_mappings: { 'localhost:3000': { '/a': '/x', '/b': '/y' } },
            });
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBe('http://localhost:3000/x/y');
        });
    });

    describe('startup failures', () => {
        it('should show an error and not redirect when there is no authority', async () => {
            vi.mocked(authority).mockReturnValue(undefined);
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBeUndefined();
            expect(initialisationComplete()()).toBe(false);
            expect(spectator.component.initialisation_error()).toContain(
                'could not load its redirect configuration',
            );
        });

        it('should show an error and not redirect when PlaceOS setup fails', async () => {
            vi.mocked(setup).mockRejectedValue(new Error('offline'));
            await spectator.component.ngOnInit();
            expect(redirectUrl()).toBeUndefined();
            expect(initialisationComplete()()).toBe(false);
            expect(spectator.component.initialisation_error()).toContain(
                'could not start',
            );
        });

        it('should show an error when the current user does not load in 30 seconds', async () => {
            vi.useFakeTimers();
            setCurrentUser(null as unknown as StaffUser);
            const init = spectator.component.ngOnInit();
            await vi.advanceTimersByTimeAsync(29_999);
            expect(spectator.component.initialisation_error()).toBe('');

            await vi.advanceTimersByTimeAsync(1);
            expect(spectator.component.initialisation_error()).toContain(
                'could not start',
            );
            await init;
            expect(redirectUrl()).toBeUndefined();
        });
    });

    describe('template', () => {
        it('should show the redirecting message while it starts', () => {
            spectator.detectChanges();
            expect(spectator.query('#redirect-message')).toHaveText(
                'Redirecting',
            );
            expect(spectator.query('button')).toBeNull();
        });

        it('should show the error and clear it when the user retries', () => {
            failInitialisation('Startup failed.');
            spectator.detectChanges();
            expect(spectator.query('#redirect-message p')).toHaveText(
                'Startup failed.',
            );

            spectator.click('button');
            spectator.detectChanges();
            expect(spectator.component.initialisation_error()).toBe('');
            expect(spectator.query('#redirect-message')).toHaveText(
                'Redirecting',
            );
        });
    });
});
