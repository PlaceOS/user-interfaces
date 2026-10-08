import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { log } from './general';

/** Sentry's handler, set once `initSentry` has loaded the SDK */
let _sentry_handler: ErrorHandler | null = null;
/** Held so its router subscriptions live for the life of the app */
let _trace_service: unknown = null;

/**
 * Application error handler. Logs errors to the console until `initSentry`
 * loads Sentry, then hands them to Sentry's handler. Sentry has no client
 * before `init`, so no reports are lost while it loads.
 *
 * Provide with `{ provide: ErrorHandler, useClass: LazySentryErrorHandler }`.
 */
export class LazySentryErrorHandler extends ErrorHandler {
    public override handleError(error: unknown): void {
        if (_sentry_handler) _sentry_handler.handleError(error);
        else super.handleError(error);
    }
}

/**
 * Loads and starts Sentry when a DSN is set. The SDK is loaded on demand so
 * apps without a DSN never download it.
 *
 * @param dsn Sentry DSN from the `app.sentry_dsn` setting
 * @param router Router to trace navigations for
 * @param traces_sample_rate Share of transactions to trace, from 0 to 1
 */
export async function initSentry(
    dsn: string,
    router: Router,
    traces_sample_rate = 1.0,
) {
    if (!dsn || _sentry_handler) return;
    try {
        const Sentry = await import('./sentry-sdk');
        // Session Replay (rrweb, ~123KB) is intentionally omitted to avoid any
        // external CDN dependency for firewalled / private-intranet
        // deployments. Error reporting and performance tracing are unaffected.
        Sentry.init({
            dsn,
            integrations: [Sentry.browserTracingIntegration()],
            tracesSampleRate: traces_sample_rate,
            // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: [
                'localhost',
                /^https:\/\/[a-zA-Z0-9_-]*\.[a-zA-Z0-9]*\/api/,
                /^https:\/\/[a-zA-Z0-9_-]*\.placeos\.run*\/api/,
            ],
        });
        _trace_service = new Sentry.TraceService(router);
        _sentry_handler = Sentry.createErrorHandler({ showDialog: false });
    } catch (error) {
        log('APP', 'Failed to load Sentry.', error, 'warn');
    }
}
