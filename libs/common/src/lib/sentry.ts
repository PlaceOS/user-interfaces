import { effect, ErrorHandler, inject, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { log } from './general';
import type { makeFetchTransport } from './sentry-sdk';
import { settingSignal } from './settings.service';
import { VERSION } from './version';

/** Share of transactions to trace when the app does not set one */
const DEFAULT_TRACES_SAMPLE_RATE = 0.1;
/** Replay records no sessions unless the app sets a sample rate */
const DEFAULT_REPLAYS_SAMPLE_RATE = 0;

/** Set once `initSentry` has started, so Sentry starts only one time */
let _started = false;
/** Sentry's handler, set once `initSentry` has loaded the SDK */
let _sentry_handler: ErrorHandler | null = null;
/** Most errors to keep from before Sentry loads */
const MAX_EARLY_ERRORS = 10;
/** Errors from before Sentry loaded, sent when it starts */
const _early_errors: unknown[] = [];
/** Held so its router subscriptions live for the life of the app */
// oxlint-disable-next-line @typescript-eslint/no-unused-vars -- write-only on purpose, see the comment above
let _trace_service: unknown = null;

/**
 * Application error handler. Logs errors to the console and hands them to
 * Sentry's handler. Until `initSentry` loads Sentry, it keeps the first few
 * errors and sends them when Sentry starts.
 *
 * Provide with `{ provide: ErrorHandler, useClass: LazySentryErrorHandler }`.
 */
export class LazySentryErrorHandler extends ErrorHandler {
    public override handleError(error: unknown): void {
        super.handleError(error);
        if (_sentry_handler) _sentry_handler.handleError(error);
        else if (_early_errors.length < MAX_EARLY_ERRORS) {
            _early_errors.push(error);
        }
    }
}

/**
 * URL parameters that carry credentials. Kiosks and panels load with
 * `?x-api-key=` in the URL, and Visitor Kiosk check-in links carry `jwt` or
 * `token`. Sentry records URLs in events, breadcrumbs and spans. Breadcrumbs
 * leave the app only inside events. A value stops at a backslash, so a
 * scrubbed JSON string keeps its escaped quotes.
 */
const SECRET_PARAM =
    /([?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|jwt|token|code)=)[^&#\s"'\\]+/gi;
/** Sentry normalises events to a few levels before its hooks run */
const MAX_SCRUB_DEPTH = 20;
/** SDK state kept on the event. It is not sent, and it holds live objects. */
const SDK_METADATA_KEY = 'sdkProcessingMetadata';

/**
 * Removes credential values from every string in a Sentry event. Sentry
 * gives its hooks a normalised copy of the event, so values are changed in
 * place, and only where a credential was found.
 */
export function scrubSecrets<T>(value: T, depth = 0): T {
    if (typeof value === 'string') {
        return value.replace(SECRET_PARAM, '$1[Filtered]') as T;
    }
    if (!value || typeof value !== 'object' || depth > MAX_SCRUB_DEPTH) {
        return value;
    }
    const record = value as Record<string, unknown>;
    for (const key of Object.keys(record)) {
        if (depth === 0 && key === SDK_METADATA_KEY) continue;
        const scrubbed = scrubSecrets(record[key], depth + 1);
        if (scrubbed !== record[key]) record[key] = scrubbed;
    }
    return value;
}

/** Scrubs an event before it is sent. Drops the event if scrubbing fails. */
function scrubEvent<T>(event: T): T | null {
    try {
        return scrubSecrets(event);
    } catch {
        return null;
    }
}

type Transport = ReturnType<typeof makeFetchTransport>;
type Envelope = Parameters<Transport['send']>[0];
/** An envelope item. The `length` header is the payload size in bytes. */
type EnvelopeItem = [{ length?: number }, unknown];

/**
 * Removes credential values from each item in a Sentry envelope. Replay
 * records the page URL in events that its hooks cannot change, so Replay
 * sends recordings as uncompressed JSON for this function to scrub.
 * Payloads are changed in place, and binary payloads are not changed.
 */
export function scrubEnvelope<T extends Envelope>(envelope: T): T {
    for (const item of envelope[1] as EnvelopeItem[]) {
        const payload = item[1];
        if (payload instanceof Uint8Array) continue;
        if (typeof payload !== 'string') {
            scrubSecrets(payload);
            continue;
        }
        const scrubbed = scrubSecrets(payload);
        if (scrubbed === payload) continue;
        item[1] = scrubbed;
        if (item[0].length !== undefined) {
            item[0].length = new TextEncoder().encode(scrubbed).length;
        }
    }
    return envelope;
}

/** Sample rates from the app settings, from 0 to 1 */
export interface SentrySampleRates {
    /** Share of transactions to trace */
    traces?: number;
    /** Share of sessions that Replay records */
    replays_session?: number;
    /** Share of sessions with an error that Replay records */
    replays_on_error?: number;
}

/** Returns `value` if it is a number, else `fallback` */
function sampleRate(value: unknown, fallback: number) {
    return typeof value === 'number' ? value : fallback;
}

/**
 * Loads and starts Sentry when a DSN is set. The SDK is loaded on demand so
 * apps without a DSN never download it.
 *
 * @param dsn Sentry DSN from the `app.sentry_dsn` setting
 * @param router Router to trace navigations for
 * @param rates Sample rates. Values that are not numbers, such as a missing
 * setting, use the default. Replay starts only when one of its rates is above 0.
 */
export async function initSentry(
    dsn: string,
    router: Router,
    rates: SentrySampleRates = {},
) {
    if (!dsn || _started) return;
    _started = true;
    const replays_session = sampleRate(
        rates.replays_session,
        DEFAULT_REPLAYS_SAMPLE_RATE,
    );
    const replays_on_error = sampleRate(
        rates.replays_on_error,
        DEFAULT_REPLAYS_SAMPLE_RATE,
    );
    const use_replay = replays_session > 0 || replays_on_error > 0;
    try {
        const Sentry = await import('./sentry-sdk');
        Sentry.init({
            dsn,
            release: VERSION.hash,
            // Separates UAT and production domains that share a DSN
            environment: location.hostname,
            integrations: [
                Sentry.browserTracingIntegration(),
                // Replay masks all text and inputs, and blocks media, by
                // default. Without compression, `scrubEnvelope` can read the
                // recordings.
                ...(use_replay
                    ? [Sentry.replayIntegration({ useCompression: false })]
                    : []),
            ],
            tracesSampleRate: sampleRate(
                rates.traces,
                DEFAULT_TRACES_SAMPLE_RATE,
            ),
            replaysSessionSampleRate: replays_session,
            replaysOnErrorSampleRate: replays_on_error,
            ...(use_replay && {
                transport: (options) => {
                    const transport = Sentry.makeFetchTransport(options);
                    return {
                        ...transport,
                        send: (envelope) =>
                            transport.send(scrubEnvelope(envelope)),
                    };
                },
            }),
            // Trace headers go only to the PlaceOS API on the same origin.
            // Sentry checks the path of same-origin requests against these.
            tracePropagationTargets: [/^\/api\//],
            beforeSend: scrubEvent,
            beforeSendTransaction: scrubEvent,
        });
        _trace_service = new Sentry.TraceService(router);
        // `LazySentryErrorHandler` already logs to the console
        _sentry_handler = Sentry.createErrorHandler({
            showDialog: false,
            logErrors: false,
        });
        for (const error of _early_errors.splice(0)) {
            _sentry_handler.handleError(error);
        }
    } catch (error) {
        log('APP', 'Failed to load Sentry.', error, 'warn');
    }
}

/**
 * Starts Sentry when the `app.sentry_dsn` setting gets a value. Organisation
 * settings can set it soon after the organisation loads, before sign in
 * completes. Call in an injection context, such as a constructor.
 */
export function initSentryFromSettings() {
    const router = inject(Router);
    const dsn = settingSignal<string>('sentry_dsn');
    const traces = settingSignal<number>('sentry_traces_sample_rate');
    const replays_session = settingSignal<number>(
        'sentry_replays_session_sample_rate',
    );
    const replays_on_error = settingSignal<number>(
        'sentry_replays_on_error_sample_rate',
    );
    const watcher = effect(() => {
        const value = dsn();
        if (!value) return;
        watcher.destroy();
        void initSentry(
            value,
            router,
            untracked(() => ({
                traces: traces(),
                replays_session: replays_session(),
                replays_on_error: replays_on_error(),
            })),
        );
    });
}
