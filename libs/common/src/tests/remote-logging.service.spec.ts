import * as ts_client from '@placeos/ts-client';

import { RemoteLoggingService } from '../lib/remote-logging.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('RemoteLoggingService', () => {
    const methods = ['log', 'debug', 'info', 'warn', 'error'] as const;
    let originals: Record<string, Console[(typeof methods)[number]]>;

    beforeEach(() => {
        originals = Object.fromEntries(methods.map((_) => [_, console[_]]));
        for (const method of methods) console[method] = vi.fn();
    });

    afterEach(() => {
        for (const method of methods) console[method] = originals[method];
        vi.restoreAllMocks();
    });

    it('should remove credentials from the events it sends, not from the app', () => {
        const execute = vi.fn(() => Promise.resolve());
        vi.mocked(ts_client.getModule).mockReturnValue({ execute } as any);
        const service = new RemoteLoggingService();
        (service as any)._logging_system.set('sys-1');
        const details = { url: 'app://oauth-resp?code=secret-code&state=s' };

        console.warn('[AUTH] Opened', details);

        const sent = JSON.stringify(execute.mock.calls[0]);
        expect(sent).toContain('code=[Filtered]');
        expect(sent).not.toContain('secret-code');
        expect(details.url).toBe('app://oauth-resp?code=secret-code&state=s');
    });
});
