import { ErrorHandler } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import * as Sentry from '@sentry/angular';

import {
    DEFAULT_SENTRY_DSN,
    IGNORED_ERRORS,
    initSentry,
    initSentryFromSettings,
    LazySentryErrorHandler,
    plainConsoleBreadcrumb,
    scrubEnvelope,
    TRACE_PROPAGATION_TARGET,
} from '../lib/sentry';
import { DEFAULT_SENTRY_RATES } from '../lib/sentry-rates';
import { settingSignal } from '../lib/settings.service';

vi.mock('@sentry/angular', () => ({
    init: vi.fn(),
    browserTracingIntegration: vi.fn(),
    createErrorHandler: vi.fn(() => ({ handleError: vi.fn() })),
    TraceService: vi.fn(),
    makeFetchTransport: vi.fn(() => ({ send: vi.fn(), flush: vi.fn() })),
    replayIntegration: vi.fn(),
}));

describe('plainConsoleBreadcrumb', () => {
    it('should remove colour styles from console breadcrumbs', () => {
        const args = [
            '%c[Workplace]%c[APP] %c\u001b[31mOffline\u001b[0m',
            'color: #E91E63',
            'color: #3F51B5',
            'color: default',
            { retry: 2 },
        ];

        const breadcrumb = plainConsoleBreadcrumb({
            category: 'console',
            level: 'warning',
            message: args.join(' '),
            data: { arguments: args, logger: 'console' },
        });

        expect(breadcrumb).toEqual({
            category: 'console',
            level: 'warning',
            message: '[Workplace][APP] Offline {"retry":2}',
            data: {
                arguments: ['[Workplace][APP] Offline', { retry: 2 }],
                logger: 'console',
            },
        });
    });

    it('should not change other breadcrumbs', () => {
        const breadcrumb = { category: 'navigation', data: { to: '/%c' } };

        expect(plainConsoleBreadcrumb(breadcrumb)).toBe(breadcrumb);
    });
});

describe('scrubEnvelope', () => {
    it('should scrub recordings and update their length', () => {
        // Replay records the page URL, CSS URLs with escaped quotes, and
        // text that is longer in UTF-8 bytes than in characters
        const recording = JSON.stringify([
            { data: { href: 'https://a.b.com/kiosk/?x-api-key=abc#/' } },
            { data: { style: 'url("/img.png?token=t1")' } },
            { data: { text: 'Café 東京' } },
        ]);
        const envelope = [
            {},
            [
                [{ type: 'replay_event' }, { urls: ['/?jwt=j1'] }],
                [{ type: 'replay_recording', length: 1 }, recording],
            ],
        ] as unknown as Parameters<typeof scrubEnvelope>[0];

        scrubEnvelope(envelope);

        const [[, event], [header, payload]] = envelope[1] as unknown as [
            [unknown, { urls: string[] }],
            [{ length: number }, string],
        ];
        expect(event.urls).toEqual(['/?jwt=[Filtered]']);
        expect(JSON.parse(payload)).toEqual([
            { data: { href: 'https://a.b.com/kiosk/?x-api-key=[Filtered]#/' } },
            { data: { style: 'url("/img.png?token=[Filtered]")' } },
            { data: { text: 'Café 東京' } },
        ]);
        const bytes = new TextEncoder().encode(payload).length;
        expect(bytes).toBeGreaterThan(payload.length);
        expect(header.length).toBe(bytes);
    });
});

describe('TRACE_PROPAGATION_TARGET', () => {
    it('should trace PlaceOS API requests', () => {
        for (const path of [
            '/api/engine/v2/systems',
            '/api/engine/v2/signage/media',
            '/api/engine/v2/signage/media/media-1',
            '/api/engine/v2/signage/playlists/playlist-1/media',
            '/api/engine/v2/uploads-report',
            '/api/staff/v1/events',
        ]) {
            expect(TRACE_PROPAGATION_TARGET.test(path)).toBe(true);
        }
    });

    it('should not trace media that redirects to file storage', () => {
        for (const path of [
            '/api/engine/v2/uploads',
            '/api/engine/v2/uploads/upload-1/url',
            '/api/engine/v2/signage/media/media-1/thumbnail',
            '/api/engine/v2/signage/media/media-1/download',
        ]) {
            expect(TRACE_PROPAGATION_TARGET.test(path)).toBe(false);
        }
    });

    it('should not trace other paths', () => {
        expect(TRACE_PROPAGATION_TARGET.test('/assets/logo.svg')).toBe(false);
    });
});

describe('IGNORED_ERRORS', () => {
    /** Sentry's own filter, with the client options that `initSentry` sets */
    async function filter() {
        const { eventFiltersIntegration } =
            await vi.importActual<typeof Sentry>('@sentry/angular');
        const client = {
            getOptions: () => ({ ignoreErrors: IGNORED_ERRORS }),
        } as unknown as Sentry.BrowserClient;
        return (value: string) =>
            eventFiltersIntegration().processEvent?.(
                // How Sentry reports a promise that rejects with a string
                {
                    exception: {
                        values: [{ type: 'UnhandledRejection', value }],
                    },
                },
                {},
                client,
            ) ?? null;
    }
    const PREFIX = 'Non-Error promise rejection captured with value: ';

    it('should drop the extension library rejections', async () => {
        const process = await filter();
        for (const action of ['getLibItems', 'setLibItem', 'removeLibItem']) {
            expect(process(`${PREFIX}unknown action: ${action}`)).toBeNull();
        }
    });

    it('should drop the extension background rejection', async () => {
        const process = await filter();
        expect(
            process(`${PREFIX}cannot communicate with background`),
        ).toBeNull();
    });

    it('should keep other rejections', async () => {
        const process = await filter();
        for (const value of [
            `${PREFIX}unknown action: getBookings`,
            `${PREFIX}Failed to load authority`,
            `${PREFIX}cannot communicate with background service`,
        ]) {
            expect(process(value)).not.toBeNull();
        }
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
    it('should start with the default DSN and send early errors', async () => {
        vi.spyOn(ErrorHandler.prototype, 'handleError').mockImplementation(
            () => undefined,
        );
        const early_error = new Error('Before Sentry');
        new LazySentryErrorHandler().handleError(early_error);
        settingSignal('sentry_replays_on_error_sample_rate').set(0.5);
        TestBed.runInInjectionContext(() => initSentryFromSettings());
        TestBed.tick();
        // A second start while the first is loading the SDK
        void initSentry('https://key@sentry.io/1', TestBed.inject(Router));

        await vi.waitFor(() =>
            expect(Sentry.createErrorHandler).toHaveBeenCalled(),
        );
        expect(Sentry.init).toHaveBeenCalledTimes(1);
        expect(Sentry.init).toHaveBeenCalledWith(
            expect.objectContaining({
                dsn: DEFAULT_SENTRY_DSN,
                tracesSampleRate: DEFAULT_SENTRY_RATES.traces,
                replaysSessionSampleRate: DEFAULT_SENTRY_RATES.replays_session,
                replaysOnErrorSampleRate: 0.5,
                tracePropagationTargets: [TRACE_PROPAGATION_TARGET],
                ignoreErrors: IGNORED_ERRORS,
                beforeBreadcrumb: plainConsoleBreadcrumb,
            }),
        );
        expect(Sentry.replayIntegration).toHaveBeenCalledWith({
            useCompression: false,
        });
        const handler = vi.mocked(Sentry.createErrorHandler).mock.results[0]
            .value as ErrorHandler;
        expect(handler.handleError).toHaveBeenCalledWith(early_error);
    });
});
