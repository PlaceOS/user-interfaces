import { effect, ErrorHandler, inject, untracked } from '@angular/core';
import { Router } from '@angular/router';
import { log } from './general';
import { settingSignal } from './settings.service';
import { VERSION } from './version';

/** Share of transactions to trace when the app does not set one */
const DEFAULT_TRACES_SAMPLE_RATE = 0.1;

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
 * `?x-api-key=` in the URL, and Sentry records URLs in events, breadcrumbs
 * and spans. Breadcrumbs leave the app only inside events.
 */
const SECRET_PARAM =
    /([?&#;](?:x-api-key|api-key|api_key|bearer_token|access_token|refresh_token|code)=)[^&#\s"']+/gi;
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

/**
 * Loads and starts Sentry when a DSN is set. The SDK is loaded on demand so
 * apps without a DSN never download it.
 *
 * @param dsn Sentry DSN from the `app.sentry_dsn` setting
 * @param router Router to trace navigations for
 * @param traces_sample_rate Share of transactions to trace, from 0 to 1.
 * Values that are not numbers, such as a missing setting, use the default.
 */
export async function initSentry(
    dsn: string,
    router: Router,
    traces_sample_rate?: number,
) {
    if (!dsn || _started) return;
    _started = true;
    try {
        const Sentry = await import('./sentry-sdk');
        // Session Replay (rrweb, ~123KB) is intentionally omitted to avoid any
        // external CDN dependency for firewalled / private-intranet
        // deployments. Error reporting and performance tracing are unaffected.
        Sentry.init({
            dsn,
            release: VERSION.hash,
            // Separates UAT and production domains that share a DSN
            environment: location.hostname,
            integrations: [Sentry.browserTracingIntegration()],
            tracesSampleRate:
                typeof traces_sample_rate === 'number'
                    ? traces_sample_rate
                    : DEFAULT_TRACES_SAMPLE_RATE,
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
    const rate = settingSignal<number>('sentry_traces_sample_rate');
    const watcher = effect(() => {
        const value = dsn();
        if (!value) return;
        watcher.destroy();
        void initSentry(value, router, untracked(rate));
    });
}
