// Loaded on demand by `initSentry`. Named exports keep the unused parts of the
// SDK, such as Session Replay and Feedback, out of the lazy chunk.
export {
    TraceService,
    browserTracingIntegration,
    createErrorHandler,
    init,
} from '@sentry/angular';
