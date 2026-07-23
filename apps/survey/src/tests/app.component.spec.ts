import {
    createRoutingFactory,
    SpectatorRouting,
} from '@ngneat/spectator/vitest';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import {
    HotkeysService,
    LocaleService,
    OrganisationService,
    SettingsService,
} from '@placeos/common';
import {
    GlobalBannerComponent,
    GlobalLoadingComponent,
} from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of, Subject } from 'rxjs';

// Only the external ts-client package can be intercepted by the bundler; the
// workspace `@placeos/common` helpers run for real. `_settings.initialised`
// is a Subject that never emits, so the real `firstTruthyValueFrom` blocks
// `ngOnInit` at the first await and the synchronous setup work is asserted
// without running the full async bootstrap chain.
vi.mock('@placeos/ts-client', { spy: true });

import * as ts_client from '@placeos/ts-client';

import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const listens: { combo: string[]; cb: () => void }[] = [];

    const hotkey = {
        listen: vi.fn((combo: string[], cb: () => void) => {
            listens.push({ combo, cb });
            return { unsubscribe: vi.fn() };
        }),
    };
    const settings = {
        initialised: new Subject<boolean>(),
        get: vi.fn(() => undefined),
        saveUserSetting: vi.fn(),
    };
    const locale = {
        setLocale: vi.fn(),
        init: vi.fn(),
        zone_id: '',
    };
    // The real `notifySuccess` runs (workspace code is not mocked) and needs a
    // snackbar ref exposing `onAction`; `ngOnInit` points the notify outlet at
    // this mock via `setNotifyOutlet`.
    const snackbar = {
        open: vi.fn(() => ({ onAction: () => of(), dismiss: vi.fn() })),
    };

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
            MockProvider(OrganisationService),
            MockProvider(SwUpdate),
            { provide: MatSnackBar, useValue: snackbar },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        vi.mocked(ts_client.setAPI_Key).mockImplementation(() => undefined);
        listens.length = 0;
        localStorage.clear();
        spectator = create_component();
    });

    it('should create the component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should render the banner, router outlet and loading shells', () => {
        spectator.detectChanges();

        expect(spectator.query('global-banner')).toBeTruthy();
        expect(spectator.query('router-outlet')).toBeTruthy();
        expect(spectator.query('global-loading')).toBeTruthy();
    });

    it('should register dark-mode and mock-mode hotkeys on init', () => {
        spectator.component.ngOnInit();

        expect(hotkey.listen).toHaveBeenCalledTimes(2);
        const combos = listens.map((_) => _.combo);
        expect(combos).toContainEqual(['Control', 'Alt', 'Shift', 'KeyD']);
        expect(combos).toContainEqual(['Control', 'Alt', 'Shift', 'KeyM']);
    });

    it('should toggle dark mode when the dark-mode hotkey fires', () => {
        spectator.component.ngOnInit();
        const dark = listens.find((_) => _.combo.includes('KeyD'));
        settings.get.mockReturnValue(false as any);

        dark.cb();

        expect(settings.saveUserSetting).toHaveBeenCalledWith(
            'dark_mode',
            true,
        );
    });

    it('should flip the mock flag in storage when the mock hotkey fires', () => {
        // jsdom's location.reload is a no-op warning, so the callback is safe
        // to invoke and only the localStorage flip is asserted here.
        spectator.component.ngOnInit();
        const mock = listens.find((_) => _.combo.includes('KeyM'));

        mock.cb();
        expect(localStorage.getItem('mock')).toBe('true');

        mock.cb();
        expect(localStorage.getItem('mock')).toBe('false');
    });

    it('should persist hide_nav when the query param is present', () => {
        spectator.component.ngOnInit();

        spectator.setRouteQueryParam('hide_nav', '1');

        expect(localStorage.getItem('PlaceOS.hide_nav')).toBe('true');
    });

    it('should apply the locale from the lang query param', () => {
        spectator.component.ngOnInit();

        spectator.setRouteQueryParam('lang', 'fr');

        expect(locale.setLocale).toHaveBeenCalledWith('fr');
        expect(localStorage.getItem('PLACEOS.locale')).toBe('fr');
    });

    it('should set the API key from the x-api-key query param', () => {
        spectator.component.ngOnInit();

        spectator.setRouteQueryParam('x-api-key', 'secret');

        expect(ts_client.setAPI_Key).toHaveBeenCalledWith('secret');
    });

    it('should ignore query params that are not recognised', () => {
        spectator.component.ngOnInit();

        spectator.setRouteQueryParam('other', 'value');

        expect(locale.setLocale).not.toHaveBeenCalled();
        expect(ts_client.setAPI_Key).not.toHaveBeenCalled();
        expect(localStorage.getItem('PlaceOS.hide_nav')).toBeNull();
    });
});
