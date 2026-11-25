import { SwUpdate } from '@angular/service-worker';
import * as msal from '@azure/msal-browser';
import {
    createComponentFactory,
    mockProvider,
    Spectator,
} from '@ngneat/spectator/vitest';
import {
    clientId,
    initialisationComplete,
    initialisationFailure,
    LocaleService,
    OrganisationService,
    PlaceOS_Service,
    setCurrentUser,
    SettingsService,
    setToken,
    StaffUser,
    token,
} from '@placeos/common';
import { startFakePlaceClient } from '@placeos/common/tests';
import { createAuthSession } from '@placeos/ts-client';
import { of } from 'rxjs';

import { AppComponent } from '../app/app.component';

// A fake login session keeps the tokens in memory. The tests read them with
// `token()`.
vi.mock('@placeos/ts-client', { spy: true });
// Mock MSAL so that no request leaves the test.
vi.mock('@azure/msal-browser', { spy: true });

const CLIENT_ID = 'b2d59a3c-5fcf-4307-9e9c-0fd385902ff0';

/** Stub the MSAL client so that a silent request gets `get_token()`. */
function stubMsal(get_token: () => Promise<string>) {
    const app = {
        acquireTokenSilent: async () => ({ accessToken: await get_token() }),
    };
    vi.mocked(msal.createNestablePublicClientApplication).mockResolvedValue(
        app as unknown as msal.IPublicClientApplication,
    );
}

/** Message or close event that the Office dialog sends to the task pane */
type DialogEvent = { message?: string; origin?: string; error?: number };

/** Stub the Office dialog API. `opens` is false when the dialog is blocked. */
function stubDialog(opens = true, naa_supported = true) {
    const handlers: Record<string, (event: DialogEvent) => void> = {};
    const dialog = {
        close: vi.fn(),
        addEventHandler: (type: string, handler: (e: DialogEvent) => void) =>
            (handlers[type] = handler),
    };
    const displayDialogAsync = vi.fn(
        (
            _url: string,
            _options: object,
            cb: (result: { status: string; value: typeof dialog }) => void,
        ) => cb({ status: opens ? 'succeeded' : 'failed', value: dialog }),
    );
    vi.stubGlobal('Office', {
        onReady: async () => ({ host: 'Outlook' }),
        HostType: { Outlook: 'Outlook' },
        AsyncResultStatus: { Succeeded: 'succeeded', Failed: 'failed' },
        EventType: {
            DialogMessageReceived: 'dialogMessageReceived',
            DialogEventReceived: 'dialogEventReceived',
        },
        context: {
            ui: { displayDialogAsync },
            requirements: { isSetSupported: () => naa_supported },
        },
        auth: { getAuthContext: async () => ({ tenantId: 'tenant-1' }) },
    });
    return {
        dialog,
        displayDialogAsync,
        send: (event: DialogEvent) => handlers['dialogMessageReceived'](event),
        close: () => handlers['dialogEventReceived']({ error: 12006 }),
    };
}

describe('AppComponent sign in', () => {
    let spectator: Spectator<AppComponent>;

    const createComponent = createComponentFactory({
        component: AppComponent,
        detectChanges: false,
        providers: [
            mockProvider(SettingsService),
            mockProvider(OrganisationService),
            mockProvider(SwUpdate),
            mockProvider(LocaleService),
            mockProvider(PlaceOS_Service),
        ],
    });

    /** Open the PlaceOS sign-in dialog from the task pane */
    const signIn = () => spectator.component['_signInWithDialog']();
    /** Get the Entra token through Outlook, with an Entra client ID */
    const naaToken = () => {
        spectator.component['_naa_client_id'] = CLIENT_ID;
        return spectator.component['_naaToken']();
    };

    beforeEach(() => {
        vi.clearAllMocks();
        startFakePlaceClient();
        // Only the calls of the test count
        vi.mocked(createAuthSession).mockClear();
        // Startup is not under test. Zoneless change detection would run it.
        vi.spyOn(AppComponent.prototype, 'ngOnInit').mockResolvedValue();
        spectator = createComponent();
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.unstubAllGlobals();
    });

    it('gets the Entra token of the Outlook account for single sign-on', async () => {
        const office = stubDialog();
        stubMsal(async () => 'entra-token');

        await expect(naaToken()).resolves.toBe('entra-token');

        expect(office.displayDialogAsync).not.toBeCalled();
    });

    it.each([
        ['Outlook does not support NAA', () => stubDialog(true, false)],
        [
            'NAA fails',
            () => {
                stubMsal(() => Promise.reject(new Error('Network error')));
                return stubDialog();
            },
        ],
    ])('gives no Entra token when %s', async (_, setup) => {
        setup();

        // Then the login has no token, and the task pane opens the dialog
        await expect(naaToken()).resolves.toBeNull();
    });

    /** The login grant of each session that `setupPlace` made */
    const grants = () =>
        vi.mocked(createAuthSession).mock.calls.map(([config]) => config.grant);

    it('asks the login for single sign-on only when it is in Outlook', async () => {
        spectator.component['_naa_client_id'] = CLIENT_ID;

        await spectator.component['_initialiseAuth'](true, true);
        await spectator.component['_initialiseAuth'](false);

        expect(grants()).toEqual([
            { kind: 'entra', entraToken: expect.any(Function) },
            { kind: 'code' },
        ]);
    });

    it('keeps the tokens over a reload only in the task pane, in its own storage', async () => {
        const trusted = `${clientId()}_trusted`;

        await spectator.component['_initialiseAuth'](true, true);
        expect(sessionStorage.getItem(trusted)).toBe('true');
        expect(localStorage.getItem(trusted)).toBeNull();

        // A browser outside Outlook does not get the trust of the task pane
        sessionStorage.removeItem(trusted);
        await spectator.component['_initialiseAuth'](false);
        expect(sessionStorage.getItem(trusted)).toBeNull();
        expect(localStorage.getItem(trusted)).toBeNull();
    });

    it('does not ask for single sign-on without an Entra client ID', async () => {
        spectator.component['_naa_client_id'] = '';

        await spectator.component['_initialiseAuth'](true, true);

        expect(grants()).toEqual([{ kind: 'code' }]);
    });

    it('signs out when the current user cannot load', () => {
        setToken('place-token');
        setCurrentUser(new StaffUser({ is_logged_in: true }));
        spectator.component['onInitError']();
        expect(token()).toBe('place-token');

        setCurrentUser(new StaffUser());
        spectator.component['onInitError']();

        expect(token()).toBe('');
        expect(initialisationFailure()()).toContain(
            'could not load the current user',
        );
    });

    it('takes the PlaceOS token only from the add-in origin', async () => {
        const office = stubDialog();
        let signed_in: boolean | null = null;
        const result = signIn().then((ok) => (signed_in = ok));

        office.send({ message: 'evil-token', origin: 'https://evil.example' });
        await Promise.resolve();
        expect(signed_in).toBeNull();
        expect(office.dialog.close).not.toBeCalled();

        office.send({ message: 'place-token', origin: location.origin });
        await result;

        expect(signed_in).toBe(true);
        expect(office.displayDialogAsync).toHaveBeenCalledWith(
            `${location.origin}${location.pathname}#ms-auth=true`,
            expect.anything(),
            expect.any(Function),
        );
        expect(token()).toBe('place-token');
        expect(office.dialog.close).toHaveBeenCalledOnce();
    });

    it('takes the token from a client that does not report the origin', async () => {
        const office = stubDialog();
        const result = signIn();

        office.send({ message: 'place-token' });

        await expect(result).resolves.toBe(true);
        expect(token()).toBe('place-token');
    });

    it.each([
        [
            'the dialog cannot open',
            () => stubDialog(false),
            'Allow pop-ups for Outlook',
        ],
        [
            'the user closes the dialog',
            () => {
                const office = stubDialog();
                queueMicrotask(office.close);
            },
            'closed before sign in finished',
        ],
        [
            'the dialog returns no token',
            () => {
                const office = stubDialog();
                queueMicrotask(() => office.send({ message: '' }));
            },
            'did not return a token',
        ],
    ])('fails sign in when %s', async (_, setup, message) => {
        setup();

        await expect(signIn()).resolves.toBe(false);

        expect(token()).toBe('');
        expect(initialisationFailure()()).toContain(message);
    });

    it('fails sign in when the dialog does not finish in 2 minutes', async () => {
        vi.useFakeTimers();
        const office = stubDialog();
        const result = signIn();

        await vi.advanceTimersByTimeAsync(2 * 60 * 1000);

        await expect(result).resolves.toBe(false);
        expect(office.dialog.close).toHaveBeenCalledOnce();
        expect(initialisationFailure()()).toContain('did not finish');
    });
});

describe('AppComponent startup in Outlook', () => {
    /** The status of the token endpoint for the Entra exchange */
    let exchange_status = 200;
    const { replaceState, pushState } = window.history;

    const createComponent = createComponentFactory({
        component: AppComponent,
        providers: [
            mockProvider(SettingsService, {
                initialised: of(true),
                get: (key: string) =>
                    key === 'composer'
                        ? {
                              protocol: 'https:',
                              domain: 'example.com',
                              port: 443,
                              use_domain: true,
                          }
                        : undefined,
            }),
            mockProvider(OrganisationService),
            mockProvider(SwUpdate),
            mockProvider(LocaleService),
            mockProvider(PlaceOS_Service),
        ],
    });

    /** Runs the startup of the task pane. Resolves when it ends. */
    function start() {
        const init = vi.spyOn(AppComponent.prototype, 'ngOnInit');
        createComponent();
        return init.mock.results[0].value as Promise<void>;
    }

    beforeEach(() => {
        // The real ngOnInit and login session, not the stubs of other tests
        vi.restoreAllMocks();
        vi.mocked(createAuthSession).mockReset();
        // The task pane keeps its tokens in the session storage
        localStorage.clear();
        sessionStorage.clear();
        window.history.replaceState(null, '', `/?ms_client_id=${CLIENT_ID}`);
        setCurrentUser(new StaffUser({ id: 'user-1', email: 'a@b.c' }));
        stubMsal(async () => 'entra-token');
        exchange_status = 200;
        vi.stubGlobal(
            'fetch',
            vi.fn(async (input: RequestInfo | URL) => {
                const url = String(input);
                if (url.endsWith('/auth/authority')) {
                    return Response.json({
                        id: 'authority-1',
                        name: 'example.com',
                        domain: 'example.com',
                        login_url: '/login?continue={{url}}',
                        logout_url: '/logout',
                        session: false,
                        config: {},
                    });
                }
                if (url.endsWith('/auth/oauth/token')) {
                    return exchange_status === 200
                        ? Response.json({ access_token: 'place-token' })
                        : Response.json(
                              { error: 'invalid_grant' },
                              { status: 400 },
                          );
                }
                return new Response(null, { status: 404 });
            }),
        );
    });

    afterEach(() => {
        // Startup replaces these with functions that do nothing
        window.history.replaceState = replaceState;
        window.history.pushState = pushState;
        window.history.replaceState(null, '', '/');
        vi.unstubAllGlobals();
    });

    it('signs in with single sign-on and does not open the dialog', async () => {
        const office = stubDialog();

        await start();

        expect(office.displayDialogAsync).not.toBeCalled();
        expect(token()).toBe('place-token');
        expect(initialisationComplete()()).toBe(true);
    });

    it('opens the dialog and uses its token when the exchange is rejected', async () => {
        exchange_status = 400;
        const office = stubDialog();

        const started = start();
        await vi.waitFor(() => expect(office.displayDialogAsync).toBeCalled());
        office.send({ message: 'dialog-token', origin: location.origin });
        await started;

        expect(token()).toBe('dialog-token');
        expect(initialisationComplete()()).toBe(true);
    });
});
