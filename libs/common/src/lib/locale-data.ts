import { registerLocaleData } from '@angular/common';

/**
 * Loaders for the Angular locale data the apps support. Each entry is a dynamic
 * import so the locale data file (~5KB each) is emitted as its own lazy chunk
 * rather than being bundled into the app's initial bundle.
 */
const SUPPORTED_LOCALES: Record<
    string,
    () => Promise<{ default: unknown }>
> = {
    ar: () => import('@angular/common/locales/ar'),
    es: () => import('@angular/common/locales/es'),
    fr: () => import('@angular/common/locales/fr'),
    it: () => import('@angular/common/locales/it'),
    ja: () => import('@angular/common/locales/ja'),
    zh: () => import('@angular/common/locales/zh'),
};

/**
 * Register the Angular locale data for the active locale only.
 *
 * `en`/`en-*` (the default) and any unsupported locale fall back to Angular's
 * built-in data and need no registration. Returns a promise so it can be used
 * with `provideAppInitializer` — bootstrap waits for the data to register
 * before the first date/number pipe runs.
 */
export async function registerActiveLocale(locale: string): Promise<void> {
    const short = (locale || 'en').split('-')[0];
    const loader = SUPPORTED_LOCALES[short];
    if (!loader) return;
    const { default: data } = await loader();
    registerLocaleData(data);
}
