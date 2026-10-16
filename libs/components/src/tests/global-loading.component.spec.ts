import { DeferBlockBehavior } from '@angular/core/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

vi.mock('@placeos/ts-client', { spy: true });

import {
    clearCacheCheck,
    failInitialisation,
    markInitialisationComplete,
    needsNativeDomain,
    OrganisationService,
    PlaceOS_Service,
    setLoadingMessage,
    SettingsService,
} from '@placeos/common';
import { authority, isOnline, token } from '@placeos/ts-client';

import { LocaleService } from 'libs/common/src/lib/locale.service';
import {
    GlobalLoadingComponent,
    NativeDomainOverlayLoaderComponent,
} from '../lib/global-loading.component';

describe('GlobalLoadingComponent', () => {
    let spectator: Spectator<GlobalLoadingComponent>;
    const createComponent = createComponentFactory({
        component: GlobalLoadingComponent,
        detectChanges: false,
        deferBlockBehavior: DeferBlockBehavior.Manual,
        providers: [
            MockProvider(OrganisationService, {
                waitUntilInitialised: vi.fn().mockResolvedValue(undefined),
            }),
            MockProvider(SettingsService, { initialised: of(true) }),
            MockProvider(PlaceOS_Service, {
                onNativeDomainSet: vi.fn(),
            }),
            MockProvider(LocaleService),
        ],
    });

    beforeEach(() => {
        vi.useFakeTimers();
        vi.mocked(authority).mockReturnValue(undefined);
        vi.mocked(token).mockReturnValue(undefined);
        vi.mocked(isOnline).mockReturnValue(true);
        needsNativeDomain().set(false);
        clearCacheCheck();
        sessionStorage.clear();
        setLoadingMessage('Loading...');
        spectator = createComponent();
    });

    afterEach(() => {
        spectator.fixture.destroy();
        vi.useRealTimers();
    });

    it('should show the loading overlay with the current message', () => {
        setLoadingMessage('Fetching building data...');
        spectator.detectChanges();
        expect('[loader]').toExist();
        expect('[loader] p').toContainText('Fetching building data...');
    });

    it('should hide the loading overlay once initialisation completes', () => {
        spectator.detectChanges();
        expect('[loader]').toExist();
        markInitialisationComplete();
        vi.advanceTimersByTime(5000);
        spectator.detectChanges();
        expect(spectator.component.loading()).toBe(false);
        expect('[loader]').not.toExist();
    });

    describe('page background animation', () => {
        const settled = () =>
            document.documentElement.classList.contains('background-settled');

        afterEach(() =>
            document.documentElement.classList.remove('background-settled'),
        );

        it('should pause 3 seconds after the loading screen hides', () => {
            spectator.detectChanges();
            markInitialisationComplete();
            spectator.detectChanges();

            vi.advanceTimersByTime(2999);
            expect(settled()).toBe(false);
            vi.advanceTimersByTime(1);
            expect(settled()).toBe(true);
        });

        it('should run again while the loading screen shows', () => {
            spectator.detectChanges();
            markInitialisationComplete();
            spectator.detectChanges();
            vi.advanceTimersByTime(3000);

            failInitialisation('Unable to load');
            spectator.detectChanges();
            expect(settled()).toBe(false);
            vi.advanceTimersByTime(5000);
            expect(settled()).toBe(false);
        });
    });

    describe('loading gradient', () => {
        const background = () =>
            spectator.query<HTMLElement>('[loader]').style.backgroundImage;

        afterEach(() => localStorage.removeItem('PLACEOS.loading_gradient'));

        it('should use the colours from the domain config', () => {
            spectator.detectChanges();
            expect(background()).toBe('');

            vi.mocked(authority).mockReturnValue({
                id: 'test',
                config: { loading_gradient: ['#f15b55', '#f68c50'] },
            } as any);
            vi.advanceTimersByTime(1000);
            spectator.detectChanges();

            expect(background()).toContain('linear-gradient');
            expect(localStorage.getItem('PLACEOS.loading_gradient')).toBe(
                'linear-gradient(to right, #f15b55, #f68c50)',
            );
        });

        it('should keep the default gradient for values that are not colours', () => {
            vi.mocked(authority).mockReturnValue({
                id: 'test',
                config: { loading_gradient: ['#f15b55', 'url(//example.com)'] },
            } as any);
            vi.advanceTimersByTime(1000);
            spectator.detectChanges();

            expect(background()).toBe('');
        });

        it('should show the last known gradient before the domain loads', () => {
            localStorage.setItem(
                'PLACEOS.loading_gradient',
                'linear-gradient(to right, red, blue)',
            );
            spectator = createComponent();
            spectator.detectChanges();

            expect(background()).toContain('linear-gradient');
        });
    });

    it('should show a server down message while offline', () => {
        vi.mocked(authority).mockReturnValue({ id: 'test' } as any);
        vi.mocked(token).mockReturnValue('test-token');
        vi.mocked(isOnline).mockReturnValue(false);
        spectator.detectChanges();
        vi.advanceTimersByTime(5000);
        spectator.detectChanges();
        expect(spectator.component.online()).toBe(false);
        expect('div.bg-error').toExist();
    });

    it('should report an offline server while initialisation is pending', () => {
        vi.mocked(isOnline).mockReturnValue(false);

        spectator.detectChanges();
        vi.advanceTimersByTime(5000);
        spectator.detectChanges();

        expect(spectator.component.online()).toBe(false);
        expect('div.bg-error').toExist();
    });

    it('should keep the server warning hidden while the first connection starts', () => {
        vi.mocked(isOnline).mockReturnValue(false);
        spectator.detectChanges();
        expect('div.bg-error').not.toExist();

        vi.advanceTimersByTime(2000);
        spectator.detectChanges();
        expect('div.bg-error').not.toExist();

        vi.mocked(isOnline).mockReturnValue(true);
        vi.advanceTimersByTime(4000);
        spectator.detectChanges();
        expect('div.bg-error').not.toExist();
    });

    it('should report a lost connection without waiting for the startup grace period', () => {
        spectator.detectChanges();
        vi.mocked(isOnline).mockReturnValue(false);
        vi.advanceTimersByTime(1000);
        spectator.detectChanges();
        expect('div.bg-error').toExist();

        vi.mocked(isOnline).mockReturnValue(true);
        vi.advanceTimersByTime(1000);
        spectator.detectChanges();
        expect('div.bg-error').not.toExist();
    });

    it('should show a retry action after initialisation recovery stops', () => {
        failInitialisation('Startup failed.');

        spectator.detectChanges();

        expect('[initialisation-error]').toHaveText('Startup failed.');
        expect('button').toHaveText('Try again');
    });

    it('should load the native domain overlay when required', async () => {
        spectator.detectChanges();
        expect(await spectator.fixture.getDeferBlocks()).toHaveLength(0);
        needsNativeDomain().set(true);
        spectator.detectChanges();
        expect(await spectator.fixture.getDeferBlocks()).toHaveLength(1);
    });

    it('should notify PlaceOS service when the native domain is set', () => {
        spectator.detectChanges();
        spectator.query(NativeDomainOverlayLoaderComponent).onDomainSet();
        expect(
            spectator.inject(PlaceOS_Service).onNativeDomainSet,
        ).toHaveBeenCalled();
    });
});
