import type { BrowserContext } from '@playwright/test';

/**
 * Pauses the animated page background in every page of `context`.
 *
 * The apps animate a full-page gradient on `html` and `body`
 * (shared/styles/application.css) until 3 s after the loading screen hides.
 * Headless Chromium rasterises each frame of it in software: about 5 CPU-s per
 * page load, which is most of what the suite costs a CPU-bound runner. Paused,
 * a page looks as it does once the app has settled (`html.background-settled`).
 * Nothing else changes: other animations and the reduced-motion preference stay
 * as they are.
 *
 * Call it before the context opens a page. The fixtures in fixtures.ts and
 * apps/workplace/e2e/fixtures.ts do it for the `context` fixture; a spec that
 * calls `browser.newContext()` itself calls this too.
 */
export async function pauseBackground(context: BrowserContext) {
    await context.addInitScript(() => {
        // An init script runs before the document has an element to append to.
        document.addEventListener(
            'readystatechange',
            () => {
                const style = document.createElement('style');
                style.textContent =
                    'html, body { animation-play-state: paused !important; }';
                document.head?.appendChild(style);
            },
            { once: true },
        );
    });
}
