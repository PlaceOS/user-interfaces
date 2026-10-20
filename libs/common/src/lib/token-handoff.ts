import { authorise, invalidateToken, token } from '@placeos/ts-client';
import { tokenExpiry } from './teams-host';

const TOKEN_REQUEST = 'placeos:token-request';
const TOKEN_REPLY = 'placeos:token';

/** A PlaceOS access token passed from one app window to another. */
export interface HandedToken {
    token: string;
    /** Epoch milliseconds; undefined when the token is not a JWT. */
    expires_at?: number;
}

/**
 * Answers token requests from windows that this app opened, such as from a
 * link with `target="_blank"` and `rel="opener"`. Only messages from such a
 * window at `origin()` are answered. `origin` is read for each message, so it
 * can follow a setting that loads later.
 * @returns a function that stops answering
 */
export function answerTokenRequests(origin: () => string): () => void {
    const answer = async (event: MessageEvent) => {
        if (event.data?.type !== TOKEN_REQUEST) return;
        const target = event.source as Window | null;
        // `opener` is readable on windows of other origins
        if (!target || target.opener !== window) return;
        if (event.origin !== origin()) return;
        const current = await freshToken();
        if (!current) return;
        const reply: HandedToken & { type: string } = {
            type: TOKEN_REPLY,
            token: current,
            expires_at: tokenExpiry(current),
        };
        target.postMessage(reply, event.origin);
    };
    window.addEventListener('message', answer);
    return () => window.removeEventListener('message', answer);
}

/**
 * Asks the window that opened this one for its PlaceOS token. Replies are
 * accepted only from the opener on this page's host, any port. Resolves null
 * when there is no opener or no reply within `timeout_ms`; never rejects.
 */
export function requestTokenFromOpener(
    timeout_ms = 3000,
): Promise<HandedToken | null> {
    const opener = window.opener as Window | null;
    if (!opener || opener === window) return Promise.resolve(null);
    return new Promise((resolve) => {
        const finish = (handed: HandedToken | null) => {
            clearTimeout(timer);
            window.removeEventListener('message', reply);
            resolve(handed);
        };
        const reply = (event: MessageEvent) => {
            if (event.source !== opener) return;
            if (!sameHost(event.origin)) return;
            const data = event.data;
            if (data?.type !== TOKEN_REPLY) return;
            if (typeof data.token !== 'string' || !data.token) return;
            finish({
                token: data.token,
                expires_at:
                    typeof data.expires_at === 'number'
                        ? data.expires_at
                        : undefined,
            });
        };
        const timer = setTimeout(() => finish(null), timeout_ms);
        window.addEventListener('message', reply);
        try {
            opener.postMessage({ type: TOKEN_REQUEST }, '*');
        } catch {
            finish(null);
        }
    });
}

/** This app's token, refreshed first when it is inside the expiry margin. */
async function freshToken(): Promise<string> {
    const current = await authorise().catch(() => token());
    const expires_at = current ? tokenExpiry(current) : undefined;
    if (!expires_at || expires_at > Date.now()) return current;
    invalidateToken();
    return authorise().catch(() => '');
}

function sameHost(origin: string): boolean {
    try {
        return new URL(origin).hostname === location.hostname;
    } catch {
        return false;
    }
}
