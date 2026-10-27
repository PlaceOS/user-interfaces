import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';

import {
    initSentry,
    initSentryFromSettings,
    LazySentryErrorHandler,
    scrubSecrets,
} from '../lib/sentry';
import { settingSignal } from '../lib/settings.service';

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
            breadcrumbs: [
                { data: { to: '/#/home?zone=1&bearer_token=xyz' } },
                {
                    data: {
                        to: '/kiosk/?public=true&jwt=j1#/checkin?token=t1',
                    },
                },
            ],
        };

        scrubSecrets(event);

        expect(event.request.url).toBe(
            'https://a.b.com/kiosk/#/?x-api-key=[Filtered]&lang=en',
        );
        expect(event.breadcrumbs[0].data.to).toBe(
            '/#/home?zone=1&bearer_token=[Filtered]',
        );
        expect(event.breadcrumbs[1].data.to).toBe(
            '/kiosk/?public=true&jwt=[Filtered]#/checkin?token=[Filtered]',
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
describe('initSentryFromSettings', () => {
    it('should start once the DSN is set and send early errors', async () => {
        vi.spyOn(ErrorHandler.prototype, 'handleError').mockImplementation(
            () => undefined,
        );
        const early_error = new Error('Before Sentry');
        new LazySentryErrorHandler().handleError(early_error);
        TestBed.runInInjectionContext(() => initSentryFromSettings());
        TestBed.tick();
        expect(Sentry.init).not.toHaveBeenCalled();

        settingSignal('sentry_dsn').set('https://key@sentry.io/1');
        TestBed.tick();
        // A second start while the first is loading the SDK
        void initSentry('https://key@sentry.io/1', TestBed.inject(Router));

        await vi.waitFor(() =>
            expect(Sentry.createErrorHandler).toHaveBeenCalled(),
        );
        expect(Sentry.init).toHaveBeenCalledTimes(1);
        expect(Sentry.init).toHaveBeenCalledWith(
            expect.objectContaining({ tracesSampleRate: 0.1 }),
        );
        const handler = vi.mocked(Sentry.createErrorHandler).mock.results[0]
            .value as ErrorHandler;
        expect(handler.handleError).toHaveBeenCalledWith(early_error);
    });
});
