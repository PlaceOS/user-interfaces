import type { SentrySampleRates } from './sentry';

/**
 * Sentry sample rates for builds other than production, such as staging and
 * local serve. The `production` and `mobile` build configurations replace this
 * file with `sentry-rates.prod.ts`. App settings override these values.
 */
export const DEFAULT_SENTRY_RATES: Required<SentrySampleRates> = {
    traces: 1,
    replays_session: 0,
    replays_on_error: 1,
};
