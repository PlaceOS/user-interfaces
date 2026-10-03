/**
 * Seeding the CONCIERGE origin.
 *
 * ## The one thing concierge needs that workplace already has
 *
 * ts-client derives `client_id = Md5(redirect_uri)` at runtime, and
 * `redirect_uri` is built from the app's own origin. So an OAuth application is
 * per-ORIGIN, not per-deployment: the row the workplace suite seeds is for
 * `http://localhost:4214/oauth-resp.html` and is useless to a page on 4215.
 *
 * Measured before this file existed — minting an admin token for the concierge
 * origin against a stack seeded only for workplace:
 *
 *   HTTP 401  authorize did not return a code for support@place.tech
 *
 * That is the whole of the blocker. No missing feature, no permissions problem:
 * the authorize endpoint simply had no application whose `uid` matched the hash
 * of the concierge redirect URI. Registering one is enough.
 *
 * ## Why this is not a change to `e2e/support/seed.ts`
 *
 * The shared seed is what the desk, visitor, room, parking and home specs all
 * depend on to boot, and it is the dev's file. Adding concierge's needs to it
 * would mean every one of those suites now fails to seed if anything concierge
 * wants is unavailable. This file is owned by the concierge specs, is called
 * from the concierge fixtures, and is idempotent — so the shared seed keeps
 * exactly the blast radius it had.
 */
import { APIRequestContext, request as pwRequest } from '@playwright/test';
import { BACKEND_URL, roleFor } from '../env';
import { ENGINE_API } from '../api';
import { clientId, mintToken, redirectUriFor } from '../auth';
import { CONCIERGE_URL, assertConciergeLocal } from './concierge.env';

/**
 * The app `init` always creates. The bootstrap problem is the same one the
 * shared seed has: registering an OAuth application needs a token, and minting
 * a token needs a registered application — so come in through `backoffice`.
 */
const BOOTSTRAP_APP_URL = `${BACKEND_URL}/backoffice`;

/** Does this error body mean "the row is already there"? */
function alreadyExists(body: string): boolean {
    return /already (exists|taken)|has already been taken|must be unique|should be unique|duplicate/i.test(
        body,
    );
}

async function bootstrapApi(): Promise<APIRequestContext> {
    const admin = roleFor('admin');
    const mint = await mintToken(
        BACKEND_URL,
        BOOTSTRAP_APP_URL,
        admin.email,
        admin.password,
    );
    return pwRequest.newContext({
        baseURL: BACKEND_URL,
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: { Authorization: `Bearer ${mint.accessToken}` },
    });
}

/**
 * Register the OAuth application for the concierge dev-server origin, if it is
 * not there already. Returns what it found or made, for the log line.
 *
 * Idempotent twice over: it checks first, and it also treats a uniqueness
 * rejection as success — because the check reads from Elasticsearch, which lags
 * Postgres by a second or two, so two workers racing here is normal and not an
 * error.
 */
export async function ensureConciergeOAuthApp(): Promise<{
    uid: string;
    redirect_uri: string;
    created: boolean;
}> {
    assertConciergeLocal();
    const redirect_uri = redirectUriFor(CONCIERGE_URL);
    const uid = clientId(redirect_uri);
    const api = await bootstrapApi();
    try {
        const listed = await api.get(`${ENGINE_API}/oauth_apps`, {
            params: { limit: '500' },
        });
        if (listed.ok()) {
            const body = await listed.json();
            const list = Array.isArray(body) ? body : (body.results ?? []);
            if (list.some((a: { uid?: string }) => a.uid === uid)) {
                return { uid, redirect_uri, created: false };
            }
        }

        const domains = await api.get(`${ENGINE_API}/domains`);
        const domain_body = await domains.json();
        const domain_list = Array.isArray(domain_body)
            ? domain_body
            : (domain_body.results ?? []);
        if (!domain_list.length) {
            throw new Error(
                `no authority visible via ${ENGINE_API}/domains, so an OAuth app ` +
                    `cannot be given an owner. The row is created by \`init start\` but ` +
                    `served from Elasticsearch — check search-ingest is running.`,
            );
        }

        const res = await api.post(`${ENGINE_API}/oauth_apps`, {
            data: {
                name: 'concierge (e2e dev server)',
                redirect_uri,
                scopes: 'public',
                owner_id: domain_list[0].id,
                confidential: false,
            },
        });
        if (!res.ok()) {
            const body = await res.text();
            if (alreadyExists(body)) return { uid, redirect_uri, created: false };
            throw new Error(
                `create oauth_app for the concierge origin failed: HTTP ${res.status()} ${body}`,
            );
        }
        return { uid, redirect_uri, created: true };
    } finally {
        await api.dispose();
    }
}
