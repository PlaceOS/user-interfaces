vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

import { answerTokenRequests, requestTokenFromOpener } from './token-handoff';

/** Unsigned JWT with the given `exp` claim in seconds */
function jwt(exp: number) {
    const payload = btoa(JSON.stringify({ exp })).replace(/=+$/, '');
    return `header.${payload}.signature`;
}

/**
 * A real window to stand in for another tab, so it can be a message source.
 * With `opened`, the window reports this window as its opener.
 */
function otherWindow(opened = true): Window {
    const frame = document.createElement('iframe');
    document.body.appendChild(frame);
    const other = frame.contentWindow as Window;
    if (opened) Object.defineProperty(other, 'opener', { value: window });
    return other;
}

function message(source: Window, origin: string, data: unknown) {
    window.dispatchEvent(new MessageEvent('message', { source, origin, data }));
}

const flush = () => new Promise((resolve) => setTimeout(resolve, 0));

describe('answerTokenRequests', () => {
    const studio_origin = 'http://localhost:4201';
    let stop: () => void;

    beforeEach(() => vi.clearAllMocks());

    afterEach(() => {
        stop?.();
        vi.restoreAllMocks();
        document.body.innerHTML = '';
    });

    it('answers a token request from a window it opened', async () => {
        const token = jwt(Math.floor(Date.now() / 1000) + 3600);
        vi.mocked(ts_client.authorise).mockResolvedValue(token);
        const studio = otherWindow();
        const post = vi
            .spyOn(studio, 'postMessage')
            .mockImplementation(() => undefined);
        stop = answerTokenRequests(() => studio_origin);
        message(studio, studio_origin, { type: 'placeos:token-request' });
        await flush();
        expect(post).toHaveBeenCalledWith(
            {
                type: 'placeos:token',
                token,
                expires_at: expect.any(Number),
            },
            studio_origin,
        );
    });

    it('ignores windows it did not open and other origins', async () => {
        vi.mocked(ts_client.authorise).mockResolvedValue(
            jwt(Math.floor(Date.now() / 1000) + 3600),
        );
        const studio = otherWindow();
        const stranger = otherWindow(false);
        const post = vi
            .spyOn(studio, 'postMessage')
            .mockImplementation(() => undefined);
        stop = answerTokenRequests(() => studio_origin);
        message(stranger, studio_origin, { type: 'placeos:token-request' });
        message(studio, 'http://evil.test', { type: 'placeos:token-request' });
        await flush();
        expect(post).not.toHaveBeenCalled();
        expect(ts_client.authorise).not.toHaveBeenCalled();
    });

    it('refreshes a token inside the expiry margin before handing it over', async () => {
        const stale = jwt(Math.floor(Date.now() / 1000) + 60);
        const fresh = jwt(Math.floor(Date.now() / 1000) + 7200);
        vi.mocked(ts_client.authorise)
            .mockResolvedValueOnce(stale)
            .mockResolvedValueOnce(fresh);
        vi.mocked(ts_client.invalidateToken).mockImplementation(
            () => undefined,
        );
        const studio = otherWindow();
        const post = vi
            .spyOn(studio, 'postMessage')
            .mockImplementation(() => undefined);
        stop = answerTokenRequests(() => studio_origin);
        message(studio, studio_origin, { type: 'placeos:token-request' });
        await flush();
        expect(ts_client.invalidateToken).toHaveBeenCalledTimes(1);
        expect(post).toHaveBeenCalledWith(
            expect.objectContaining({ token: fresh }),
            studio_origin,
        );
    });
});

describe('requestTokenFromOpener', () => {
    afterEach(() => {
        vi.restoreAllMocks();
        Object.defineProperty(window, 'opener', {
            value: null,
            configurable: true,
        });
        document.body.innerHTML = '';
    });

    function openedBy(opener: Window | null) {
        Object.defineProperty(window, 'opener', {
            value: opener,
            configurable: true,
        });
    }

    it('resolves the token the opener sends back', async () => {
        const opener = otherWindow();
        const post = vi
            .spyOn(opener, 'postMessage')
            .mockImplementation(() => undefined);
        openedBy(opener);
        const request = requestTokenFromOpener(1000);
        expect(post).toHaveBeenCalledWith(
            { type: 'placeos:token-request' },
            '*',
        );
        message(opener, `http://${location.hostname}:4200`, {
            type: 'placeos:token',
            token: 'abc',
            expires_at: 123,
        });
        await expect(request).resolves.toEqual({
            token: 'abc',
            expires_at: 123,
        });
    });

    it('ignores replies from another host or another window', async () => {
        vi.useFakeTimers();
        const opener = otherWindow();
        vi.spyOn(opener, 'postMessage').mockImplementation(() => undefined);
        openedBy(opener);
        const request = requestTokenFromOpener(1000);
        message(opener, 'http://evil.test', {
            type: 'placeos:token',
            token: 'abc',
        });
        message(otherWindow(), `http://${location.hostname}`, {
            type: 'placeos:token',
            token: 'abc',
        });
        vi.advanceTimersByTime(1000);
        await expect(request).resolves.toBeNull();
        vi.useRealTimers();
    });

    it('resolves null when nothing opened this window', async () => {
        openedBy(null);
        await expect(requestTokenFromOpener(10)).resolves.toBeNull();
    });
});
