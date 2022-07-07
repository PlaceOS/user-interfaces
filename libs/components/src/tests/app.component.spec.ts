import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { Clipboard } from '@angular/cdk/clipboard';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { HotkeysService, SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { SpacesService } from '@placeos/spaces';
import { MockComponent } from 'ng-mocks';

import { GlobalBannerComponent } from '../lib/global-banner.component';
import { GlobalLoadingComponent } from '../lib/global-loading.component';
import { AppComponent } from '../lib/app.component';

jest.mock('@placeos/common');
jest.mock('@placeos/mocks');

import * as Sentry from '@sentry/angular';
import * as common_mod from '@placeos/common';
import * as mocks_mod from '@placeos/mocks';
import { of } from 'rxjs';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    const createComponent = createComponentFactory({
        component: AppComponent,
        declarations: [
            MockComponent(GlobalBannerComponent),
            MockComponent(GlobalLoadingComponent),
        ],
        providers: [
            { provide: Sentry.TraceService, useValue: {} },
            { provide: OrganisationService, useValue: {} },
            {
                provide: SettingsService,
                useValue: { get: jest.fn(), initialised: of(true) },
            },
            { provide: OrganisationService, useValue: {} },
            { provide: SpacesService, useValue: {} },
            { provide: SwUpdate, useValue: {} },
            { provide: MatSnackBar, useValue: {} },
            { provide: HotkeysService, useValue: { listen: jest.fn() } },
            { provide: Clipboard, useValue: {} },
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
