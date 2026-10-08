import { DeferBlockState } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    notifyError,
    OrganisationService,
    PlaceOS_Service,
    requestInitReload,
    setInitReloadHandler,
    setNotifyFilter,
    setNotifyOutlet,
} from '@placeos/common';
import * as ts_client from '@placeos/ts-client';
import { MockProvider } from 'ng-mocks';

import { AppComponent } from '../app/app.component';
import { resetWatchdog, watchdogState } from '../app/watchdog';

vi.mock('@placeos/ts-client', { spy: true });

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const placeos_service = { init: vi.fn() };

    const create_component = createComponentFactory({
        component: AppComponent,
        shallow: true,
        detectChanges: false,
        providers: [
            { provide: PlaceOS_Service, useValue: placeos_service },
            MockProvider(OrganisationService),
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        localStorage.clear();
        sessionStorage.clear();
        placeos_service.init.mockResolvedValue(undefined);
        spectator = create_component();
    });

    afterEach(() => {
        resetWatchdog();
        setInitReloadHandler(null);
        vi.useRealTimers();
        vi.unstubAllGlobals();
    });

    it('should hide the loading overlay when signing in with an api key', () => {
        // A device with an api key has no interactive authentication to wait
        // for, and the overlay covers content it can already play from cache.
        localStorage.setItem('a1b2c3_x-api-key', 'secret');
        spectator = create_component();

        spectator.detectChanges();

        expect(spectator.query('global-loading')).toBeFalsy();
        expect(spectator.query('router-outlet')).toBeTruthy();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should register mock handlers and initialise PlaceOS on init', () => {
        // `setMocks(mocksInit)` runs for real here (workspace-module exports
        // cannot be intercepted under the native unit-test builder); the only
        // externally observable effect is the PlaceOS_Service init call.
        spectator.component.ngOnInit();

        expect(placeos_service.init).toHaveBeenCalledTimes(1);
    });

    describe('recovery', () => {
        const BOOT_DEADLINE_MS = 6 * 60 * 1000;

        beforeEach(() => {
            vi.useFakeTimers();
            // Recovery checks whether the server is reachable before it
            // clears the application cache.
            vi.stubGlobal(
                'fetch',
                vi.fn(() => Promise.reject(new Error('offline'))),
            );
        });

        it('should recover a bootstrapped display that never shows content', () => {
            localStorage.setItem('PlaceOS.SIGNAGE.display', 'display-1');
            spectator.component.ngOnInit();

            vi.advanceTimersByTime(BOOT_DEADLINE_MS);

            expect(watchdogState().last_recovery_detail?.reasons).toEqual([
                'boot',
            ]);
        });

        it('should leave a display that was never bootstrapped on the picker', () => {
            spectator.component.ngOnInit();

            vi.advanceTimersByTime(BOOT_DEADLINE_MS);

            expect(watchdogState().last_recovery_detail).toBeNull();
        });

        it('should route a failed initialisation through the watchdog', () => {
            vi.mocked(ts_client.isOnline).mockReturnValue(true);
            spectator.component.ngOnInit();

            requestInitReload();

            expect(watchdogState().last_recovery_detail?.reasons).toEqual([
                'init-error',
            ]);
        });
    });

    describe('notifications', () => {
        let snackbar: { open: ReturnType<typeof vi.fn> };

        beforeEach(() => {
            snackbar = {
                open: vi.fn(() => ({
                    onAction: () => ({ subscribe: vi.fn() }),
                    dismiss: vi.fn(),
                })),
            };
            setNotifyOutlet(snackbar as any, true);
        });

        afterEach(() => {
            setNotifyFilter(null);
            setNotifyOutlet(null as any, true);
        });

        it('should hide notifications from a display that is not being debugged', () => {
            spectator.component.ngOnInit();

            notifyError('Error loading organisation data. Retrying...');

            expect(snackbar.open).not.toHaveBeenCalled();
        });

        it('should show notifications while debugging', () => {
            sessionStorage.setItem('SIGNAGE.debug', 'true');
            spectator.component.ngOnInit();

            notifyError('Error loading organisation data. Retrying...');

            expect(snackbar.open).toHaveBeenCalledTimes(1);
        });
    });

    it('should render the banner, router outlet and loading shells', async () => {
        spectator.detectChanges();
        // The loading overlay and debug launcher are deferred blocks.
        for (const block of await spectator.fixture.getDeferBlocks()) {
            await block.render(DeferBlockState.Complete);
        }

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });
});
