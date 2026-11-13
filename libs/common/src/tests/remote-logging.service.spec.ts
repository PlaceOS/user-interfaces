import * as ts_client from '@placeos/ts-client';
import { Subject } from 'rxjs';

import { RemoteLoggingService } from '../lib/remote-logging.service';

vi.mock('@placeos/ts-client', { spy: true });

describe('RemoteLoggingService', () => {
    const methods = ['log', 'debug', 'info', 'warn', 'error'] as const;
    let originals: Record<string, Console[(typeof methods)[number]]>;
    let enabled: Subject<boolean>;
    let execute: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        originals = Object.fromEntries(methods.map((_) => [_, console[_]]));
        for (const method of methods) console[method] = vi.fn();
        enabled = new Subject();
        execute = vi.fn(() => Promise.resolve());
        vi.mocked(ts_client.getModule).mockReturnValue({
            execute,
            variable: () => ({
                bind: () => () => undefined,
                listen: () => enabled,
            }),
        } as any);
    });

    afterEach(() => {
        for (const method of methods) console[method] = originals[method];
        vi.restoreAllMocks();
    });

    /** Service bound to a Logger module that has logging enabled. */
    function enabledService() {
        const service = new RemoteLoggingService();
        service.setSystem('sys-1');
        enabled.next(true);
        return service;
    }

    it('should only send events while the Logger module is enabled', async () => {
        const service = new RemoteLoggingService();
        console.info('before bind');
        service.setSystem('sys-1');
        console.info('while disabled');
        enabled.next(true);
        console.info('while enabled');
        // Wait for the send to finish, as events are not handled during it
        await new Promise((resolve) => setTimeout(resolve));
        enabled.next(false);
        console.info('after disable');

        expect(ts_client.getModule).toHaveBeenCalledWith('sys-1', 'Logger');
        expect(execute).toHaveBeenCalledTimes(1);
        expect(JSON.stringify(execute.mock.calls[0])).toContain(
            'while enabled',
        );
        // Events are kept locally whether or not they are sent
        expect(service.history().map((_) => _.data[0])).toEqual([
            'before bind',
            'while disabled',
            'while enabled',
            'after disable',
        ]);
    });

    it('should remove console colour styles from the event data', () => {
        const service = new RemoteLoggingService();

        console.debug('%c[APP]%c message', 'color: #E91E63', 'color: default', {
            id: 1,
        });

        expect(service.history()[0]).toMatchObject({
            type: 'console',
            subtype: 'debug',
            data: ['[APP] message', { id: 1 }],
        });
    });

    it('should remove credentials from the events it sends, not from the app', () => {
        enabledService();
        const details = { url: 'app://oauth-resp?code=secret-code&state=s' };

        console.warn('[AUTH] Opened', details);

        const sent = JSON.stringify(execute.mock.calls[0]);
        expect(sent).toContain('code=[Filtered]');
        expect(sent).not.toContain('secret-code');
        expect(details.url).toBe('app://oauth-resp?code=secret-code&state=s');
    });

    it('should not send events that it cannot serialise', () => {
        enabledService();
        const circular: Record<string, unknown> = {};
        circular['self'] = circular;

        console.error('circular', circular);

        expect(execute).not.toHaveBeenCalled();
    });

    it('should not record its own log lines', () => {
        const service = new RemoteLoggingService();

        console.debug('%c[APP]%c[Logger] %cRemote logging initialised...');
        console.debug('[APP] Other line');

        expect(service.history().map((_) => _.data[0])).toEqual([
            '[APP] Other line',
        ]);
    });
});
