import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Clipboard } from '@angular/cdk/clipboard';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';
import {
    GoogleAnalyticsService,
    HotkeysService,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { GlobalBannerComponent } from '../lib/global-banner.component';
import { GlobalLoadingComponent } from '../lib/global-loading.component';
import { AppComponent } from '../lib/app.component';

jest.mock('@placeos/common');
jest.mock('@placeos/mocks');

import * as common_mod from '@placeos/common';
import * as mocks_mod from '@placeos/mocks';

describe('AppComponent', () => {
    let spectator: SpectatorRouting<AppComponent>;
    const createComponent = createRoutingFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
        ],
        providers: [
            MockProvider(OrganisationService, { initialised: of(true) }),
            MockProvider(SettingsService, {
                get: jest.fn(),
                initialised: of(true),
            }),
            MockProvider(SpacesService, {}),
            MockProvider(SwUpdate, {}),
            MockProvider(MatSnackBar, {}),
            MockProvider(HotkeysService, { listen: jest.fn() }),
            MockProvider(Clipboard, {}),
            MockProvider(GoogleAnalyticsService, {}),
        ],
    });

    beforeEach(() => {
        (common_mod as any).setupPlace = jest.fn(async () => null);
        (common_mod as any).current_user = jest.fn(() => of({}));
        (common_mod as any).setNotifyOutlet = jest.fn();
        (common_mod as any).setAppName = jest.fn();
        (common_mod as any).setupCache = jest.fn();
        (common_mod as any).setNotifyOutlet = jest.fn();
        (common_mod as any).unique = jest.fn(() => [{}]);
        spectator = createComponent();
    });

    it('should have a success class by default', () => {
        expect(spectator.component).toBeTruthy();
    });
});
