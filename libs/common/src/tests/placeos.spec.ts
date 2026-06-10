jest.mock('@placeos/ts-client', () => ({
    setup: jest.fn(() => Promise.resolve()),
}));

jest.mock('../lib/native-app', () => ({
    getNativeRedirectUri: jest.fn(() =>
        Promise.resolve('com.placeos.workplace://example.com/oauth-resp'),
    ),
    isNativeApp: jest.fn(() => false),
}));

import { setup } from '@placeos/ts-client';
import { isNativeApp } from '../lib/native-app';
import { PlaceSettings, setupPlace } from '../lib/placeos';

const base_settings: PlaceSettings = {
    protocol: 'https:',
    domain: 'example.com',
    port: 443,
    route: '/placeos',
    use_domain: true,
    local_login: false,
    mock: false,
};
const native_fetch_key = '__placeos_native_credential_fetch__';
const real_fetch = window.fetch;
const window_store = window as Window &
    typeof globalThis &
    Record<string, unknown>;

describe('setupPlace', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
        delete window_store[native_fetch_key];
        window.fetch = real_fetch;
    });

    afterEach(() => {
        delete window_store[native_fetch_key];
        window.fetch = real_fetch;
    });

    it('passes configured storage through for browser apps', async () => {
        (isNativeApp as jest.Mock).mockReturnValue(false);

        await setupPlace({ ...base_settings, storage: 'session' });

        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({ storage: 'session' }),
        );
    });

    it('always uses local storage for native apps', async () => {
        (isNativeApp as jest.Mock).mockReturnValue(true);

        await setupPlace({
            ...base_settings,
            app_name: 'workplace',
            storage: 'session',
        });

        expect(setup).toHaveBeenCalledWith(
            expect.objectContaining({ storage: 'local' }),
        );
    });

    it('includes credentials for native auth endpoint requests', async () => {
        const fetch = jest.fn(() => Promise.resolve({} as Response));
        window.fetch = fetch as unknown as typeof window.fetch;
        (isNativeApp as jest.Mock).mockReturnValue(true);

        await setupPlace({
            ...base_settings,
            app_name: 'workplace',
        });
        await window.fetch('https://example.com/auth/oauth/token', {
            method: 'POST',
        });
        await window.fetch('https://other.example.com/auth/oauth/token', {
            method: 'POST',
        });

        expect(fetch).toHaveBeenNthCalledWith(
            1,
            'https://example.com/auth/oauth/token',
            { method: 'POST', credentials: 'include' },
        );
        expect(fetch).toHaveBeenNthCalledWith(
            2,
            'https://other.example.com/auth/oauth/token',
            { method: 'POST' },
        );
    });
});
