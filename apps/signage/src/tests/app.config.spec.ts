import { ErrorHandler, type FactoryProvider } from '@angular/core';

import { appConfig } from '../app/app.config';
import { resetWatchdog, watchdogState } from '../app/watchdog';

describe('appConfig error handler', () => {
    let handler: ErrorHandler;

    beforeEach(() => {
        vi.spyOn(console, 'error').mockImplementation(() => undefined);
        const provider = appConfig.providers.find(
            (item): item is FactoryProvider =>
                typeof item === 'object' &&
                'provide' in item &&
                item.provide === ErrorHandler,
        );
        handler = provider?.useFactory();
    });

    afterEach(() => {
        resetWatchdog();
        vi.restoreAllMocks();
    });

    it('should record the message of an error', () => {
        handler.handleError(new Error('Template failed'));

        expect(watchdogState().last_error?.message).toBe('Template failed');
    });

    it('should record the message of an error-like object', () => {
        // HTTP failures are not `Error` instances but still carry a message
        handler.handleError({ status: 503, message: 'Service unavailable' });

        expect(watchdogState().last_error?.message).toBe('Service unavailable');
    });

    it('should record values without a message as text', () => {
        handler.handleError('Playback stopped');

        expect(watchdogState().last_error?.message).toBe('Playback stopped');
    });
});
