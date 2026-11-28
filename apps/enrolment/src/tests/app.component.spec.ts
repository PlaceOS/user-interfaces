import { ErrorHandler } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    failInitialisation,
    initialisationComplete,
    isMock,
    settingSignal,
    SettingsService,
} from '@placeos/common';
import { type FakeSession, startFakePlaceClient } from '@placeos/common/tests';
import { configure, createAuthSession } from '@placeos/ts-client';
import {
    clearMockEndpoints,
    listMockedEndpoints,
} from '@placeos/ts-client/compat';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app/app.component';

// The real `setupPlace` runs with a fake login session, so it makes no request
vi.mock('@placeos/ts-client', { spy: true });

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let fake: FakeSession;
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
        fake = startFakePlaceClient();
        // Only the calls of the test count
        vi.mocked(createAuthSession).mockClear();
        vi.mocked(configure).mockClear();
        clearMockEndpoints();
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
        vi.useRealTimers();
        vi.unstubAllGlobals();
        localStorage.removeItem('mock');
    });

    it('should apply the enrolment domain config before signing in', async () => {
        await start();

        expect(set_overrides).toHaveBeenCalledWith([{ theme: 'dark' }]);
        expect(set_overrides.mock.invocationCallOrder[0]).toBeLessThan(
            vi.mocked(createAuthSession).mock.invocationCallOrder[0],
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
            expect(configure).not.toHaveBeenCalled();
        },
    );

    it('should give up on the authority request after 10 seconds', async () => {
        vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] });
        fetch_mock.mockImplementation(
            (_: string, init: RequestInit) =>
                new Promise((_, reject) =>
                    init.signal?.addEventListener('abort', () =>
                        reject(new Error('aborted')),
                    ),
                ),
        );
        spectator.detectChanges();

        await vi.advanceTimersByTimeAsync(9_999);
        expect(spectator.component.initialisation_error()).toBe('');

        await vi.advanceTimersByTimeAsync(1);
        await start();

        expect(text()).toContain('Enrolment could not connect');
        expect(configure).not.toHaveBeenCalled();
    });

    it('should start the mock backend instead of asking the server in mock mode', async () => {
        localStorage.setItem('mock', 'true');

        await start();

        expect(fetch_mock).not.toHaveBeenCalled();
        // The mock backend registers its endpoints with ts-client
        expect(listMockedEndpoints().length).toBeGreaterThan(0);
        expect(isMock()).toBe(true);
        expect(set_overrides).toHaveBeenCalledWith([{}]);
        expect(initialisationComplete()()).toBe(true);
    });

    it('should show an authentication error when sign in fails', async () => {
        vi.mocked(fake.session.start).mockResolvedValue({
            ok: false,
            error: { kind: 'authority_invalid', path: '$', expected: 'object' },
        });

        await start();

        expect(text()).toContain('Enrolment could not authenticate');
        expect(spectator.query('router-outlet')).not.toExist();
        expect(error_handler.handleError).toHaveBeenCalledTimes(1);
        expect(initialisationComplete()()).toBe(false);
    });
});
