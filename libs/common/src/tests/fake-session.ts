import {
    createAuthSession,
    DomainAuthority,
    type AuthSession,
    type AuthStatus,
    type Credential,
    type DomainAuthorityInput,
} from '@placeos/ts-client';

import { startPlaceClient } from '../lib/place-client';
import { mockData } from './mock-data';

/**
 * A login session that a test controls, for code that reads the PlaceOS
 * client state, such as `token()`, `authority()` or `isOnline()`.
 *
 * The Angular unit-test system cannot mock a file of the bundle, so a spec
 * mocks `@placeos/ts-client`, and this gives the real `startPlaceClient` a
 * session that the test changes:
 *
 * ```ts
 * vi.mock('@placeos/ts-client', { spy: true });
 * const session = startFakePlaceClient();
 * session.signIn({ id: 'auth-1' }, 'token-1');
 * ```
 */
export interface FakeSession {
    readonly session: AuthSession;
    /** Loads the authority and uses the credential. The client is online. */
    signIn(authority?: DomainAuthorityInput, token?: string | null): void;
    /** Removes the authority and the credential. The client is offline. */
    signOut(): void;
    /** Changes the authority without a status change */
    setAuthority(authority: DomainAuthorityInput | null): void;
    /** Changes the credential without a status change */
    setCredential(credential: Credential | null): void;
}

/**
 * Starts the PlaceOS client, not in mock mode, with a fake login session.
 * Call `vi.mock('@placeos/ts-client', { spy: true })` in the spec first.
 */
export function startFakePlaceClient(): FakeSession {
    let authority: DomainAuthority | null = null;
    let credential: Credential | null = null;
    let status: AuthStatus = { kind: 'loading' };
    const listeners = new Set<(status: AuthStatus) => void>();
    const setStatus = (next: AuthStatus) => {
        status = next;
        for (const listener of [...listeners]) listener(next);
    };
    const signedIn = (): AuthStatus =>
        credential?.kind === 'api_key'
            ? { kind: 'signed_in', credential: 'api_key' }
            : { kind: 'signed_in', credential: 'bearer' };
    const ok = () =>
        Promise.resolve(
            credential
                ? { ok: true as const, value: credential }
                : {
                      ok: false as const,
                      error: { kind: 'login_required' as const },
                  },
        );
    const session: AuthSession = {
        client_id: 'fake-client',
        client_auth: {
            kind: 'credential',
            credential: async () => credential,
            rejected: async () => false,
        },
        start: vi.fn(ok),
        stop: vi.fn(),
        authorize: vi.fn(ok),
        credential: () => credential,
        status: () => status,
        subscribe(listener) {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        authority: () => authority,
        reloadAuthority: vi.fn(async () =>
            authority
                ? { ok: true as const, value: authority }
                : {
                      ok: false as const,
                      error: {
                          kind: 'authority_unavailable' as const,
                          reason: 'offline',
                      },
                  },
        ),
        handleRedirect: vi.fn(ok),
        useToken: vi.fn((token: string) => {
            credential = { kind: 'bearer', token };
            setStatus(signedIn());
        }),
        useRefreshToken: vi.fn(),
        useApiKey: vi.fn((key: string) => {
            credential = { kind: 'api_key', key };
            setStatus(signedIn());
        }),
        invalidateToken: vi.fn(() => {
            if (credential?.kind === 'bearer') credential = null;
        }),
        logout: vi.fn(async () => undefined),
        isTrusted: () => false,
        isFixedDevice: () => credential?.kind === 'api_key',
    };
    vi.mocked(createAuthSession).mockReturnValue(session);
    startPlaceClient({
        base_url: '',
        mock: false,
        headers: {},
        auth: {
            redirect_uri: 'http://localhost/oauth-resp.html',
            scope: 'public',
            grant: { kind: 'code' },
        },
    });
    const setAuthority = (value: DomainAuthorityInput | null) => {
        authority = value ? mockData(DomainAuthority, value) : null;
    };
    return {
        session,
        signIn(value = { id: 'authority-1' }, token = 'token-1') {
            setAuthority(value);
            credential = token ? { kind: 'bearer', token } : null;
            setStatus(signedIn());
        },
        signOut() {
            authority = null;
            credential = null;
            setStatus({ kind: 'signed_out', error: null });
        },
        setAuthority,
        setCredential(value) {
            credential = value;
        },
    };
}
