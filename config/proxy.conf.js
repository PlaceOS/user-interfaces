/**
 * Defaults target the shared dev deployment. Override via env to point a dev
 * server at another backend — e.g. the local PlaceOS stack, which the e2e suite
 * requires:
 *
 *   PLACE_PROXY_DOMAIN=localhost:8443 PLACE_PROXY_VALID_SSL=false nx serve workplace
 *
 * (`PLACE_PROXY_VALID_SSL=false` is needed for the local stack's self-signed cert.)
 */
/** FQDN to proxy requests. i.e. No protocol and path should be in the value */
const domain = process.env.PLACE_PROXY_DOMAIN || 'placeos-dev.aca.im';
/** Whether the proxied endpoints use SSL */
const secure = process.env.PLACE_PROXY_SECURE !== 'false';
/** Whether the SSL certificate used is valid on the internet */
const valid_ssl = process.env.PLACE_PROXY_VALID_SSL !== 'false';

const PROXY_CONFIG = {};

const context = [
    '/control',
    '/auth',
    '/api',
    '/styles',
    '/scripts',
    '/login',
    '/backoffice',
    '/r',
];
const ws_context = ['/control/websocket', '/api'];

function add(endpoint, extras = {}) {
    PROXY_CONFIG[`${endpoint}/**`] = {
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
        ...extras,
    };
}

context.forEach((e) => add(e));
ws_context.forEach((e) => add(e, { ws: true }));

module.exports = PROXY_CONFIG;
