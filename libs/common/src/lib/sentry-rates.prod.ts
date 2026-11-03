import type { SentrySampleRates } from './sentry';

/**
 * Sentry sample rates for production builds. Replaces `sentry-rates.ts` in the
 * `production` and `mobile` build configurations. App settings override these
 * values.
 */
export const DEFAULT_SENTRY_RATES: Required<SentrySampleRates> = {
    traces: 0.1,
    replays_session: 0,
    replays_on_error: 0,
};
