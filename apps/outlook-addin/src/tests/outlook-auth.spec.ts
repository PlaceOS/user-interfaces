import * as msal from '@azure/msal-browser';

import {
    acquireNaaToken,
    naaClientId,
    placeApiScope,
} from '../app/outlook-auth';

// Mock MSAL so no request leaves the test. Keep the real error classes.
vi.mock('@azure/msal-browser', { spy: true });

const CLIENT_ID = 'b2d59a3c-5fcf-4307-9e9c-0fd385902ff0';
const SCOPE = placeApiScope(CLIENT_ID);

/** Stub Office.js with NAA support and the given auth context. */
function stubOffice(getAuthContext: () => Promise<{ tenantId: string }>) {
    vi.stubGlobal('Office', {
        context: { requirements: { isSetSupported: () => true } },
        auth: { getAuthContext },
    });
}

/** Stub the MSAL client with the given silent and popup token results. */
function stubMsal(
    silent: () => Promise<string>,
    popup = () => Promise.resolve('popup-token'),
) {
    const app = {
        acquireTokenSilent: vi.fn(async () => ({
            accessToken: await silent(),
        })),
        acquireTokenPopup: vi.fn(async () => ({ accessToken: await popup() })),
    };
    vi.mocked(msal.createNestablePublicClientApplication).mockResolvedValue(
        app as unknown as msal.IPublicClientApplication,
    );
    return app;
}

describe('outlook-auth', () => {
    beforeEach(() => vi.clearAllMocks());
    afterEach(() => vi.unstubAllGlobals());

    it('reads the client ID from the task pane URL', () => {
        expect(naaClientId(`?ms_client_id=${CLIENT_ID}`)).toBe(CLIENT_ID);
        expect(naaClientId('?ms_client_id=not-a-guid')).toBe('');
        expect(naaClientId('')).toBe('');
    });

    it('uses the same API scope as the Teams app', () => {
        expect(placeApiScope(CLIENT_ID, 'example.placeos.com')).toBe(
            `api://example.placeos.com/${CLIENT_ID}/access_as_user`,
        );
    });

    it('does not use NAA when Outlook does not support it', async () => {
        const isSetSupported = vi.fn().mockReturnValue(false);
        vi.stubGlobal('Office', {
            context: { requirements: { isSetSupported } },
        });
        await expect(acquireNaaToken(CLIENT_ID)).resolves.toBe('');
        expect(isSetSupported).toHaveBeenCalledWith('NestedAppAuth', '1.1');
        expect(msal.createNestablePublicClientApplication).not.toBeCalled();
    });

    it('does not use NAA without a client ID', async () => {
        await expect(acquireNaaToken('')).resolves.toBe('');
    });

    it('gets the token silently from the tenant of the Outlook account', async () => {
        stubOffice(async () => ({ tenantId: 'tenant-1' }));
        const app = stubMsal(async () => 'silent-token');

        await expect(acquireNaaToken(CLIENT_ID)).resolves.toBe('silent-token');

        expect(msal.createNestablePublicClientApplication).toHaveBeenCalledWith(
            expect.objectContaining({
                auth: {
                    clientId: CLIENT_ID,
                    authority: 'https://login.microsoftonline.com/tenant-1',
                },
            }),
        );
        expect(app.acquireTokenSilent).toHaveBeenCalledWith({
            scopes: [SCOPE],
        });
        expect(app.acquireTokenPopup).not.toBeCalled();
    });

    it('shows the Microsoft prompt only when interaction is required', async () => {
        stubOffice(() => Promise.reject(new Error('Not supported')));
        stubMsal(() =>
            Promise.reject(
                new msal.InteractionRequiredAuthError(
                    'consent_required',
                    'Consent required',
                ),
            ),
        );

        await expect(acquireNaaToken(CLIENT_ID)).resolves.toBe('popup-token');

        expect(msal.createNestablePublicClientApplication).toHaveBeenCalledWith(
            expect.objectContaining({
                auth: expect.objectContaining({
                    authority:
                        'https://login.microsoftonline.com/organizations',
                }),
            }),
        );
    });

    it('fails without a prompt when the silent request has another error', async () => {
        stubOffice(async () => ({ tenantId: 'tenant-1' }));
        const app = stubMsal(() => Promise.reject(new Error('Network error')));

        await expect(acquireNaaToken(CLIENT_ID)).rejects.toThrow(
            'Network error',
        );
        expect(app.acquireTokenPopup).not.toBeCalled();
    });
});
