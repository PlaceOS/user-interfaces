import {
    acquireNaaToken,
    naaClientId,
    placeApiScope,
} from '../app/outlook-auth';

const CLIENT_ID = 'b2d59a3c-5fcf-4307-9e9c-0fd385902ff0';

describe('outlook-auth', () => {
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
        vi.unstubAllGlobals();
    });

    it('does not use NAA without a client ID', async () => {
        await expect(acquireNaaToken('')).resolves.toBe('');
    });
});
