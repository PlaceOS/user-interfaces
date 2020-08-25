
const domain = 'mck.aca.im';
const secure = true;
const valid_ssl = true;

const PROXY_CONFIG = [
    {
        context: [
            "/control",
            "/auth",
            "/api",
            "/styles",
            "/scripts",
            "/login",
            "/backoffice"
        ],
        target: `http${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true
    },
    {
        context: [
            "/control/websocket",
        ],
        target: `ws${secure ? 's' : ''}://${domain}`,
        secure: valid_ssl,
        changeOrigin: true,
        ws: true
    }
];

module.exports = PROXY_CONFIG;
