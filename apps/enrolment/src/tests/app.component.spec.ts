import { ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    failInitialisation,
    initialisationComplete,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { BehaviorSubject } from 'rxjs';

import * as ts_client from '@placeos/ts-client';
import { AppComponent } from '../app/app.component';

// `setupPlace` runs for real and ends in ts-client `setup`
vi.mock('@placeos/ts-client', { spy: true });

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let error_handler: { handleError: ReturnType<typeof vi.fn> };
    let set_overrides: ReturnType<typeof vi.fn>;
    let fetch_mock: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: AppComponent,
        providers: [provideRouter([])],
        detectChanges: false,
    });

    const text = () =>
        spectator.element.textContent?.replace(/\s+/g, ' ').trim() ?? '';

    /** Start the app and wait until startup either fails or completes */
    async function start() {
        spectator.detectChanges();
        await vi.waitFor(() =>
            expect(
                spectator.component.initialisation_error() ||
                    initialisationComplete()(),
            ).toBeTruthy(),
        );
        spectator.detectChanges();
    }

    beforeEach(() => {
        // Reset the global startup state and keep Sentry from loading
        failInitialisation('');
        settingSignal('sentry_dsn').set('');
        localStorage.removeItem('mock');
        fetch_mock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ config: { enrolment: { theme: 'dark' } } }),
        });
        vi.stubGlobal('fetch', fetch_mock);
        (ts_client.setup as any).mockReset();
        (ts_client.setup as any).mockResolvedValue(undefined);
        error_handler = { handleError: vi.fn() };
        set_overrides = vi.fn();
        spectator = createComponent({
            providers: [
                { provide: ErrorHandler, useValue: error_handler },
                { provide: SwUpdate, useValue: { isEnabled: false } },
                {
                    provide: SettingsService,
                    useValue: {
                        initialised: new BehaviorSubject(true),
                        get: vi.fn(),
                        setOverrides: set_overrides,
                    },
                },
            ],
        });
    });

    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('should apply the enrolment domain config before signing in', async () => {
        await start();

        expect(set_overrides).toHaveBeenCalledWith([{ theme: 'dark' }]);
        expect(set_overrides.mock.invocationCallOrder[0]).toBeLessThan(
            (ts_client.setup as any).mock.invocationCallOrder[0],
        );
        expect(initialisationComplete()()).toBe(true);
        expect(spectator.query('router-outlet')).toExist();
    });

    it.each([
        ['fails', () => fetch_mock.mockRejectedValue(new Error('offline'))],
        [
            'returns an error status',
            // A readable body, so only the status check can fail startup
            () =>
                fetch_mock.mockResolvedValue({
                    ok: false,
                    status: 503,
                    json: async () => ({}),
                }),
        ],
    ])(
        'should show a connection error when the authority request %s',
        async (_, arrange) => {
            arrange();

            await start();

            expect(text()).toContain('Enrolment could not connect');
            expect(text()).toContain('Try again');
            expect(spectator.query('router-outlet')).not.toExist();
            expect(error_handler.handleError).toHaveBeenCalledTimes(1);
            expect(ts_client.setup).not.toHaveBeenCalled();
        },
    );

    it('should show an authentication error when sign in fails', async () => {
        (ts_client.setup as any).mockRejectedValue(new Error('denied'));

        await start();

        expect(text()).toContain('Enrolment could not authenticate');
        expect(spectator.query('router-outlet')).not.toExist();
        expect(error_handler.handleError).toHaveBeenCalledTimes(1);
        expect(initialisationComplete()()).toBe(false);
    });
});
