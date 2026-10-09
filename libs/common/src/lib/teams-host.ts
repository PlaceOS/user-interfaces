import { signal } from '@angular/core';
import { exchangeEntraToken, setToken, token } from '@placeos/ts-client';

import { failInitialisation } from './application';
import { log, withTimeout } from './general';

/**
 * Microsoft Teams and Microsoft 365 (Outlook, Microsoft 365 app) personal tab
 * support. See docs/teams-app.md.
 *
 * The app package opens the tab with `?host=teams`. Only then does the app
 * load `@microsoft/teams-js`, so normal web startup does not load it.
 *
 * The tab runs in a frame that cannot show the Microsoft login page. When the
 * tab has no PlaceOS token it signs in through the host:
 * 1. Silent SSO with `authentication.getAuthToken()`. ts-client exchanges
 *    the Microsoft Entra token for PlaceOS tokens.
 * 2. Else a sign-in window from `authentication.authenticate()`. That window
 *    loads the app with `?host=teams-auth`, runs the normal PlaceOS login and
 *    sends the PlaceOS token back with `authentication.notifySuccess()`.
 *
 * Usage, around `setupPlace` during startup:
 * ```ts
 * const mode = await startTeamsHost();
 * if (mode) settings.local_login = mode === 'tab';
 * await setupPlace(settings);
 * if (mode && !(await finishTeamsSignIn(mode))) return;
 * ```
 */

type TeamsJs = typeof import('@microsoft/teams-js');

/** `tab` is the frame in the host. `auth` is the sign-in window. */
export type TeamsHostMode = 'tab' | 'auth';

/** Query parameter on the tab URL that selects the host mode */
export const TEAMS_HOST_PARAM = 'host';
/** Keeps the sign-in window mode when the login redirect drops the query */
const AUTH_STORE_KEY = 'PLACEOS.teams_auth';
const INIT_TIMEOUT_MS = 5_000;
const SSO_TIMEOUT_MS = 10_000;
/** Sign-in window attempts before startup fails */
const MAX_SIGN_IN_ATTEMPTS = 5;
/** Match ts-client, which expires its own tokens 5 minutes early */
const EXPIRY_MARGIN_MS = 5 * 60 * 1000;

let _teams: TeamsJs | null = null;
let _sign_in_resolve: (() => void) | null = null;
const SIGN_IN_REQUIRED = signal(false);

/** True while the tab waits for the user to select the sign-in button. */
export function teamsSignInRequired() {
    return SIGN_IN_REQUIRED.asReadonly();
}

/**
 * Open the sign-in window from a click. Some hosts block the window when it
 * does not open from a user gesture.
 */
export function continueTeamsSignIn(): void {
    SIGN_IN_REQUIRED.set(false);
    _sign_in_resolve?.();
    _sign_in_resolve = null;
}

/** Host mode from the launch URL, or null for a normal web launch. */
export function teamsHostMode(
    search = location.search,
    storage: Pick<Storage, 'getItem'> = sessionStorage,
): TeamsHostMode | null {
    const host = new URLSearchParams(search).get(TEAMS_HOST_PARAM);
    if (host === 'teams-auth' || storage.getItem(AUTH_STORE_KEY) === 'true') {
        return 'auth';
    }
    return host === 'teams' ? 'tab' : null;
}

/**
 * Load teams-js and connect to the host. Resolves to null for a normal web
 * launch, or when the host does not answer, so startup continues as normal.
 */
export async function startTeamsHost(
    mode = teamsHostMode(),
): Promise<TeamsHostMode | null> {
    if (!mode) return null;
    if (mode === 'auth') sessionStorage.setItem(AUTH_STORE_KEY, 'true');
    try {
        const teams = await import('@microsoft/teams-js');
        await withTimeout(
            teams.app.initialize(),
            INIT_TIMEOUT_MS,
            'Microsoft Teams host did not respond.',
        );
        _teams = teams;
        log('Teams', `Connected to host as ${mode}.`);
        return mode;
    } catch (error) {
        log('Teams', 'Host is not available.', error, 'warn');
        return null;
    }
}

/**
 * Finish sign in after `setupPlace`, so tokens use the computed client ID.
 * Resolves to false when startup must stop: the sign-in window is done or
 * redirecting, or the tab could not sign in.
 */
export async function finishTeamsSignIn(mode: TeamsHostMode): Promise<boolean> {
    if (!_teams) throw new Error('Call startTeamsHost() first.');
    if (mode === 'auth') {
        // No token means ts-client is redirecting to the login page.
        const place_token = token(false);
        if (place_token) {
            sessionStorage.removeItem(AUTH_STORE_KEY);
            _teams.authentication.notifySuccess(place_token);
        }
        return false;
    }
    if (token(false)) return true;
    if (await signInTeamsTab(_teams)) return true;
    failInitialisation('Sign in did not finish. Select Try again to sign in.');
    return false;
}

async function signInTeamsTab(teams: TeamsJs): Promise<boolean> {
    const sso_signed_in = await withTimeout(
        teams.authentication.getAuthToken(),
        SSO_TIMEOUT_MS,
        'Microsoft single sign-on timed out.',
    )
        .then(async (entra_token) => {
            if (!entra_token) return false;
            await exchangeEntraToken(entra_token);
            return true;
        })
        .catch((error) => {
            log('Teams', 'SSO failed.', error, 'warn');
            return false;
        });
    if (sso_signed_in) return true;
    const url = `${location.origin}${location.pathname}?${TEAMS_HOST_PARAM}=teams-auth`;
    for (let attempt = 0; attempt < MAX_SIGN_IN_ATTEMPTS; attempt++) {
        // Try without a click first. Later attempts wait for the button.
        if (attempt > 0) {
            await new Promise<void>((resolve) => {
                _sign_in_resolve = resolve;
                SIGN_IN_REQUIRED.set(true);
            });
        }
        const place_token = await teams.authentication
            .authenticate({ url, width: 600, height: 600 })
            .catch((error) => {
                log('Teams', 'Sign-in window failed.', error, 'warn');
                return '';
            });
        if (place_token) {
            setToken(place_token, tokenExpiry(place_token));
            return true;
        }
    }
    return false;
}

/**
 * Expiry in milliseconds from the `exp` claim of a JWT. Undefined when the
 * token is not a JWT, so ts-client uses its default expiry.
 */
export function tokenExpiry(jwt: string): number | undefined {
    try {
        const payload = jwt.split('.')[1];
        if (!payload) return undefined;
        const claims = JSON.parse(
            atob(payload.replace(/-/g, '+').replace(/_/g, '/')),
        );
        return typeof claims.exp === 'number'
            ? claims.exp * 1000 - EXPIRY_MARGIN_MS
            : undefined;
    } catch {
        return undefined;
    }
}
