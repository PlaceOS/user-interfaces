/*
 * Service worker entry point. It wraps the Angular service worker and keeps
 * video and audio requests out of it.
 *
 * A media element loads cross-origin files, such as signed S3 URLs, as
 * no-cors range requests. When ngsw-worker fetches one again, the browser no
 * longer knows that it continues a media load, and Firefox's Opaque Response
 * Blocking rejects a 206 for a range after the start of the file. Without a
 * `respondWith` the browser makes the request itself, as if no worker were
 * installed.
 *
 * This listener is added before ngsw-worker's, so it runs first, and
 * `stopImmediatePropagation` stops ngsw-worker from handling the request.
 */
const BYPASS_DESTINATIONS = ['video', 'audio', 'track'];

self.addEventListener('fetch', (event) => {
    if (BYPASS_DESTINATIONS.includes(event.request.destination)) {
        event.stopImmediatePropagation();
    }
});

importScripts('./ngsw-worker.js');
