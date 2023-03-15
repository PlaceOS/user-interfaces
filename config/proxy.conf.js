/** FQDN to proxy requests. i.e. No protocol and path should be in the value */
const domain = 'placeos-dev.aca.im';
/** Whether the proxied endpoints use SSL */
const secure = true;
/** Whether the SSL certificate used is valid on the internet */
const valid_ssl = false;

const PROXY_CONFIG = [
    {
        context: [
            '/control',
            '/auth',
            '/api',
            '/styles',
            '/scripts',
            '/login',
            '/backoffice',
        ],
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
    },
    {
        context: ['/control/websocket', '/api'],
        target: `ws${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
        ws: true,
    },
];

module.exports = PROXY_CONFIG;
