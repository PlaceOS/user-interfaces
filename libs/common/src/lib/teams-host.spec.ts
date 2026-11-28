vi.mock('@placeos/ts-client', { spy: true });
vi.mock('@microsoft/teams-js', () => ({
    app: { initialize: vi.fn() },
    authentication: {
        getAuthToken: vi.fn(),
        authenticate: vi.fn(),
        notifySuccess: vi.fn(),
    },
}));

import * as teams from '@microsoft/teams-js';
import { createAuthSession } from '@placeos/ts-client';

import { FakeSession, startFakePlaceClient } from '../tests/fake-session';
import { authorise, token } from './place-client';
import { setupPlace, type PlaceSettings } from './placeos';
import {
    continueTeamsSignIn,
    finishTeamsSignIn,
    startTeamsHost,
    teamsEntraToken,
    teamsHostMode,
    teamsSignInRequired,
    tokenExpiry,
} from './teams-host';

// Pick the promise overloads; vi.mocked uses the last (callback) overload.
const getAuthToken = vi.mocked<() => Promise<string>>(
    teams.authentication.getAuthToken,
);
const authenticate = vi.mocked<
    (
        params: teams.authentication.AuthenticatePopUpParameters,
    ) => Promise<string>
>(teams.authentication.authenticate);

/** Unsigned JWT with the given `exp` claim in seconds */
function jwt(exp: number) {
    const payload = btoa(JSON.stringify({ exp })).replace(/=+$/, '');
    return `header.${payload}.signature`;
}

describe('teamsHostMode', () => {
    const no_store = { getItem: () => null };

    it('is null for a normal web launch', () => {
        expect(teamsHostMode('', no_store)).toBeNull();
        expect(teamsHostMode('?host=other', no_store)).toBeNull();
    });

    it('reads the tab and sign-in window flags from the query', () => {
        expect(teamsHostMode('?host=teams', no_store)).toBe('tab');
        expect(teamsHostMode('?mock=true&host=teams-auth', no_store)).toBe(
            'auth',
        );
    });

    it('keeps the sign-in window mode after the login redirect drops the query', () => {
        expect(teamsHostMode('', { getItem: () => 'true' })).toBe('auth');
    });
});

describe('tokenExpiry', () => {
    it('reads exp from a JWT, 5 minutes early', () => {
        expect(tokenExpiry(jwt(2_000_000_000))).toBe(
            2_000_000_000_000 - 5 * 60 * 1000,
        );
    });

    it('is undefined for other tokens', () => {
        expect(tokenExpiry('opaque-token')).toBeUndefined();
        expect(tokenExpiry('a.not-base64!.c')).toBeUndefined();
    });
});

describe('Teams host startup', () => {
    let place: FakeSession;
    beforeEach(() => {
        vi.clearAllMocks();
        sessionStorage.clear();
        vi.mocked(teams.app.initialize).mockResolvedValue(undefined);
        place = startFakePlaceClient();
    });

    afterEach(() => vi.useRealTimers());

    it('does not contact a host for a normal web launch', async () => {
        expect(await startTeamsHost(null)).toBeNull();
        expect(teams.app.initialize).not.toHaveBeenCalled();
    });

    it('continues as a normal web launch when the host does not answer', async () => {
        vi.useFakeTimers();
        vi.mocked(teams.app.initialize).mockReturnValue(new Promise(() => {}));
        const mode = startTeamsHost('tab');
        await vi.advanceTimersByTimeAsync(5_000);
        expect(await mode).toBeNull();
    });

    it('gives the SSO token of the host to the login', async () => {
        getAuthToken.mockResolvedValue('entra-token');
        await startTeamsHost('tab');

        expect(await teamsEntraToken()).toBe('entra-token');
    });

    it('gives no SSO token when SSO fails', async () => {
        getAuthToken.mockRejectedValue(new Error('resourceRequiresConsent'));
        await startTeamsHost('tab');

        expect(await teamsEntraToken()).toBeNull();
    });

    it('opens the sign-in window when the login gave no token', async () => {
        authenticate.mockResolvedValue('place-token');
        await startTeamsHost('tab');

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(place.session.useToken).toHaveBeenCalledWith(
            'place-token',
            undefined,
        );
    });

    it('waits for a click after a blocked sign-in window', async () => {
        authenticate
            .mockRejectedValueOnce(new Error('FailedToOpenWindow'))
            .mockResolvedValueOnce('place-token');
        await startTeamsHost('tab');

        const signed_in = finishTeamsSignIn('tab');
        await vi.waitFor(() => expect(teamsSignInRequired()()).toBe(true));
        expect(authenticate).toHaveBeenCalledTimes(1);
        expect(authenticate.mock.calls[0][0]).toMatchObject({
            url: expect.stringContaining('?host=teams-auth'),
        });

        continueTeamsSignIn();
        expect(await signed_in).toBe(true);
        expect(teamsSignInRequired()()).toBe(false);
        expect(place.session.useToken).toHaveBeenCalledWith(
            'place-token',
            undefined,
        );
    });

    it('skips host sign in when the tab already has a token', async () => {
        place.setCredential({ kind: 'bearer', token: 'stored-token' });
        await startTeamsHost('tab');

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(getAuthToken).not.toHaveBeenCalled();
    });

    it('sends the PlaceOS token from the sign-in window to the tab', async () => {
        await startTeamsHost('auth');
        expect(sessionStorage.getItem('PLACEOS.teams_auth')).toBe('true');
        place.setCredential({ kind: 'bearer', token: 'place-token' });

        expect(await finishTeamsSignIn('auth')).toBe(false);
        expect(teams.authentication.notifySuccess).toHaveBeenCalledWith(
            'place-token',
        );
        expect(sessionStorage.getItem('PLACEOS.teams_auth')).toBeNull();
    });
});

describe('Teams tab startup with a real session', () => {
    const settings: PlaceSettings = {
        protocol: 'https:',
        domain: 'example.com',
        port: 443,
        route: '/',
        use_domain: true,
        // `startTeamsHost` gives local login for a tab
        local_login: true,
        mock: false,
    };
    const real_fetch = window.fetch;
    /** The status of the token endpoint for the Entra exchange */
    let exchange_status = 200;

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        sessionStorage.clear();
        // The real session, not the fake one of the other tests
        vi.mocked(createAuthSession).mockReset();
        vi.mocked(teams.app.initialize).mockResolvedValue(undefined);
        getAuthToken.mockResolvedValue('entra-token');
        authenticate.mockResolvedValue('window-token');
        exchange_status = 200;
        window.fetch = vi.fn(async (input: RequestInfo | URL) => {
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
        });
    });

    afterEach(() => (window.fetch = real_fetch));

    it('signs in with the Entra exchange and does not open the window', async () => {
        await startTeamsHost('tab');
        await setupPlace(settings, 0, { entra_token: teamsEntraToken });

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(authenticate).not.toHaveBeenCalled();
        expect(token()).toBe('place-token');
    });

    it('opens the window without a second SSO when the exchange was rejected', async () => {
        exchange_status = 400;
        await startTeamsHost('tab');
        await setupPlace(settings, 0, { entra_token: teamsEntraToken });

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(getAuthToken).toHaveBeenCalledTimes(1);
        expect(authenticate).toHaveBeenCalledTimes(1);
        expect(token()).toBe('window-token');
    });

    it('waits for the SSO attempt that setup stopped waiting for', async () => {
        let resolveSso: (value: string) => void = () => undefined;
        getAuthToken.mockReturnValue(
            new Promise((resolve) => (resolveSso = resolve)),
        );
        // Setup stops waiting at its time limit, here before the authority
        // loads. The login attempt continues, and its SSO starts after that.
        let releaseAuthority: () => void = () => undefined;
        const authority_loaded = new Promise<void>(
            (resolve) => (releaseAuthority = resolve),
        );
        const serve = window.fetch;
        window.fetch = vi.fn(
            async (input: RequestInfo | URL, init?: RequestInit) => {
                if (String(input).endsWith('/auth/authority')) {
                    await authority_loaded;
                }
                return serve(input, init);
            },
        );
        await startTeamsHost('tab');
        await expect(
            setupPlace(settings, 20, { entra_token: teamsEntraToken }),
        ).rejects.toThrow('timed out');
        releaseAuthority();

        const signed_in = finishTeamsSignIn('tab');
        resolveSso('entra-token');

        expect(await signed_in).toBe(true);
        expect(authenticate).not.toHaveBeenCalled();
        expect(token()).toBe('place-token');
    });

    it('does not use SSO while the sign-in window is open', async () => {
        exchange_status = 400;
        const entra_token = vi.fn(teamsEntraToken);
        await startTeamsHost('tab');
        await setupPlace(settings, 0, { entra_token });
        let resolveWindow: (value: string) => void = () => undefined;
        authenticate.mockReturnValue(
            new Promise((resolve) => (resolveWindow = resolve)),
        );
        let resolveSso: (value: string) => void = () => undefined;
        getAuthToken.mockReturnValue(
            new Promise((resolve) => (resolveSso = resolve)),
        );
        // A late SSO exchange would now give a token
        exchange_status = 200;

        const signed_in = finishTeamsSignIn('tab');
        await vi.waitFor(() => expect(authenticate).toHaveBeenCalledTimes(1));
        // A background request that needs a token
        const background = authorise().catch(() => undefined);
        await vi.waitFor(() => expect(entra_token).toHaveBeenCalledTimes(2));
        resolveWindow('window-token');
        expect(await signed_in).toBe(true);
        resolveSso('entra-token');
        await background;

        await expect(entra_token.mock.results[1].value).resolves.toBeNull();
        expect(getAuthToken).toHaveBeenCalledTimes(1);
        expect(token()).toBe('window-token');
    });
});
