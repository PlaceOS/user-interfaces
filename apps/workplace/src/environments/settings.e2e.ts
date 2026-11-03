import { DEFAULT_SETTINGS as WORKPLACE_SETTINGS } from './settings';

/**
 * Workplace build-time settings for the `e2e` build configuration, which
 * Playwright serves. Sentry is off, so the app sends nothing to Sentry.
 */
export const DEFAULT_SETTINGS: any = {
    ...WORKPLACE_SETTINGS,
    app: { ...WORKPLACE_SETTINGS.app, sentry_dsn: '' },
};
