import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';

import {
    initSentry,
    LazySentryErrorHandler,
    scrubSecrets,
} from '../lib/sentry';

vi.mock('@sentry/angular', () => ({
    init: vi.fn(),
    browserTracingIntegration: vi.fn(),
    createErrorHandler: vi.fn(() => ({ handleError: vi.fn() })),
    TraceService: vi.fn(),
}));

describe('scrubSecrets', () => {
    it('should remove credentials from nested URLs', () => {
        const event = {
            request: { url: 'https://a.b.com/kiosk/#/?x-api-key=abc&lang=en' },
            breadcrumbs: [{ data: { to: '/#/home?zone=1&bearer_token=xyz' } }],
        };

        scrubSecrets(event);

        expect(event.request.url).toBe(
            'https://a.b.com/kiosk/#/?x-api-key=[Filtered]&lang=en',
        );
        expect(event.breadcrumbs[0].data.to).toBe(
            '/#/home?zone=1&bearer_token=[Filtered]',
        );
    });

    it('should leave SDK state alone', () => {
        const event = {
            request: { url: '/#/?x-api-key=abc' },
            // Sentry keeps live objects here, some with getters only
            sdkProcessingMetadata: {
                get url() {
                    return '/#/?x-api-key=abc';
                },
            },
        };

        expect(() => scrubSecrets(event)).not.toThrow();
        expect(event.request.url).toBe('/#/?x-api-key=[Filtered]');
    });
});

describe('LazySentryErrorHandler', () => {
    afterEach(() => vi.restoreAllMocks());

    it('should log errors before Sentry has loaded', () => {
        const log = vi
            .spyOn(ErrorHandler.prototype, 'handleError')
            .mockImplementation(() => undefined);
        const error = new Error('Failed');

        new LazySentryErrorHandler().handleError(error);

        expect(log).toHaveBeenCalledWith(error);
    });
});

// Last, as Sentry stays started for the rest of the file
describe('initSentry', () => {
    it('should start once with the default sample rate', async () => {
        const router = {} as Router;

        await Promise.all([
            initSentry('https://key@sentry.io/1', router, null),
            initSentry('https://key@sentry.io/1', router, null),
        ]);

        expect(Sentry.init).toHaveBeenCalledTimes(1);
        expect(Sentry.init).toHaveBeenCalledWith(
            expect.objectContaining({ tracesSampleRate: 0.1 }),
        );
    });
});
