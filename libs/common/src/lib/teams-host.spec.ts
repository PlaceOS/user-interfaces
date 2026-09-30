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
import * as ts_client from '@placeos/ts-client';

import {
    continueTeamsSignIn,
    finishTeamsSignIn,
    startTeamsHost,
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
    beforeEach(() => {
        vi.clearAllMocks();
        sessionStorage.clear();
        vi.mocked(teams.app.initialize).mockResolvedValue(undefined);
        vi.mocked(ts_client.token).mockReturnValue('');
        vi.mocked(ts_client.setToken).mockImplementation(() => undefined);
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

    it('uses the SSO token without a sign-in window', async () => {
        const sso = jwt(2_000_000_000);
        getAuthToken.mockResolvedValue(sso);
        await startTeamsHost('tab');

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(ts_client.setToken).toHaveBeenCalledWith(sso, tokenExpiry(sso));
        expect(authenticate).not.toHaveBeenCalled();
    });

    it('opens the sign-in window when SSO fails, then waits for a click after a blocked window', async () => {
        getAuthToken.mockRejectedValue(new Error('resourceRequiresConsent'));
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
        expect(ts_client.setToken).toHaveBeenCalledWith(
            'place-token',
            undefined,
        );
    });

    it('skips host sign in when the tab already has a token', async () => {
        vi.mocked(ts_client.token).mockReturnValue('stored-token');
        await startTeamsHost('tab');

        expect(await finishTeamsSignIn('tab')).toBe(true);
        expect(getAuthToken).not.toHaveBeenCalled();
    });

    it('sends the PlaceOS token from the sign-in window to the tab', async () => {
        await startTeamsHost('auth');
        expect(sessionStorage.getItem('PLACEOS.teams_auth')).toBe('true');
        vi.mocked(ts_client.token).mockReturnValue('place-token');

        expect(await finishTeamsSignIn('auth')).toBe(false);
        expect(teams.authentication.notifySuccess).toHaveBeenCalledWith(
            'place-token',
        );
        expect(sessionStorage.getItem('PLACEOS.teams_auth')).toBeNull();
    });
});
