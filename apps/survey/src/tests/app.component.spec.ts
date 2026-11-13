import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DefaultUrlSerializer, UrlTree } from '@angular/router';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import {
    clearCacheCheck,
    HotkeysService,
    initialisationComplete,
    initialisationFailure,
    LocaleService,
    OrganisationService,
    PlaceOS_Service,
    serviceWorkerUpdate,
    setCurrentUser,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { BehaviorSubject, of, Subject } from 'rxjs';

// Only the external ts-client package can be intercepted by the bundler; the
// workspace `@placeos/common` helpers run for real. `setupPlace` ends in the
// ts-client `setup`, so tests stub `setup` to drive the startup chain. The
// default `initialised` Subject never emits, which blocks `ngOnInit` at its
// first await, so the synchronous setup work is asserted on its own.
vi.mock('@placeos/ts-client', { spy: true });

// The app reads the page query once, when its module loads. Set it before the
// imports run, so startup copies it into the hash route. The router is a stub
// with a real URL parser, so that navigation does not change other tests.
vi.hoisted(() => {
    history.replaceState(null, '', '/?ref=page&shared=page');
});

import * as ts_client from '@placeos/ts-client';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    let setting_values: Record<string, unknown>;
    const listens: { combo: string[]; cb: () => void }[] = [];

    const hotkey = {
        listen: vi.fn((combo: string[], cb: () => void) => {
            listens.push({ combo, cb });
            return { unsubscribe: vi.fn() };
        }),
    };
    const settings = {
        initialised: new Subject<boolean>() as Subject<boolean>,
        get: vi.fn((key: string) => setting_values[key]),
        saveUserSetting: vi.fn(),
    };
    const locale = {
        setLocale: vi.fn(),
        init: vi.fn(),
        // The loading shell translates its labels
        get: vi.fn((key: string) => key),
        zone_id: '',
    };
    const org = {
        organisation: { id: 'org-1' },
        waitUntilInitialised: vi.fn(async () => undefined),
    };
    // The real `notifySuccess` runs (workspace code is not mocked) and needs a
    // snackbar ref exposing `onAction`; `ngOnInit` points the notify outlet at
    // this mock via `setNotifyOutlet`.
    const snackbar = {
        open: vi.fn(() => ({ onAction: () => of(), dismiss: vi.fn() })),
    };

    const url_serializer = new DefaultUrlSerializer();

    const create_component = createRoutingFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
        ],
        detectChanges: false,
        providers: [
            { provide: HotkeysService, useValue: hotkey },
            { provide: SettingsService, useValue: settings },
            { provide: LocaleService, useValue: locale },
            { provide: OrganisationService, useValue: org },
            // The real global-loading shell injects this; the real service
            // starts map effects that the mocked organisation cannot satisfy.
            MockProvider(PlaceOS_Service),
            MockProvider(SwUpdate),
            { provide: MatSnackBar, useValue: snackbar },
        ],
    });

    /** Let `ngOnInit` run past the settings wait into the async startup. */
    function settingsReady() {
        settings.initialised = new BehaviorSubject(true);
    }

    beforeEach(() => {
        vi.clearAllMocks();
        listens.length = 0;
        localStorage.clear();
        setting_values = {};
        settings.initialised = new Subject<boolean>();
        locale.zone_id = '';
        vi.mocked(ts_client.setAPI_Key).mockReturnValue(undefined);
        vi.mocked(ts_client.setup).mockResolvedValue(undefined);
        vi.mocked(ts_client.clientId).mockReturnValue('');
        setCurrentUser(new StaffUser({ email: 'user@example.com' }));
        spectator = create_component();
        vi.mocked(spectator.router.parseUrl).mockImplementation((url) =>
            url_serializer.parse(url),
        );
    });

    afterEach(() => {
        vi.useRealTimers();
        vi.restoreAllMocks();
    });

    describe('startup', () => {
        beforeEach(() => {
            settingsReady();
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
        });

        it('should complete initialisation once PlaceOS, organisation and user load', async () => {
            await spectator.component.ngOnInit();

            expect(ts_client.setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: false }),
            );
            expect(ts_client.registerMockEndpoint).not.toHaveBeenCalled();
            expect(locale.zone_id).toBe('org-1');
            expect(locale.init).toHaveBeenCalled();
            expect(initialisationComplete()()).toBe(true);
            expect(initialisationFailure()()).toBe('');
        });

        it('should start PlaceOS in mock mode when the mock setting is on', async () => {
            setting_values = { mock: true };

            await spectator.component.ngOnInit();

            expect(ts_client.setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: true }),
            );
        });

        it('should start PlaceOS in mock mode when the stored mock flag is on', async () => {
            localStorage.setItem('mock', 'true');

            await spectator.component.ngOnInit();

            // PlaceOS setup reads the flag too, so check that the app itself
            // registered the mock endpoints.
            expect(ts_client.registerMockEndpoint).toHaveBeenCalled();
            expect(ts_client.setup).toHaveBeenCalledWith(
                expect.objectContaining({ mock: true }),
            );
        });

        it('should copy the page query into the hash route, with hash values first', async () => {
            vi.spyOn(spectator.inject(Location), 'path').mockReturnValue(
                '/survey-1?shared=hash',
            );

            await spectator.component.ngOnInit();

            const [url, extras] = vi.mocked(spectator.router.navigateByUrl)
                .mock.calls[0];
            expect(url).toBeInstanceOf(UrlTree);
            expect(url_serializer.serialize(url as UrlTree)).toBe(
                '/survey-1?ref=page&shared=hash',
            );
            expect(extras).toEqual({ replaceUrl: true });
        });

        it('should pass the composer settings to PlaceOS setup', async () => {
            setting_values = {
                composer: { domain: 'place.example', port: '8443' },
            };

            await spectator.component.ngOnInit();

            expect(ts_client.setup).toHaveBeenCalledWith(
                expect.objectContaining({ host: 'place.example:8443' }),
            );
        });

        it('should fail initialisation and stop when PlaceOS setup fails', async () => {
            vi.mocked(ts_client.setup).mockRejectedValue(new Error('offline'));

            await spectator.component.ngOnInit();

            expect(initialisationFailure()()).toBe(
                'Survey could not authenticate. Check the connection, then try again.',
            );
            expect(initialisationComplete()()).toBe(false);
            expect(org.waitUntilInitialised).not.toHaveBeenCalled();
        });

        it('should fail initialisation when the current user does not load in 30 seconds', async () => {
            vi.useFakeTimers();
            setCurrentUser(null);

            const init = spectator.component.ngOnInit();
            await vi.advanceTimersByTimeAsync(30_000);
            await init;

            expect(initialisationFailure()()).toBe(
                'Survey could not load the current user. Check the connection, then try again.',
            );
            expect(initialisationComplete()()).toBe(false);
        });
    });

    describe('API key in the hash route', () => {
        beforeEach(() => {
            settingsReady();
            spectator.setRouteQueryParam('x-api-key', 'secret');
        });

        it('should store the key and remove it from the URL once PlaceOS has a client ID', async () => {
            // Setup computes the client ID. Clear the write from the query
            // param subscription, so only the write after setup is checked.
            vi.mocked(ts_client.setup).mockImplementation(async () => {
                vi.mocked(ts_client.clientId).mockReturnValue('client-1');
                vi.mocked(ts_client.setAPI_Key).mockClear();
            });

            await spectator.component.ngOnInit();

            expect(ts_client.setAPI_Key).toHaveBeenCalledWith('secret');
            expect(spectator.router.navigate).toHaveBeenCalledWith([], {
                queryParams: { 'x-api-key': null },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            });
        });

        it('should store the key when PlaceOS setup fails after it sets a client ID', async () => {
            vi.spyOn(console, 'error').mockImplementation(() => undefined);
            vi.mocked(ts_client.setup).mockImplementation(async () => {
                vi.mocked(ts_client.clientId).mockReturnValue('client-1');
                vi.mocked(ts_client.setAPI_Key).mockClear();
                throw new Error('offline');
            });

            await spectator.component.ngOnInit();

            expect(ts_client.setAPI_Key).toHaveBeenCalledWith('secret');
            expect(spectator.router.navigate).toHaveBeenCalled();
        });

        it('should keep the key in the URL when PlaceOS has no client ID', async () => {
            await spectator.component.ngOnInit();

            expect(spectator.router.navigate).not.toHaveBeenCalled();
        });
    });

    describe('locale', () => {
        beforeEach(() => {
            settingsReady();
            setting_values = { 'app.locales': [{ id: 'fr' }, { id: 'de' }] };
        });

        function browserLanguages(languages: string[]) {
            vi.spyOn(navigator, 'languages', 'get').mockReturnValue(languages);
        }

        it('should apply the stored locale over the browser languages', async () => {
            localStorage.setItem('PLACEOS.locale', 'de');
            browserLanguages(['fr']);

            await spectator.component.ngOnInit();

            expect(locale.setLocale).toHaveBeenCalledWith('de');
            expect(locale.setLocale).not.toHaveBeenCalledWith('fr');
        });

        it('should apply and store the first browser language with a configured locale', async () => {
            browserLanguages(['ja', 'fr-CA', 'de']);

            await spectator.component.ngOnInit();

            expect(locale.setLocale).toHaveBeenCalledTimes(1);
            expect(locale.setLocale).toHaveBeenCalledWith('fr-CA');
            expect(localStorage.getItem('PLACEOS.locale')).toBe('fr-CA');
        });

        it('should leave the locale alone when no browser language is configured', async () => {
            browserLanguages(['ja', 'ko']);

            await spectator.component.ngOnInit();

            expect(locale.setLocale).not.toHaveBeenCalled();
            expect(localStorage.getItem('PLACEOS.locale')).toBeNull();
        });
    });

    describe('hotkeys', () => {
        function fire(key: string) {
            listens.find((_) => _.combo.includes(key)).cb();
        }

        it('should toggle dark mode on Control+Alt+Shift+D', () => {
            spectator.component.ngOnInit();
            setting_values = { dark_mode: false };

            fire('KeyD');

            expect(settings.saveUserSetting).toHaveBeenCalledWith(
                'dark_mode',
                true,
            );
        });

        it('should flip the mock flag in storage on Control+Alt+Shift+M', () => {
            // jsdom's location.reload is a no-op warning, so the callback is
            // safe to invoke and only the localStorage flip is asserted here.
            spectator.component.ngOnInit();

            fire('KeyM');
            expect(localStorage.getItem('mock')).toBe('true');

            fire('KeyM');
            expect(localStorage.getItem('mock')).toBe('false');
        });
    });

    describe('service worker', () => {
        afterEach(() => {
            // Stops the update check timers and resets the shared cache state
            clearCacheCheck();
        });

        it('should show an update that is ready before settings finish loading', () => {
            const version_updates = new Subject<VersionEvent>();
            Object.defineProperties(spectator.inject(SwUpdate), {
                isEnabled: { value: true },
                versionUpdates: { value: version_updates },
                unrecoverable: { value: new Subject() },
            });
            // Not awaited: the default `initialised` Subject holds `ngOnInit`
            // at the settings wait.
            spectator.component.ngOnInit();

            version_updates.next({
                type: 'VERSION_READY',
                currentVersion: { hash: 'v1' },
                latestVersion: { hash: 'v2' },
            });

            expect(serviceWorkerUpdate()()).toEqual(
                expect.objectContaining({ action: 'Refresh' }),
            );
        });
    });

    describe('query params', () => {
        // Not awaited: the default `initialised` Subject holds `ngOnInit` at
        // its first await, after the query param subscription is set up.
        beforeEach(() => {
            spectator.component.ngOnInit();
        });

        it('should persist hide_nav when the query param is present', () => {
            spectator.setRouteQueryParam('hide_nav', '1');

            expect(localStorage.getItem('PlaceOS.hide_nav')).toBe('true');
        });

        it('should apply and store the locale from the lang query param', () => {
            spectator.setRouteQueryParam('lang', 'fr');

            expect(locale.setLocale).toHaveBeenCalledWith('fr');
            expect(localStorage.getItem('PLACEOS.locale')).toBe('fr');
        });

        it('should set the API key from the x-api-key query param', () => {
            spectator.setRouteQueryParam('x-api-key', 'secret');

            expect(ts_client.setAPI_Key).toHaveBeenCalledWith('secret');
        });
    });
});
