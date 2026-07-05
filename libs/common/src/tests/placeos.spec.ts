import * as ts_client from '@placeos/ts-client';

import { PlaceSettings, setupPlace } from '../lib/placeos';

// Only the external ts-client API layer is stubbed; native detection is driven
// through the real `window.Capacitor` seam that `native-app` reads from.
vi.mock('@placeos/ts-client', { spy: true });

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

function setNative(is_native: boolean) {
    if (is_native) {
        (window as any).Capacitor = { isNativePlatform: () => true };
    } else {
        delete (window as any).Capacitor;
    }
}

describe('setupPlace', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.setup).mockResolvedValue(undefined as any);
        localStorage.clear();
        delete window_store[native_fetch_key];
        window.fetch = real_fetch;
        setNative(false);
    });

    afterEach(() => {
        delete window_store[native_fetch_key];
        window.fetch = real_fetch;
        setNative(false);
    });

    it('passes configured storage through for browser apps', async () => {
        setNative(false);

        await setupPlace({ ...base_settings, storage: 'session' });

        expect(ts_client.setup).toHaveBeenCalledWith(
            expect.objectContaining({ storage: 'session' }),
        );
    });

    it('always uses local storage for native apps', async () => {
        setNative(true);

        await setupPlace({
            ...base_settings,
            app_name: 'workplace',
            storage: 'session',
        });

        expect(ts_client.setup).toHaveBeenCalledWith(
            expect.objectContaining({ storage: 'local' }),
        );
    });

    it('includes credentials for native auth endpoint requests', async () => {
        const fetch = vi.fn(() => Promise.resolve({} as Response));
        window.fetch = fetch as unknown as typeof window.fetch;
        setNative(true);

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
