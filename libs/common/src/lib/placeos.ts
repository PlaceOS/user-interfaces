import { PlaceAuthOptions, setup } from '@placeos/ts-client';
import { isNativeApp } from './native-app';
import { notifyInfo } from './notifications';

export interface PlaceSettings {
    /** Protocol used by the application server */
    protocol: 'http:' | 'https:';
    /** Domain that the API server lies  */
    domain: string;
    /** Port number of the API server */
    port: number;
    /** Route on domain application rests */
    route: string;
    /** Whether to use the settings domain for auth */
    use_domain: boolean;
    /** Whether login is handled locally by the application */
    local_login: boolean;
    /** Whether application should mock out API requests */
    mock: boolean;

    storage?: 'session' | 'local';
}

/**
 * Initialise the PlaceOS API library
 */
export async function setupPlace(settings: PlaceSettings): Promise<void> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const host_with_port = `${host}${port ? ':' + port : ''}`;
    const url = settings.use_domain
        ? `${protocol}//${host_with_port}`
        : location.origin;
    const route = (location.pathname + '/').replace('//', '/');
    const native = isNativeApp();
    const mock =
        settings.mock ||
        location.href.includes('mock=true') ||
        localStorage.getItem('mock') === 'true';
    // Generate configuration object
    const config: PlaceAuthOptions = {
        auth_type: 'auth_code',
        scope: 'public',
        host: host_with_port,
        secure: native || protocol === 'https:',
        auth_uri: `${url}/auth/oauth/authorize`,
        token_uri: `${url}/auth/oauth/token`,
        redirect_uri: native
            ? `${url}${settings.route || '/'}`
            : `${location.origin}${route}oauth-resp.html`,
        handle_login: !settings.local_login,
        use_iframe: !native,
        mock,
        delay: 300,
    };
    if (localStorage) {
        localStorage.setItem(
            'mock',
            `${!!mock && !location.href.includes('mock=false')}`,
        );
    }
    if (mock) {
        notifyInfo('Application in mock mode.');
    }
    return setup(config);
}
