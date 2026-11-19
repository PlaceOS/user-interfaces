import { ConsoleHistoryService } from '../lib/console-history.service';

describe('ConsoleHistoryService', () => {
    const methods = ['log', 'debug', 'info', 'warn', 'error'] as const;
    let originals: Record<string, Console[(typeof methods)[number]]>;
    let service: ConsoleHistoryService;

    beforeEach(() => {
        originals = Object.fromEntries(methods.map((_) => [_, console[_]]));
        for (const method of methods) console[method] = vi.fn();
        service = new ConsoleHistoryService();
    });

    afterEach(() => {
        service.ngOnDestroy();
        for (const method of methods) console[method] = originals[method];
    });

    it('should record console calls', () => {
        console.info('first');
        console.error('second');

        expect(service.history().map((_) => [_.subtype, _.data[0]])).toEqual([
            ['info', 'first'],
            ['error', 'second'],
        ]);
    });

    it('should record a call one time when another wrapper is between two patches', () => {
        const forward = console.info;
        // Another library, such as Sentry, wraps the first patch
        console.info = (...args: unknown[]) => forward(...args);
        const second = new ConsoleHistoryService();

        console.info('once');

        expect(service.history().map((_) => _.data[0])).toEqual(['once']);
        expect(second.history().map((_) => _.data[0])).toEqual(['once']);
        second.ngOnDestroy();
    });

    it('should remove console colour styles from the event data', () => {
        console.debug('%c[APP]%c message', 'color: #E91E63', 'color: default', {
            id: 1,
        });

        expect(service.history()[0]).toMatchObject({
            type: 'console',
            subtype: 'debug',
            data: ['[APP] message', { id: 1 }],
        });
    });
});
