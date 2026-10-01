/**
 * Microsoft single sign-on for the Outlook add-in with nested app
 * authentication (NAA). See apps/outlook-addin/README.md.
 *
 * The manifest generator adds `?ms_client_id=<guid>` to the task pane URL.
 * With this value, and when Outlook supports NAA, MSAL asks Outlook for a
 * Microsoft Entra token for the PlaceOS API. ts-client exchanges this token
 * for PlaceOS tokens. Without it, the add-in uses the PlaceOS sign-in dialog.
 *
 * Usage, after `Office.onReady()` and `setupPlace()`:
 * ```ts
 * const entra_token = await acquireNaaToken(naaClientId());
 * if (entra_token) await exchangeEntraToken(entra_token);
 * ```
 */

/** Query parameter on the task pane URL with the Entra client ID */
export const NAA_CLIENT_PARAM = 'ms_client_id';

const GUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Entra client ID from the task pane URL, or '' when the URL has none. */
export function naaClientId(search = location.search): string {
    const client_id = new URLSearchParams(search).get(NAA_CLIENT_PARAM) || '';
    return GUID.test(client_id) ? client_id : '';
}

/**
 * Scope of the PlaceOS API. It is the same scope as the Teams app, so both
 * can use one Entra app registration. See docs/teams-app.md.
 */
export function placeApiScope(client_id: string, host = location.host) {
    return `api://${host}/${client_id}/access_as_user`;
}

/**
 * Get an Entra token for the PlaceOS API through Outlook. Shows a Microsoft
 * prompt only when consent or sign in is necessary. Resolves to '' when
 * there is no client ID or the Outlook client does not support NAA.
 */
export async function acquireNaaToken(client_id: string): Promise<string> {
    if (!client_id) return '';
    if (!Office.context.requirements.isSetSupported('NestedAppAuth', '1.1')) {
        return '';
    }
    // Load MSAL only when it is used.
    const msal = await import('@azure/msal-browser');
    const app = await msal.createNestablePublicClientApplication({
        auth: { clientId: client_id, authority: await authority() },
        cache: { cacheLocation: 'localStorage' },
    });
    const request = { scopes: [placeApiScope(client_id)] };
    try {
        return (await app.acquireTokenSilent(request)).accessToken;
    } catch (error) {
        if (!(error instanceof msal.InteractionRequiredAuthError)) throw error;
    }
    return (await app.acquireTokenPopup(request)).accessToken;
}

/**
 * Authority for the tenant of the Outlook account. A single-tenant app
 * registration does not accept the `common` authority.
 */
async function authority() {
    let tenant_id = '';
    try {
        tenant_id = (await Office.auth.getAuthContext()).tenantId;
    } catch {
        // Some clients do not have getAuthContext.
    }
    return `https://login.microsoftonline.com/${tenant_id || 'organizations'}`;
}
