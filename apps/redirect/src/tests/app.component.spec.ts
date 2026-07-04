import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import {
    currentUser,
    firstTruthyValueFrom,
    setupPlace,
    SettingsService,
} from '@placeos/common';
import { authority, setAPI_Key } from '@placeos/ts-client';

import { AppComponent } from '../app/app.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    const settings_get = jest.fn();
    class SettingsService {
        public initialised = true;
        public get = settings_get;
    }
    (SettingsService as any).get_mock = settings_get;
    return {
        ...actual,
        SettingsService,
        firstTruthyValueFrom: jest.fn(() => Promise.resolve(true)),
        setupPlace: jest.fn(() => Promise.resolve()),
        currentUser: jest.fn(() => ({ email: 'user@example.com' })),
        current_user: { subscribe: () => ({ unsubscribe: jest.fn() }) },
    };
});

jest.mock('@placeos/ts-client', () => ({
    ...jest.requireActual('@placeos/ts-client'),
    authority: jest.fn(),
    setAPI_Key: jest.fn(),
}));

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
    let log_spy: jest.SpyInstance;

    const settings_get = (SettingsService as any).get_mock as jest.Mock;
    const route_stub: any = { snapshot: { queryParamMap: query_map({}) } };

    // The component logs `console.log('Redirect:', url)` immediately before
    // assigning `location.href`, so this reflects the computed redirect target.
    function redirect_url(): string | undefined {
        const call = log_spy.mock.calls.find((c) => c[0] === 'Redirect:');
        return call?.[1];
    }

    const create_component = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [{ provide: ActivatedRoute, useValue: route_stub }],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        log_spy = jest.spyOn(console, 'log').mockImplementation(() => void 0);
        route_stub.snapshot.queryParamMap = query_map({});
        settings_get.mockImplementation((key: string) =>
            key === 'composer' ? {} : undefined,
        );
        (firstTruthyValueFrom as jest.Mock).mockResolvedValue(true);
        (setupPlace as jest.Mock).mockResolvedValue(undefined);
        (currentUser as jest.Mock).mockReturnValue({
            email: 'user@example.com',
        });
        (authority as jest.Mock).mockReturnValue(undefined);
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
        (authority as jest.Mock).mockReturnValue({ config: {} });
        await spectator.component.ngOnInit();
        expect(setupPlace).toHaveBeenCalledTimes(1);
        // No mapping: user stays on the current host (jsdom default localhost)
        expect(redirect_url()).toBe('http://localhost');
    });

    describe('query parameter handling', () => {
        it('should append a "continue" path to the redirect URL', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/bookings',
            });
            (authority as jest.Mock).mockReturnValue({ config: {} });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost/bookings');
        });

        it('should ignore a "continue" value that is not a path (open redirect guard)', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: 'https://evil.example.com',
            });
            (authority as jest.Mock).mockReturnValue({ config: {} });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost');
        });

        it('should set the API key when x-api-key is provided', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                'x-api-key': 'secret-key',
            });
            (authority as jest.Mock).mockReturnValue({ config: {} });
            await spectator.component.ngOnInit();
            expect(setAPI_Key).toHaveBeenCalledWith('secret-key');
        });

        it('should not set the API key when x-api-key is absent', async () => {
            (authority as jest.Mock).mockReturnValue({ config: {} });
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
            expect(setupPlace).toHaveBeenCalledWith(
                expect.objectContaining({ foo: 'bar', mock: true }),
            );
        });

        it('should leave mock mode disabled when the setting is falsy and not on the demo domain', async () => {
            await spectator.component.ngOnInit();
            expect(setupPlace).toHaveBeenCalledWith(
                expect.objectContaining({ mock: false }),
            );
        });
    });

    describe('domain redirects', () => {
        it('should not redirect when there is no authority', async () => {
            (authority as jest.Mock).mockReturnValue(undefined);
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBeUndefined();
        });

        it('should redirect to the mapped domain for the user email domain', async () => {
            (currentUser as jest.Mock).mockReturnValue({
                email: 'alice@acme.com',
            });
            (authority as jest.Mock).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech');
        });

        it('should fall back to the current host when no domain mapping matches', async () => {
            (currentUser as jest.Mock).mockReturnValue({
                email: 'alice@other.com',
            });
            (authority as jest.Mock).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://localhost');
        });

        it('should apply path mappings for the resolved domain', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/old/path',
            });
            (currentUser as jest.Mock).mockReturnValue({
                email: 'alice@acme.com',
            });
            (authority as jest.Mock).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                    path_mappings: {
                        'acme.place.tech': { '/old': '/new' },
                    },
                },
            });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech/new/path');
        });

        it('should combine the continue path with the resolved domain', async () => {
            route_stub.snapshot.queryParamMap = query_map({
                continue: '/desks',
            });
            (currentUser as jest.Mock).mockReturnValue({
                email: 'alice@acme.com',
            });
            (authority as jest.Mock).mockReturnValue({
                config: {
                    redirect_mappings: { 'acme.com': 'acme.place.tech' },
                },
            });
            await spectator.component.ngOnInit();
            expect(redirect_url()).toBe('http://acme.place.tech/desks');
        });
    });
});
