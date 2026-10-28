// Loaded on demand by `initSentry`. Named exports keep the unused parts of the
// SDK, such as Feedback, out of the lazy chunk. Replay is in this chunk even
// when it is off: esbuild splits chunks by file, and `@sentry/angular`
// re-exports Replay from the file that the rest of the SDK uses.
export {
    TraceService,
    browserTracingIntegration,
    createErrorHandler,
    init,
    makeFetchTransport,
    replayIntegration,
} from '@sentry/angular';
