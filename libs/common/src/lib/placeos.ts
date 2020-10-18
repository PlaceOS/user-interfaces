import { PlaceAuthOptions, setup } from '@placeos/ts-client';

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
}

/**
 * Initialise the PlaceOS API library
 */
export async function setupPlace(settings: PlaceSettings): Promise<void> {
    const protocol = settings.protocol || location.protocol;
    const host = settings.domain || location.hostname;
    const port = settings.port || location.port;
    const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
    const route = host.includes('localhost') && port === '4200' ? '' : settings.route || '';
    const mock =
        settings.mock ||
        location.href.includes('mock=true') ||
        localStorage.getItem('mock') === 'true';
    // Generate configuration object
    const config: PlaceAuthOptions = {
        auth_type: 'auth_code',
        scope: 'public',
        host: `${host}${port ? ':' + port : ''}`,
        auth_uri: `${url}/auth/oauth/authorize`,
        token_uri: `${url}/auth/oauth/token`,
        redirect_uri: `${location.origin}${route}/oauth-resp.html`,
        handle_login: !settings.local_login,
        use_iframe: true,
        mock,
    };
    console.log('Config:', config);
    if (localStorage) {
        localStorage.setItem('mock', `${!!mock && !location.href.includes('mock=false')}`);
    }
    return setup(config);
}
