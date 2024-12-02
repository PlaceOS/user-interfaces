/** FQDN to proxy requests. i.e. No protocol and path should be in the value */
const domain = 'placeos-dev.aca.im';
/** Whether the proxied endpoints use SSL */
const secure = true;
/** Whether the SSL certificate used is valid on the internet */
const valid_ssl = true;

const NEW_PROXY_CONFIG = {};

const context = [
    '/control',
    '/auth',
    '/api',
    '/styles',
    '/scripts',
    '/login',
    '/backoffice',
];
const ws_context = ['/control/websocket', '/api'];

function add(endpoint, extras = {}) {
    NEW_PROXY_CONFIG[`${endpoint}/**`] = {
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
        ...extras,
    };
}

context.forEach((e) => add(e));
ws_context.forEach((e) => add(e, { ws: true }));

module.exports = NEW_PROXY_CONFIG;
