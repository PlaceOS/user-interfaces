import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setCurrentUser, SettingsService } from '@placeos/common';
import { authority, setAPI_Key, setup } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app/app.component';

// Workspace modules run for real under the zoneless unit-test builder — only
// the external `@placeos/ts-client` package can be intercepted. `setupPlace()`
// runs for real and ultimately calls `setup(config)`, so we stub `setup` (and
// assert the resolved `mock` flag on the config it receives) instead of spying
// the workspace `setupPlace`. The current user is seeded via `setCurrentUser`.
vi.mock('@placeos/ts-client', { spy: true });

const settings_get = vi.fn();
const settings_mock = {
    initialised: new BehaviorSubject<boolean>(true),
    get: settings_get,
};

function query_map(params: Record<string, string>): any {
    return {
        has: (key: string) =>
            Object.prototype.hasOwnProperty.call(params, key),
        get: (key: string) => (key in params ? params[key] : null),
        getAll: (key: string) => (key in params ? [params[key]] : []),
        get keys() {
            return Object.keys(params);
        },
    };
}

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let log_spy: ReturnType<typeof vi.spyOn>;

    const route_stub: any = { snapshot: { queryParamMap: query_map({}) } };

    // The component logs `console.log('Redirect:', url)` immediately before
    // assigning `location.href`, so this reflects the computed redirect target.
    function redirect_url(): string | undefined {
        const call = log_spy.mock.calls.find((c) => c[0] === 'Redirect:');
        return call?.[1] as string | undefined;
    }

    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [{ provide: ActivatedRoute, useValue: route_stub }],
        componentProviders: [
            { provide: SettingsService, useValue: settings_mock },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        log_spy = vi.spyOn(console, 'log').mockImplementation(() => void 0);
        route_stub.snapshot.queryParamMap = query_map({});
        settings_mock.initialised = new BehaviorSubject<boolean>(true);
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        vi.mocked(setup).mockResolvedValue(undefined as any);
        vi.mocked(setAPI_Key).mockReturnValue(undefined as any);
        vi.mocked(authority).mockReturnValue(undefined as any);
        setCurrentUser({ email: 'user@example.com' } as any);
        spectator = create_component();
    });

    afterEach(() => {
        log_spy.mockRestore();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the redirecting message', () => {
        spectator.detectChanges();
        const message = spectator.query('#redirect-message');
        expect(message).toExist();
        expect(message?.textContent).toContain('Redirecting');
    });

    it('should initialise PlaceOS before checking redirects on init', async () => {
        vi.mocked(authority).mockReturnValue({ config: {} } as any);
        await spectator.component.ngOnInit();
        expect(setup).toHaveBeenCalledTimes(1);
        // No mapping: user stays on the current host (jsdom default localhost)
        expect(redirect_url()).toBe('http://localhost:3000');
    });

    describe('query parameter handling', () => {
        it('should append a "continue" path to the redirect URL', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/bookings',
            });
            vi.mocked(authority).mockReturnValue({ config: {} } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost:3000/bookings');
        });

        it('should ignore a "continue" value that is not a path (open redirect guard)', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: 'https://evil.example.com',
            });
            vi.mocked(authority).mockReturnValue({ config: {} } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost:3000');
        });

        it('should set the API key when x-api-key is provided', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                'x-api-key': 'secret-key',
            });
            vi.mocked(authority).mockReturnValue({ config: {} } as any);
            await spectator.component.ngOnInit();
            expect(setAPI_Key).toHaveBeenCalledWith('secret-key');
        });

        it('should not set the API key when x-api-key is absent', async () => {
            vi.mocked(authority).mockReturnValue({ config: {} } as any);
            await spectator.component.ngOnInit();
            expect(setAPI_Key).not.toHaveBeenCalled();
        });
    });

    describe('mock mode resolution', () => {
        it('should enable mock mode when the mock setting is truthy', async () => {
            settings_get.mockImplementation((key: string) => {
                if (key === 'composer') return { foo: 'bar' };
                if (key === 'mock') return true;
                return undefined;
            });
            await spectator.component.ngOnInit();
            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: true }),
            );
        });

        it('should leave mock mode disabled when the setting is falsy and not on the demo domain', async () => {
            await spectator.component.ngOnInit();
            expect(setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: false }),
            );
        });
    });

    describe('domain redirects', () => {
        it('should not redirect when there is no authority', async () => {
            vi.mocked(authority).mockReturnValue(undefined as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBeUndefined();
        });

        it('should redirect to the mapped domain for the user email domain', async () => {
            setCurrentUser({ email: 'alice@acme.com' } as any);
            vi.mocked(authority).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech');
        });

        it('should fall back to the current host when no domain mapping matches', async () => {
            setCurrentUser({ email: 'alice@other.com' } as any);
            vi.mocked(authority).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost:3000');
        });

        it('should apply path mappings for the resolved domain', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/old/path',
            });
            setCurrentUser({ email: 'alice@acme.com' } as any);
            vi.mocked(authority).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                    path_mappings: {
                        'acme.place.tech': { '/old': '/new' },
                    },
                },
            } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech/new/path');
        });

        it('should combine the continue path with the resolved domain', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/desks',
            });
            setCurrentUser({ email: 'alice@acme.com' } as any);
            vi.mocked(authority).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            } as any);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech/desks');
        });
    });
});
