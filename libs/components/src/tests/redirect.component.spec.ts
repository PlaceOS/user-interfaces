import { Router } from '@angular/router';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';
import { OrganisationService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { MockProvider } from 'ng-mocks';

import { RedirectComponent } from '../lib/redirect.component';

describe('RedirectComponent', () => {
    let spectator: Spectator<RedirectComponent>;

    const settings_mock = createSettingsServiceMock();
    const org_mock = { waitUntilInitialised: jest.fn() };

    const createComponent = createComponentFactory({
        component: RedirectComponent,
        providers: [
            { provide: SettingsService, useValue: settings_mock },
            { provide: OrganisationService, useValue: org_mock },
            MockProvider(Router, { navigate: jest.fn() }),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        settings_mock.get.mockReturnValue(undefined);
        org_mock.waitUntilInitialised.mockResolvedValue(undefined);
        spectator = createComponent({ detectChanges: false });
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should navigate to the configured default route', async () => {
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.default_route' ? 'book/spaces' : undefined,
        );
        await spectator.component.ngOnInit();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['book', 'spaces'],
            { replaceUrl: true },
        );
    });

    it('should not navigate when no default route is configured', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.inject(Router).navigate).not.toHaveBeenCalled();
    });

    it('should wait for the organisation data before navigating', async () => {
        settings_mock.get.mockImplementation((key: string) =>
            key === 'app.default_route' ? 'schedule' : undefined,
        );
        await spectator.component.ngOnInit();
        expect(org_mock.waitUntilInitialised).toHaveBeenCalled();
        expect(spectator.inject(Router).navigate).toHaveBeenCalledWith(
            ['schedule'],
            { replaceUrl: true },
        );
    });
});
