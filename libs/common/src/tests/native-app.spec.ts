import {
    applyNativeManagedConfig,
    consumeNativeAuthRedirect,
    getIntuneAccount,
    getNativeApiKey,
    getNativeAppId,
    getNativeDomain,
    getNativeRedirectUri,
    getNativeSystemId,
    isNativeAuthRedirect,
    loadNativeManagedConfig,
    lookupNativeDomainByEmail,
    markNativeAuthRedirectConsumed,
    NativeManagedConfig,
    normaliseNativeDomain,
    restoreNativePkceVerifier,
} from '../lib/native-app';

describe('native app bridge', () => {
    const native_window = window as typeof window & {
        Capacitor?: {
            isNativePlatform: () => boolean;
            Plugins: Record<string, Record<string, (...args: any[]) => any>>;
        };
    };

    /** Install a fake Capacitor bridge with the given plugin methods. */
    function setNativePlugins(
        plugins: Record<string, Record<string, (...args: any[]) => any>>,
    ) {
        native_window.Capacitor = {
            isNativePlatform: () => true,
            Plugins: plugins,
        };
    }

    afterEach(() => {
        delete native_window.Capacitor;
        localStorage.clear();
        sessionStorage.clear();
        vi.useRealTimers();
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it('stops waiting when a native plugin call does not settle', async () => {
        vi.useFakeTimers();
        setNativePlugins({
            IntuneMAM: {
                enrolledAccount: () => new Promise(() => undefined),
            },
        });

        const result = getIntuneAccount();
        await vi.advanceTimersByTimeAsync(10_000);

        await expect(result).resolves.toBeNull();
    });

    describe('normaliseNativeDomain', () => {
        it('should reduce an address to host and port', () => {
            expect(normaliseNativeDomain(' org.place.tech ')).toBe(
                'org.place.tech',
            );
            expect(
                normaliseNativeDomain('https://org.place.tech/workplace/#/'),
            ).toBe('org.place.tech');
            expect(normaliseNativeDomain('http://localhost:8443/')).toBe(
                'localhost:8443',
            );
        });

        it('should refuse empty addresses and other protocols', () => {
            expect(normaliseNativeDomain('')).toBe('');
            expect(normaliseNativeDomain('ftp://org.place.tech')).toBe('');
            expect(normaliseNativeDomain('https://')).toBe('');
        });
    });

    describe('auth redirect URLs', () => {
        it('should map app names to app IDs and remember the last one', async () => {
            expect(await getNativeAppId(' Booking Panel ')).toBe(
                'com.placeos.booking.panel',
            );
            expect(await getNativeAppId()).toBe('com.placeos.booking.panel');
        });

        it('should reject an unknown app with no remembered app ID', async () => {
            await expect(getNativeAppId('other')).rejects.toThrow(
                'Unsupported native app: other.',
            );
        });

        it('should build the redirect URI with and without a domain', async () => {
            expect(await getNativeRedirectUri('workplace')).toBe(
                'com.placeos.workplace://oauth-resp',
            );
            expect(
                await getNativeRedirectUri('workplace', 'org.place.tech'),
            ).toBe('com.placeos.workplace://org.place.tech/oauth-resp');
        });

        it('should only accept redirects for this app to the oauth-resp path', async () => {
            await getNativeAppId('workplace');

            for (const url of [
                'com.placeos.workplace://oauth-resp?code=1',
                'com.placeos.workplace://org.place.tech/oauth-resp?code=1',
            ]) {
                expect(await isNativeAuthRedirect(url)).toBe(true);
            }
            for (const url of [
                'com.placeos.control://oauth-resp?code=1',
                'com.placeos.workplace://oauth-resp/other',
                'com.placeos.workplace://org.place.tech/other',
            ]) {
                expect(await isNativeAuthRedirect(url)).toBe(false);
            }
        });
    });

    describe('consumeNativeAuthRedirect', () => {
        const redirect = 'com.placeos.workplace://oauth-resp?code=1';

        beforeEach(() => getNativeAppId('workplace'));

        it('should return the launch URL when it is an auth redirect', async () => {
            setNativePlugins({
                App: { getLaunchUrl: async () => ({ url: redirect }) },
            });

            expect(await consumeNativeAuthRedirect()).toBe(redirect);
        });

        it('should use the stored redirect when there is no launch URL', async () => {
            setNativePlugins({ App: { getLaunchUrl: async () => ({}) } });
            localStorage.setItem('PlaceOS.native.last_auth_url', redirect);

            expect(await consumeNativeAuthRedirect()).toBe(redirect);
        });

        it('should not return a redirect that was already consumed', async () => {
            setNativePlugins({
                App: { getLaunchUrl: async () => ({ url: redirect }) },
            });
            vi.spyOn(console, 'warn').mockImplementation(() => undefined);

            markNativeAuthRedirectConsumed(redirect);

            expect(await consumeNativeAuthRedirect()).toBeNull();
        });

        it('should ignore launch URLs that are not auth redirects', async () => {
            setNativePlugins({
                App: {
                    getLaunchUrl: async () => ({
                        url: 'com.placeos.workplace://book/desks',
                    }),
                },
            });

            expect(await consumeNativeAuthRedirect()).toBeNull();
        });
    });

    describe('restoreNativePkceVerifier', () => {
        const backup = 'PlaceOS.native.pkce';

        it('should restore the verifier after session storage is lost', () => {
            localStorage.setItem(
                backup,
                JSON.stringify({ key: 'pkce', verifier: 'abc' }),
            );

            restoreNativePkceVerifier();

            expect(sessionStorage.getItem('pkce')).toBe('abc');
        });

        it('should keep a verifier that session storage already has', () => {
            sessionStorage.setItem('pkce', 'current');
            localStorage.setItem(
                backup,
                JSON.stringify({ key: 'pkce', verifier: 'old' }),
            );

            restoreNativePkceVerifier();

            expect(sessionStorage.getItem('pkce')).toBe('current');
        });

        it('should remove a backup that cannot be parsed', () => {
            localStorage.setItem(backup, '{not json');

            restoreNativePkceVerifier();

            expect(localStorage.getItem(backup)).toBeNull();
        });
    });

    describe('managed configuration', () => {
        /** Bridge that returns the given values from the MDM plugin. */
        function setManagedValues(values: Record<string, unknown>) {
            const read = async ({ key }: { key: string }) => ({
                value: values[key],
            });
            setNativePlugins({
                ManagedConfigurations: {
                    getString: read,
                    getNumber: read,
                    getBoolean: read,
                },
            });
        }

        it('should return null outside the native shell', async () => {
            expect(await loadNativeManagedConfig()).toBeNull();
        });

        it('should return null when no server settings are pushed', async () => {
            setManagedValues({ restartTime: 3 });

            expect(await loadNativeManagedConfig()).toBeNull();
        });

        it('should normalise the pushed values and apply defaults', async () => {
            setManagedValues({
                domainName: 'https://org.place.tech/',
                apiKey: ' key-1 ',
                restartTime: 30,
            });

            expect(await loadNativeManagedConfig()).toEqual({
                domain: 'org.place.tech',
                api_key: 'key-1',
                system_id: '',
                restart_enabled: true,
                restart_time: 23,
                skip_interactive_setup: false,
            });
        });

        it('should only report a change when the server settings change', () => {
            const config: NativeManagedConfig = {
                domain: 'org.place.tech',
                api_key: 'key-1',
                system_id: 'sys-1',
                restart_enabled: true,
                restart_time: 0,
                skip_interactive_setup: false,
            };

            expect(applyNativeManagedConfig(config)).toBe(true);
            expect(getNativeDomain()).toBe('org.place.tech');
            expect(getNativeApiKey()).toBe('key-1');
            expect(getNativeSystemId()).toBe('sys-1');

            expect(
                applyNativeManagedConfig({ ...config, restart_time: 4 }),
            ).toBe(false);
            expect(applyNativeManagedConfig({ ...config, system_id: '' })).toBe(
                true,
            );
            expect(getNativeSystemId()).toBe('');
        });
    });

    describe('lookupNativeDomainByEmail', () => {
        function respondWith(ok: boolean, body: string) {
            const fetch = vi.fn(
                async () => new Response(body, { status: ok ? 200 : 404 }),
            );
            vi.stubGlobal('fetch', fetch);
            return fetch;
        }

        it('should read the domain from a JSON string or plain text', async () => {
            const fetch = respondWith(true, '"org.place.tech"');

            expect(await lookupNativeDomainByEmail('a+b@org.com')).toBe(
                'org.place.tech',
            );
            expect(fetch).toHaveBeenCalledWith(
                'https://au.placeos.run/api/engine/v2/domains/lookup/a%2Bb%40org.com',
                expect.anything(),
            );

            respondWith(true, ' org.place.tech\n');
            expect(await lookupNativeDomainByEmail('a@org.com')).toBe(
                'org.place.tech',
            );
        });

        it('should reject failed and empty lookups', async () => {
            respondWith(false, '');
            await expect(
                lookupNativeDomainByEmail('a@org.com'),
            ).rejects.toThrow('Unable to lookup domain.');

            respondWith(true, '""');
            await expect(
                lookupNativeDomainByEmail('a@org.com'),
            ).rejects.toThrow('No domain found for this email.');
        });
    });
});
