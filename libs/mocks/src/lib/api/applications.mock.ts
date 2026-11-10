import { registerMockEndpoint } from '../session';

/** OAuth applications that the App Loader lists as launchable apps */
const MOCK_APPLICATIONS = [
    ['workplace', 'Workplace'],
    ['concierge', 'Concierge'],
    ['signage-manager', 'Signage Manager'],
    ['control', 'Control'],
    ['stagehand', 'Stagehand'],
].map(([path, name]) => ({
    id: `oauth-app-${path}`,
    name,
    uid: `mock-${path}`,
    owner_id: 'mock-authority',
    scopes: 'public',
    redirect_uri: `${location.origin}/${path}/oauth-resp.html`,
    confidential: false,
    skip_authorization: true,
    subsystems: [],
    preserve_client_id: false,
}));

export function registerMockApplications() {
    registerMockEndpoint({
        path: '/api/engine/v2/oauth_apps',
        method: 'GET',
        callback: () => MOCK_APPLICATIONS,
    });
}
